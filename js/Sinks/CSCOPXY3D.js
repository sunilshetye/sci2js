/* autogenerated from "macros/Sinks/CSCOPXY3D.sci" */
function CSCOPXY3D() {
    CSCOPXY3D.prototype.define = function CSCOPXY3D() {
        this.win = -1;
        this.clrs = [[1],[2],[3],[4],[5],[6],[7],[13]];
        this.siz = [[1],[1],[1],[1],[1],[1],[1],[1]];
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.N = 2;
        this.param3ds = [[50],[280]];
        this.vec_x = [[-15],[15]];
        this.vec_y = [[-15],[15]];
        this.vec_z = [[-15],[15]];
        this.nbr_curves = 1;
        model = scicos_model();
        model.sim = list("cscopxy3d",4);
        model.in1 = [[1],[1],[1]];
        model.in2 = [[1],[1],[1]];
        model.intyp = [[1],[1],[1]];
        model.evtin = 1;
        model.rpar = [[this.vec_x.slice()],[this.vec_y.slice()],[this.vec_z.slice()],[this.param3ds.slice()]];
        model.ipar = [[this.win],[8],[this.N],[this.clrs.slice()],[this.siz.slice()],[8],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]];
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = [[string(this.nbr_curves)],[strcat(string(this.clrs)," ")],[strcat(string(this.siz)," ")],[string(this.win)],[sci2exp([])],[sci2exp(this.wdim)],[strcat(string(this.vec_x)," ")],[strcat(string(this.vec_y)," ")],[strcat(string(this.vec_z)," ")],[strcat(string(this.param3ds)," ")],[string(this.N)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPXY3D.prototype.details = function CSCOPXY3D() {
        return this.x;
    }
    CSCOPXY3D.prototype.get = function CSCOPXY3D() {
        var options = {
            nbr_curves:["Number of curves",this.nbr_curves],
            clrs:["color (>0) or mark (<0)",this.clrs.toString().replace(/,/g," ")],
            siz:["Line or Mark Size",this.siz.toString().replace(/,/g," ")],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            vec_x:["Xmin and Xmax",this.vec_x.toString().replace(/,/g," ")],
            vec_y:["Ymin and Ymax",this.vec_y.toString().replace(/,/g," ")],
            vec_z:["Zmin and Zmax",this.vec_z.toString().replace(/,/g," ")],
            param3ds:["Alpha and Theta",this.param3ds.toString().replace(/,/g," ")],
            N:["Buffer size",this.N],
        }
        return options;
    }
    CSCOPXY3D.prototype.set = function CSCOPXY3D() {
        this.nbr_curves = parseFloat(arguments[0]["nbr_curves"])
        this.clrs = inverse(arguments[0]["clrs"])
        this.siz = inverse(arguments[0]["siz"])
        this.win = parseFloat(arguments[0]["win"])
        this.wpos = inverse(arguments[0]["wpos"])
        this.wdim = inverse(arguments[0]["wdim"])
        this.vec_x = inverse(arguments[0]["vec_x"])
        this.vec_y = inverse(arguments[0]["vec_y"])
        this.vec_z = inverse(arguments[0]["vec_z"])
        this.param3ds = inverse(arguments[0]["param3ds"])
        this.N = parseFloat(arguments[0]["N"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.nbr_curves,this.clrs,this.siz,this.win,this.wpos,this.wdim,this.vec_x,this.vec_y,this.vec_z,this.param3ds,this.N,exprs] = scicos_getvalue("Set Scope parameters",["Number of curves","color (>0) or mark (<0)","Line or Mark Size","Output window number (-1 for automatic)","Output window position","Output window sizes","Xmin and Xmax","Ymin and Ymax","Zmin and Zmax","Alpha and Theta","Buffer size"],list("vec",1,"vec",-1,"vec",-1,"vec",1,"vec",-1,"vec",-1,"vec",2,"vec",2,"vec",2,"vec",2,"vec",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(this.clrs,"*")!=size(this.siz,"*")) {
                mess = [[mess],["Colors and Size must have same size"],[" "]];
                ok = false;
            }
            if (this.nbr_curves<=0) {
                mess = [[mess],["Number of curves cannot be negative or null"],[" "]];
                ok = false;
            }
            if (this.win<-1) {
                mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                ok = false;
            }
            if (this.N<1) {
                mess = [[mess],["Buffer size must be at least 1"],[" "]];
                ok = false;
            }
            if (this.N<2) {
                for (i=1;i<=size(this.clrs,"*");i+=1) {
                    if (this.clrs[i-1]>0) {
                        mess = [[mess],["Buffer size must be at least 2 or Change a color (must be >0)"],[" "]];
                        ok = false;
                    }
                }
            }
            if (this.vec_y[1-1]>=this.vec_y[2-1]) {
                mess = [[mess],["Ymax must be higher than Ymin"],[" "]];
                ok = false;
            }
            if (this.vec_x[1-1]>=this.vec_x[2-1]) {
                mess = [[mess],["Xmax must be higher than Xmin"],[" "]];
                ok = false;
            }
            if (this.vec_z[1-1]>=this.vec_z[2-1]) {
                mess = [[mess],["Zmax must be higher than Zmin"],[" "]];
                ok = false;
            }
            if (ok) {
                in1 = this.nbr_curves*ones(3,1);
                in2 = ones(3,1);
                [model,graphics,ok] = set_io(model,graphics,list([in1,in2],ones(3,1)),list(),ones(1,1),[]);
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                rpar = [[this.vec_x.slice()],[this.vec_y.slice()],[this.vec_z.slice()],[this.param3ds.slice()]];
                size_siz = size(this.siz,"*");
                ipar = [[this.win],[size_siz],[this.N],[this.clrs.slice()],[this.siz.slice()],[1],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]];
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
