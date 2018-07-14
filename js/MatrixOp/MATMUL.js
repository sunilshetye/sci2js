/* autogenerated from "macros/MatrixOp/MATMUL.sci" */
function MATMUL() {
    MATMUL.prototype.define = function MATMUL() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["matmul_m"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1],[-2]);
        this.model.in2 = new ScilabDouble([-2],[-3]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-3]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.model.ipar = new ScilabDouble([1]);
        var label = [sci2exp(this.model.ipar)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATMUL\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,label,this.gr_i);
        return new BasicBlock(this.x);
    }
    MATMUL.prototype.details = function MATMUL() {
        return this.x;
    }
    MATMUL.prototype.get = function MATMUL() {
        var options = {
            dtype:["Datatype(1=real double 2=Complex 3=int32 ...)",this.dtype],
            rule:["Multiplication rule",this.rule],
            np:["Do on Overflow(0=Nothing 1=Saturate 2=Error)",this.np],
        }
        return options;
    }
    MATMUL.prototype.set = function MATMUL() {
        this.dtype = arguments[0]["dtype"]
        this.rule = parseFloat(arguments[0]["rule"])
        this.np = parseFloat(arguments[0]["np"])
        this.exprs = arguments[0]["exprs"]
        this.graphics = this.x.graphics;
        var label = this.graphics.exprs;
        this.model = this.x.model;
        if (this.model.ipar==[]) {
            this.model.ipar = new ScilabDouble([1]);
        }
        if (size(label,"*")==1) {
            label[2-1] = sci2exp(1);
        }
        if (size(label,"*")==2) {
            label[3-1] = sci2exp(1);
        }
        while (true) {
            [ok,this.dtype,this.rule,this.np,this.exprs] = scicos_getvalue([["Set MATMUL parameter"],["For the Multipication rule:"],["    1= Matrix by Matrix"],["    2= Matrix by Matrix element wise "],["    3= Matrix by Scalar"],["In the third case the second input will be the scalar"]],["Datatype(1=real double 2=Complex 3=int32 ...)","Multiplication rule","Do on Overflow(0=Nothing 1=Saturate 2=Error)"],list("vec",1,"vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            this.rule = int(this.rule);
            if ((this.dtype<1||this.dtype>8)) {
                message("type is not supported");
                var ok = false;
            }
            if ((this.rule<1||this.rule>3)) {
                message("Multiplication rule must be only 1,2 or 3");
                var ok = false;
            }
            if ((this.dtype==1||this.dtype==2)) {
                this.np = 0;
            }
            var TABMIN = [[0],[0],[-(2^31)],[-(2^15)],[-(2^7)],[0],[0],[0]];
            var TABMAX = [[0],[0],[(2^31)-1],[(2^15)-1],[(2^7)-1],[(2^32)-1],[(2^16)-1],[(2^8)-1]];
            if (this.rule==2) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matmul2_m"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matmul2_s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matmul2_e"]), new ScilabDouble([4]));
                }
            } else if (this.rule==3) {
                if (this.np==0) {
                    this.model.sim = list(new ScilabString(["matbyscal"]), new ScilabDouble([4]));
                } else if (this.np==1) {
                    this.model.sim = list(new ScilabString(["matbyscal_s"]), new ScilabDouble([4]));
                } else {
                    this.model.sim = list(new ScilabString(["matbyscal_e"]), new ScilabDouble([4]));
                }
            } else {
                if ((this.dtype==1)) {
                    this.model.sim = list(new ScilabString(["matmul_m"]), new ScilabDouble([4]));
                } else if ((this.dtype==2)) {
                    this.model.sim = list(new ScilabString(["matzmul_m"]), new ScilabDouble([4]));
                } else if (this.dtype==3) {
                    if (this.np==0) {
                        this.model.sim = list(new ScilabString(["matmul_i32n"]), new ScilabDouble([4]));
                    } else if (this.np==1) {
                        this.model.sim = list(new ScilabString(["matmul_i32s"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["matmul_i32e"]), new ScilabDouble([4]));
                    }
                } else if (this.dtype==4) {
                    if (this.np==0) {
                        this.model.sim = list(new ScilabString(["matmul_i16n"]), new ScilabDouble([4]));
                    } else if (this.np==1) {
                        this.model.sim = list(new ScilabString(["matmul_i16s"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["matmul_i16e"]), new ScilabDouble([4]));
                    }
                } else if (this.dtype==5) {
                    if (this.np==0) {
                        this.model.sim = list(new ScilabString(["matmul_i8n"]), new ScilabDouble([4]));
                    } else if (this.np==1) {
                        this.model.sim = list(new ScilabString(["matmul_i8s"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["matmul_i8e"]), new ScilabDouble([4]));
                    }
                } else if (this.dtype==6) {
                    if (this.np==0) {
                        this.model.sim = list(new ScilabString(["matmul_ui32n"]), new ScilabDouble([4]));
                    } else if (this.np==1) {
                        this.model.sim = list(new ScilabString(["matmul_ui32s"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["matmul_ui32e"]), new ScilabDouble([4]));
                    }
                } else if (this.dtype==7) {
                    if (this.np==0) {
                        this.model.sim = list(new ScilabString(["matmul_ui16n"]), new ScilabDouble([4]));
                    } else if (this.np==1) {
                        this.model.sim = list(new ScilabString(["matmul_ui16s"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["matmul_ui16e"]), new ScilabDouble([4]));
                    }
                } else if (this.dtype==8) {
                    if (this.np==0) {
                        this.model.sim = list(new ScilabString(["matmul_ui8n"]), new ScilabDouble([4]));
                    } else if (this.np==1) {
                        this.model.sim = list(new ScilabString(["matmul_ui8s"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["matmul_ui8e"]), new ScilabDouble([4]));
                    }
                }
            }
            var kmin = TABMIN[this.dtype-1];
            var kmax = TABMAX[this.dtype-1];
            var it = this.dtype*ones(1,2);
            var ot = this.dtype;
            if (this.rule==1) {
                var in1 = [[-1,-2],[-2,-3]];
                var out = [-1,-3];
            } else if (this.rule==2) {
                var in1 = [[-1,-2],[-1,-2]];
                var out = [-1,-2];
            } else {
                var in1 = [[-1,-2],[1,1]];
                var out = [-1,-2];
            }
            var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                var label = this.exprs;
                this.model.ipar = new ScilabDouble([this.rule]);
                this.model.rpar = new ScilabDouble([kmin],[kmax]);
                this.graphics.exprs = new ScilabDouble([label]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
