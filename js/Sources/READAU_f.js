/* autogenerated from "macros/Sources/READAU_f.sci" */
function READAU_f() {
    READAU_f.prototype.define = function READAU_f() {
frmt="uc ";
fname="test.au";
lunit=0;
N=20;
M=1;
tmask=[];
swap=0;
offset=1;
outmask=1;
ievt=0;
nout=size(outmask,"*");
model=scicos_model();
model.sim=list("readau",2);
model.out=nout;
model.evtin=1;
model.dstate=[[1],[1],[lunit],[zeros(N*M,1)]];
model.ipar=[[length(fname)],[_str2code[frmt-1]],[ievt],[N],[M],[swap],[offset],[_str2code[fname-1]],[tmask],[outmask]];
model.blocktype="d";
model.dep_ut=[false,false];
exprs=[[fname],[string(N)],[string(swap)]];
gr_i=[];
x=standard_define([5,2],model,exprs,gr_i);
    }
    READAU_f.prototype.details = function READAU_f() {
    }
    READAU_f.prototype.get = function READAU_f() {
    }
    READAU_f.prototype.set = function READAU_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
out=model.out;
dstate=model.dstate;
ipar=model.ipar;
imask=9+ipar[1-1];
tmask=ipar[imask-1];
lunit=dstate[3-1];
fname=exprs[1-1];
while (true) {
[ok,fname1,N,swap,exprs]=scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"READAU_f")],[" "],[gettext("(Read Audio File)")],[" "],[gettext("Read is done on a binary \'.au\' file")]],[[gettext("Input File Name")],[gettext("Buffer size")],[gettext("Swap Mode (0:No, 1:Yes)")]],list("str",1,"vec",1,"vec",1),exprs);
tmask1=[];
outmask=1;
frmt1="uc";
M=1;
offset=1;
if (!ok) {
break;
}
fname1=stripblanks(fname1);
frmt1=stripblanks(frmt1);
if (alreadyran&&fname1!=fname) {
block_parameter_error(gettext("Simulation running !!! You cannot modify Input file name"),gettext("End current simulation first."));
} else if (fname1=="") {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter."),gettext("Input File Name")),gettext("You must provide a filename."));
} else if (N<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Buffer size"),N),msprintf(gettext("Must be greater than %d."),1));
} else if (alreadyran&&(N!=ipar[6-1])) {
block_parameter_error(msprintf(gettext("You cannot modify \'%s\' when running."),gettext("Buffer Size")),gettext("End current simulation first."));
} else if (swap!=0&&swap!=1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Swap Mode"),swap),msprintf(gettext("Must be in the interval %s."),"[0, 1]"));
} else {
[model,graphics,ok]=check_io(model,graphics,[],1,1,[]);
frmt1=part(frmt1,1,3);
if (ok) {
ipar=[[length(fname1)],[_str2code[frmt1-1]],[0],[N],[M],[swap],[offset,_str2code[fname1-1]],[tmask1,outmask.slice()]];
if (prod[size(dstate)-1]!=(N*M)+3) {
dstate=[[-1],[-1],[lunit],[zeros(N*M,1)]];
}
model.dstate=dstate;
model.ipar=ipar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
}
    }
}
