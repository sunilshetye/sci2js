/* autogenerated from "macros/Sinks/CANIMXY.sci" */
function CANIMXY() {
    CANIMXY.prototype.define = function CANIMXY() {
        this.win = -1;
        this.clrs = -4;
        this.N = 2;
        this.siz = 1;
        this.wpos = [[-1],[-1]];
        this.wdim = [[-1],[-1]];
        this.xmin = -15;
        this.xmax = 15;
        this.ymin = -15;
        this.ymax = +15;
        this.nbr_curves = 1;
        model = scicos_model();
        model.sim = list("canimxy",4);
        model.in1 = [[1],[1]];
        model.in2 = [[1],[1]];
        model.intyp = [[1],[1]];
        model.evtin = 1;
        model.rpar = [[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
        model.ipar = [[this.win],[1],[this.N],[this.clrs],[this.siz],[0],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]];
        model.blocktype = "d";
        model.firing = [];
        model.dep_ut = [false,false];
        exprs = [[string(this.nbr_curves)],[string(this.clrs)],[string(this.siz)],[string(this.win)],["[]"],["[]"],[string(this.xmin)],[string(this.xmax)],[string(this.ymin)],[string(this.ymax)],[string(this.N)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CANIMXY.prototype.details = function CANIMXY() {
        return this.x;
    }
    CANIMXY.prototype.get = function CANIMXY() {
    }
    CANIMXY.prototype.set = function CANIMXY() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.nbr_curves,this.clrs,this.siz,this.win,this.wpos,this.wdim,this.xmin,this.xmax,this.ymin,this.ymax,this.N,exprs] = scicos_getvalue("Set Scope parameters",["Number of Curves","color (>0) or mark (<0)","line or mark size","Output window number (-1 for automatic)","Output window position","Output window sizes","Xmin","Xmax","Ymin","Ymax","Buffer size"],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",-1,"vec",-1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (this.win<-1) {
                mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                ok = false;
            }
            if (this.nbr_curves<=0) {
                mess = [[mess],["Number of curves cannot be negative or null"],[" "]];
                ok = false;
            }
            if (this.N<1) {
                mess = [[mess],["Buffer size must be at least 1"],[" "]];
                ok = false;
            }
            if (this.N==1&&this.clrs>0) {
                mess = [[mess],["Buffer size must be at least 2"],[" "]];
                ok = false;
            }
            if (this.ymin>=this.ymax) {
                mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                ok = false;
            }
            if (this.xmin>=this.xmax) {
                mess = [[mess],["Xmax must be greater than Xmin"],[" "]];
                ok = false;
            }
            if (!ok) {
                message(mess);
            } else {
                in1 = this.nbr_curves*ones(2,1);
                in2 = ones(2,1);
                [model,graphics,ok] = set_io(model,graphics,list([in1,in2],ones(2,1)),list(),ones(1,1),[]);
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                rpar = [[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
                ipar = [[this.win],[1],[this.N],[this.clrs],[this.siz],[0],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]];
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
