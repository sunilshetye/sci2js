/* autogenerated from "macros/Sinks/CLKOUTV_f.sci" */
function CLKOUTV_f() {
    CLKOUTV_f.prototype.define = function CLKOUTV_f() {
        this.prt = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["output"]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([this.prt]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = string(this.prt);
        this.x = new standard_define(new ScilabDouble([1,1]),this.model,new ScilabString([this.exprs])," ");
        return new EventOutBlock(this.x);
    }
    CLKOUTV_f.prototype.details = function CLKOUTV_f() {
        return this.x;
    }
    CLKOUTV_f.prototype.get = function CLKOUTV_f() {
        var options = {
        }
        return options;
    }
    CLKOUTV_f.prototype.set = function CLKOUTV_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.prt = arguments[0]["prt"];
            this.exprs = arguments[0]["exprs"];
            if (!ok) {
                break;
            }
            this.prt = int(this.prt);
            if (this.prt<=0) {
                block_parameter_error(msprintf("Wrong value for \'Port Number\' parameter: %d.",this.prt),"Strictly positive integer expected.");
            } else {
                this.model.ipar = new ScilabDouble([this.prt]);
                this.model.evtin = new ScilabDouble([1]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new EventOutBlock(this.x);
    }
    CLKOUTV_f.prototype.getinputs = function CLKOUTV_f() {
        this.x = orig[1-1]+sz[1-1]/2;
        var y = orig[2-1]+sz[2-1];
        var typ = -ones(this.x);
    }
    CLKOUTV_f.prototype.getorigin = function CLKOUTV_f() {
        this.x = tmpvar0[0];
        var y = tmpvar0[1];
    }
    CLKOUTV_f.prototype.getoutputs = function CLKOUTV_f() {
        this.x = [];
        var y = [];
        var typ = [];
    }
    CLKOUTV_f.prototype.plot = function CLKOUTV_f() {
        var xf = 60;
        var yf = 40;
        var pat = xget("pattern");
        xset("pattern",this.default_color[-1-1]);
        var thick = xget("thickness");
        xset("thickness",2);
        this.x = orig[1-1]+sz[1-1]*[[1/2],[1],[1],[0],[0]];
        var y = orig[2-1]+sz[2-1]*[[0],[1/3],[1],[1],[1/3]];
        var xo = orig[1-1];
        var yo = orig[2-1]+sz[2-1]/3;
        if (this.type[this.gr_i-1]==15) {
            var coli = this.gr_i[2-1];
            var pcoli = xget("pattern");
            xfpolys(this.x,y,coli);
            xset("pattern",coli);
            xstringb(xo,yo,string(this.prt),sz[1-1],sz[2-1]/1.5);
            xset("pattern",pcoli);
            xstringb(xo,yo,string(this.prt),sz[1-1],sz[2-1]/1.5);
        } else {
            xstringb(xo,yo,string(this.prt),sz[1-1],sz[2-1]/1.5);
            xpoly(this.x,y,"lines",1);
        }
        var in1 = [-1/14,1/7,0,0,1/14,1/7,-1/14,1/7]*this.diag[[xf,yf]-1];
        xfpoly(in1.slice()[1-1]+ones(4,1)*(orig[1-1]+sz[1-1]/2),in1.slice()[2-1]+ones(4,1)*(orig[2-1]+sz[2-1]),1);
        xset("thickness",thick);
        xset("pattern",pat);
        if (ident!=[]&&ident!="") {
            var font = xget("font");
            xset("font",this.options.ID[1-1][1-1],this.options.ID[1-1][2-1]);
            var rectangle = xstringl(orig[1-1],orig[2-1],ident);
            var w = rectangle[3-1];
            var h = rectangle[4-1];
            xstringb(orig[1-1]+sz[1-1]/2-w/2,orig[2-1]-3*h/2,ident,w,h);
            xset("font",font[1-1],font[2-1]);
        }
        this.x = [];
        var y = [];
    }
}
