#!/usr/bin/python

"""
Convert a .sci file to a .js file for use with xcos_on_cloud.

Usage: ./sci2jsyacc.py filename.sci filename.pickle pass-number > filename.js

Example: ./sci2jsyacc.py macros/Sinks/CSCOPE.sci js/Sinks/CSCOPE.pickle 2 > js/Sinks/CSCOPE.js
"""

# import {{{

from __future__ import print_function

import re
import sys
import pickle
import ply.yacc as yacc

from sci2jslex import tokens, JOBTYPES
from sci2jslex import BOOLEAN_TYPE, DOUBLE_TYPE, LIST_TYPE, MATRIX_TYPE, NULL_TYPE, OBJECT_TYPE, STRING_TYPE, VECTOR_TYPE, VECTOR_BOOLEAN_TYPE, VECTOR_STRING_TYPE
from missingvariables import MISSING_VARIABLES_MAP

# }}}

# globals {{{

precedence = (
    ('left', 'COLON'),
    ('left', 'LOGICAL'),
    ('nonassoc', 'COMPARISON'),
    ('left', 'ADDITION'),
    ('left', 'MULTIPLICATION'),
    ('right', 'NOT'),
    ('right', 'UNARYADDITION'),
    ('right', 'TRANSPOSE'),
    ('left', 'DOT'),
)

PARSE_MAP = {
    BOOLEAN_TYPE: 'parseBoolean',
    DOUBLE_TYPE: 'parseFloat',
    LIST_TYPE: '',
    MATRIX_TYPE: 'inverse',
    NULL_TYPE: 'parseFloat',
    OBJECT_TYPE: '',
    STRING_TYPE: '',
    VECTOR_TYPE: 'inverse',
}

MODEL_MAP = {
    BOOLEAN_TYPE: 'ScilabBoolean',
    DOUBLE_TYPE: 'ScilabDouble',
    LIST_TYPE: '',
    MATRIX_TYPE: '',
    NULL_TYPE: '',
    OBJECT_TYPE: '',
    STRING_TYPE: 'ScilabString',
    VECTOR_TYPE: '',
}

start = 'functionblocks'

JOB_BLOCKS = {}

FUNCTION_VARS = set()
LOCAL_VARS = set()
GLOBAL_VARS = {
    'graphics',
    'model',
    'x',
}

VAR_TYPES = {}
VAR_DEFINITIONS = {}
LAST_ARRAY = []
AT_START = False
INIT_VARS = ''

TITLES = []
LABELS = []

INDENT_LEVEL = 2
INDENT_SIZE = 4

BLOCK_TYPE = {
    'AFFICH_m': 'AfficheBlock',
    'BIGSOM_f': 'BigSom',
    'CLKINV_f': 'EventInBlock',
    'CLKOUTV_f': 'EventOutBlock',
    'CLKSOMV_f': 'RoundBlock',
    'Ground': 'GroundBlock',
    'IN_f': 'ExplicitInBlock',
    'INIMPL_f': 'ImplicitInBlock',
    'OUT_f': 'ExplicitOutBlock',
    'OUTIMPL_f': 'ImplicitOutBlock',
    'PROD_f': 'RoundBlock',
    'PRODUCT': 'Product',
    'SUM_f': 'RoundBlock',
    'SUMMATION': 'Summation',
    'SUPER_f': 'SuperBlock',
    'TEXT_f': 'TextBlock',
    'VoltageSensor': 'VoltageSensorBlock',
}

OPTIONS_BLOCK = ''
RESTORE_BLOCK = ''

# }}}

# define functionblocks {{{

def p_functionblocks_functionblocks_functionblock(p):
    'functionblocks : functionblocks functionblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_functionblocks_jobfunctionblock(p):
    'functionblocks : EOL jobfunctionblock'
    p[0] = '%s' % (p[2])

# }}}

# define functionblock {{{

def p_jobfunctionblock_jobfunctionstatement_statementblock_endfunction(p):
    'jobfunctionblock : jobfunctionstatement statementblock ENDFUNCTION EOL'
    global INDENT_LEVEL
    fname = '%s' % (p[1])
    indent = '%*s' % (INDENT_LEVEL * INDENT_SIZE, ' ')
    INDENT_LEVEL += 1
    indent2 = '%*s' % (INDENT_LEVEL * INDENT_SIZE, ' ')
    blocktype = getblocktype(fname)

    missing_variables = MISSING_VARIABLES_MAP.get(fname, [ ])
    jmissing = ''
    for vardetails in missing_variables:
        var = vardetails['var']
        vartype = vardetails['vartype']
        defvalue = vardetails['defvalue']
        add_global_var(var)
        add_var_vartype(var, vartype)
        jmissing += '%*s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', print_var(var), defvalue)

    jdefine = JOB_BLOCKS['"define"']
    jtitle = JOB_BLOCKS['"title"']
    if OPTIONS_BLOCK != '':
        jget = '%s%sthis.set_param_popup_title = %s;\n%svar options = {\n%s%s}\n%sreturn options;\n' % (INIT_VARS, indent2, jtitle, indent2, OPTIONS_BLOCK, indent2, indent2)
        jtitle = '%sreturn this.set_param_popup_title;\n' % (indent2)
    else:
        jget = '%salert("parameters cannot be modified");\n' % (indent2)
        jtitle = '%sreturn;\n' % (indent2)
    if RESTORE_BLOCK != '':
        jimportset = '%s%s.prototype.importset = function %s() {\n%svar graphics = this.x.graphics;\n%svar ary = getData(graphics.exprs);\n%s%s}\n' % (indent, fname, fname, indent2, indent2, RESTORE_BLOCK, indent)
    else:
        jimportset = ''
    jgetcontainer = '%s%s.prototype.getContainer = function %s() { return new %s(%s); }\n' % (indent, fname, fname, getblocktype(fname), print_var('x'))
    jgetinputs = JOB_BLOCKS['"getinputs"']
    jgetorigin = JOB_BLOCKS['"getorigin"']
    jgetoutputs = JOB_BLOCKS['"getoutputs"']
    jplot = JOB_BLOCKS['"plot"']
    jset = JOB_BLOCKS['"set"']

    jdefine = '%s%s.prototype.define = function %s() {\n%s%s%sreturn new %s(%s);\n%s}\n' % (indent, fname, fname, jmissing, jdefine, indent2, blocktype, print_var('x'), indent)
    jdetails = '%s%s.prototype.details = function %s() {\n%sreturn %s;\n%s}\n' % (indent, fname, fname, indent2, print_var('x'), indent)
    jget = '%s%s.prototype.get = function %s() {\n%s%s}\n' % (indent, fname, fname, jget, indent)
    if jgetinputs != '':
        jgetinputs = '%s%s.prototype.getinputs = function %s() {\n%s%s}\n' % (indent, fname, fname, jgetinputs, indent)
    if jgetorigin != '':
        jgetorigin = '%s%s.prototype.getorigin = function %s() {\n%s%s}\n' % (indent, fname, fname, jgetorigin, indent)
    if jgetoutputs != '':
        jgetoutputs = '%s%s.prototype.getoutputs = function %s() {\n%s%s}\n' % (indent, fname, fname, jgetoutputs, indent)
    if jplot != '':
        jplot = '%s%s.prototype.plot = function %s() {\n%s%s}\n' % (indent, fname, fname, jplot, indent)
    jset = '%s%s.prototype.set = function %s() {\n%s%sreturn new %s(%s);\n%s}\n' % (indent, fname, fname, jset, indent2, blocktype, print_var('x'), indent)
    jtitle = '%s%s.prototype.get_popup_title = function %s() {\n%s%s}\n' % (indent, fname, fname, jtitle, indent)

    INDENT_LEVEL -= 1
    p[0] = 'function %s() {\n%s%s%s%s%s%s%s%s%s%s%s}' % (fname, jdefine, jdetails, jget, jset, jtitle, jgetinputs, jgetorigin, jgetoutputs, jplot, jimportset, jgetcontainer)

def p_functionblock_functionstatement_statementblock_endfunction(p):
    'functionblock : functionstatement statementblock ENDFUNCTION EOL'
    p[0] = ''

def p_jobfunctionstatement_function_var(p):
    'jobfunctionstatement : FUNCTION lterm ASSIGNMENT VAR OPENBRACKET JOB COMMA ARG1 COMMA VAR CLOSEBRACKET EOL'
    global SCICOS_BLOCK_NAME
    SCICOS_BLOCK_NAME = p[4]
    for var in (p[6], p[8], p[10]):
        FUNCTION_VARS.add(var)
    p[0] = SCICOS_BLOCK_NAME

def p_jobfunctionstatement_function_functionname(p):
    'jobfunctionstatement : FUNCTION lterm ASSIGNMENT FUNCTIONNAME OPENBRACKET JOB COMMA ARG1 COMMA VAR CLOSEBRACKET EOL'
    global SCICOS_BLOCK_NAME
    SCICOS_BLOCK_NAME = p[4][0]
    for var in (p[6], p[8], p[10]):
        FUNCTION_VARS.add(var)
    p[0] = SCICOS_BLOCK_NAME

def p_functionstatement_function_var(p):
    'functionstatement : FUNCTION lterm ASSIGNMENT VAR OPENBRACKET list CLOSEBRACKET EOL'
    p[0] = ''

def p_functionstatement_function_functionname_list(p):
    'functionstatement : FUNCTION lterm ASSIGNMENT FUNCTIONNAME OPENBRACKET list CLOSEBRACKET EOL'
    p[0] = ''

def p_functionstatement_function_functionname(p):
    'functionstatement : FUNCTION lterm ASSIGNMENT FUNCTIONNAME OPENBRACKET CLOSEBRACKET EOL'
    p[0] = ''

# }}}

# define statementblock {{{

def p_statementblock_statementblock_statement(p):
    'statementblock : statementblock statement'
    p[0] = '%s%s' % (p[1], p[2])

def p_statementblock_statement(p):
    'statementblock : statement'
    p[0] = '%s' % (p[1])

def p_jobsetstatementblock_jobsetstatementblock_jobsetstatement(p):
    'jobsetstatementblock : jobsetstatementblock jobsetstatement'
    p[0] = '%s%s' % (p[1], p[2])

def p_jobsetstatementblock_jobsetstatement(p):
    'jobsetstatementblock : jobsetstatement'
    p[0] = '%s' % (p[1])

# }}}

# define statement {{{

def p_statement_assignment(p):
    '''statement : assignment
                 | getvalueassignment
                 | standarddefineassignment'''
    p[0] = '%s' % (p[1])

def p_statement_getvalueassignment(p):
    '''statement : function EOL'''
    p[0] = '%s;\n' % (p[1])

def p_jobsetstatement_assignment(p):
    '''jobsetstatement : assignment
                       | getvalueassignment
                       | standarddefineassignment'''
    p[0] = '%s' % (p[1])

def p_jobsetstatement_getvalueassignment(p):
    '''jobsetstatement : function EOL'''
    p[0] = '%s;\n' % (p[1])

def p_statement_break(p):
    '''statement : BREAK EOL
                 | RETURN EOL'''
    p[0] = '%*s%s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1])

def p_statement_clearvar(p):
    'statement : clearvar EOL'
    p[0] = '%s' % (p[1])

def p_statement_eol(p):
    'statement : EOL'
    p[0] = ''

def p_statement_forstatementblocks(p):
    'statement : forstatementblocks'
    p[0] = '%s' % (p[1])

def p_jobsetstatement_forstatementblocks(p):
    'jobsetstatement : forstatementblocks'
    p[0] = '%s' % (p[1])

def p_statement_functionblock(p):
    'statement : functionblock'
    p[0] = ''

def p_statement_ifstatementblocks(p):
    'statement : ifstatementblocks'
    p[0] = '%s' % (p[1])

def p_jobsetstatement_ifstatementblocks(p):
    'jobsetstatement : ifstatementblocks'
    p[0] = '%s' % (p[1])

def p_statement_resumestatementblocks(p):
    'statement : resumestatementblocks'
    p[0] = '%s' % (p[1])

def p_jobsetstatement_resumestatementblocks(p):
    'jobsetstatement : resumestatementblocks'
    p[0] = '%s' % (p[1])

def p_statement_selectstatement_casestatementblock(p):
    'statement : selectstatement casestatementblock endstatementblock'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

def p_statement_selectjobstatement_casejobstatementblock(p):
    'statement : selectjobstatement casejobstatementblock endstatementblock'
    p[0] = ''

def p_statement_trystatementblocks(p):
    'statement : trystatementblocks'
    p[0] = '%s' % (p[1])

def p_jobsetstatement_trystatementblocks(p):
    'jobsetstatement : trystatementblocks'
    p[0] = '%s' % (p[1])

def p_statement_where(p):
    'statement : lterm ASSIGNMENT WHERE OPENBRACKET CLOSEBRACKET EOL'
    p[0] = '%*s%s%s%s()\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1], p[2], p[3])

def p_statement_whilestatementblocks(p):
    'statement : whilestatementblocks'
    p[0] = '%s' % (p[1])

def p_jobsetstatement_whilestatementblocks(p):
    'jobsetstatement : whilestatementblocks'
    p[0] = '%s' % (p[1])

# }}}

# define case, for, if, elseif, else, try, while statement block {{{

def p_endstatementblock_endstatement(p):
    'endstatementblock : END EOL'
    global INDENT_LEVEL
    INDENT_LEVEL -= 1
    p[0] = '%*s}\n' % (INDENT_LEVEL * INDENT_SIZE, ' ')

def p_casestatementblock_casestatementblock_casestatement_statementblock(p):
    'casestatementblock : casestatementblock casestatement statementblock'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

def p_casejobstatementblock_casejobstatementblock_casejobstatement_statementblock(p):
    'casejobstatementblock : casejobstatementblock casejobstatement statementblock'
    JOB_BLOCKS[p[2]] = p[3]
    p[0] = ''

def p_casejobstatementblock_casejobstatementblock_casejobsetstatement_jobsetstatementblock(p):
    'casejobstatementblock : casejobstatementblock casejobsetstatement jobsetstatementblock'
    JOB_BLOCKS[p[2]] = p[3]
    p[0] = ''

def p_casestatementblock_casestatementblock_casestatement(p):
    'casestatementblock : casestatementblock casestatement'
    p[0] = '%s%s' % (p[1], p[2])

def p_casejobstatementblock_casejobstatementblock_casejobstatement(p):
    'casejobstatementblock : casejobstatementblock casejobstatement'
    JOB_BLOCKS[p[2]] = ''
    p[0] = ''

def p_casejobstatementblock_casejobstatementblock_casejobsetstatement(p):
    'casejobstatementblock : casejobstatementblock casejobsetstatement'
    JOB_BLOCKS[p[2]] = ''
    p[0] = ''

def p_casestatementblock_casestatement_statementblock(p):
    'casestatementblock : casestatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_casejobstatementblock_casejobstatement_statementblock(p):
    'casejobstatementblock : casejobstatement statementblock'
    JOB_BLOCKS[p[1]] = p[2]
    p[0] = ''

def p_casejobstatementblock_casejobsetstatement_jobsetstatementblock(p):
    'casejobstatementblock : casejobsetstatement jobsetstatementblock'
    JOB_BLOCKS[p[1]] = p[2]
    p[0] = ''

def p_forstatementblocks_forstatementblock(p):
    'forstatementblocks : forstatementblock endstatementblock'
    global INIT_VARS
    p[0] = '%s%s' % (p[1], p[2])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_forstatementblock_forstatement(p):
    'forstatementblock : forstatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_ifstatementblocks_ifstatementblock(p):
    'ifstatementblocks : ifstatementblock endstatementblock'
    global INIT_VARS
    p[0] = '%s%s' % (p[1], p[2])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_ifstatementblocks_ifstatementblock_elsestatementblock(p):
    'ifstatementblocks : ifstatementblock elsestatementblock endstatementblock'
    global INIT_VARS
    p[0] = '%s%s%s' % (p[1], p[2], p[3])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_ifstatementblocks_ifstatementblock_elseifstatementblock(p):
    'ifstatementblocks : ifstatementblock elseifstatementblock endstatementblock'
    global INIT_VARS
    p[0] = '%s%s%s' % (p[1], p[2], p[3])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_ifstatementblocks_ifstatementblock_elseifstatementblock_elsestatementblock(p):
    'ifstatementblocks : ifstatementblock elseifstatementblock elsestatementblock endstatementblock'
    global INIT_VARS
    p[0] = '%s%s%s%s' % (p[1], p[2], p[3], p[4])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_ifstatementblock_ifstatement(p):
    'ifstatementblock : ifstatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_elseifstatementblock_elseifstatementblock_elseifstatement(p):
    'elseifstatementblock : elseifstatementblock elseifstatement statementblock'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

def p_elseifstatementblock_elseifstatement(p):
    'elseifstatementblock : elseifstatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_elsestatementblock_elsestatement_statementblock(p):
    'elsestatementblock : elsestatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_elsestatementblock_elsestatement(p):
    'elsestatementblock : elsestatement'
    p[0] = '%s' % (p[1])

def p_trystatementblocks_trystatement_statementblock_catchstatement_statementblock(p):
    'trystatementblocks : trystatement statementblock catchstatement statementblock endstatementblock'
    p[0] = '%s%s%s%s%s' % (p[1], p[2], p[3], p[4], p[5])

def p_whilestatementblocks_whilestatementblock(p):
    'whilestatementblocks : whilestatementblock endstatementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_whilestatementblocks_whilestatementblock_elsestatementblock(p):
    'whilestatementblocks : whilestatementblock elsestatementblock endstatementblock'
    p[0] = '%s%s%s%s' % (p[1], p[2], p[3], p[4])

def p_whilestatementblock_whilestatement(p):
    'whilestatementblock : whilestatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

# }}}

# define for, select, case, while, if, elseif, else {{{

def p_trystatement_try(p):
    'trystatement : TRY EOL'
    global INDENT_LEVEL
    p[0] = '%*stry {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ')
    INDENT_LEVEL += 1

def p_catchstatement_catch(p):
    'catchstatement : CATCH EOL'
    global INDENT_LEVEL
    INDENT_LEVEL -= 1
    p[0] = '%*s} catch (Exception e) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ')
    INDENT_LEVEL += 1

def p_forstatement_for_start_step_end(p):
    '''forstatement : FOR VAR ASSIGNMENT expression COLON expression COLON expression EOL
                    | FOR VAR ASSIGNMENT expression COLON expression COLON expression DO EOL'''
    global INDENT_LEVEL
    var = p[2]
    lstart = p[4][0]
    lstep = int(p[6][0])
    lend = p[8][0]
    if lstep > 0:
        endop = '<='
        stepop = '+='
    else:
        endop = '>='
        stepop = '-='
    add_local_var(var)
    var = print_var(var)
    p[0] = '%*sfor (%s=%s;%s%s%s;%s%s%s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', var, lstart, var, endop, lend, var, stepop, lstep)
    INDENT_LEVEL += 1

def p_forstatement_for_start_end(p):
    '''forstatement : FOR VAR ASSIGNMENT expression COLON expression EOL
                    | FOR VAR ASSIGNMENT expression COLON expression DO EOL'''
    global INDENT_LEVEL
    var = p[2]
    lstart = p[4][0]
    lstep = 1
    lend = p[6][0]
    endop = '<='
    stepop = '+='
    add_local_var(var)
    var = print_var(var)
    p[0] = '%*sfor (%s=%s;%s%s%s;%s%s%s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', var, lstart, var, endop, lend, var, stepop, lstep)
    INDENT_LEVEL += 1

def p_forstatement_for_list(p):
    '''forstatement : FOR VAR ASSIGNMENT VAR EOL
                    | FOR VAR ASSIGNMENT VAR DO EOL'''
    global INDENT_LEVEL
    var = p[2]
    add_local_var(var)
    p[0] = '%*sfor (%s in %s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', print_var(var), p[4])
    INDENT_LEVEL += 1

def p_selectstatement_select(p):
    'selectstatement : SELECT expression EOL'
    global INDENT_LEVEL
    p[0] = '%*sswitch (%s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[2][0])
    INDENT_LEVEL += 1

def p_selectjobstatement_select(p):
    'selectjobstatement : SELECT JOB EOL'
    JOB_BLOCKS['"get"'] = ''
    JOB_BLOCKS['"title"'] = '"Set parameters"'
    for t in JOBTYPES:
        JOB_BLOCKS[t] = ''
    p[0] = ''

def p_casestatement_case(p):
    '''casestatement : CASE expression THEN EOL
                     | CASE expression EOL'''
    global INDENT_LEVEL
    INDENT_LEVEL -= 1
    p[0] = '%*scase %s:\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[2][0])
    INDENT_LEVEL += 1

def p_casejobstatement_case_job_define(p):
    '''casejobstatement : CASE JOB_DEFINE THEN EOL
                        | CASE JOB_DEFINE EOL
                        | CASE JOB_GETINPUTS THEN EOL
                        | CASE JOB_GETINPUTS EOL
                        | CASE JOB_GETORIGIN THEN EOL
                        | CASE JOB_GETORIGIN EOL
                        | CASE JOB_GETOUTPUTS THEN EOL
                        | CASE JOB_GETOUTPUTS EOL
                        | CASE JOB_PLOT THEN EOL
                        | CASE JOB_PLOT EOL'''
    LOCAL_VARS.clear()
    LOCAL_VARS.update(FUNCTION_VARS)
    p[0] = '%s' % (p[2])

def p_casejobsetstatement_case_job_set(p):
    '''casejobsetstatement : CASE JOB_SET THEN EOL
                           | CASE JOB_SET EOL'''
    global AT_START
    LOCAL_VARS.clear()
    LOCAL_VARS.update(FUNCTION_VARS)
    AT_START = True
    p[0] = '%s' % (p[2])

def p_whilestatement_while_do(p):
    '''whilestatement : WHILE expression DO EOL
                      | WHILE expression THEN EOL
                      | WHILE expression EOL'''
    global INDENT_LEVEL, AT_START
    p[0] = '%*swhile (%s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[2][0])
    INDENT_LEVEL += 1
    AT_START = False

def p_ifstatement_if_then(p):
    '''ifstatement : IF expression THEN
                   | IF expression EOL'''
    global INDENT_LEVEL
    p[0] = '%*sif (%s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[2][0])
    INDENT_LEVEL += 1

def p_elseifstatement_elseif_then(p):
    '''elseifstatement : ELSEIF expression THEN EOL
                       | ELSEIF expression EOL'''
    global INDENT_LEVEL
    INDENT_LEVEL -= 1
    p[0] = '%*s} else if (%s) {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[2][0])
    INDENT_LEVEL += 1

def p_elsestatement_else(p):
    '''elsestatement : ELSE EOL'''
    global INDENT_LEVEL
    INDENT_LEVEL -= 1
    p[0] = '%*s} else {\n' % (INDENT_LEVEL * INDENT_SIZE, ' ')
    INDENT_LEVEL += 1

# }}}

# define assignment {{{

VARCOUNT = 0

def p_lterm_assignment_expression(p):
    '''assignment : lterm ASSIGNMENT expression EOL
                  | lterm ASSIGNMENT listcall EOL'''
    global VARCOUNT, LAST_ARRAY, INIT_VARS
    var = p[1]
    if var[0] == '[':
        prefix = 'var '
        tmpvar = 'tmpvar%d' % (VARCOUNT)
        p[0] = '%*s%s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', prefix, tmpvar, p[3][0])
        VARCOUNT += 1
        var = var[1:-1]
        ltermvars = var.split(',')
        for idx, var in enumerate(ltermvars):
            prefix = ''
            if var in LOCAL_VARS and '.' not in var:
                prefix = 'var '
            p[0] += '%*s%s%s = %s[%d];\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', prefix, var, tmpvar, idx)
    else:
        prefix = ''
        value = p[3][0]
        if var == 'gr_i' and value == '[]':
            value = 'new ScilabString(["xstringb(orig(1),orig(2),\\"%s\\",sz(1),sz(2));"])' % (SCICOS_BLOCK_NAME)
        if var in LOCAL_VARS and '.' not in var:
            prefix = 'var '
        add_var_vartype(var, p[3][1])
        p[0] = '%*s%s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', prefix, var, value)
        if len(LAST_ARRAY) > 0:
            VAR_DEFINITIONS[var] = LAST_ARRAY
        if AT_START and INDENT_LEVEL == 2:
            INIT_VARS += p[0]
    LAST_ARRAY = []

def p_model_assignment_expression(p):
    '''assignment : GRAPHICS ASSIGNMENT expression EOL
                  | MODEL ASSIGNMENT expression EOL'''
    global INIT_VARS
    var = p[1]
    add_global_var(var)
    add_var_vartype(var, p[3][1])
    p[0] = '%*s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', print_var(var), p[3][0])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_lterm_assignment_arg1(p):
    '''assignment : lterm ASSIGNMENT ARG1 EOL
                  | ARG1 ASSIGNMENT expression'''
    p[0] = ''

def p_model_assignment_arg1_model(p):
    '''assignment : GRAPHICS ASSIGNMENT ARG1 DOT GRAPHICS EOL
                  | MODEL ASSIGNMENT ARG1 DOT MODEL EOL
                  | ARG1 DOT GRAPHICS ASSIGNMENT GRAPHICS EOL
                  | ARG1 DOT MODEL ASSIGNMENT MODEL EOL'''
    p[0] = ''

def p_arg1_var_assignment_expression(p):
    'assignment : ARG1 DOT VAR ASSIGNMENT expression EOL'
    global INIT_VARS
    var = p[3]
    add_global_var(var)
    add_var_vartype(var, p[5][1])
    p[0] = '%*s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', print_var(var), p[5][0])
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

# arg1(['model', 'rpar', 'objs', 1])
# TODO: need a method to set type of the variable
def p_assignment_arg1_key_assignment_expression(p):
    'assignment : ARG1 OPENBRACKET expression CLOSEBRACKET ASSIGNMENT expression EOL'
    p[0] = '%*sgetObjectFromKeyList(%s, %s) = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', 'this', p[3][0], p[6][0])

def p_modelvar_modelvar_var(p):
    'modelvar : modelvar DOT VAR'
    p[0] = '%s.%s' % (p[1], p[3])

def p_modelvar_var(p):
    '''modelvar : VAR
                | IN'''
    p[0] = '%s' % (p[1])

def p_modelvar_modelvar_expression(p):
    'modelvar : modelvar OPENBRACKET expression CLOSEBRACKET'
    p[0] = '%s[%s-1]' % (p[1], p[3][0])

def p_modelvar_modelvar_expression_expression(p):
    'modelvar : modelvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEBRACKET'
    p[0] = '%s[%s-1][%s-1]' % (p[1], p[3][0], p[5][0])

def p_assignment_model_modelvar_assignment_modelexpression(p):
    '''assignment : GRAPHICS DOT modelvar ASSIGNMENT modelexpression EOL
                  | MODEL DOT modelvar ASSIGNMENT modelexpression EOL'''
    global INIT_VARS
    var = '%s.%s' % (print_var(p[1]), p[3])
    value = p[5][0]
    vartype = p[5][1]
    add_var_vartype(var, vartype)
    p[0] = '%*s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', var, value)
    if AT_START and INDENT_LEVEL == 2:
        INIT_VARS += p[0]

def p_assignment_arg1_model_modelvar_assignment_expression(p):
    '''assignment : ARG1 DOT GRAPHICS DOT modelvar ASSIGNMENT expression EOL
                  | ARG1 DOT MODEL DOT modelvar ASSIGNMENT expression EOL'''
    global INIT_VARS
    var = '%s.%s' % (print_var(p[3]), p[5])
    value = p[7][0]
    vartype = p[7][1]
    if var != value:
        add_var_vartype(var, vartype)
        p[0] = '%*s%s = %s;\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', var, value)
        if AT_START and INDENT_LEVEL == 2:
            INIT_VARS += p[0]

def p_modelexpression_list_modelexpressionlist(p):
    'modelexpression : LIST OPENBRACKET modelexpressionlist CLOSEBRACKET'
    value = '%s(%s)' % (p[1], p[3])
    vartype = LIST_TYPE
    vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
    if vartype != '':
        value = 'new %s([%s])' % (vartype, value)
    p[0] = ('%s' % (value), LIST_TYPE)

def p_modelexpression_list(p):
    'modelexpression : LIST OPENBRACKET CLOSEBRACKET'
    value = '%s()' % (p[1])
    vartype = LIST_TYPE
    vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
    if vartype != '':
        value = 'new %s([%s])' % (vartype, value)
    p[0] = ('%s' % (value), LIST_TYPE)

def p_modelexpressionlist_expression(p):
    '''modelexpressionlist : expression
                           | listcall'''
    vartype = p[1][1]
    vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
    if vartype != '':
        p[0] = 'new %s([%s])' % (vartype, p[1][0])
    else:
        p[0] = '%s' % (p[1][0])

def p_modelexpressionlist_modelexpression_list_expression(p):
    '''modelexpressionlist : modelexpressionlist COMMA expression
                           | modelexpressionlist COMMA listcall'''
    vartype = p[3][1]
    vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
    if vartype != '':
        p[0] = '%s, new %s([%s])' % (p[1], vartype, p[3][0])
    else:
        p[0] = '%s,%s' % (p[1], p[3][0])

def p_modelexpression_expression(p):
    'modelexpression : expression'
    value = p[1][0]
    vartype = p[1][1]
    if vartype == MATRIX_TYPE:
        vartype = DOUBLE_TYPE
        vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
        if vartype != '':
            if value[0] == '[':
                value = value[1:-1]
            value = 'new %s(%s)' % (vartype, value)
    elif vartype == VECTOR_BOOLEAN_TYPE:
        vartype = BOOLEAN_TYPE
        vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
        if vartype != '':
            value = 'new %s(%s)' % (vartype, value)
    elif vartype == VECTOR_STRING_TYPE:
        vartype = STRING_TYPE
        vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
        if vartype != '':
            value = 'new %s(%s)' % (vartype, value)
    elif vartype == VECTOR_TYPE:
        vartype = DOUBLE_TYPE
        vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
        if vartype != '':
            value = 'new %s(%s)' % (vartype, value)
    else:
        vartype = MODEL_MAP.get(vartype, 'ScilabDouble')
        if vartype != '':
            value = 'new %s([%s])' % (vartype, value)
    p[0] = ('%s' % (value), p[1][1])

def p_getvalueassignment_getvalue_arguments(p):
    'getvalueassignment : lterm ASSIGNMENT SCICOS_GETVALUE OPENBRACKET getvaluearguments CLOSEBRACKET EOL'
    global OPTIONS_BLOCK, RESTORE_BLOCK, AT_START
    indent = '%*s' % (2 * INDENT_SIZE, ' ')
    indent2 = '%*s' % (3 * INDENT_SIZE, ' ')
    indent3 = '%*s' % (INDENT_LEVEL * INDENT_SIZE, ' ')
    AT_START = False
    lterm = p[1]
    if lterm[0] == '[':
        lterm = lterm[1:-1]
        ltermvars = lterm.split(',')
        lastidx = len(ltermvars) - 2
        exprs = ''
        for idx, var in enumerate(ltermvars, -1):
            if var[:5] == 'this.':
                basevar = var[5:]
            else:
                basevar = var
            if idx in (-1, lastidx):
                add_local_var(basevar)
            else:
                add_global_var(basevar, force=True)
            var = print_var(basevar)
            if idx == -1:
                p[0] = '%svar %s = true;\n' % (indent3, var)
            elif idx == len(ltermvars) - 2:
                p[0] += "%svar %s = [%s];\n" % (indent3, var, exprs[:-2])
            else:
                vartype = get_var_vartype(basevar, STRING_TYPE)
                parsefunction = PARSE_MAP.get(vartype, '')
                if parsefunction != '':
                    parsecall = '%s(arguments[%d][\"%s\"])' % (parsefunction, 0, basevar)
                else:
                    parsecall = 'arguments[%d][\"%s\"]' % (0, basevar)
                exprs += 'arguments[%d][\"%s\"], ' % (0, basevar)
                p[0] += "%s%s = %s;\n" % (indent3, var, parsecall)
                if idx < len(LABELS):
                    if vartype == MATRIX_TYPE:
                        showvar = var + '.toString().replace(/,/g," ")'
                    else:
                        showvar = var
                    OPTIONS_BLOCK += '%s%s:[%s,%s],\n' % (indent2, basevar, LABELS[idx], showvar)
                    RESTORE_BLOCK += '%s%s = ary[%d];\n' % (indent, var, idx)

def p_getvaluearguments_arg1_arg2_arg3_arg4(p):
    'getvaluearguments : getvaluearg1 COMMA getvaluearg2 COMMA getvaluearg3 COMMA getvaluearg4'
    p[0] = '%s,%s,%s,%s' % (p[1], p[3], p[5], p[7])
    if len(TITLES) > 0:
        JOB_BLOCKS['"title"'] = TITLES[0]
    else:
        JOB_BLOCKS['"title"'] = p[1]

def p_getvaluearg1_list(p):
    '''getvaluearg1 : OPENSQBRACKET getvaluearg1arraylist CLOSESQBRACKET
                    | OPENSQBRACKET getvaluearg1arraylist SEMICOLON CLOSESQBRACKET'''
    p[0] = '[%s]' % (p[2])

def p_getvaluearg1_string(p):
    'getvaluearg1 : DQSTRING'
    p[0] = '%s' % (p[1])
    TITLES.append(p[0])

def p_getvaluearg1_gettext_string(p):
    'getvaluearg1 : GETTEXT OPENBRACKET DQSTRING CLOSEBRACKET'
    p[0] = '%s' % (p[3])
    TITLES.append(p[0])

def p_getvaluearg1_var(p):
    'getvaluearg1 : VAR'
    var = p[1]
    add_global_var(var, force=True)
    var = print_var(var)
    TITLES.append(var)
    p[0] = '%s' % (var)

def p_getvaluearg1arraylist_arraylist_arraylistitem(p):
    '''getvaluearg1arraylist : getvaluearg1arraylist SEMICOLON getvaluearg1arraylistitem
                             | getvaluearg1arraylist COMMA getvaluearg1arraylistitem
                             | getvaluearg1arraylist SPACE getvaluearg1arraylistitem'''
    p[0] = '%s,%s' % (p[1], p[3])

def p_getvaluearg1arraylist_arraylistitem(p):
    'getvaluearg1arraylist : getvaluearg1arraylistitem'
    p[0] = '%s' % (p[1])

def p_getvaluearg1arraylistitem_gettext_string(p):
    'getvaluearg1arraylistitem : GETTEXT OPENBRACKET DQSTRING CLOSEBRACKET'
    p[0] = '%s' % (p[3])
    TITLES.append(p[0])

def p_getvaluearg1arraylistitem_string(p):
    'getvaluearg1arraylistitem : DQSTRING'
    p[0] = '%s' % (p[1])
    TITLES.append(p[0])

def p_getvaluearg1arraylistitem_string_string(p):
    'getvaluearg1arraylistitem : DQSTRING ADDITION DQSTRING'
    p[0] = '%s%s' % (p[1][:-1], p[3][1:])
    TITLES.append(p[0])

def p_getvaluearg1arraylistitem_functionname_parameters(p):
    'getvaluearg1arraylistitem : FUNCTIONNAME OPENBRACKET list CLOSEBRACKET'
    p[0] = '%s(%s)' % (p[1][0], p[3])
    TITLES.append(p[0])

def p_getvaluearg2_list(p):
    '''getvaluearg2 : OPENSQBRACKET getvaluearg2arraylist CLOSESQBRACKET
                    | OPENSQBRACKET getvaluearg2arraylist SEMICOLON CLOSESQBRACKET'''
    p[0] = '[%s]' % (p[2])

def p_getvaluearg2_string(p):
    'getvaluearg2 : DQSTRING'
    p[0] = '%s' % (p[1])
    LABELS.append(p[0])

def p_getvaluearg2_gettext_string(p):
    'getvaluearg2 : GETTEXT OPENBRACKET DQSTRING CLOSEBRACKET'
    p[0] = '%s' % (p[3])
    LABELS.append(p[0])

def p_getvaluearg2_var(p):
    'getvaluearg2 : VAR'
    var = p[1]
    add_global_var(var, force=True)
    var = print_var(var)
    if var in VAR_DEFINITIONS:
        # replace variable with value of that variable
        labels = VAR_DEFINITIONS[var]
        s = '['
        for l in labels:
            s += l + ','
            LABELS.append(l)
        else:
            s += ','
        s = s[:-1] + ']'
        p[0] = '%s' % (s)
    else:
        LABELS.append(var)
        p[0] = '%s' % (var)

def p_getvaluearg2arraylist_arraylist_arraylistitem(p):
    '''getvaluearg2arraylist : getvaluearg2arraylist SEMICOLON getvaluearg2arraylistitem
                             | getvaluearg2arraylist COMMA getvaluearg2arraylistitem
                             | getvaluearg2arraylist SPACE getvaluearg2arraylistitem'''
    p[0] = '%s,%s' % (p[1], p[3])

def p_getvaluearg2arraylist_arraylistitem(p):
    'getvaluearg2arraylist : getvaluearg2arraylistitem'
    p[0] = '%s' % (p[1])

def p_getvaluearg2arraylistitem_gettext_string(p):
    'getvaluearg2arraylistitem : GETTEXT OPENBRACKET DQSTRING CLOSEBRACKET'
    p[0] = '%s' % (p[3])
    LABELS.append(p[0])

def p_getvaluearg2arraylistitem_string(p):
    'getvaluearg2arraylistitem : DQSTRING'
    p[0] = '%s' % (p[1])
    LABELS.append(p[0])

def p_getvaluearg2arraylistitem_string_string(p):
    'getvaluearg2arraylistitem : DQSTRING ADDITION DQSTRING'
    p[0] = '%s%s' % (p[1][:-1], p[3][1:])
    LABELS.append(p[0])

def p_getvaluearg2arraylistitem_functionname_parameters(p):
    'getvaluearg2arraylistitem : FUNCTIONNAME OPENBRACKET list CLOSEBRACKET'
    # TODO: replace with value of that function
    p[0] = '%s(%s)' % (p[1][0], p[3])
    LABELS.append(p[0])

def p_getvaluearg3_list(p):
    'getvaluearg3 : LIST OPENBRACKET getvaluelist CLOSEBRACKET'
    p[0] = '%s(%s)' % (p[1], p[3])

def p_getvaluearg3_var(p):
    'getvaluearg3 : VAR'
    p[0] = '%s' % (p[1])

def p_getvaluearg4_expression(p):
    '''getvaluearg4 : expression
                    | listcall'''
    p[0] = '%s' % (p[1][0])

def p_standarddefineassignment_arg1_arg2_arg3_arg4(p):
    'standarddefineassignment : lterm ASSIGNMENT STANDARD_DEFINE OPENBRACKET standarddefinearg1 COMMA standarddefinearg2 COMMA standarddefinearg3 COMMA standarddefinearg4 CLOSEBRACKET EOL'
    p[0] = '%*s%s = new %s(%s,%s,%s,%s);\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1], p[3], p[5], p[7], p[9], p[11])

def p_standarddefinearg1_expression(p):
    'standarddefinearg1 : expression'
    value = p[1][0]
    if ']/' in value:
        value = re.sub(r'\]/.*', ']', value)
    p[0] = 'new ScilabDouble(%s)' % (value)

def p_standarddefinearg2_expression(p):
    'standarddefinearg2 : expression'
    value = p[1][0]
    p[0] = '%s' % (value)

def p_standarddefinearg3_expression(p):
    'standarddefinearg3 : modelexpression'
    value = p[1][0]
    p[0] = '%s' % (value)

def p_standarddefinearg4_expression(p):
    '''standarddefinearg4 : expression
                          | listcall'''
    value = p[1][0]
    p[0] = '%s' % (value)

# }}}

# define ltermarraylist {{{

def p_ltermarraylist_ltermarraylist_comma_ltermarraylisterm(p):
    'ltermarraylist : ltermarraylist COMMA ltermarraylistterm'
    p[0] = '%s,%s' % (p[1], p[3])

def p_ltermarraylist_ltermarraylistterm(p):
    'ltermarraylist : ltermarraylistterm'
    p[0] = '%s' % (p[1])

def p_ltermarraylistterm_var(p):
    '''ltermarraylistterm : VAR
                          | GRAPHICS
                          | MODEL'''
    var = '%s' % (p[1])
    add_local_var(var)
    p[0] = '%s' % (print_var(var))

def p_ltermarraylistterm_var_dot_var(p):
    'ltermarraylistterm : VAR DOT VAR'
    var = '%s' % (p[1])
    add_local_var(var)
    p[0] = '%s.%s' % (print_var(var), p[3])

def p_ltermarraylistterm_in(p):
    'ltermarraylistterm : IN'
    var = '%s1' % (p[1])
    add_local_var(var)
    p[0] = '%s' % (print_var(var))

def p_ltermarraylistterm_prevar(p):
    'ltermarraylistterm : PREVAR'
    p[0] = '%s' % (p[1])

# }}}

# define termarraylist {{{

def p_termarrayarraylist_termarrayarraylist_semicolon_termarraylist(p):
    'termarrayarraylist : termarrayarraylist SEMICOLON termarraylist'
    p[0] = ('%s,[%s]' % (p[1][0], p[3][0]), p[1][1])

def p_termarrayarraylist_termarraylist_semicolon_termarraylist(p):
    'termarrayarraylist : termarraylist SEMICOLON termarraylist'
    p[0] = ('[%s],[%s]' % (p[1][0], p[3][0]), p[1][1])

def p_termarrayarraylist_termarraylist_semicolon(p):
    'termarrayarraylist : termarraylist SEMICOLON'
    p[0] = ('[%s]' % (p[1][0]), p[1][1])

def p_termarraylist_termarraylist_comma_expression(p):
    '''termarraylist : termarraylist COMMA expression
                     | termarraylist SPACE expression'''
    if p[1][1] == p[3][1]:
        vartype = p[1][1]
    else:
        vartype = DOUBLE_TYPE
    p[0] = ('%s,%s' % (p[1][0], p[3][0]), vartype)
    LAST_ARRAY.append(p[3][0])

def p_termarraylist_expression(p):
    'termarraylist : expression'
    p[0] = ('%s' % (p[1][0]), p[1][1])
    LAST_ARRAY.append(p[1][0])

def p_termarraylist_expression_colon_expression(p):
    'termarraylist : expression COLON expression'
    p[0] = ('%s:%s' % (p[1][0], p[3][0]), p[1][1])

# }}}

# define list {{{

def p_list_list_expression(p):
    '''list : list COMMA expression
            | list COMMA listcall'''
    p[0] = '%s,%s' % (p[1], p[3][0])

def p_list_list_arg1(p):
    'list : list COMMA ARG1'
    p[0] = '%s,%s' % (p[1], 'this')

def p_list_list_var_expression(p):
    '''list : list COMMA VAR ASSIGNMENT expression
            | list COMMA GRAPHICS ASSIGNMENT expression
            | list COMMA MODEL ASSIGNMENT expression
            | list COMMA VAR ASSIGNMENT listcall
            | list COMMA GRAPHICS ASSIGNMENT listcall
            | list COMMA MODEL ASSIGNMENT listcall'''
    p[0] = '%s,%s=%s' % (p[1], p[3], p[5][0])

def p_list_list_in_expression(p):
    '''list : list COMMA IN ASSIGNMENT expression
            | list COMMA IN ASSIGNMENT listcall'''
    p[0] = '%s,%s1=%s' % (p[1], p[3], p[5][0])

def p_list_expression(p):
    '''list : expression
            | listcall'''
    p[0] = '%s' % (p[1][0])

def p_list_arg1(p):
    'list : ARG1'
    p[0] = '%s' % ('this')

def p_list_var_expression(p):
    '''list : VAR ASSIGNMENT expression
            | VAR ASSIGNMENT listcall'''
    p[0] = '%s=%s' % (p[1], p[3][0])

def p_list_in_expression(p):
    '''list : IN ASSIGNMENT expression
            | IN ASSIGNMENT listcall'''
    p[0] = '%s1=%s' % (p[1], p[3][0])

def p_getvaluelist_getvaluelist_expression(p):
    'getvaluelist : getvaluelist COMMA expression'
    p[0] = '%s,%s' % (p[1], p[3][0])

def p_getvaluelist_expression(p):
    'getvaluelist : expression'
    p[0] = '%s' % (p[1][0])

# }}}

# define expression {{{

# (2+3)
def p_expression_expression(p):
    'expression : OPENBRACKET expression CLOSEBRACKET'
    p[0] = ('(%s)' % (p[2][0]), p[2][1])

# [2+1,1;3-1,2;4-1,3]
def p_expression_termarrayarraylist(p):
    '''expression : OPENSQBRACKET termarrayarraylist CLOSESQBRACKET
                  | OPENSQBRACKET termarrayarraylist SEMICOLON CLOSESQBRACKET'''
    p[0] = ('[%s]' % (p[2][0]), MATRIX_TYPE)

# [2 3 4]
# [2,3,4]
def p_expression_termarraylist(p):
    '''expression : OPENSQBRACKET termarraylist CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist COMMA CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist SPACE CLOSESQBRACKET'''
    if p[2][1] == BOOLEAN_TYPE:
        vartype = VECTOR_BOOLEAN_TYPE
    elif p[2][1] == STRING_TYPE:
        vartype = VECTOR_STRING_TYPE
    else:
        vartype = VECTOR_TYPE
    p[0] = ('[%s]' % (p[2][0]), vartype)

# []
def p_expression_empty(p):
    'expression : OPENSQBRACKET CLOSESQBRACKET'
    p[0] = ('[]', VECTOR_TYPE)

def p_expression_term_transpose(p):
    'expression : expression TRANSPOSE'
    p[0] = ('transpose(%s)' % (p[1][0]), p[1][1])

def p_expression_expression_multiplication_expression(p):
    'expression : expression MULTIPLICATION expression'
    if p[1][1] == p[3][1]:
        vartype = p[1][1]
    else:
        vartype = STRING_TYPE
    if p[2] == '**':
        operator = '^'
    elif p[2] == '\\':
        operator = '\\'
    else:
        operator = p[2]
    p[0] = ('%s%s%s' % (p[1][0], operator, p[3][0]), vartype)

def p_expression_expression_addition_expression(p):
    'expression : expression ADDITION expression'
    if p[1][1] == p[3][1]:
        vartype = p[1][1]
    else:
        vartype = STRING_TYPE
    p[0] = ('%s%s%s' % (p[1][0], p[2], p[3][0]), vartype)

def p_expression_expression_comparison_expression(p):
    '''expression : expression COMPARISON expression
                  | expression COMPARISON listcall'''
    operator = p[2]
    if operator == '<>' or operator == '~=':
        operator = '!='
    if p[3][0] == '[]':
        p[0] = ('%s.length%s0' % (p[1][0], operator), BOOLEAN_TYPE)
    elif p[1][0] == '[]':
        p[0] = ('0%s%s.length' % (operator, p[3][0]), BOOLEAN_TYPE)
    else:
        p[0] = ('%s%s%s' % (p[1][0], operator, p[3][0]), BOOLEAN_TYPE)

def p_expression_expression_logical_expression(p):
    'expression : expression LOGICAL expression'
    operator = p[2]
    if operator == '&':
        operator = '&&'
    elif operator == '|':
        operator = '||'
    p[0] = ('%s%s%s' % (p[1][0], operator, p[3][0]), BOOLEAN_TYPE)

def p_expression_addition_term(p):
    'expression : ADDITION expression %prec UNARYADDITION'
    if p[1] == '-':
        p[0] = ('%s%s' % (p[1], p[2][0]), p[2][1])
    else:
        p[0] = ('%s' % (p[2][0]), p[2][1])

def p_expression_not_expression(p):
    'expression : NOT expression'
    operator = '!'
    p[0] = ('%s%s' % (operator, p[2][0]), BOOLEAN_TYPE)

def p_expression_term(p):
    'expression : term'
    p[0] = p[1]

# }}}

# define function {{{

# A(2,3)
def p_function_function_parameters(p):
    'function : FUNCTIONNAME OPENBRACKET list CLOSEBRACKET'
    p[0] = '%*s%s(%s)' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1][0], p[3])

# A()
def p_function_function(p):
    'function : FUNCTIONNAME OPENBRACKET CLOSEBRACKET'
    p[0] = '%*s%s()' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1][0])

# message(x,y)
def p_message_parameter_parameter(p):
    'function : MESSAGE OPENBRACKET expression COMMA expression CLOSEBRACKET'
    p[0] = '%*s%s(%s,%s);\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1], p[3][0], p[5][0])
    p[0] += '%*sthrow "user error"' % (INDENT_LEVEL * INDENT_SIZE, ' ')

# message(x)
def p_message_parameter(p):
    'function : MESSAGE OPENBRACKET expression CLOSEBRACKET'
    p[0] = '%*s%s(%s);\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1], p[3][0])
    p[0] += '%*sthrow "user error"' % (INDENT_LEVEL * INDENT_SIZE, ' ')

def p_resumestatementblocks_resume(p):
    'resumestatementblocks : lterm ASSIGNMENT RESUME OPENBRACKET expression CLOSEBRACKET EOL'
    p[0] = '%*s%s = %s(%s)\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[1], p[3], p[5][0])

def p_clearvar_clear_var(p):
    'clearvar : CLEAR VAR'
    p[0] = '%*s%s={};\n' % (INDENT_LEVEL * INDENT_SIZE, ' ', p[2])

def p_clearvar_clearvar_var(p):
    'clearvar : clearvar VAR'
    p[0] = '%s%*s%s={};\n' % (p[1], INDENT_LEVEL * INDENT_SIZE, ' ', p[2])

# }}}

# define lterm {{{

# B(2:$-1)
def p_lterm_lterm_slice(p):
    'lterm : lterm OPENBRACKET expression COLON expression CLOSEBRACKET'
    p[0] = '%s.slice(%s-1,%s)' % (p[1], p[3][0], p[5][0])

# B(2)
def p_lterm_lterm_index(p):
    'lterm : lterm OPENBRACKET expression CLOSEBRACKET'
    p[0] = '%s[%s-1]' % (p[1], p[3][0])

# B(2:$-1,1:n)
def p_lterm_lterm_slice_slice(p):
    'lterm : lterm OPENBRACKET expression COLON expression COMMA expression COLON expression CLOSEBRACKET'
    p[0] = '%s.slice(%s-1,%s).slice(%s-1,%s)' % (p[1], p[3][0], p[5][0], p[7][0], p[9][0])

# B(2,:)
def p_lterm_lterm_index_full_slice(p):
    'lterm : lterm OPENBRACKET expression COMMA COLON CLOSEBRACKET'
    p[0] = '%s[%s-1].slice()' % (p[1], p[3][0])

# B(2,3)
# B($-2)(3)
def p_lterm_lterm_index_index(p):
    '''lterm : lterm OPENBRACKET expression COMMA expression CLOSEBRACKET
             | lterm OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEBRACKET'''
    base = '%s[%s-1]' % (p[1], p[3][0])
    p[0] = '%s[%s-1]' % (base, p[5][0])

# [A,B,C]
def p_lterm_ltermarraylist(p):
    'lterm : OPENSQBRACKET ltermarraylist CLOSESQBRACKET'
    p[0] = '[%s]' % (p[2])

def p_lterm_lterm_dot_var(p):
    '''lterm : lterm DOT VAR
             | lterm DOT IN
             | lterm DOT GRAPHICS
             | lterm DOT MODEL'''
    p[0] = '%s.%s' % (p[1], p[3])

def p_lterm_var(p):
    'lterm : VAR'
    var = p[1]
    add_local_var(var)
    p[0] = '%s' % (print_var(var))

# in
def p_lterm_in(p):
    'lterm : IN'
    var = p[1] + '1'
    add_local_var(var)
    p[0] = '%s' % (print_var(var))

def p_lterm_prevar(p):
    'lterm : PREVAR'
    p[0] = '%s' % (p[1])

# }}}

# define term {{{

# B(2:$-1)
def p_termvar_termvar_slice(p):
    'termvar : termvar OPENBRACKET expression COLON expression CLOSEBRACKET'
    p[0] = ('%s.slice(%s-1,%s)' % (p[1][0], p[3][0], p[5][0]), VECTOR_TYPE)

# B(2:$-1,1)
def p_termvar_termvar_slice_expression(p):
    'termvar : termvar OPENBRACKET expression COLON expression COMMA expression CLOSEBRACKET'
    p[0] = ('%s.slice(%s-1,%s)[%s-1]' % (p[1][0], p[3][0], p[5][0], p[7][0]), VECTOR_TYPE)

# B(2:$-1,1:2)
def p_termvar_termvar_slice_slice(p):
    'termvar : termvar OPENBRACKET expression COLON expression COMMA expression COLON expression CLOSEBRACKET'
    p[0] = ('%s.slice(%s-1,%s).slice(%s-1,%s)' % (p[1][0], p[3][0], p[5][0], p[7][0], p[9][0]), MATRIX_TYPE)

# B(2:$-1,:)
def p_termvar_termvar_slice_full_slice(p):
    'termvar : termvar OPENBRACKET expression COLON expression COMMA COLON CLOSEBRACKET'
    p[0] = ('%s.slice(%s-1,%s).slice()' % (p[1][0], p[3][0], p[5][0]), MATRIX_TYPE)

# B(:$-1)
def p_termvar_termvar_left_slice(p):
    'termvar : termvar OPENBRACKET COLON expression CLOSEBRACKET'
    p[0] = ('%s.slice(%s-1)' % (p[1][0], p[3][0]), VECTOR_TYPE)

# B(2:)
def p_termvar_termvar_right_slice(p):
    'termvar : termvar OPENBRACKET expression COLON CLOSEBRACKET'
    p[0] = ('%s.slice(%s-1,%s)' % (p[1][0], '1', p[4][0]), VECTOR_TYPE)

# B(:)
def p_termvar_termvar_full_slice(p):
    'termvar : termvar OPENBRACKET COLON CLOSEBRACKET'
    p[0] = ('%s.slice()' % (p[1][0]), VECTOR_TYPE)

# B(:,1)
def p_termvar_termvar_full_slice_expression(p):
    'termvar : termvar OPENBRACKET COLON COMMA expression CLOSEBRACKET'
    p[0] = ('%s.slice()[%s-1]' % (p[1][0], p[5][0]), DOUBLE_TYPE)

# B(1,:)
def p_termvar_termvar_expression_full_slice(p):
    '''termvar : termvar OPENBRACKET expression COMMA COLON CLOSEBRACKET
               | termvar OPENBRACKET expression CLOSEOPENBRACKET COLON CLOSEBRACKET'''
    base = '%s[%s-1]' % (p[1][0], p[3][0])
    p[0] = ('%s.slice()' % (base), VECTOR_TYPE)

# B(1,1)
# B($-2)(1)
def p_termvar_termvar_expression_expression(p):
    '''termvar : termvar OPENBRACKET expression COMMA expression CLOSEBRACKET
               | termvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEBRACKET'''
    base = '%s[%s-1]' % (p[1][0], p[3][0])
    p[0] = ('%s[%s-1]' % (base, p[5][0]), DOUBLE_TYPE)

# B(:,:)
def p_termvar_termvar_full_slice_full_slice(p):
    'termvar : termvar OPENBRACKET COLON COMMA COLON CLOSEBRACKET'
    p[0] = ('%s.slice().slice()' % (p[1][0]), DOUBLE_TYPE)

# (1:10)
def p_term_range(p):
    'term : OPENBRACKET expression COLON expression CLOSEBRACKET'
    p[0] = ('[%s:%s]' % (p[2][0], p[4][0]), VECTOR_TYPE)

# 1:10:50
def p_term_range_step(p):
    'term : expression COLON expression COLON expression'
    p[0] = ('[%s:%s:%s]' % (p[1][0], p[3][0], p[5][0]), VECTOR_TYPE)

# B($-2)
def p_termvar_termvar_parameter(p):
    'termvar : termvar OPENBRACKET expression CLOSEBRACKET'
    p[0] = ('%s[%s-1]' % (p[1][0], p[3][0]), DOUBLE_TYPE)

# B($-2)(1)(3)
def p_termvar_termvar_parameter_parameter_parameter(p):
    'termvar : termvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEOPENBRACKET expression CLOSEBRACKET'
    base = '%s[%s-1]' % (p[1][0], p[3][0])
    base = '%s[%s-1]' % (base, p[5][0])
    p[0] = ('%s[%s-1]' % (base, p[7][0]), DOUBLE_TYPE)

# B($-2)(1)(3:4)
def p_termvar_termvar_parameter_parameter_slice(p):
    'termvar : termvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEOPENBRACKET expression COLON expression CLOSEBRACKET'
    base = '%s[%s-1]' % (p[1][0], p[3][0])
    base = '%s[%s-1]' % (base, p[5][0])
    p[0] = ('%s.slice(%s-1,%s)' % (base, p[7][0], p[9][0]), STRING_TYPE)

# part(x,1:10)
def p_term_part_parameter_range(p):
    'term : PART OPENBRACKET expression COMMA expression COLON expression CLOSEBRACKET'
    p[0] = ('%s(%s,%s,%s)' % (p[1], p[3][0], p[5][0], p[7][0]), STRING_TYPE)

# part(x,1)
def p_term_part_parameter_parameter(p):
    'term : PART OPENBRACKET expression COMMA expression CLOSEBRACKET'
    p[0] = ('%s(%s,%s)' % (p[1], p[3][0], p[5][0]), STRING_TYPE)

# string(1:10)
def p_term_string_range(p):
    'term : STRING OPENBRACKET expression COLON expression CLOSEBRACKET'
    p[0] = ('%s(%s,%s)' % (p[1], p[3][0], p[5][0]), STRING_TYPE)

# string(x)
def p_term_string_parameter(p):
    'term : STRING OPENBRACKET expression CLOSEBRACKET'
    p[0] = ('%s(%s)' % (p[1], p[3][0]), STRING_TYPE)

# A(2,3)
def p_term_function_parameters(p):
    'term : FUNCTIONNAME OPENBRACKET list CLOSEBRACKET'
    p[0] = ('%s(%s)' % (p[1][0], p[3]), p[1][1])

# arg1(['model', 'rpar', 'objs', 1])
# TODO: need a method to get type of the variable
def p_term_arg1_key(p):
    'term : ARG1 OPENBRACKET expression CLOSEBRACKET'
    p[0] = ('getObjectFromKeyList(%s, %s)' % ('this', p[3][0]), DOUBLE_TYPE)

# list(2,3)
def p_listcall_list_parameters(p):
    'listcall : LIST OPENBRACKET list CLOSEBRACKET'
    p[0] = ('%s(%s)' % (p[1], p[3]), LIST_TYPE)

# gettext("abc")
def p_term_gettext_parameter(p):
    'term : GETTEXT OPENBRACKET expression CLOSEBRACKET'
    p[0] = ('%s' % (p[3][0]), STRING_TYPE)

# A()
def p_term_function(p):
    'term : FUNCTIONNAME OPENBRACKET CLOSEBRACKET'
    p[0] = ('%s()' % (p[1][0]), p[1][1])

# list()
def p_listcall_list(p):
    'listcall : LIST OPENBRACKET CLOSEBRACKET'
    p[0] = ('%s()' % (p[1]), LIST_TYPE)

# $
def p_term_lastindex(p):
    'term : LASTINDEX'
    p[0] = (p[1], DOUBLE_TYPE)

# %xyz
def p_term_prevar(p):
    '''term : PREVAR
            | PREVAR_SUBSTITUTE'''
    p[0] = (p[1], DOUBLE_TYPE)

# %f
def p_term_prevar_boolean(p):
    'term : PREVAR_BOOLEAN'
    if p[1] == '%t':
        value = 'true'
    elif p[1] == '%f':
        value = 'false'
    p[0] = (value, BOOLEAN_TYPE)

# 1+2*%i
def p_term_prevar_complex1(p):
    'expression : expression ADDITION expression MULTIPLICATION PREVAR_COMPLEX'
    if p[2] == '-':
        imag = '%s%s' % (p[2], p[3][0])
    else:
        imag = '%s' % (p[3][0])
    p[0] = ('math.complex(%s,%s)' % (p[1][0], imag), DOUBLE_TYPE)

# 1+2*%i
def p_term_prevar_complex2(p):
    'expression : expression ADDITION PREVAR_COMPLEX MULTIPLICATION expression'
    if p[2] == '-':
        imag = '%s%s' % (p[2], p[5][0])
    else:
        imag = '%s' % (p[5][0])
    p[0] = ('math.complex(%s,%s)' % (p[1][0], imag), DOUBLE_TYPE)

# %e %pi
def p_term_prevar_float(p):
    'term : PREVAR_FLOAT'
    if p[1] == '%e':
        flt = 'math.E'
    elif p[1] == '%pi':
        flt = 'math.PI'
    else:
        flt = p[1]
    p[0] = (flt, DOUBLE_TYPE)

def p_term_termvar(p):
    'term : termvar'
    p[0] = p[1]

# A.B
def p_termvar_termvar_dot_var(p):
    '''termvar : termvar DOT VAR
               | termvar DOT IN
               | termvar DOT GRAPHICS
               | termvar DOT MODEL'''
    var = p[1][0]
    add_object_var(var)
    var = '%s.%s' % (var, p[3])
    vartype = get_var_vartype(var)
    p[0] = (var, vartype)

# A
def p_termvar_var(p):
    '''termvar : VAR
               | GRAPHICS
               | MODEL'''
    var = p[1]
    add_global_var(var)
    vartype = get_var_vartype(var)
    p[0] = ('%s' % (print_var(var)), vartype)

# arg1.model.ipar
def p_termvar_arg1_model_var(p):
    '''termvar : ARG1 DOT GRAPHICS DOT VAR
               | ARG1 DOT MODEL DOT VAR'''
    var = p[3]
    add_global_var(var)
    add_object_var(var)
    var = '%s.%s' % (var, p[5])
    vartype = get_var_vartype(var)
    p[0] = ('%s' % (print_var(var)), vartype)

# in
def p_termvar_in(p):
    'termvar : IN'
    var = p[1] + '1'
    add_global_var(var)
    vartype = get_var_vartype(var)
    p[0] = ('%s' % (print_var(var)), vartype)

# 5
# 3.4
# 4e5
# 1.0d-4
def p_term_number(p):
    'term : NUMBER'
    number = re.sub(r'[de]', r'e', p[1], flags=re.IGNORECASE)
    p[0] = ('%s' % (number), DOUBLE_TYPE)

# 'abc'
# "abc"
def p_term_string(p):
    '''term : QSTRING
            | DQSTRING'''
    p[0] = ('%s' % (p[1]), STRING_TYPE)

# }}}

# functions {{{

def p_error(p):
    print("Syntax error in input", p)

def getblocktype(module):
    '''return a block type for a module'''
    return BLOCK_TYPE.get(module, 'BasicBlock')

def printblocktypejs(module):
    blocktype = getblocktype(module)
    print('%s.prototype.importset = function %s() {\n    /* TODO */\n}' % (module, module))
    print('%s.prototype.getContainer = function %s() { return new %s(%s); }' % (module, module, blocktype, print_var('x')))

def add_local_var(var, force=False):
    '''If a variable is not global, add it to local list

    If force is true, remove it from global list first

    variable name cannot begin with this.'''
    if var[:5] == 'this.':
        print('Syntax error: cannot add local variable:', var)
        return
    l = var.find('.')
    if l != -1:
        var = var[:l]
    exists = var in GLOBAL_VARS
    if force and exists:
        GLOBAL_VARS.remove(var)
        exists = False
    if not exists:
        LOCAL_VARS.add(var)

def add_global_var(var, force=False):
    '''If a variable is not local, add it to global list

    If force is true, remove it from local list first

    If variable name begins with this., remove it'''
    if var[:5] == 'this.':
        var = var[5:]
    l = var.find('.')
    if l != -1:
        var = var[:l]
    exists = var in LOCAL_VARS
    if force and exists:
        LOCAL_VARS.remove(var)
        exists = False
    if not exists:
        GLOBAL_VARS.add(var)

def print_var(var):
    'If a variable is global, prepend this. to the variable name'
    l = var.find('.')
    basevar = var[:l] if l != -1 else var
    if basevar in GLOBAL_VARS:
        if var == 'in1':
            var = 'in'
        ret = 'this.%s' % (var)
    else:
        ret = '%s' % (var)
    return ret

def add_var_vartype(var, vartype):
    if var[:5] == 'this.':
        var = var[5:]
    VAR_TYPES[var] = vartype

def get_var_vartype(var, vartype=None):
    if var[:5] == 'this.':
        var = var[5:]
    return VAR_TYPES[var] if var in VAR_TYPES else vartype

def add_boolean_var(var):
    add_var_vartype(var, BOOLEAN_TYPE)

def add_double_var(var):
    add_var_vartype(var, DOUBLE_TYPE)

def add_matrix_var(var):
    add_var_vartype(var, MATRIX_TYPE)

def add_null_var(var):
    add_var_vartype(var, NULL_TYPE)

def add_object_var(var):
    add_var_vartype(var, OBJECT_TYPE)

def add_string_var(var):
    add_var_vartype(var, STRING_TYPE)

def add_vector_var(var):
    add_var_vartype(var, VECTOR_TYPE)

def dump_vars(picklefilename):
    with open(picklefilename, 'w') as cfile:
        pickle.dump(GLOBAL_VARS, cfile)

        pickle.dump(VAR_TYPES, cfile)

def get_expression_type_1(expression, vartype, isslice=False, slicetype=''):
    if vartype == STRING_TYPE:
        pass
    elif type(vartype) == tuple:
        if isslice:
            pass
        elif vartype[0] == MATRIX_TYPE:
            vartype = (VECTOR_TYPE, vartype[1])
        elif vartype[0] == VECTOR_TYPE:
            vartype = vartype[1]
        else:
            print('Syntax error: getting', slicetype, 'index of expression', expression, 'of vartype', vartype)
    else:
        print('Syntax error: getting', slicetype, 'index of expression', expression, 'of vartype', vartype)
    return vartype

def get_expression_type_2(expression, vartype, isslice1=False, isslice2=False):
    vartype = get_expression_type_1(expression, vartype, isslice1, 'first')
    vartype = get_expression_type_1(expression, vartype, isslice2, 'second')
    return vartype

def load_vars(picklefilename):
    global GLOBAL_VARS
    global VAR_TYPES

    with open(picklefilename, 'r') as cfile:
        GLOBAL_VARS = pickle.load(cfile)

        VAR_TYPES = pickle.load(cfile)

def processfile(filename, picklefilename, passnumber):
    '''convert a sci file to a js file'''

    debug = False

    if passnumber == 2:
        load_vars(picklefilename)
        debug = True

    data = ''
    with open(filename, 'r') as infile:
        for line in infile:
            data += line

        parser = yacc.yacc()
        result = parser.parse(data, debug=debug)

        if passnumber == 1:
            dump_vars(picklefilename)

        print('/* autogenerated from "', filename, '" */', sep='')
        print(result)

# }}}

# main {{{

if __name__ == '__main__':
    if len(sys.argv) > 10:
        regex1 = re.compile(r'.*/')
        regex2 = re.compile(r'\.js$')
        for i in range(1, len(sys.argv)):
            module = sys.argv[i]
            module = regex1.sub('', module)
            module = regex2.sub('', module)
            printblocktypejs(module);
        sys.exit(0)

    if len(sys.argv) <= 3:
        print('Usage:', sys.argv[0], 'filename.sci filename.pickle pass-number')
        sys.exit(1)

    processfile(sys.argv[1], sys.argv[2], int(sys.argv[3]))

# }}}

# vim:fdm=marker:
