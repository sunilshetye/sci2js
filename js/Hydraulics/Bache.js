/* autogenerated from "macros/Hydraulics/Bache.sci" */
function Bache() {
    Bache.prototype.define = function Bache() {
        in1 = 2;
        out = 3;
        model = scicos_model();
        model.in1 = [-transpose([1:in1])];
        model.out = [-transpose([1:out])];
        this.Patm = 1.013e5;
        this.A = 1;
        this.ze1 = 40;
        this.ze2 = 0;
        this.zs1 = 40;
        this.zs2 = 0;
        this.z0 = 30;
        this.T0 = 290;
        this.p_rho = 0;
        model.rpar = [[this.Patm],[this.A],[this.ze1],[this.ze2],[this.zs1],[this.zs2],[this.z0],[this.T0],[this.p_rho]];
        model.sim = "Bache";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "Bache";
        mo.inputs = ["Ce1","Ce2"];
        mo.outputs = ["Cs1","Cs2","yNiveau"];
        mo.parameters = list([["Patm"],["A"],["ze1"],["ze2"],["zs1"],["zs2"],["z0"],["T0"],["p_rho"]],[[this.Patm],[this.A],[this.ze1],[this.ze2],[this.zs1],[this.zs2],[this.z0],[this.T0],[this.p_rho]]);
        model.equations = mo;
        model.in1 = ones(size(mo.inputs,"*"),1);
        model.out = ones(size(mo.outputs,"*"),1);
        exprs = [[string(this.Patm)],[string(this.A)],[string(this.ze1)],[string(this.ze2)],[string(this.zs1)],[string(this.zs2)],[string(this.z0)],[string(this.T0)],[string(this.p_rho)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = [["I"],["I"]];
        this.x.graphics.out_implicit = [["I"],["I"],["E"]];
        return new BasicBlock(this.x);
    }
    Bache.prototype.details = function Bache() {
        return this.x;
    }
    Bache.prototype.get = function Bache() {
    }
    Bache.prototype.set = function Bache() {
        this.Patm = parseFloat((arguments[0]["Patm"]))
        this.A = parseFloat((arguments[0]["A"]))
        this.ze1 = parseFloat((arguments[0]["ze1"]))
        this.ze2 = parseFloat((arguments[0]["ze2"]))
        this.zs1 = parseFloat((arguments[0]["zs1"]))
        this.zs2 = parseFloat((arguments[0]["zs2"]))
        this.z0 = parseFloat((arguments[0]["z0"]))
        this.T0 = parseFloat((arguments[0]["T0"]))
        this.p_rho = parseFloat((arguments[0]["p_rho"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.Patm,this.A,this.ze1,this.ze2,this.zs1,this.zs2,this.z0,this.T0,this.p_rho,exprs] = scicos_getvalue("Parametres de la bache",["Pression dans le ciel de la bache : Patm (Pa)","Section de la bache : A (m2)","Altitude du piquage d entrée 1: ze1 (m)","Altitude du piquage d entrée 2: ze2 (m)","Altitude du piquage de sortie 1: zs1 (m)","Altitude du piquage de sortie 2: zs2 (m)","Altitude initiale du fluide : z0 (m)","Température initiale du fluide : T0 (K)","Si >0, masse volumique imposée du fluide : p_rho (kg/m3)"],list("vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            model.rpar = [[this.Patm],[this.A],[this.ze1],[this.ze2],[this.zs1],[this.zs2],[this.z0],[this.T0],[this.p_rho]];
            model.equations.parameters[2-1] = list(this.Patm,this.A,this.ze1,this.ze2,this.zs1,this.zs2,this.z0,this.T0,this.p_rho);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
