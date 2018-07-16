/* autogenerated from "macros/Linear/GAINBLK.sci" */
function GAINBLK() {
    GAINBLK.prototype.define = function GAINBLK() {
        this.gain = 1;
        var in1 = -1;
        var out = -1;
        var in2 = -2;
        var out2 = -2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["gainblk"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([out]);
        this.model.in2 = new ScilabDouble([in2]);
        this.model.out2 = new ScilabDouble([out2]);
        this.model.rpar = new ScilabDouble([this.gain]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [strcat(sci2exp(this.gain))];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAINBLK\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    GAINBLK.prototype.details = function GAINBLK() {
        return this.x;
    }
    GAINBLK.prototype.get = function GAINBLK() {
        var options = {
            gain:["Gain",this.gain],
            over:["Do On Overflow(0=Nothing 1=Saturate 2=Error)",this.over],
        }
        return options;
    }
    GAINBLK.prototype.set = function GAINBLK() {
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==1) {
            this.exprs = [[this.exprs],[sci2exp(0)]];
        }
        while (true) {
            var ok = true;
            this.gain = parseFloat(arguments[0]["gain"]);
            this.over = arguments[0]["over"];
            this.exprs = inverse(arguments[0]["exprs"]);
            if (!ok) {
                break;
            }
            if (this.gain==[]) {
                message("Gain must have at least one element");
            } else {
                if (typeof(this.gain)=="constant") {
                    if (isreal(this.gain)) {
                        var it = 1;
                        var ot = 1;
                        this.model.sim = list(new ScilabString(["gainblk"]), new ScilabDouble([4]));
                        this.model.rpar = new ScilabDouble(this.gain.slice());
                        this.model.opar = list();
                    } else {
                        message("type is not supported");
                        var ok = false;
                    }
                } else {
                    if ((this.over==0)) {
                        if ((typeof(this.gain)=="int32")) {
                            var ot = 3;
                            this.model.sim = list(new ScilabString(["gainblk_i32n"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="int16")) {
                            var ot = 4;
                            this.model.sim = list(new ScilabString(["gainblk_i16n"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="int8")) {
                            var ot = 5;
                            this.model.sim = list(new ScilabString(["gainblk_i8n"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint32")) {
                            var ot = 6;
                            this.model.sim = list(new ScilabString(["gainblk_ui32n"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint16")) {
                            var ot = 7;
                            this.model.sim = list(new ScilabString(["gainblk_ui16n"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint8")) {
                            var ot = 8;
                            this.model.sim = list(new ScilabString(["gainblk_ui8n"]), new ScilabDouble([4]));
                        } else {
                            message("type is not supported.");
                            var ok = false;
                        }
                    } else if ((this.over==1)) {
                        if ((typeof(this.gain)=="int32")) {
                            var ot = 3;
                            this.model.sim = list(new ScilabString(["gainblk_i32s"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="int16")) {
                            var ot = 4;
                            this.model.sim = list(new ScilabString(["gainblk_i16s"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="int8")) {
                            var ot = 5;
                            this.model.sim = list(new ScilabString(["gainblk_i8s"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint32")) {
                            var ot = 6;
                            this.model.sim = list(new ScilabString(["gainblk_ui32s"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint16")) {
                            var ot = 7;
                            this.model.sim = list(new ScilabString(["gainblk_ui16s"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint8")) {
                            var ot = 8;
                            this.model.sim = list(new ScilabString(["gainblk_ui8s"]), new ScilabDouble([4]));
                        } else {
                            message("type is not supported.");
                            var ok = false;
                        }
                    } else if ((this.over==2)) {
                        if ((typeof(this.gain)=="int32")) {
                            var ot = 3;
                            this.model.sim = list(new ScilabString(["gainblk_i32e"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="int16")) {
                            var ot = 4;
                            this.model.sim = list(new ScilabString(["gainblk_i16e"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="int8")) {
                            var ot = 5;
                            this.model.sim = list(new ScilabString(["gainblk_i8e"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint32")) {
                            var ot = 6;
                            this.model.sim = list(new ScilabString(["gainblk_ui32e"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint16")) {
                            var ot = 7;
                            this.model.sim = list(new ScilabString(["gainblk_ui16e"]), new ScilabDouble([4]));
                        } else if ((typeof(this.gain)=="uint8")) {
                            var ot = 8;
                            this.model.sim = list(new ScilabString(["gainblk_ui8e"]), new ScilabDouble([4]));
                        } else {
                            message("type is not an integer.");
                            var ok = false;
                        }
                    } else {
                        message("Do on Overflow must be 0,1,2");
                        var ok = false;
                    }
                    this.model.rpar = new ScilabDouble([]);
                    this.model.opar = list(this.gain.slice());
                }
                if (ok) {
                    var tmpvar0 = size(this.gain);
                    var out = tmpvar0[0];
                    var in1 = tmpvar0[1];
                    if (out*in1!=1) {
                        var tmpvar1 = set_io(this.model,this.graphics,list([in1,-1],ot),list([out,-1],ot),[],[]);
                        this.model = tmpvar1[0];
                        this.graphics = tmpvar1[1];
                        var ok = tmpvar1[2];
                    } else {
                        var tmpvar2 = set_io(this.model,this.graphics,list([-1,-2],ot),list([-1,-2],ot),[],[]);
                        this.model = tmpvar2[0];
                        this.graphics = tmpvar2[1];
                        var ok = tmpvar2[2];
                    }
                }
                if (ok) {
                    this.graphics.exprs = new ScilabDouble(this.exprs);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
