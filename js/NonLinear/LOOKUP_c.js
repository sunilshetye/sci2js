/* autogenerated from "macros/NonLinear/LOOKUP_c.sci" */
function LOOKUP_c() {
    LOOKUP_c.prototype.define = function LOOKUP_c() {
        this.model = scicos_model();
        this.xx = [[-1],[0.5],[1],[1.5],[2.5]];
        this.yy = [[-6],[-1],[-3],[3],[-4]];
        var N = length(this.xx);
        this.Method = 1;
        var Graf = "n";
        this.model.sim = list(new ScilabString(["lookup_c"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.outtyp = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.outtyp = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble([this.xx.slice()],[this.yy.slice()]);
        this.model.ipar = new ScilabDouble([N],[this.Method],[0],[0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.firing = new ScilabDouble([0]);
        this.exprs = [[sci2exp(this.Method)],[sci2exp(this.xx)],[sci2exp(this.yy)],[sci2exp(0)],[Graf]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOOKUP_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    LOOKUP_c.prototype.details = function LOOKUP_c() {
        return this.x;
    }
    LOOKUP_c.prototype.get = function LOOKUP_c() {
        var options = {
            Method:["Spline Interpolation method (0..9)",this.Method],
            xx:["x",this.xx.toString().replace(/,/g," ")],
            yy:["y",this.yy.toString().replace(/,/g," ")],
            extrapo:["Extrapolate method (0,1)",this.extrapo],
            graf:["Launch graphic window(y/n)?",this.graf],
        }
        return options;
    }
    LOOKUP_c.prototype.set = function LOOKUP_c() {
        this.Method = parseFloat(arguments[0]["Method"])
        this.xx = inverse(arguments[0]["xx"])
        this.yy = inverse(arguments[0]["yy"])
        this.extrapo = parseFloat(arguments[0]["extrapo"])
        this.graf = arguments[0]["graf"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        var ok = false;
        var SaveExit = false;
        while (true) {
            var Ask_again = false;
            [ok,this.Method,this.xx,this.yy,this.extrapo,this.graf,this.exprs] = scicos_getvalue("Lookup table parameters",["Spline Interpolation method (0..9)","x","y","Extrapolate method (0,1)","Launch graphic window(y/n)?"],list("vec",1,"vec",-1,"vec",-1,"vec",1,"str",1),this.exprs);
            if (!ok) {
                break;
            }
            var PeriodicOption = "n";
            if (PeriodicOption=="y"||PeriodicOption=="Y") {
                var PO = 1;
            } else {
                var PO = 0;
            }
            var mtd = int(this.Method);
            if (mtd<0) {
                var mtd = 0;
            }
            if (mtd>9) {
                var mtd = 9;
            }
            var METHOD = getmethod(mtd);
            this.extrapo = int(this.extrapo);
            if (this.extrapo<0) {
                this.extrapo = 0;
            }
            if (this.extrapo>1) {
                this.extrapo = 1;
            }
            if (!Ask_again) {
                this.xx = this.xx.slice();
                this.yy = this.yy.slice();
                var tmpvar0 = size(this.xx);
                var nx = tmpvar0[0];
                var mx = tmpvar0[1];
                var tmpvar1 = size(this.yy);
                var ny = tmpvar1[0];
                var my = tmpvar1[1];
                if (!((nx==ny)&&(mx==my))) {
                    x_message("incompatible size of x and y");
                    var Ask_again = true;
                }
            }
            if (!Ask_again) {
                this.xy = [this.xx,this.yy];
                var tmpvar2 = cleandata(this.xy);
                this.xy = tmpvar2[0];
                var N = size(this.xy,"r");
                this.exprs[5-1] = "n";
                if (this.graf=="y"||this.graf=="Y") {
                    var ipar = [[N],[mtd],[PO],[this.extrapo]];
                    var rpar = [];
                    if (!exists("curwin")) {
                        var gh = gcf();
                        this.curwin = gh.figure_id;
                    }
                    var save_curwin = this.curwin;
                    this.curwin = max(winsid())+1;
                    var tmpvar3 = poke_point(this.xy,ipar,rpar);
                    var orpar = tmpvar3[0];
                    var oipar = tmpvar3[1];
                    var ok = tmpvar3[2];
                    this.curwin = save_curwin;
                    if (!ok) {
                        break;
                    }
                    var N2 = oipar[1-1];
                    var xy2 = [orpar.slice(1-1,N2),orpar.slice(N2+1-1,2*N2)];
                    var New_methhod = oipar[2-1];
                    var DChange = false;
                    var METHOD = getmethod(New_methhod);
                    if (or(this.xy.slice()[1-1]!=xy2.slice()[1-1])) {
                        var DChange = true;
                    }
                    if (or(this.xy.slice(1-1,N-1)[2-1]!=xy2.slice(1-1,N2-1)[2-1])) {
                        var DChange = true;
                    }
                    if ((this.xy[N-1][2-1]!=xy2[N2-1][2-1]&&(METHOD!="periodic"))) {
                        var DChange = true;
                    }
                    if (DChange) {
                        this.exprs[2-1] = strcat(sci2exp(xy2.slice()[1-1]));
                        this.exprs[3-1] = strcat(sci2exp(xy2.slice()[2-1]));
                    }
                    this.exprs[1-1] = sci2exp(New_methhod);
                    this.exprs[4-1] = sci2exp(oipar[4-1]);
                    if (oipar[3-1]==1) {
                        var perop = "y";
                    } else {
                        var perop = "n";
                    }
                    var SaveExit = true;
                } else {
                    var tmpvar4 = Do_Spline(N,mtd,this.xy.slice()[1-1],this.xy.slice()[2-1],this.xy[$-1][1-1],this.xy[1-1][1-1],0);
                    var Xdummy = tmpvar4[0];
                    var Ydummy = tmpvar4[1];
                    var orpar = tmpvar4[2];
                    if ((METHOD=="periodic")) {
                        this.xy[N-1][2-1] = this.xy[1-1][2-1];
                    }
                    if ((METHOD=="order 2"||METHOD=="not_a_knot"||METHOD=="periodic"||METHOD=="monotone"||METHOD=="fast"||METHOD=="clamped")) {
                        var orpar = [[this.xy.slice()[1-1]],[this.xy.slice()[2-1]],[orpar]];
                    } else {
                        if ((METHOD=="zero order-below"||METHOD=="linear"||METHOD=="zero order-above"||METHOD=="zero order-nearest")) {
                            var orpar = [[this.xy.slice()[1-1]],[this.xy.slice()[2-1]]];
                        }
                    }
                    this.exprs[1-1] = sci2exp(mtd);
                    var oipar = [[N],[mtd],[PO],[this.extrapo]];
                    var SaveExit = true;
                }
            }
            if ((SaveExit)) {
                var xp = find(orpar.slice(1-1,oipar[1-1])>=0);
                if ((xp!=[])) {
                    this.model.firing = new ScilabDouble([orpar[xp[1-1]-1]]);
                } else {
                    this.model.firing = new ScilabDouble([-1]);
                }
                this.model.rpar = new ScilabDouble(orpar);
                this.model.ipar = new ScilabDouble(oipar);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.model = this.model;
                this.x.graphics = this.graphics;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
