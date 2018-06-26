/* autogenerated from "macros/Misc/CONSTRAINT2_c.sci" */
function CONSTRAINT2_c() {
    CONSTRAINT2_c.prototype.define = function CONSTRAINT2_c() {
        x0 = [0];
        xd0 = [0];
        id = [0];
        model = scicos_model();
        model.sim = list("constraint_c",10004);
        model.in1 = 1;
        model.out = [[1],[1]];
        model.state = [[x0],[xd0]];
        model.ipar = id;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = list(strcat(sci2exp(x0)),strcat(sci2exp(xd0)),strcat(sci2exp(id)));
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CONSTRAINT2_c.prototype.details = function CONSTRAINT2_c() {
        return this.x;
    }
    CONSTRAINT2_c.prototype.get = function CONSTRAINT2_c() {
    }
    CONSTRAINT2_c.prototype.set = function CONSTRAINT2_c() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            ask_again = false;
            [ok,x0,xd0,id,exprs] = scicos_getvalue("Set Constraint block parameters",[["Initial guess values of states x"],["Initial guess values of derivative x\'"],["Id(i)=1: if x\'(i) is present in the feedback, else Id(i)=0"]],list("vec",-1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            x0 = x0.slice();
            N = size(x0,"*");
            xd0 = xd0.slice();
            Nxd = size(xd0,"*");
            id = id.slice();
            Nid = size(id,"*");
            if ((N!=Nxd)||(N!=Nid)) {
                message("incompatible sizes, states, their derivatives, and ID should be the same size ");
                ask_again = true;
            }
            if ((N<=0&&!ask_again)) {
                x_message("number of states (constraints) must be > 0 ");
                ask_again = true;
            }
            if ((!ask_again)) {
                for (i=1;i<=N;i+=1) {
                    if (!((id[i-1]==0)||(id[i-1]==1))) {
                        ask_again = true;
                        x_message([["Id(i) must be either"],["0 when x\'(i) is not present in the feedback"],["1: when x\'(i) is present in the feedback"]]);
                        break;
                    }
                    if ((id[i-1]==0)) {
                        id[i-1] = -1;
                    }
                }
            }
            if (!ask_again) {
                graphics.exprs = exprs;
                model.state = [[x0],[xd0]];
                model.out = [[N],[N]];
                model.in1 = N;
                model.ipar = id;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
