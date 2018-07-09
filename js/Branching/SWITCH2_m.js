/* autogenerated from "macros/Branching/SWITCH2_m.sci" */
function SWITCH2_m() {
    SWITCH2_m.prototype.define = function SWITCH2_m() {
        ipar = [0];
        this.nzz = 1;
        rpar = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString("switch2_m"),new ScilabDouble(4));
        this.model.in1 = [[-1],[1],[-1]];
        this.model.in2 = [[-2],[1],[-2]];
        this.model.intyp = new ScilabDouble(1);
        this.model.out = new ScilabDouble(-1);
        this.model.out2 = new ScilabDouble(-2);
        this.model.outtyp = new ScilabDouble(1);
        this.model.ipar = ipar;
        this.model.rpar = new ScilabDouble(rpar);
        this.model.nzcross = new ScilabDouble(this.nzz);
        this.model.nmode = new ScilabDouble(1);
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        exprs = [[sci2exp(1)],[string(ipar)],[string(rpar)],[string(this.nzz)]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SWITCH2_m.prototype.details = function SWITCH2_m() {
        return this.x;
    }
    SWITCH2_m.prototype.get = function SWITCH2_m() {
        var options = {
            ot:["Datatype (1=real double  2=complex 3=int32 ...)",this.ot],
            rule:["pass first input if: u2>=a (0), u2>a (1), u2~=a (2)",this.rule],
            thra:["threshold a",this.thra],
            nzz:["use zero crossing: yes (1), no (0)",this.nzz],
        }
        return options;
    }
    SWITCH2_m.prototype.set = function SWITCH2_m() {
        this.ot = arguments[0]["ot"]
        this.rule = parseFloat(arguments[0]["rule"])
        this.thra = arguments[0]["thra"]
        this.nzz = parseFloat(arguments[0]["nzz"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.ot,this.rule,this.thra,this.nzz,exprs] = scicos_getvalue("Set parameters",["Datatype (1=real double  2=complex 3=int32 ...)","pass first input if: u2>=a (0), u2>a (1), u2~=a (2)","threshold a","use zero crossing: yes (1), no (0)"],list("vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.rule = int(this.rule);
            if ((this.rule<0)) {
                this.rule = 0;
            }
            if ((this.rule>2)) {
                this.rule = 2;
            }
            graphics.exprs = exprs;
            this.model.ipar = new ScilabDouble(this.rule);
            this.model.rpar = new ScilabDouble(this.thra);
            if (this.nzz!=0) {
                this.model.nmode = new ScilabDouble(1);
                this.model.nzcross = new ScilabDouble(1);
            } else {
                this.model.nmode = new ScilabDouble(0);
                this.model.nzcross = new ScilabDouble(0);
            }
            if (((this.ot<1)||(this.ot>8))&&(this.ot!=-1)) {
                message("Datatype is not supported");
                ok = false;
            }
            if (ok) {
                it[1-1] = this.ot;
                it[2-1] = 1;
                it[3-1] = this.ot;
                in1 = [this.model.in1,this.model.in2];
                out = [this.model.out,this.model.out2];
                [model,graphics,ok] = set_io(this.model,graphics,list(in1,it),list(out,this.ot),[],[]);
            }
            if (ok) {
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
