/* autogenerated from "macros/MatrixOp/MATMUL.sci" */
function MATMUL() {
    MATMUL.prototype.define = function MATMUL() {
        model = scicos_model();
        model.sim = list("matmul_m",4);
        model.in1 = [[-1],[-2]];
        model.in2 = [[-2],[-3]];
        model.out = -1;
        model.out2 = -3;
        model.dep_ut = [true,false];
        model.ipar = 1;
        label = [sci2exp(model.ipar)];
        gr_i = [];
        this.x = standard_define([3,2],model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATMUL.prototype.details = function MATMUL() {
        return this.x;
    }
    MATMUL.prototype.get = function MATMUL() {
    }
    MATMUL.prototype.set = function MATMUL() {
        this.x = arg1;
        graphics = this.x.graphics;
        label = graphics.exprs;
        model = this.x.model;
        if (model.ipar==[]) {
            model.ipar = 1;
        }
        if (size(label,"*")==1) {
            label[2-1] = sci2exp(1);
        }
        if (size(label,"*")==2) {
            label[3-1] = sci2exp(1);
        }
        while (true) {
            [ok,this.dtype,this.rule,this.np,exprs] = scicos_getvalue([["Set MATMUL parameter"],["For the Multipication rule:"],["    1= Matrix by Matrix"],["    2= Matrix by Matrix element wise "],["    3= Matrix by Scalar"],["In the third case the second input will be the scalar"]],["Datatype(1=real double 2=Complex 3=int32 ...)","Multiplication rule","Do on Overflow(0=Nothing 1=Saturate 2=Error)"],list("vec",1,"vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            this.rule = int(this.rule);
            if ((this.dtype<1||this.dtype>8)) {
                message("type is not supported");
                ok = false;
            }
            if ((this.rule<1||this.rule>3)) {
                message("Multiplication rule must be only 1,2 or 3");
                ok = false;
            }
            if ((this.dtype==1||this.dtype==2)) {
                this.np = 0;
            }
            TABMIN = [[0],[0],[-(2^31)],[-(2^15)],[-(2^7)],[0],[0],[0]];
            TABMAX = [[0],[0],[(2^31)-1],[(2^15)-1],[(2^7)-1],[(2^32)-1],[(2^16)-1],[(2^8)-1]];
            if (this.rule==2) {
                if (this.np==0) {
                    model.sim = list("matmul2_m",4);
                } else if (this.np==1) {
                    model.sim = list("matmul2_s",4);
                } else {
                    model.sim = list("matmul2_e",4);
                }
            } else if (this.rule==3) {
                if (this.np==0) {
                    model.sim = list("matbyscal",4);
                } else if (this.np==1) {
                    model.sim = list("matbyscal_s",4);
                } else {
                    model.sim = list("matbyscal_e",4);
                }
            } else {
                if ((this.dtype==1)) {
                    model.sim = list("matmul_m",4);
                } else if ((this.dtype==2)) {
                    model.sim = list("matzmul_m",4);
                } else if (this.dtype==3) {
                    if (this.np==0) {
                        model.sim = list("matmul_i32n",4);
                    } else if (this.np==1) {
                        model.sim = list("matmul_i32s",4);
                    } else {
                        model.sim = list("matmul_i32e",4);
                    }
                } else if (this.dtype==4) {
                    if (this.np==0) {
                        model.sim = list("matmul_i16n",4);
                    } else if (this.np==1) {
                        model.sim = list("matmul_i16s",4);
                    } else {
                        model.sim = list("matmul_i16e",4);
                    }
                } else if (this.dtype==5) {
                    if (this.np==0) {
                        model.sim = list("matmul_i8n",4);
                    } else if (this.np==1) {
                        model.sim = list("matmul_i8s",4);
                    } else {
                        model.sim = list("matmul_i8e",4);
                    }
                } else if (this.dtype==6) {
                    if (this.np==0) {
                        model.sim = list("matmul_ui32n",4);
                    } else if (this.np==1) {
                        model.sim = list("matmul_ui32s",4);
                    } else {
                        model.sim = list("matmul_ui32e",4);
                    }
                } else if (this.dtype==7) {
                    if (this.np==0) {
                        model.sim = list("matmul_ui16n",4);
                    } else if (this.np==1) {
                        model.sim = list("matmul_ui16s",4);
                    } else {
                        model.sim = list("matmul_ui16e",4);
                    }
                } else if (this.dtype==8) {
                    if (this.np==0) {
                        model.sim = list("matmul_ui8n",4);
                    } else if (this.np==1) {
                        model.sim = list("matmul_ui8s",4);
                    } else {
                        model.sim = list("matmul_ui8e",4);
                    }
                }
            }
            kmin = TABMIN[this.dtype-1];
            kmax = TABMAX[this.dtype-1];
            it = this.dtype*ones(1,2);
            ot = this.dtype;
            if (this.rule==1) {
                in1 = [[-1,-2],[-2,-3]];
                out = [-1,-3];
            } else if (this.rule==2) {
                in1 = [[-1,-2],[-1,-2]];
                out = [-1,-2];
            } else {
                in1 = [[-1,-2],[1,1]];
                out = [-1,-2];
            }
            [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
            if (ok) {
                label = exprs;
                model.ipar = this.rule;
                model.rpar = [[kmin],[kmax]];
                graphics.exprs = label;
                this.x.graphics = graphics;
                this.x.model = model;
                arg1 = this.x;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
