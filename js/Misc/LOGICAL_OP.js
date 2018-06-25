/* autogenerated from "macros/Misc/LOGICAL_OP.sci" */
function LOGICAL_OP() {
    LOGICAL_OP.prototype.define = function LOGICAL_OP() {
        in1 = [[-1],[-1]];
        ipar = [0];
        nin = 2;
        model = scicos_model();
        model.sim = list("logicalop",4);
        model.in1 = in1;
        model.out = -1;
        model.ipar = ipar;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[string(nin)],[string(ipar)]];
        gr_i = [];
        x = standard_define([2,2],model,exprs,gr_i);
    }
    LOGICAL_OP.prototype.details = function LOGICAL_OP() {
    }
    LOGICAL_OP.prototype.get = function LOGICAL_OP() {
    }
    LOGICAL_OP.prototype.set = function LOGICAL_OP() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,1)==2) {
        exprs = [[exprs],[sci2exp(1)],[sci2exp(0)]];
}
        while (true) {
        [ok,nin,rule,Datatype,tp,exprs] = scicos_getvalue("Set parameters",[["number of inputs"],["Operator: AND (0), OR (1), NAND (2), NOR (3), XOR (4), NOT (5)","Datatype (1=double 3=int32 ...)"],["Bitwise Rule(0=No 1=yes)"]],list("vec",1,"vec",1,"vec",1,"vec",1),exprs);
        if (!ok) {
break;
}
        nin = int(nin);
        rule = int(rule);
        tp = int(tp);
        if (nin<1) {
message("Number of inputs must be >=1 ");
        ok = false;
        } else if ((rule<0)||(rule>5)) {
message("Incorrect operator "+string(rule)+" ; must be 0 to 5.");
        ok = false;
        } else if ((rule==5)&&(nin>1)) {
message("Only one input allowed for NOT operation");
        nin = 1;
        } else if (((Datatype==1)&&(tp!=0))) {
message("Bitwise Rule is only activated when Data type is integer");
        ok = false;
}
        if (ok) {
        if ((tp!=0)) {
        tp = 1;
}
        if (Datatype==1) {
        model.sim = list("logicalop",4);
        model.ipar = [rule];
        } else {
        if (Datatype==3) {
        model.sim = list("logicalop_i32",4);
        } else if (Datatype==4) {
        model.sim = list("logicalop_i16",4);
        } else if (Datatype==5) {
        model.sim = list("logicalop_i8",4);
        } else if (Datatype==6) {
        model.sim = list("logicalop_ui32",4);
        } else if (Datatype==7) {
        model.sim = list("logicalop_ui16",4);
        } else if (Datatype==8) {
        model.sim = list("logicalop_ui8",4);
        } else {
message("Datatype is not supported");
        ok = false;
}
        model.ipar = [[rule],[tp]];
}
        if (ok) {
        it = Datatype*ones(nin,1);
        ot = Datatype;
        in1 = [-ones(nin,1),-2*ones(nin,1)];
        if ((rule!=5)&&(nin==1)) {
        out = [1,1];
        [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
        } else {
        out = [-1,-2];
        [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
}
}
        if (ok) {
        if (rule==0) {
        label = "AND";
        } else if (rule==1) {
        label = "OR";
        } else if (rule==2) {
        label = "NAND";
        } else if (rule==3) {
        label = "NOR";
        } else if (rule==4) {
        label = "XOR";
        } else if (rule==5) {
        label = "NOT";
}
        graphics.exprs = exprs;
        graphics.style = ["blockWithLabel;displayedLabel="+label];
        x.graphics = graphics;
        x.model = model;
break;
}
}
}
    }
}
