#!/usr/bin/python

from __future__ import print_function

import sys
import ply.yacc as yacc

from sci2jslex import tokens

precedence = (
    ('left', 'LOGICAL'),
    ('left', 'COMPARISON'),
    ('left', 'ADDITION'),
    ('left', 'MULTIPLICATION'),
    ('right', 'NOT'),
    ('right', 'UNARYADDITION'),
)

start = 'functionblock'

jobblocks = {}

# define functionblock

def p_functionblock_function_statementblock_endfunction(p):
    'functionblock : emptystatementblock FUNCTION lterm ASSIGNMENT VAR OPENBRACKET JOB COMMA VAR COMMA VAR CLOSEBRACKET EOL statementblock ENDFUNCTION emptystatementblock'
    global jobblocks
    f = str(p[5])
    p[0] = ('function ' + f + '() {\n' +
        f + '.prototype.get = function ' + f + '() {\n' +
        (jobblocks['"get"'] if '"get"' in jobblocks else '') +
        '}\n' +
        f + '.prototype.set = function ' + f + '() {\n' +
        (jobblocks['"set"'] if '"set"' in jobblocks else '') +
        '}\n' +
        f + '.prototype.define = function ' + f + '() {\n' +
        (jobblocks['"define"'] if '"define"' in jobblocks else '') +
        '}\n' +
        f + '.prototype.details = function ' + f + '() {\n' +
        (jobblocks['"details"'] if '"details"' in jobblocks else '') +
        '}\n' +
        '}')


# end define functionblock

# define statementblock

def p_statementblock_statementblock_statement(p):
    'statementblock : statementblock statement'
    p[0] = str(p[1]) + str(p[2])

def p_statementblock_statement(p):
    'statementblock : statement'
    p[0] = str(p[1])

def p_emptystatementblock_eol(p):
    '''emptystatementblock : emptystatementblock EOL
                           | EOL'''
    p[0] = str(p[1])

# end define statementblock

# define statement

def p_statement_assignment(p):
    '''statement : assignment EOL
                 | assignment SEMICOLON
                 | function EOL'''
    p[0] = str(p[1]) + ';\n'

def p_statement_resume(p):
    'statement : lterm ASSIGNMENT RESUME OPENBRACKET expression CLOSEBRACKET EOL'
    p[0] = p[1] + p[2] + p[3] + p[4] + p[5] + p[6] + '\n'

def p_statement_where(p):
    'statement : lterm ASSIGNMENT WHERE OPENBRACKET CLOSEBRACKET EOL'
    p[0] = p[1] + p[2] + p[3] + p[4] + p[5] + '\n'

def p_statement_forstatement_forstatementblock(p):
    'statement : forstatementblock END EOL'
    p[0] = p[1] + '}\n'

def p_statement_selectstatement_casestatementblock(p):
    'statement : selectstatement casestatementblock END EOL'
    p[0] = p[1] + p[2] + '}\n'

def p_statement_selectjobstatement_casejobstatementblock(p):
    'statement : selectjobstatement casejobstatementblock END EOL'
    p[0] = ''

def p_statement_whilestatement_whilestatementblock(p):
    'statement : whilestatementblock END EOL'
    p[0] = p[1] + '}\n'

def p_statement_whilestatement_whilestatementblock_elsestatementblock(p):
    'statement : whilestatementblock elsestatementblock END EOL'
    p[0] = p[1] + p[2] + p[3] + '}\n'

def p_statement_ifstatement_ifstatementblock(p):
    'statement : ifstatementblock END EOL'
    p[0] = p[1] + '}\n'

def p_statement_ifstatement_ifstatementblock_elsestatementblock(p):
    'statement : ifstatementblock elsestatementblock END EOL'
    p[0] = p[1] + p[2] + '}\n'

def p_statement_ifstatement_ifstatementblock_elseifstatementblock(p):
    'statement : ifstatementblock elseifstatementblock END EOL'
    p[0] = p[1] + p[2] + '}\n'

def p_statement_ifstatement_ifstatementblock_elseifstatementblock_elsestatementblock(p):
    'statement : ifstatementblock elseifstatementblock elsestatementblock END EOL'
    p[0] = p[1] + p[2] + p[3] + '}\n'

def p_statement_break(p):
    'statement : BREAK EOL'
    p[0] = str(p[1]) + '\n'

def p_statement_eol(p):
    'statement : EOL'
    p[0] = ''

# end define statement

# define for, case, while, if, elseif, else statement block

def p_forstatementblock_forstatement(p):
    'forstatementblock : forstatement statementblock'
    p[0] = p[1] + p[2]

def p_casestatementblock_casestatementblock_casestatement(p):
    'casestatementblock : casestatementblock casestatement statementblock'
    p[0] = p[1] + p[2] + p[3]

def p_casestatementblock_casestatement(p):
    'casestatementblock : casestatement statementblock'
    p[0] = p[1] + p[2]

def p_casejobstatementblock_casejobstatementblock_casejobstatement(p):
    'casejobstatementblock : casejobstatementblock casejobstatement statementblock'
    global jobblocks
    jobblocks[p[2]] = p[3]
    p[0] = ''

def p_casejobstatementblock_casejobstatement(p):
    'casejobstatementblock : casejobstatement statementblock'
    global jobblocks
    jobblocks[p[1]] = p[2]
    p[0] = ''

def p_whilestatementblock_whilestatement(p):
    'whilestatementblock : whilestatement statementblock'
    p[0] = p[1] + p[2]

def p_ifstatementblock_ifstatement(p):
    'ifstatementblock : ifstatement statementblock'
    p[0] = p[1] + p[2]

def p_elseifstatementblock_elseifstatementblock_elseifstatement(p):
    'elseifstatementblock : elseifstatementblock elseifstatement statementblock'
    p[0] = p[1] + p[2] + p[3]

def p_elseifstatementblock_elseifstatement(p):
    'elseifstatementblock : elseifstatement statementblock'
    p[0] = p[1] + p[2]

def p_elsestatementblock_elsestatement(p):
    'elsestatementblock : elsestatement statementblock'
    p[0] = p[1] + p[2]

# end define for, case, if, elseif, else statement block

# define for, select, case, while, if, elseif, else

def p_forstatement_for_start_step_end(p):
    '''forstatement : FOR VAR ASSIGNMENT expression COLON expression COLON expression EOL
                    | FOR VAR ASSIGNMENT expression COLON expression COLON expression DO EOL'''
    var = p[2]
    start = p[4]
    step = int(p[6])
    end = p[8]
    if step > 0:
        endop = '<='
        stepop = '+='
    else:
        endop = '>='
        stepop = '-='
    p[0] = p[1] + '(' + var + p[3] + start + ';' + var + endop + end + ';' + var + stepop + str(step) + ') {\n'

def p_forstatement_for_start_end(p):
    '''forstatement : FOR VAR ASSIGNMENT expression COLON expression EOL
                    | FOR VAR ASSIGNMENT expression COLON expression DO EOL'''
    var = p[2]
    start = p[4]
    step = 1
    end = p[6]
    endop = '<='
    stepop = '+='
    p[0] = p[1] + '(' + var + p[3] + start + ';' + var + endop + end + ';' + var + stepop + str(step) + ') {\n'

def p_forstatement_for_list(p):
    '''forstatement : FOR VAR ASSIGNMENT VAR EOL
                    | FOR VAR ASSIGNMENT VAR DO EOL'''
    var = p[2]
    p[0] = p[1] + '(' + var + ' in ' + p[4] + ') {\n'

def p_selectstatement_select(p):
    'selectstatement : SELECT expression emptystatementblock'
    p[0] = 'switch (' + p[2] + ') {\n'

def p_selectjobstatement_select(p):
    'selectjobstatement : SELECT JOB emptystatementblock'
    p[0] = ''

def p_casestatement_case(p):
    '''casestatement : CASE expression THEN EOL
                       | CASE expression EOL
                       | CASE expression THEN COMMA'''
    p[0] = 'case ' + p[2] + ':\n'

def p_casejobstatement_case(p):
    '''casejobstatement : CASE expression THEN EOL
                       | CASE expression EOL
                       | CASE expression THEN COMMA'''
    p[0] = p[2]

def p_whilestatement_while_do(p):
    '''whilestatement : WHILE expression DO EOL
                      | WHILE expression THEN EOL
                      | WHILE expression EOL'''
    p[0] = 'while (' + p[2] + ') {\n'

def p_ifstatement_if_then(p):
    '''ifstatement : IF expression THEN EOL
                   | IF expression EOL'''
    p[0] = 'if (' + p[2] + ') {\n'

def p_elseifstatement_elseif_then(p):
    '''elseifstatement : ELSEIF expression THEN EOL'''
    p[0] = '} else if (' + p[2] + ') {\n'

def p_elsestatement_else(p):
    '''elsestatement : ELSE EOL'''
    p[0] = '} else {\n'

# end define for, select, case, while, if, elseif, else

# define assignment

def p_assignment_expression(p):
    'assignment : lterm ASSIGNMENT expression'
    p[0] = str(p[1]) + str(p[2]) + str(p[3])

# end define assignment

# define ltermarraylist

def p_ltermarraylist_ltermarraylist_comma_var(p):
    '''ltermarraylist : ltermarraylist COMMA VAR
                      | ltermarraylist SPACE VAR'''
    p[0] = p[1] + ',' + p[3]

def p_ltermarraylist_ltermarraylist_comma_in(p):
    '''ltermarraylist : ltermarraylist COMMA IN
                      | ltermarraylist SPACE IN'''
    p[0] = p[1] + ',' + p[3] + '1'

def p_ltermarraylist_var(p):
    'ltermarraylist : VAR'
    p[0] = p[1]

def p_ltermarraylist_in(p):
    'ltermarraylist : IN'
    p[0] = p[1] + '1'

# end define ltermarraylist

# define termarraylist

def p_termarraylist_termarraylist_semicolon_expression(p):
    '''termarraylist : termarraylist SEMICOLON expression
                     | termarraylist COMMA expression
                     | termarraylist SPACE expression'''
    p[0] = str(p[1]) + ',' + str(p[3])

def p_termarraylist_expression(p):
    'termarraylist : expression'
    p[0] = str(p[1])

# end define termarraylist

# define list

def p_list_list_expression(p):
    '''list : list COMMA expression
            | expression COMMA expression'''
    p[0] = str(p[1]) + ',' + str(p[3])

# end define list

# define expression

# (2+3)
def p_expression_expression(p):
    'expression : OPENBRACKET expression CLOSEBRACKET'
    p[0] = str(p[1]) + str(p[2]) + str(p[3])

# [2 3 4]
# [2,3,4]
# [2+1;3-1;4-1]
def p_expression_termarraylist(p):
    '''expression : OPENSQBRACKET termarraylist CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist SEMICOLON CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist COMMA CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist SPACE CLOSESQBRACKET'''
    p[0] = '[' + str(p[2]) + ']'

# []
def p_expression_empty(p):
    'expression : OPENSQBRACKET CLOSESQBRACKET'
    p[0] = str(p[1]) + str(p[2])

def p_expression_term_transpose(p):
    'expression : term TRANSPOSE'
    p[0] = 'transpose(' + str(p[1]) + ')'

def p_expression_expression_multiplication_expression(p):
    'expression : expression MULTIPLICATION expression'
    if p[2] == '**':
        op = '^'
    elif p[2] == '\\':
        op = '\\'
    else:
        op = p[2]
    p[0] = str(p[1]) + op + str(p[3])

def p_expression_expression_addition_expression(p):
    'expression : expression ADDITION expression'
    p[0] = str(p[1]) + str(p[2]) + str(p[3])

def p_expression_expression_comparison_expression(p):
    'expression : expression COMPARISON expression'
    o = p[2]
    if (o == '<>' or o == '~='):
        o = '!='
    p[0] = str(p[1]) + o + str(p[3])

def p_expression_expression_logical_expression(p):
    'expression : expression LOGICAL expression'
    o = p[2]
    if (o == '&'):
        o = '&&'
    elif (o == '|'):
        o = '||'
    p[0] = str(p[1]) + o + str(p[3])

def p_expression_addition_term(p):
    'expression : ADDITION expression %prec UNARYADDITION'
    p[0] = str(p[1]) + str(p[2])

def p_expression_not_expression(p):
    'expression : NOT expression'
    p[0] = '!' + str(p[2])

def p_expression_term(p):
    'expression : term'
    p[0] = str(p[1])

# end define expression

# define function

# C('function parameter')
def p_function_function_parameter(p):
    '''function : ltermvar OPENBRACKET expression CLOSEBRACKET
                | SCICOS_DEBUG OPENBRACKET expression CLOSEBRACKET'''
    p[0] = str(p[1]) + str(p[2]) + str(p[3]) + str(p[4])

# A(2,3)
def p_function_function_parameters(p):
    'function : ltermvar OPENBRACKET list CLOSEBRACKET'
    p[0] = str(p[1]) + str(p[2]) + str(p[3]) + str(p[4])

# A()
def p_function_function(p):
    'function : ltermvar OPENBRACKET CLOSEBRACKET'
    p[0] = str(p[1]) + str(p[2]) + str(p[3])

# end define function

# define lterm

# B(2:$-1)
def p_lterm_slice(p):
    'lterm : ltermvar OPENBRACKET expression COLON expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = p[1] + '.slice(' + str(p[3]) + '-1,' + str(p[5]) + ')'

# B(2)
def p_lterm_index(p):
    'lterm : ltermvar OPENBRACKET expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = str(p[1]) + '[' + str(p[3]) + '-1]'

# [A,B,C]
def p_lterm_ltermarraylist(p):
    'lterm : OPENSQBRACKET ltermarraylist CLOSESQBRACKET'
    p[0] = str(p[1]) + str(p[2]) + str(p[3])

def p_lterm_prevar(p):
    'lterm : PREVAR'
    p[0] = str(p[1])

def p_lterm_ltermvar(p):
    'lterm : ltermvar'
    p[0] = str(p[1])

def p_ltermvar_ltermvar_dot_var(p):
    'ltermvar : ltermvar DOT VAR'
    p[0] = p[1] + p[2] + p[3]

def p_ltermvar_ltermvar_dot_in(p):
    'ltermvar : ltermvar DOT IN'
    p[0] = p[1] + p[2] + p[3] + '1'

def p_ltermvar_var(p):
    'ltermvar : VAR'
    p[0] = p[1]

# in
def p_ltermvar_in(p):
    'ltermvar : IN'
    p[0] = p[1] + '1'

# end define lterm

# define term

# B(2:$-1)
def p_term_slice(p):
    'term : termvar OPENBRACKET expression COLON expression CLOSEBRACKET'
    p[0] = p[1] + '.slice(' + str(p[3]) + '-1,' + str(p[5]) + ')'

# B(:$-1)
def p_term_left_slice(p):
    'term : termvar OPENBRACKET COLON expression CLOSEBRACKET'
    p[0] = p[1] + '.slice(' + str(p[3]) + '-1)'

# B(2:)
def p_term_right_slice(p):
    'term : termvar OPENBRACKET expression COLON CLOSEBRACKET'
    p[0] = str(p[1]) + '.slice(0,' + str(p[4]) + ')'

# B(:)
def p_term_full_slice(p):
    'term : termvar OPENBRACKET COLON CLOSEBRACKET'
    p[0] = p[1] + '.slice()'

# B($-2)
# C('function parameter')
def p_term_index(p):
    'term : termvar OPENBRACKET expression CLOSEBRACKET'
    if isarray(p[1]):
        p[0] = p[1] + '[' + str(p[3]) + '-1]'
    else:
        p[0] = p[1] + '(' + str(p[3]) + ')'

# A(2,3)
def p_term_part_parameters(p):
    'term : PART OPENBRACKET expression COMMA expression COLON expression CLOSEBRACKET'
    p[0] = p[1] + p[2] + p[3] + ',' + p[5] + ',' + p[7] + p[8]

# A(2,3)
def p_term_function_parameters(p):
    '''term : termvar OPENBRACKET list CLOSEBRACKET
            | SCICOS_DIAGRAM OPENBRACKET list CLOSEBRACKET
            | SCICOS_GETVALUE OPENBRACKET list CLOSEBRACKET
            | SCICOS_GRAPHICS OPENBRACKET list CLOSEBRACKET
            | SCICOS_LINK OPENBRACKET list CLOSEBRACKET'''
    p[0] = str(p[1]) + '(' + str(p[3]) + ')'

# A()
def p_term_function(p):
    '''term : termvar OPENBRACKET CLOSEBRACKET
            | SCICOS_DEBUG OPENBRACKET CLOSEBRACKET
            | SCICOS_DIAGRAM OPENBRACKET CLOSEBRACKET
            | SCICOS_GRAPHICS OPENBRACKET CLOSEBRACKET
            | SCICOS_LINK OPENBRACKET CLOSEBRACKET
            | SCICOS_MODEL OPENBRACKET CLOSEBRACKET'''
    p[0] = str(p[1]) + '()'

# $
def p_term_lastindex(p):
    'term : LASTINDEX'
    p[0] = str(p[1])

# %f
def p_term_prevar(p):
    'term : PREVAR'
    p[0] = str(p[1])

# %f
def p_term_prevar_boolean(p):
    'term : PREVAR_BOOLEAN'
    if p[1] == '%t':
        p[0] = 'true'
    elif p[1] == '%f':
        p[0] == 'false'

# 1+2*%i
def p_term_prevar_complex1(p):
    'expression : expression ADDITION expression MULTIPLICATION PREVAR_COMPLEX'
    if p[2] == '-':
        imag = str(p[2]) + str(p[3])
    else:
        imag = str(p[3])
    p[0] = 'math.complex(' + p[1] + ',' + imag + ')'

# 1+2*%i
def p_term_prevar_complex2(p):
    'expression : expression ADDITION PREVAR_COMPLEX MULTIPLICATION expression'
    if p[2] == '-':
        imag = str(p[2]) + str(p[5])
    else:
        imag = str(p[5])
    p[0] = 'math.complex(' + p[1] + ',' + imag + ')'

# %e %pi
def p_term_prevar_float(p):
    'term : PREVAR_FLOAT'
    if p[1] == '%e':
        flt = 'math.E'
    elif p[1] == '%pi':
        flt = 'math.PI'
    else:
        flt = p[1]
    p[0] = flt

def p_term_termvar(p):
    'term : termvar'
    p[0] = str(p[1])

# A.B
def p_termvar_termvar_dot_var(p):
    'termvar : termvar DOT VAR'
    p[0] = p[1] + p[2] + p[3]

def p_termvar_termvar_dot_in(p):
    'termvar : termvar DOT IN'
    p[0] = p[1] + p[2] + p[3] + '1'

# A
def p_termvar_var(p):
    'termvar : VAR'
    p[0] = p[1]

# in
def p_termvar_in(p):
    'termvar : IN'
    p[0] = p[1] + '1'

# 3.4
# 'abc'
# "abc"
def p_term_constant(p):
    '''term : NUMBER
            | QSTRING
            | DQSTRING'''
    p[0] = str(p[1])

# end define term

def p_error(p):
    print("Syntax error in input", p)

arraylist = set()

def addtoarray(s):
    global arraylist
    arraylist.add(s)

def isarray(s):
    global arraylist
    return s in arraylist

def isfunction(s):
    return False

if __name__ == '__main__':
    if len(sys.argv) <= 1:
        print('Usage:', sys.argv[0], 'filename')
        sys.exit(1)

    filename = sys.argv[1]

    data = ''
    with open(filename, 'r') as infile:
        for line in infile:
            data += line

        parser = yacc.yacc()
        result = parser.parse(data, debug=True)

        print('/* autogenerated from "', filename, '" */', sep='')
        print(result)
