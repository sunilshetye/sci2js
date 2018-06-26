/* autogenerated from "macros/Events/M_freq.sci" */
function M_freq() {
    M_freq.prototype.define = function M_freq() {
        model = scicos_model();
        model.sim = list("m_frequ",4);
        model.evtout = [[1],[1],[1]];
        model.evtin = 1;
        model.rpar = [];
        model.opar = list([[1,1,0],[1,1,1],[1,3,2]],1,0,0);
        model.blocktype = "d";
        model.firing = [0,-1,-1];
        model.dep_ut = [false,false];
        exprs = [[sci2exp([[1],[2]])],[sci2exp([[0],[0]])]];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    M_freq.prototype.details = function M_freq() {
        return this.x;
    }
    M_freq.prototype.get = function M_freq() {
    }
    M_freq.prototype.set = function M_freq() {
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.frequ,this.offset,exprs] = scicos_getvalue("Set block parameters",[["Sample time"],["Offset"]],list("vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.offset = this.offset.slice();
            this.frequ = this.frequ.slice();
            if ((size(this.frequ,"*"))!=(size(this.offset,"*"))) {
                message("offset and frequency must have the same size");
                ok = false;
            } else if (or(this.frequ<0)) {
                message("Frequency must be a positif number");
                ok = false;
            } else if (or(abs(this.offset)>this.frequ)) {
                message("The |Offset| must be less than the Frequency");
                ok = false;
            }
            if (ok) {
                [m,den,off,count,m1,fir,this.frequ,this.offset,ok] = mfrequ_clk(this.frequ,this.offset);
            }
            if (ok) {
                model.opar = list(m,double(den),off,count);
                mn = (2^size(m1,"*"))-1;
                [model,graphics,ok] = set_io(model,graphics,list(),list(),1,ones(mn,1));
                if (mn>3) {
                    graphics.sz = [40+(mn-3)*10,40];
                } else {
                    graphics.sz = [50,40];
                }
                model.firing = fir;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
