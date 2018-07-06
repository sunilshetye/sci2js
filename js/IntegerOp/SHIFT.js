/* autogenerated from "macros/IntegerOp/SHIFT.sci" */
function SHIFT() {
    SHIFT.prototype.define = function SHIFT() {
        sgn = [[0],[0]];
        OPER = 0;
        model = scicos_model();
        model.sim = list("shift_32_LA",4);
        model.in1 = -1;
        model.out = -1;
        model.in2 = -2;
        model.out2 = -2;
        model.intyp = 3;
        model.outtyp = 3;
        model.rpar = [];
        model.ipar = sgn;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[sci2exp(3)],[sci2exp(0)],[sci2exp(0)]];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SHIFT.prototype.details = function SHIFT() {
        return this.x;
    }
    SHIFT.prototype.get = function SHIFT() {
        var options = {
            Datatype:[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),this.Datatype],
            nb:["Number of Bits to Shift Left (Negative number to shift right)",this.nb],
            np:["Shift Type (0:Arithmetic, 1:Circular)",this.np],
        }
        return options;
    }
    SHIFT.prototype.set = function SHIFT() {
        this.Datatype = arguments[0]["Datatype"]
        this.nb = arguments[0]["nb"]
        this.np = arguments[0]["np"]
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.Datatype,this.nb,this.np,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","SHIFT")],[" "],["Shift/Rotates bits"]],[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),"Number of Bits to Shift Left (Negative number to shift right)","Shift Type (0:Arithmetic, 1:Circular)"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if ((this.np!=0&&this.np!=1)) {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Shift Type",this.np),msprintf("Must be in the interval %s.","[0, 1]"));
                ok = false;
            }
            it = this.Datatype;
            ot = this.Datatype;
            if ((this.Datatype==3||this.Datatype==6)) {
                if (this.nb>0) {
                    switch (this.np) {
                    case 0:
                        model.sim = list("shift_32_LA",4);
                    case 1:
                        model.sim = list("shift_32_LC",4);
                    }
                } else if (this.nb<0) {
                    switch (this.np) {
                    case 0:
                        switch (this.Datatype) {
                        case 3:
                            model.sim = list("shift_32_RA",4);
                        case 6:
                            model.sim = list("shift_u32_RA",4);
                        }
                    case 1:
                        model.sim = list("shift_32_RC",4);
                    }
                }
            } else if ((this.Datatype==4||this.Datatype==7)) {
                if (this.nb>0) {
                    switch (this.np) {
                    case 0:
                        model.sim = list("shift_16_LA",4);
                    case 1:
                        model.sim = list("shift_16_LC",4);
                    }
                } else if (this.nb<0) {
                    switch (this.np) {
                    case 0:
                        switch (this.Datatype) {
                        case 4:
                            model.sim = list("shift_16_RA",4);
                        case 7:
                            model.sim = list("shift_u16_RA",4);
                        }
                    case 1:
                        model.sim = list("shift_16_RC",4);
                    }
                }
            } else if ((this.Datatype==5||this.Datatype==8)) {
                if (this.nb>0) {
                    switch (this.np) {
                    case 0:
                        model.sim = list("shift_8_LA",4);
                    case 1:
                        model.sim = list("shift_8_LC",4);
                    }
                } else if (this.nb<0) {
                    switch (this.np) {
                    case 0:
                        switch (this.Datatype) {
                        case 5:
                            model.sim = list("shift_8_RA",4);
                        case 8:
                            model.sim = list("shift_u8_RA",4);
                        }
                    case 1:
                        model.sim = list("shift_8_RC",4);
                    }
                }
            } else {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Data Type",this.Datatype),msprintf("Must be in the interval %s.","[3, 8]"));
                ok = false;
            }
            if (ok) {
                [model,graphics,ok] = set_io(model,graphics,list([-1,-2],it),list([-1,-2],ot),[],[]);
            }
            if (ok) {
                model.ipar = this.nb;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
