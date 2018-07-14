/* autogenerated from "macros/Sinks/CFSCOPE.sci" */
function CFSCOPE() {
    CFSCOPE.prototype.define = function CFSCOPE() {
        this.win = -1;
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 2;
        this.ymin = -15;
        this.ymax = 15;
        this.per = 30;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cfscope"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([0],[this.ymin],[this.ymax],[this.per]);
        this.model.ipar = new ScilabDouble([this.win],[1],[this.N],[this.clrs],[this.wpos],[this.wdim],[1],[1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[strcat(string(this.clrs)," ")],[string(this.win)],[sci2exp([])],[sci2exp(this.wdim)],[string(this.ymin)],[string(this.ymax)],[string(this.per)],[string(this.N)],[string([1])]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CFSCOPE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    CFSCOPE.prototype.details = function CFSCOPE() {
        return this.x;
    }
    CFSCOPE.prototype.get = function CFSCOPE() {
        var options = {
            clrs:["Color (>0) or mark (<0) vector (8 entries)",this.clrs.toString().replace(/,/g," ")],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            ymin:["Ymin",this.ymin],
            ymax:["Ymax",this.ymax],
            per:["Refresh period",this.per],
            N:["Buffer size",this.N],
            wu:["Links to view",this.wu],
        }
        return options;
    }
    CFSCOPE.prototype.set = function CFSCOPE() {
        this.clrs = inverse(arguments[0]["clrs"])
        this.win = parseFloat(arguments[0]["win"])
        this.wpos = inverse(arguments[0]["wpos"])
        this.wdim = inverse(arguments[0]["wdim"])
        this.ymin = parseFloat(arguments[0]["ymin"])
        this.ymax = parseFloat(arguments[0]["ymax"])
        this.per = parseFloat(arguments[0]["per"])
        this.N = parseFloat(arguments[0]["N"])
        this.wu = arguments[0]["wu"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.clrs,this.win,this.wpos,this.wdim,this.ymin,this.ymax,this.per,this.N,this.wu,this.exprs] = scicos_getvalue("Set Scope parameters",["Color (>0) or mark (<0) vector (8 entries)","Output window number (-1 for automatic)","Output window position","Output window sizes","Ymin","Ymax","Refresh period","Buffer size","Links to view"],list("vec",8,"vec",1,"vec",-1,"vec",-1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",-1),this.exprs);
            if (!ok) {
                break;
            }
            var mess = [];
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                var mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                var mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (this.win<-1) {
                var mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                var ok = false;
            }
            if (this.per<=0) {
                var mess = [[mess],["Refresh period must be positive"],[" "]];
                var ok = false;
            }
            if (this.N<2) {
                var mess = [[mess],["Buffer size must be at least 2"],[" "]];
                var ok = false;
            }
            if (this.ymin>=this.ymax) {
                var mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                var ok = false;
            }
            if (this.wu<0) {
                var mess = [[mess],["Link to view must be positive"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (ok) {
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                var rpar = [[0],[this.ymin],[this.ymax],[this.per]];
                if (size(this.clrs,"*")>8) {
                    this.clrs = this.clrs.slice(1-1,8);
                }
                if (size(this.clrs,"*")<8) {
                    this.clrs[8-1] = 0;
                }
                var ipar = [[this.win],[1],[this.N],[this.clrs.slice()],[this.wpos.slice()],[this.wdim.slice()],[size(this.wu,"*")],[this.wu.slice()]];
                this.model.rpar = new ScilabDouble(rpar);
                this.model.ipar = new ScilabDouble(ipar);
                this.model.firing = new ScilabDouble([]);
                this.model.dep_ut = new ScilabBoolean([true,false]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
