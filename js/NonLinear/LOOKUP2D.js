/* autogenerated from "macros/NonLinear/LOOKUP2D.sci" */
function LOOKUP2D() {
    LOOKUP2D.prototype.define = function LOOKUP2D() {
        model = scicos_model();
        xx = [1:4];
        yy = [1:3];
        zz = [[4,5,6],[16,19,20],[10,18,23],[6,3,-1]];
        Method = 1;
        Graf = "n";
        Nx = length(xx);
        Ny = length(yy);
        model.sim = list("lookup2d",4);
        model.in1 = [[1],[1]];
        model.out = 1;
        model.rpar = [[xx.slice()],[yy.slice()],[zz.slice()]];
        model.ipar = [[Nx],[Ny],[Method]];
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = list(strcat(sci2exp(xx)),strcat(sci2exp(yy)),strcat(sci2exp(zz)),sci2exp(Method),Graf);
        gr_i = [];
        this.x = standard_define([2.5,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    LOOKUP2D.prototype.details = function LOOKUP2D() {
        return this.x;
    }
    LOOKUP2D.prototype.get = function LOOKUP2D() {
    }
    LOOKUP2D.prototype.set = function LOOKUP2D() {
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        ok = false;
        SaveExit = false;
        while (true) {
            Ask_again = false;
            [ok,xx,yy,zz,Method,graf,exprs] = scicos_getvalue("2D Lookup table parameters",[["Row index input values"],["Column index input values"],["Table data"],["Lookup method(1..5)"],["Launch graphic window(y/n)?"]],list("vec",-1,"vec",-1,"mat",[-1,-1],"vec",1,"str",1),exprs);
            if (!ok) {
                break;
            }
            mtd = int(Method);
            if (mtd<1) {
                mtd = 1;
            }
            if (mtd>6) {
                mtd = 6;
            }
            if (graf!="y"&&graf!="Y") {
                graf = "n";
            }
            exprs[5-1] = "n";
            exprs[4-1] = sci2exp(mtd);
            METHOD = getmethod(mtd);
            if (!Ask_again) {
                xx = xx.slice();
                yy = yy.slice();
                [nx,mx] = size(xx);
                [ny,my] = size(yy);
                [nz,mz] = size(zz);
                if (((nx<=1)||(ny<=1))) {
                    x_message("input row/column data size should be greater than one");
                    Ask_again = true;
                }
                if (!((nx==nz)&&(ny==mz))) {
                    x_message("incompatible size of x and y");
                    Ask_again = true;
                }
                [ok] = test_increasing(xx);
                if ((!ok)) {
                    x_message("Row input values must be monotonically increasing");
                    Ask_again = true;
                }
                [ok] = test_increasing(yy);
                if ((!ok)) {
                    x_message("Column input values must be monotonically increasing");
                    Ask_again = true;
                }
            }
            if (!Ask_again) {
                if ((graf=="Y"||graf=="y")) {
                    gh = gcf();
                    curwin = gh.figure_id;
                    save_curwin = curwin;
                    gh2 = scf();
                    curwin = max(winsid())+1;
                    plot3d(xx,yy,zz,35,45,"X@Y@Z",[5,2,4]);
                    curwin = save_curwin;
                    gh.figure_id = curwin;
                }
                model.rpar = [[xx.slice()],[yy.slice()],[zz.slice()]];
                model.ipar = [[nx],[ny],[mtd]];
                graphics.exprs = exprs;
                this.x.model = model;
                this.x.graphics = graphics;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
