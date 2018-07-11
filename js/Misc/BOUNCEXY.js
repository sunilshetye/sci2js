/* autogenerated from "macros/Misc/BOUNCEXY.sci" */
function BOUNCEXY() {
    BOUNCEXY.prototype.define = function BOUNCEXY() {
        this.win = -1;
        this.imode = 1;
        this.clrs = [[1],[2]];
        this.siz = [[1],[1]];
        this.xmin = -5;
        this.xmax = 5;
        this.ymin = 0;
        this.ymax = 15;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["bouncexy"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([-1],[-1]);
        this.model.in2 = new ScilabDouble([1],[1]);
        this.model.intyp = new ScilabDouble([1],[1]);
        this.model.evtin = new ScilabDouble([1]);
        z = [];
        for (i=1;i<=size(this.clrs,"*");i+=1) {
            z[6*(i-1)+1-1] = 0;
            z[6*(i-1)+2-1] = 0;
            z[6*(i-1)+3-1] = 2*this.siz[i-1];
            z[6*(i-1)+4-1] = 2*this.siz[i-1];
            z[6*(i-1)+5-1] = 0.000;
            z[6*(i-1)+6-1] = 64.0*360.000;
        }
        this.model.dstate = z;
        this.model.rpar = new ScilabDouble([this.xmin],[this.xmax],[this.ymin],[this.ymax]);
        this.model.ipar = new ScilabDouble([this.win],[this.imode],[this.clrs.slice()]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = [];
        this.model.dep_ut = [false,false];
        exprs = [[strcat(sci2exp(this.clrs))],[strcat(sci2exp(this.siz))],[strcat(sci2exp(this.win))],[strcat(sci2exp(1))],[strcat(sci2exp(this.xmin))],[strcat(sci2exp(this.xmax))],[strcat(sci2exp(this.ymin))],[strcat(sci2exp(this.ymax))]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    BOUNCEXY.prototype.details = function BOUNCEXY() {
        return this.x;
    }
    BOUNCEXY.prototype.get = function BOUNCEXY() {
        var options = {
            clrs:["colors",this.clrs.toString().replace(/,/g," ")],
            siz:["radii",this.siz.toString().replace(/,/g," ")],
            win:["window number (-1 for automatic)",this.win],
            imode:["animation mode (0,1)",this.imode],
            xmin:["Xmin",this.xmin],
            xmax:["Xmax",this.xmax],
            ymin:["Ymin",this.ymin],
            ymax:["Ymax",this.ymax],
        }
        return options;
    }
    BOUNCEXY.prototype.set = function BOUNCEXY() {
        this.clrs = inverse(arguments[0]["clrs"])
        this.siz = inverse(arguments[0]["siz"])
        this.win = parseFloat(arguments[0]["win"])
        this.imode = parseFloat(arguments[0]["imode"])
        this.xmin = parseFloat(arguments[0]["xmin"])
        this.xmax = parseFloat(arguments[0]["xmax"])
        this.ymin = parseFloat(arguments[0]["ymin"])
        this.ymax = parseFloat(arguments[0]["ymax"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        dstate = this.model.dstate;
        while (true) {
            [ok,this.clrs,this.siz,this.win,this.imode,this.xmin,this.xmax,this.ymin,this.ymax,exprs] = scicos_getvalue("Set Scope parameters",["colors","radii","window number (-1 for automatic)","animation mode (0,1)","Xmin","Xmax","Ymin","Ymax"],list("vec",-1,"vec",-1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (size(this.clrs,"*")!=size(this.siz,"*")) {
                mess = [[mess],["colors and radii must have equal size (number of balls)"],[" "]];
                ok = false;
            }
            if (this.win<-1) {
                mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
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
                rpar = [[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
                ipar = [[this.win],[this.imode],[this.clrs.slice()]];
                z = [];
                for (i=1;i<=size(this.clrs,"*");i+=1) {
                    z[6*(i-1)+1-1] = 0;
                    z[6*(i-1)+2-1] = 0;
                    z[6*(i-1)+3-1] = 2*this.siz[i-1];
                    z[6*(i-1)+4-1] = 2*this.siz[i-1];
                    z[6*(i-1)+5-1] = 0.000;
                    z[6*(i-1)+6-1] = 64.0*360.000;
                }
                this.model.dstate = z;
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
