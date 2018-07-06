/* autogenerated from "macros/NonLinear/DLRADAPT_f.sci" */
function DLRADAPT_f() {
    DLRADAPT_f.prototype.define = function DLRADAPT_f() {
        this.p = [[0],[1]];
        this.rn = [];
        this.rd = [[math.complex(0.2,0.8),math.complex(0.2,-0.8)],[math.complex(0.3,0.7),math.complex(0.3,-0.7)]];
        this.g = [[1],[1]];
        this.last_u = [];
        this.last_y = [[0],[0]];
        model = scicos_model();
        model.sim = "dlradp";
        model.in1 = [[1],[1]];
        model.out = 1;
        model.evtin = 1;
        model.dstate = [[this.last_u],[this.last_y]];
        model.rpar = [[this.p.slice()],[real(this.rn.slice())],[imag(this.rn.slice())],[real(this.rd.slice())],[imag(this.rd.slice())],[this.g.slice()]];
        model.ipar = [[0],[2],[2]];
        model.blocktype = "d";
        model.firing = [];
        model.dep_ut = [true,false];
        exprs = [[sci2exp(this.p)],[sci2exp(this.rn)],[sci2exp(this.rd,0)],[sci2exp(this.g)],[sci2exp(this.last_u)],[sci2exp(this.last_y)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DLRADAPT_f.prototype.details = function DLRADAPT_f() {
        return this.x;
    }
    DLRADAPT_f.prototype.get = function DLRADAPT_f() {
        var options = {
            p:["Vector of p mesh points",this.p],
            rn:["Numerator roots (one line for each mesh)",this.rn],
            rd:["Denominator roots (one line for each mesh)",this.rd],
            g:["Vector of gain at mesh points",this.g],
            last_u:["past inputs (Num degree values)",this.last_u],
            last_y:["past outputs (Den degree values)",this.last_y],
        }
        return options;
    }
    DLRADAPT_f.prototype.set = function DLRADAPT_f() {
        this.p = inverse(arguments[0]["p"])
        this.rn = inverse(arguments[0]["rn"])
        this.rd = inverse(arguments[0]["rd"])
        this.g = inverse(arguments[0]["g"])
        this.last_u = inverse(arguments[0]["last_u"])
        this.last_y = inverse(arguments[0]["last_y"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.p,this.rn,this.rd,this.g,this.last_u,this.last_y,exprs] = scicos_getvalue("Set block parameters",["Vector of p mesh points","Numerator roots (one line for each mesh)","Denominator roots (one line for each mesh)","Vector of gain at mesh points","past inputs (Num degree values)","past outputs (Den degree values)"],list("vec",-1,"mat",[-1,-1],"mat",["size(%1,\'*\')","-1"],"vec","size(%1,\'*\')","vec","size(%2,2)","vec","size(%3,2)"),exprs);
            if (!ok) {
                break;
            }
            m = size(this.rn,2);
            [npt,n] = size(this.rd);
            if (m>=n) {
                message("Transfer must be strictly proper");
            } else if (size(this.rn,1)!=0&&size(this.rn,1)!=size(this.p,"*")) {
                message("Numerator roots matrix row size\'s is incorrect");
            } else {
                rpar = [[this.p.slice()],[real(this.rn.slice())],[imag(this.rn.slice())],[real(this.rd.slice())],[imag(this.rd.slice())],[this.g.slice()]];
                ipar = [[m],[n],[npt]];
                model.dstate = [[this.last_u.slice()],[this.last_y.slice()]];
                model.rpar = rpar;
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
