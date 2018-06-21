/* autogenerated from "macros/Sources/RFILE_f.sci" */
function RFILE_f() {
    RFILE_f.prototype.define = function RFILE_f() {
out=1;
nout=sum(out);
frmt="(7(e10.3,1x))";
fname="foo";
lunit=0;
N=2;
rpar=[];
tmask=0;
outmask=1;
ipar=[[length(fname)],[length(frmt)],[0],[N],[_str2code(fname)],[_str2code(frmt)],[tmask],[outmask]];
dstate=[[1],[1],[lunit],[zeros((nout)*N,1)]];
model=scicos_model();
model.sim="readf";
model.out=nout;
model.evtin=1;
model.dstate=dstate;
model.ipar=[[length(fname)],[length(frmt)],[0],[N],[_str2code(fname)],[_str2code(frmt)],[tmask],[outmask]];
model.blocktype="d";
model.dep_ut=[false,false];
exprs=[[sci2exp([])],[sci2exp(outmask)],[fname],[frmt],[string(N)],[sci2exp(out)]];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
    }
    RFILE_f.prototype.details = function RFILE_f() {
    }
    RFILE_f.prototype.get = function RFILE_f() {
    }
    RFILE_f.prototype.set = function RFILE_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
dstate=model.dstate;
ipar=model.ipar;
ievt=ipar(3);
N=ipar(4);
imask=5+ipar(1)+ipar(2);
tmask=ipar(imask);
lunit=dstate(3);
fname=exprs[3-1];
frmt=exprs[4-1];
if (size(exprs,"*")>5) {
exprs[6-1]=[];
}
while (true) {
[ok,tmask1,outmask,fname1,frmt1,N,exprs]=scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"RFILE_f")],[" "],[gettext("Read from an input file")],[" "],[gettext("Read is done on:")],[gettext("&nbsp; - A binary file if no format given")],[gettext("&nbsp; - A formatted text file if a  format (fortran type) is given")]],[[gettext("Time Record Selection")],[gettext("Outputs Record Selection")],[gettext("Input File Name")],[gettext("Input Format")],[gettext("Buffer Size")]],list("vec",-1,"vec",-1,"str",1,"str",1,"vec",1),exprs);
if (!ok) {
break;
}
fname1=pathconvert(stripblanks(fname1),false,true);
frmt1=stripblanks(frmt1);
nout=size(outmask,"*");
if (prod(size(tmask1))>1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %s."),gettext("Time Record Selection"),strcat(string(tmask1.slice())," ")),gettext("Empty matrix or scalar expected."));
} else if (tmask1!=[]&&tmask1<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d"),gettext("Time Record Selection"),tmask1),gettext("Strictly positive integer expected."));
} else if (lunit>0&&min(length(frmt),1)!=min(length(frmt1),1)) {
block_parameter_error([gettext("Simulation running !!! You cannot switch <br />between formatted and unformatted")],gettext("End current simulation first."));
} else if (lunit>0&&fname1!=fname) {
block_parameter_error(gettext("Simulation running !!! You cannot modify \'Input File Name\'"),gettext("End current simulation first."));
} else if (lunit>0&&size(tmask1)!=size(tmask)) {
block_parameter_error(gettext("Simulation running !!! You cannot modify \'Time Record Selection\'"),gettext("End current simulation first."));
} else if (fname1=="") {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %s"),gettext("Input File Name"),fname1),gettext("You must provide a filename."));
} else if (frmt1!=""&&(part(frmt1,1)!="("||part(frmt1,length(frmt1))!=")")) {
block_parameter_error(msprintf(gettext("Wrong format for \'%s\' parameter: %s."),gettext("Input Format"),frmt1),gettext("You must enclose the format\'s string between parentheses."));
} else if (N<2) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Buffer Size"),N),gettext("Buffer size must be at least 2."));
} else if (nout==0) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Outputs Record Selection"),nout),gettext("You must read at least one field in record."));
} else if (min(outmask)<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %s"),gettext("Outputs Record Selection"),strcat(string(outmask.slice())," ")),gettext("Strictly positive indexes expected."));
} else {
if (tmask1==[]) {
ievt=0;
cout=[];
tmask1=0;
} else {
ievt=1;
cout=1;
}
[model,graphics,ok]=check_io(model,graphics,[],nout,1,cout);
if (ok) {
if (ievt==0) {
model.firing=[];
} else {
model.firing=0;
}
ipar=[[length(fname1)],[length(frmt1)],[ievt],[N],[_str2code(fname1)],[_str2code(frmt1)],[tmask1],[outmask.slice()]];
if (prod(size(dstate))!=(nout+ievt)*N+3) {
dstate=[[-1],[-1],[lunit],[zeros((nout+ievt)*N,1)]];
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
