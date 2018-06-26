/* autogenerated from "macros/Linear/DLSS_f.sci" */
function DLSS_f() {
    DLSS_f.prototype.define = function DLSS_f() {
        this.x0 = 0;
        this.A = -1;
        this.B = 1;
        this.C = 1;
        this.D = 0;
        model = scicos_model();
        model.sim = list("dsslti",1);
        model.in1 = 1;
        model.out = 1;
        model.evtin = 1;
        model.dstate = this.x0.slice();
        model.rpar = [[this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]];
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = [[strcat(sci2exp(this.A))],[strcat(sci2exp(this.B))],[strcat(sci2exp(this.C))],[strcat(sci2exp(this.D))],[strcat(sci2exp(this.x0))]];
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DLSS_f.prototype.details = function DLSS_f() {
        return this.x;
    }
    DLSS_f.prototype.get = function DLSS_f() {
    }
    DLSS_f.prototype.set = function DLSS_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        if (size(exprs,"*")==7) {
            exprs = exprs[[1:4,7]-1];
        }
        model = arg1.model;
        while (true) {
            [ok,this.A,this.B,this.C,this.D,this.x0,exprs] = scicos_getvalue("Set discrete linear system parameters",[["A matrix"],["B matrix"],["C matrix"],["D matrix"],["Initial state"]],list("mat",[-1,-1],"mat",["size(%1,2)","-1"],"mat",["-1","size(%1,2)"],"mat",[-1,-1],"vec","size(%1,2)"),exprs);
            if (!ok) {
                break;
            }
            out = size(this.C,1);
            if (out==0) {
                out = [];
            }
            in1 = size(this.B,2);
            if (in1==0) {
                in1 = [];
            }
            [ms,ns] = size(this.A);
            if (ms!=ns) {
                message("A matrix must be square");
            } else {
                [model,graphics,ok] = check_io(model,graphics,in1,out,1,[]);
                if (ok) {
                    graphics.exprs = exprs;
                    rpar = [[this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]];
                    if (this.D!=[]) {
                        if (norm(this.D,1)!=0) {
                            mmm = [true,false];
                        } else {
                            mmm = [false,false];
                        }
                        if (or(model.dep_ut!=mmm)) {
                            model.dep_ut = mmm;
                        }
                    } else {
                        model.dep_ut = [false,false];
                    }
                    model.dstate = this.x0.slice();
                    model.rpar = rpar;
                    this.x.graphics = graphics;
                    this.x.model = model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
