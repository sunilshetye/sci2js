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
        this.ymax = 15;
        this.nbr_curves = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["canimxy"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([1],[1]);
        this.model.in2 = new ScilabDouble([1],[1]);
        this.model.intyp = new ScilabDouble([1],[1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.xmin],[this.xmax],[this.ymin],[this.ymax]);
        this.model.ipar = new ScilabDouble([this.win],[1],[this.N],[this.clrs],[this.siz],[0],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = [];
        this.model.dep_ut = [false,false];
        exprs = [[string(this.nbr_curves)],[string(this.clrs)],[string(this.siz)],[string(this.win)],["[]"],["[]"],[string(this.xmin)],[string(this.xmax)],[string(this.ymin)],[string(this.ymax)],[string(this.N)]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CANIMXY.prototype.details = function CANIMXY() {
        return this.x;
    }
    CANIMXY.prototype.get = function CANIMXY() {
        var options = {
            nbr_curves:["Number of Curves",this.nbr_curves],
            clrs:["color (>0) or mark (<0)",this.clrs],
            siz:["line or mark size",this.siz],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            xmin:["Xmin",this.xmin],
            xmax:["Xmax",this.xmax],
            ymin:["Ymin",this.ymin],
            ymax:["Ymax",this.ymax],
            N:["Buffer size",this.N],
        }
        return options;
    }
    CANIMXY.prototype.set = function CANIMXY() {
        this.nbr_curves = parseFloat(arguments[0]["nbr_curves"])
        this.clrs = parseFloat(arguments[0]["clrs"])
        this.siz = parseFloat(arguments[0]["siz"])
        this.win = parseFloat(arguments[0]["win"])
        this.wpos = inverse(arguments[0]["wpos"])
        this.wdim = inverse(arguments[0]["wdim"])
        this.xmin = parseFloat(arguments[0]["xmin"])
        this.xmax = parseFloat(arguments[0]["xmax"])
        this.ymin = parseFloat(arguments[0]["ymin"])
        this.ymax = parseFloat(arguments[0]["ymax"])
        this.N = parseFloat(arguments[0]["N"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
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
                [this.model,graphics,ok] = set_io(this.model,graphics,list([in1,in2],ones(2,1)),list(),ones(1,1),[]);
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                rpar = [[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
                ipar = [[this.win],[1],[this.N],[this.clrs],[this.siz],[0],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]];
                this.model.rpar = new ScilabDouble(rpar);
                this.model.ipar = new ScilabDouble(ipar);
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
