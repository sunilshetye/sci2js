/* autogenerated from "macros/Linear/SUMMATION.sci" */
function SUMMATION() {
    SUMMATION.prototype.define = function SUMMATION() {
        this.sgn = [[1],[-1]];
        model = scicos_model();
        model.sim = list("summation",4);
        model.in1 = [[-1],[-1]];
        model.out = -1;
        model.in2 = [[-2],[-2]];
        model.out2 = -2;
        model.ipar = this.sgn;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = sci2exp(this.sgn);
        gr_i = [];
        this.x = standard_define([2,3],model,exprs,gr_i);
        return new Summation(this.x);
    }
    SUMMATION.prototype.details = function SUMMATION() {
        return this.x;
    }
    SUMMATION.prototype.get = function SUMMATION() {
    }
    SUMMATION.prototype.set = function SUMMATION() {
        this.Datatype = parseFloat((arguments[0]["Datatype"]))
        this.sgn = parseFloat((arguments[0]["sgn"]))
        this.satur = parseFloat((arguments[0]["satur"]))
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        if (size(exprs,1)==1) {
            exprs = [[sci2exp(1)],[exprs],[sci2exp(0)]];
        } else if (size(exprs,1)==2) {
            exprs = [[exprs],[sci2exp(0)]];
        }
        while (true) {
            [ok,this.Datatype,this.sgn,this.satur,exprs] = scicos_getvalue("Set sum block parameters",["Datatype (1=real double  2=complex 3=int32 ...)","Number of inputs or sign vector (of +1, -1)","Do on Overflow(0=Nothing 1=Saturate 2=Error)"],list("vec",1,"vec",-1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.sgn = this.sgn.slice();
            if ((this.satur!=0&&this.satur!=1&&this.satur!=2)) {
                message("Do on overflow must be 0,1,2");
                ok = false;
            }
            if (size(this.sgn,1)==1) {
                if (this.sgn<1) {
                    message("Number of inputs must be > 0");
                    ok = false;
                } else if (this.sgn==1) {
                    in1 = -1;
                    in2 = -2;
                    this.sgn = [];
                    nout = 1;
                    nout2 = 1;
                } else {
                    in1 = -ones(this.sgn,1);
                    in2 = 2*in1;
                    this.sgn = ones(this.sgn,1);
                    nout = -1;
                    nout2 = -2;
                }
            } else {
                if (!and(abs(this.sgn)==1)) {
                    message("Signs can only be +1 or -1");
                    ok = false;
                } else {
                    in1 = -ones(size(this.sgn,1),1);
                    in2 = 2*in1;
                    nout = -1;
                    nout2 = -2;
                }
            }
            it = this.Datatype*ones(1,size(in1,1));
            ot = this.Datatype;
            if (this.Datatype==1) {
                model.sim = list("summation",4);
            } else if (this.Datatype==2) {
                model.sim = list("summation_z",4);
            } else if (((this.Datatype<1)||(this.Datatype>8))) {
                message("Datatype is not supported");
                ok = false;
            } else {
                if (this.satur==0) {
                    if (this.Datatype==3) {
                        model.sim = list("summation_i32n",4);
                    } else if (this.Datatype==4) {
                        model.sim = list("summation_i16n",4);
                    } else if (this.Datatype==5) {
                        model.sim = list("summation_i8n",4);
                    } else if (this.Datatype==6) {
                        model.sim = list("summation_ui32n",4);
                    } else if (this.Datatype==7) {
                        model.sim = list("summation_ui16n",4);
                    } else if (this.Datatype==8) {
                        model.sim = list("summation_ui8n",4);
                    }
                } else if (this.satur==1) {
                    if (this.Datatype==3) {
                        model.sim = list("summation_i32s",4);
                    } else if (this.Datatype==4) {
                        model.sim = list("summation_i16s",4);
                    } else if (this.Datatype==5) {
                        model.sim = list("summation_i8s",4);
                    } else if (this.Datatype==6) {
                        model.sim = list("summation_ui32s",4);
                    } else if (this.Datatype==7) {
                        model.sim = list("summation_ui16s",4);
                    } else if (this.Datatype==8) {
                        model.sim = list("summation_ui8s",4);
                    }
                } else if (this.satur==2) {
                    if (this.Datatype==3) {
                        model.sim = list("summation_i32e",4);
                    } else if (this.Datatype==4) {
                        model.sim = list("summation_i16e",4);
                    } else if (this.Datatype==5) {
                        model.sim = list("summation_i8e",4);
                    } else if (this.Datatype==6) {
                        model.sim = list("summation_ui32e",4);
                    } else if (this.Datatype==7) {
                        model.sim = list("summation_ui16e",4);
                    } else if (this.Datatype==8) {
                        model.sim = list("summation_ui8e",4);
                    }
                }
            }
            if (ok) {
                [model,graphics,ok] = set_io(model,graphics,list([in1,in2],it),list([nout,nout2],ot),[],[]);
            }
            if (ok) {
                model.rpar = this.satur;
                model.ipar = this.sgn;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new Summation(this.x);
    }
}
