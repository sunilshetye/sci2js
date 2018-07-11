/* autogenerated from "macros/Sinks/CMSCOPE.sci" */
function CMSCOPE() {
    CMSCOPE.prototype.define = function CMSCOPE() {
        this.win = -1;
        this.in1 = [[1],[1]];
        this.wdim = [[-1],[-1]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 20;
        this.ymin = [[-1],[-5]];
        this.ymax = [[1],[5]];
        this.per = [[30],[30]];
        yy = [[transpose(this.ymin.slice())],[transpose(this.ymax.slice())]];
        period = transpose(this.per.slice());
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cmscope"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble(this.in1);
        this.model.in2 = new ScilabDouble([1],[1]);
        this.model.intyp = new ScilabDouble([1],[1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([0],[period.slice()],[yy.slice()]);
        this.model.ipar = new ScilabDouble([this.win],[size(this.in1,"*")],[this.N],[this.wpos.slice()],[this.wdim.slice()],[this.in1.slice()],[this.clrs.slice(1-1,sum(this.in1))]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [true,false];
        exprs = [[strcat(string(this.in1)," ")],[strcat(string(this.clrs)," ")],[string(this.win)],[sci2exp([])],[sci2exp([])],[strcat(string(this.ymin)," ")],[strcat(string(this.ymax)," ")],[strcat(string(this.per)," ")],[string(this.N)],[string(0)],[emptystr()]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CMSCOPE.prototype.details = function CMSCOPE() {
        return this.x;
    }
    CMSCOPE.prototype.get = function CMSCOPE() {
        var options = {
            in1:["Input ports sizes",this.in1.toString().replace(/,/g," ")],
            clrs:["Drawing colors (>0) or mark (<0)",this.clrs.toString().replace(/,/g," ")],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            ymin:["Ymin vector",this.ymin.toString().replace(/,/g," ")],
            ymax:["Ymax vector",this.ymax.toString().replace(/,/g," ")],
            per:["Refresh period",this.per.toString().replace(/,/g," ")],
            N:["Buffer size",this.N],
            heritance:["Accept herited events 0/1",this.heritance],
            nom:["Name of Scope (label&Id)",this.nom],
        }
        return options;
    }
    CMSCOPE.prototype.set = function CMSCOPE() {
        this.in1 = inverse(arguments[0]["in1"])
        this.clrs = inverse(arguments[0]["clrs"])
        this.win = parseFloat(arguments[0]["win"])
        this.wpos = inverse(arguments[0]["wpos"])
        this.wdim = inverse(arguments[0]["wdim"])
        this.ymin = inverse(arguments[0]["ymin"])
        this.ymax = inverse(arguments[0]["ymax"])
        this.per = inverse(arguments[0]["per"])
        this.N = parseFloat(arguments[0]["N"])
        this.heritance = arguments[0]["heritance"]
        this.nom = arguments[0]["nom"]
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.in1,this.clrs,this.win,this.wpos,this.wdim,this.ymin,this.ymax,this.per,this.N,this.heritance,this.nom,exprs] = scicos_getvalue("Set Scope parameters",["Input ports sizes","Drawing colors (>0) or mark (<0)","Output window number (-1 for automatic)","Output window position","Output window sizes","Ymin vector","Ymax vector","Refresh period","Buffer size","Accept herited events 0/1","Name of Scope (label&Id)"],list("vec",-1,"vec",-1,"vec",1,"vec",-1,"vec",-1,"vec","size(%1,\'*\')","vec","size(%1,\'*\')","vec","size(%1,\'*\')","vec",1,"vec",1,"str",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (size(this.in1,"*")<=0) {
                mess = [[mess],["Block must have at least one input port"],[" "]];
                ok = false;
            }
            if (min(this.in1)<=0) {
                mess = [[mess],["Port sizes must be positive"],[" "]];
                ok = false;
            }
            if (size(this.clrs,"*")<sum(this.in1)) {
                mess = [[mess],["Not enough colors defined (at least "+string(sum(this.in1))+")"],[" "]];
                ok = false;
            }
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (this.win<-1) {
                mess = [[mess],["Window number can\'t be  < -1"],[" "]];
                ok = false;
            }
            if (size(this.per,"*")!=size(this.ymin,"*")) {
                mess = [[mess],["Size of Refresh Period must equal size of Ymin/Ymax vector"],[" "]];
                ok = false;
            }
            for (i=1;i<=size(this.per,"*");i+=1) {
                if ((this.per[i-1]<=0)) {
                    mess = [[mess],["Refresh Period must be positive"],[" "]];
                    ok = false;
                }
            }
            if (this.N<2) {
                mess = [[mess],["Buffer size must be at least 2"],[" "]];
                ok = false;
            }
            if (or(this.ymin>=this.ymax)) {
                mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                ok = false;
            }
            if (!or(this.heritance==[0,1])) {
                mess = [[mess],["Accept herited events must be 0 or 1"],[" "]];
                ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (ok) {
                this.in1 = this.in1.slice();
                a = size(this.in1,1);
                in2 = ones(a,1);
                [this.model,graphics,ok] = set_io(this.model,graphics,list([this.in1,in2],ones(a,1)),list(),ones(1-this.heritance,1),[]);
            }
            if (ok) {
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                if (ok) {
                    period = transpose(this.per.slice());
                    yy = [[transpose(this.ymin.slice())],[transpose(this.ymax.slice())]];
                    rpar = [[0],[period.slice()],[yy.slice()]];
                    this.clrs = this.clrs.slice(1-1,sum(this.in1));
                    ipar = [[this.win],[size(this.in1,"*")],[this.N],[this.wpos.slice()],[this.wdim.slice()],[this.in1.slice()],[this.clrs.slice()],[this.heritance]];
                    this.model.evtin = new ScilabDouble([ones(1-this.heritance,1)]);
                    this.model.dstate = [];
                    this.model.rpar = new ScilabDouble(rpar);
                    this.model.ipar = new ScilabDouble(ipar);
                    this.model.label = new ScilabDouble([this.nom]);
                    graphics.id = this.nom;
                    graphics.exprs = exprs;
                    this.x.graphics = graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
