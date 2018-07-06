/* autogenerated from "macros/Linear/DOLLAR.sci" */
function DOLLAR() {
    DOLLAR.prototype.define = function DOLLAR() {
        z = 0;
        this.inh = 0;
        in1 = 1;
        exprs = string([[z],[this.inh]]);
        model = scicos_model();
        model.sim = list("dollar4",4);
        model.in1 = in1;
        model.out = in1;
        model.evtin = 1-this.inh;
        model.dstate = z;
        model.blocktype = "d";
        model.dep_ut = [false,false];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR.prototype.details = function DOLLAR() {
        return this.x;
    }
    DOLLAR.prototype.get = function DOLLAR() {
        var options = {
            a:["initial condition",this.a],
            inh:["Inherit (no:0, yes:1)",this.inh],
        }
        return options;
    }
    DOLLAR.prototype.set = function DOLLAR() {
        this.a = arguments[0]["a"]
        this.inh = parseFloat(arguments[0]["inh"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")<2) {
            exprs[2-1] = "0";
        }
        while (true) {
            [ok,this.a,this.inh,exprs] = scicos_getvalue("Set 1/z block parameters",["initial condition","Inherit (no:0, yes:1)"],list("mat",[-1,-2],"vec",-1),exprs);
            if (!ok) {
                break;
            }
            out = [size(this.a,1),size(this.a,2)];
            if (out==0) {
                out = [];
            }
            in1 = out;
            model.sim = list("dollar4_m",4);
            model.odstate = list(this.a);
            model.dstate = [];
            if (this.type[(this.a)==1-1]) {
                if (isreal(this.a)) {
                    it = 1;
                    ot = 1;
                    if ((size(this.a,1)==1||size(this.a,2)==1)) {
                        model.sim = list("dollar4",4);
                        model.dstate = this.a.slice();
                        model.odstate = list();
                    }
                } else {
                    it = 2;
                    ot = 2;
                }
            } else if ((typeof(this.a)=="int32")) {
                it = 3;
                ot = 3;
            } else if ((typeof(this.a)=="int16")) {
                it = 4;
                ot = 4;
            } else if ((typeof(this.a)=="int8")) {
                it = 5;
                ot = 5;
            } else if ((typeof(this.a)=="uint32")) {
                it = 6;
                ot = 6;
            } else if ((typeof(this.a)=="uint16")) {
                it = 7;
                ot = 7;
            } else if ((typeof(this.a)=="uint8")) {
                it = 8;
                ot = 8;
            } else {
                message("type is not recognized");
                ok = false;
            }
            if (ok) {
                [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),ones(1-this.inh,1),[]);
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
