/* autogenerated from "macros/Sinks/WRITEC_f.sci" */
function WRITEC_f() {
    WRITEC_f.prototype.define = function WRITEC_f() {
        this.in1 = 1;
        nin = sum(this.in1);
        frmt = "c  ";
        fname = "foo";
        this.swap = 0;
        lunit = 0;
        this.N = 2;
        model = scicos_model();
        model.sim = list("writec",2);
        model.in1 = this.in1;
        model.evtin = 1;
        model.dstate = [[-1],[lunit],[zeros((nin+1)*this.N,1)]];
        model.ipar = [[length(fname)],[this._str2code[frmt-1]],[this.N],[this.swap],[this._str2code[fname-1]]];
        model.blocktype = "d";
        model.dep_ut = [true,false];
        exprs = [[sci2exp(this.in1)],[fname],[frmt],[string(this.N),string(this.swap)]];
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    WRITEC_f.prototype.details = function WRITEC_f() {
        return this.x;
    }
    WRITEC_f.prototype.get = function WRITEC_f() {
    }
    WRITEC_f.prototype.set = function WRITEC_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        ipar = model.ipar;
        dstate = model.dstate;
        lunit = dstate[2-1];
        fname = exprs[2-1];
        frmt = exprs[3-1];
        while (true) {
            [ok,this.in1,this.fname1,this.frmt1,this.N,this.swap,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","WRITEC_f")],[" "],["Write to C binary file"]],["Input Size","Output File Name","Output Format","Buffer Size","Swap Mode (0:No, 1:Yes)"],list("vec",1,"str",1,"str",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.in1 = int(this.in1);
            nin = this.in1;
            this.fname1 = pathconvert(stripblanks(this.fname1),false,true);
            this.frmt1 = stripblanks(this.frmt1);
            fmts = ["s","l","d","f","c","us","ul","uc","ull","uls","ubl","ubs","dl","fl","ll","sl","db","fb","lb","sb"];
            if (and(this.frmt1!=fmts)) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %s.","Input Format",this.frmt1),"Valid formats are: "+strcat(fmts,", "));
                ok = false;
            } else if (this.alreadyran&&this.fname1!=fname) {
                block_parameter_error(msprintf("You cannot modify \'%s\' when running","Input Format"),"End current simulation first.");
                ok = false;
            } else if (this.alreadyran&&this.N!=ipar[5-1]) {
                block_parameter_error(msprintf("You cannot modify \'Buffer Size\' when running.","Buffer Size"),"End current simulation first");
                ok = false;
            } else if (this.fname1=="") {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter.","Output File Name"),"You must provide a filename.");
            } else if (fileparts(this.fname1)!="") {
                [pa,fn,ex] = fileparts(this.fname1);
                if (!this.isdir[pa-1]) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter.","Output File Name"),msprintf("Directory \'%s\' does not exist",pa));
                    ok = false;
                }
            } else if (this.N<1) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Buffer Size",this.N),"Strictly positive integer expected.");
                ok = false;
            } else if (this.in1<=0) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Input Size",this.in1),"Strictly positive integer expected.");
                ok = false;
            } else if (this.swap!=0&&this.swap!=1) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Swap Mode",this.swap),msprintf("Must be in the interval %s.","[0, 1]"));
                ok = false;
            }
            this.frmt1 = part(this.frmt1,1,3);
            if (ok) {
                ipar = [[length(this.fname1)],[this._str2code[this.frmt1-1]],[this.N],[this.swap],[this._str2code[this.fname1-1]]];
                if (prod(size(dstate))!=(nin+1)*this.N+2) {
                    dstate = [[-1],[lunit],[zeros((nin+1)*this.N,1)]];
                }
                model.in1 = nin;
                model.dstate = dstate;
                model.ipar = ipar;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
