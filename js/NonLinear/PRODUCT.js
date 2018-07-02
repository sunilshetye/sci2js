/* autogenerated from "macros/NonLinear/PRODUCT.sci" */
function PRODUCT() {
    PRODUCT.prototype.define = function PRODUCT() {
        this.sgn = [[1],[-1]];
        model = scicos_model();
        model.sim = list("product",4);
        model.in1 = [[-1],[-1]];
        model.out = -1;
        model.ipar = this.sgn;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = sci2exp(this.sgn);
        gr_i = [];
        this.x = standard_define([2,3],model,exprs,gr_i);
        return new Product(this.x);
    }
    PRODUCT.prototype.details = function PRODUCT() {
        return this.x;
    }
    PRODUCT.prototype.get = function PRODUCT() {
    }
    PRODUCT.prototype.set = function PRODUCT() {
        this.sgn = parseFloat((arguments[0]["sgn"]))
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.sgn,exprs] = scicos_getvalue([["         Set multiplication block parameters"],["(multiplication is set with + 1, division with -1)"],[""]],"Number of inputs or sign vector",list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.sgn = this.sgn.slice();
            if (size(this.sgn,1)==1) {
                if (this.sgn<1) {
                    message("Number of inputs must be > 0");
                    ok = false;
                } else if (this.sgn==1) {
                    in1 = -1;
                    this.sgn = [];
                    nout = 1;
                } else {
                    in1 = -ones(this.sgn,1);
                    this.sgn = ones(this.sgn,1);
                    nout = -1;
                }
            } else {
                if (!and(abs(this.sgn)==1)) {
                    message("Signs can only be +1 or -1");
                    ok = false;
                } else {
                    in1 = -ones(size(this.sgn,1),1);
                    nout = -1;
                }
            }
            if (ok) {
                [model,graphics,ok] = check_io(model,graphics,in1,nout,[],[]);
            }
            if (ok) {
                model.ipar = this.sgn;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new Product(this.x);
    }
}
