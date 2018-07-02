/* autogenerated from "macros/Sinks/WRITEAU_f.sci" */
function WRITEAU_f() {
    WRITEAU_f.prototype.define = function WRITEAU_f() {
        in1 = 1;
        nin = sum(in1);
        frmt = "uc ";
        fname = "/dev/audio";
        this.swap = 0;
        lunit = 0;
        this.N = 2;
        model = scicos_model();
        model.sim = list("writeau",2);
        model.in1 = in1;
        model.evtin = 1;
        model.dstate = [[-1],[lunit],[zeros((nin+1)*this.N,1)]];
        model.ipar = [[length(fname)],[this._str2code[frmt-1]],[this.N],[this.swap],[this._str2code[fname-1]]];
        model.blocktype = "d";
        model.dep_ut = [true,false];
        exprs = [string(this.N),string(this.swap)];
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    WRITEAU_f.prototype.details = function WRITEAU_f() {
        return this.x;
    }
    WRITEAU_f.prototype.get = function WRITEAU_f() {
    }
    WRITEAU_f.prototype.set = function WRITEAU_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        ipar = model.ipar;
        dstate = model.dstate;
        lunit = dstate[2-1];
        while (true) {
            [ok,this.N,this.swap,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","WRITEAU_f")],[" "],["Write \'.au\' sound file on audio device"]],["Buffer Size","Swap Mode (0:No, 1:Yes)"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            nin = 1;
            fname1 = "/dev/audio";
            frmt1 = "uc ";
            if (this.alreadyran&&(this.N!=ipar[5-1])) {
                block_parameter_error(msprintf("You cannot modify \'%s\' when running.","Buffer Size"),"End current simulation first");
                ok = false;
            } else if (this.N<1) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Buffer Size",this.N),"Strictly positive integer expected.");
                ok = false;
            }
            if (this.swap!=0&&this.swap!=1) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Swap Mode",this.swap),msprintf("Must be in the interval %s.","[0, 1]"));
                ok = false;
            }
            if (ok) {
                ipar = [[length(fname1)],[this._str2code[frmt1-1]],[this.N],[this.swap],[this._str2code[fname1-1]]];
                if (prod(size(dstate))!=(nin+1)*this.N+2) {
                    dstate = [[-1],[lunit],[zeros((nin+1)*this.N,1)]];
                }
                model.in1 = 1;
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
