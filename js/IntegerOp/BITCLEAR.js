/* autogenerated from "macros/IntegerOp/BITCLEAR.sci" */
function BITCLEAR() {
    BITCLEAR.prototype.define = function BITCLEAR() {
        model = scicos_model();
        model.sim = list("bit_clear_32",4);
        model.in1 = 1;
        model.in2 = 1;
        model.out = 1;
        model.out2 = 1;
        model.intyp = 3;
        model.outtyp = 3;
        model.opar = list(int32(0));
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[sci2exp(3)],[sci2exp(0)]];
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    BITCLEAR.prototype.details = function BITCLEAR() {
        return this.x;
    }
    BITCLEAR.prototype.get = function BITCLEAR() {
    }
    BITCLEAR.prototype.set = function BITCLEAR() {
        this.Datatype = parseFloat((arguments[0]["Datatype"]))
        this.bit = parseFloat((arguments[0]["bit"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.Datatype,this.bit,exprs] = scicos_getvalue([[msprintf("Set %s block parameters","BITCLEAR")],[" "],["Clear a bit"],[" "]],[msprintf("Data Type %s","(3:int32, 4:int16, 5:int8, ...)"),"Index of Bit (0 is least significant)"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            in1 = [model.in1,model.in2];
            if (floor(this.bit)!=this.bit) {
                block_parameter_error(msprintf("Wrong type for \'%s\' parameter: %5.1f.","Index of Bit",this.bit),"Must be integer.");
                ok = false;
            } else if ((this.Datatype==3)||(this.Datatype==6)) {
                if (this.bit>31||this.bit<0) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Index of Bit",this.bit),msprintf("Must be in the interval %s.","[0, 31]"));
                    ok = false;
                } else {
                    this.bit = uint32(this.bit);
                    n = (2^32-1)-2^this.bit;
                    n = uint32(n);
                    model.sim = list("bit_clear_32",4);
                }
            } else if ((this.Datatype==4)||(this.Datatype==7)) {
                if (this.bit>15||this.bit<0) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Index of Bit",this.bit),msprintf("Must be in the interval %s.","[0, 15]"));
                    ok = false;
                } else {
                    this.bit = uint16(this.bit);
                    n = (2^16-1)-2^this.bit;
                    n = uint16(n);
                    model.sim = list("bit_clear_16",4);
                }
            } else if ((this.Datatype==5)||(this.Datatype==8)) {
                if (this.bit>7||this.bit<0) {
                    block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Index of Bit",this.bit),msprintf("Must be in the interval %s.","[0, 7]"));
                    ok = false;
                } else {
                    this.bit = uint8(this.bit);
                    n = (2^8-1)-2^this.bit;
                    n = uint8(n);
                    model.sim = list("bit_clear_8",4);
                }
            } else {
                block_parameter_error(msprintf("Wrong value for \'%s\' parameter: %d.","Data Type",this.Datatype),msprintf("Must be in the interval %s.","[3, 8]"));
                ok = false;
            }
            if (ok) {
                it = this.Datatype;
                ot = this.Datatype;
                out = [1,1];
                [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                model.opar = list(n);
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
