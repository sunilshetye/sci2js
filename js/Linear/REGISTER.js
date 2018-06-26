/* autogenerated from "macros/Linear/REGISTER.sci" */
function REGISTER() {
    REGISTER.prototype.define = function REGISTER() {
        z0 = zeros(10,1);
        model = scicos_model();
        model.sim = list("delay4",4);
        model.in1 = 1;
        model.out = 1;
        model.evtin = 1;
        model.dstate = z0;
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = strcat(string(z0),";");
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    REGISTER.prototype.details = function REGISTER() {
        return this.x;
    }
    REGISTER.prototype.get = function REGISTER() {
    }
    REGISTER.prototype.set = function REGISTER() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,1)==1) {
            exprs = [[exprs],[sci2exp(1)]];
        }
        while (true) {
            [ok,z0,it,exprs] = scicos_getvalue("Set delay parameters",[["Register initial condition"],["Datatype (1=double 3=int32 ...)"]],list("vec",-1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (prod(size(z0))<1) {
                message("Register length must be at least 1");
                ok = false;
            }
            if (it==1) {
                model.sim = list("delay4",4);
                z0 = double(z0);
                model.dstate = z0;
                model.odstate = list();
            } else {
                if (it==3) {
                    model.sim = list("delay4_i32",4);
                    z0 = int32(z0);
                } else if (it==4) {
                    model.sim = list("delay4_i16",4);
                    z0 = int16(z0);
                } else if (it==5) {
                    model.sim = list("delay4_i8",4);
                    z0 = int8(z0);
                } else if (it==6) {
                    model.sim = list("delay4_ui32",4);
                    z0 = uint32(z0);
                } else if (it==7) {
                    model.sim = list("delay4_ui16",4);
                    z0 = uint16(z0);
                } else if (it==8) {
                    model.sim = list("delay4_ui8",4);
                    z0 = uint8(z0);
                } else {
                    message("Datatype is not supported");
                    ok = false;
                }
                model.odstate = list(z0);
                model.dstate = [];
            }
            if (ok) {
                in1 = [1,1];
                [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(in1,it),1,[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
