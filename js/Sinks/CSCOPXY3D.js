/* autogenerated from "macros/Sinks/CSCOPXY3D.sci" */
function CSCOPXY3D() {
    CSCOPXY3D.prototype.define = function CSCOPXY3D() {
        win = -1;
        clrs = [[1],[2],[3],[4],[5],[6],[7],[13]];
        siz = [[1],[1],[1],[1],[1],[1],[1],[1]];
        wdim = [[600],[400]];
        wpos = [[-1],[-1]];
        N = 2;
        param3ds = [[50],[280]];
        vec_x = [[-15],[15]];
        vec_y = [[-15],[15]];
        vec_z = [[-15],[15]];
        nbr_curves = 1;
        model = scicos_model();
        model.sim = list("cscopxy3d",4);
        model.in1 = [[1],[1],[1]];
        model.in2 = [[1],[1],[1]];
        model.intyp = [[1],[1],[1]];
        model.evtin = 1;
        model.rpar = [[vec_x.slice()],[vec_y.slice()],[vec_z.slice()],[param3ds.slice()]];
        model.ipar = [[win],[8],[N],[clrs.slice()],[siz.slice()],[8],[wpos.slice()],[wdim.slice()],[nbr_curves]];
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = [[string(nbr_curves)],[strcat(string(clrs)," ")],[strcat(string(siz)," ")],[string(win)],[sci2exp([])],[sci2exp(wdim)],[strcat(string(vec_x)," ")],[strcat(string(vec_y)," ")],[strcat(string(vec_z)," ")],[strcat(string(param3ds)," ")],[string(N)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPXY3D.prototype.details = function CSCOPXY3D() {
        return this.x;
    }
    CSCOPXY3D.prototype.get = function CSCOPXY3D() {
    }
    CSCOPXY3D.prototype.set = function CSCOPXY3D() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,nbr_curves,clrs,siz,win,wpos,wdim,vec_x,vec_y,vec_z,param3ds,N,exprs] = scicos_getvalue("Set Scope parameters",[["Number of curves"],["color (>0) or mark (<0)"],["Line or Mark Size"],["Output window number (-1 for automatic)"],["Output window position"],["Output window sizes"],["Xmin and Xmax"],["Ymin and Ymax"],["Zmin and Zmax"],["Alpha and Theta"],["Buffer size"]],list("vec",1,"vec",-1,"vec",-1,"vec",1,"vec",-1,"vec",-1,"vec",2,"vec",2,"vec",2,"vec",2,"vec",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (size(wpos,"*")!=0&&size(wpos,"*")!=2) {
                mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(wdim,"*")!=0&&size(wdim,"*")!=2) {
                mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(clrs,"*")!=size(siz,"*")) {
                mess = [[mess],["Colors and Size must have same size"],[" "]];
                ok = false;
            }
            if (nbr_curves<=0) {
                mess = [[mess],["Number of curves cannot be negative or null"],[" "]];
                ok = false;
            }
            if (win<-1) {
                mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                ok = false;
            }
            if (N<1) {
                mess = [[mess],["Buffer size must be at least 1"],[" "]];
                ok = false;
            }
            if (N<2) {
                for (i=1;i<=size(clrs,"*");i+=1) {
                    if (clrs[i-1]>0) {
                        mess = [[mess],["Buffer size must be at least 2 or Change a color (must be >0)"],[" "]];
                        ok = false;
                    }
                }
            }
            if (vec_y[1-1]>=vec_y[2-1]) {
                mess = [[mess],["Ymax must be higher than Ymin"],[" "]];
                ok = false;
            }
            if (vec_x[1-1]>=vec_x[2-1]) {
                mess = [[mess],["Xmax must be higher than Xmin"],[" "]];
                ok = false;
            }
            if (vec_z[1-1]>=vec_z[2-1]) {
                mess = [[mess],["Zmax must be higher than Zmin"],[" "]];
                ok = false;
            }
            if (ok) {
                in1 = nbr_curves*ones(3,1);
                in2 = ones(3,1);
                [model,graphics,ok] = set_io(model,graphics,list([in1,in2],ones(3,1)),list(),ones(1,1),[]);
                if (wpos==[]) {
                    wpos = [[-1],[-1]];
                }
                if (wdim==[]) {
                    wdim = [[-1],[-1]];
                }
                rpar = [[vec_x.slice()],[vec_y.slice()],[vec_z.slice()],[param3ds.slice()]];
                size_siz = size(siz,"*");
                ipar = [[win],[size_siz],[N],[clrs.slice()],[siz.slice()],[1],[wpos.slice()],[wdim.slice()],[nbr_curves]];
                model.rpar = rpar;
                model.ipar = ipar;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            } else {
                message(mess);
            }
        }
        return new BasicBlock(this.x);
    }
}
