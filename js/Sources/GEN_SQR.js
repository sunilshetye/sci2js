/* autogenerated from "macros/Sources/GEN_SQR.sci" */
function GEN_SQR() {
    GEN_SQR.prototype.define = function GEN_SQR() {
        scs_m_1 = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[-176.97473,421.18646,173.61587,524.41503,827,480,0,15,827,480,755,614,1.4],Title="SuperBlock",tol=[0.0001,0.000001,1.000e-10,100001,0,0],tf=100000,context=[["if typeof(Amin)<>typeof(Amax) then error(\'Minimum value and Maximum value must have the same type\');end"],["if and(rule<>[1;2]) then error(\'Initial Value must be 1 (for Min) or 2 (for Max)\');end"],["if Amin>Amax then error(\'Maximum value must be greater than the Minimum Value\');end"],["P=%pi/F"],[""]],void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
        scs_m_1.objs[1-1] = scicos_block(gui="Counter",graphics=scicos_graphics(orig=[18.229901,339.5057],sz=[60,40],flip=true,theta=0,exprs=[["1"],["2"],["rule"]],pin=[],pout=8,pein=16,peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("counter",4),in1=[],in2=[],intyp=1,out=1,out2=1,outtyp=1,evtin=1,evtout=[],state=[],dstate=0,odstate=list(),rpar=[],ipar=[[1],[2],[1]],opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[2-1] = scicos_block(gui="CONST_m",graphics=scicos_graphics(orig=[38.096074,293.82198],sz=[40,40],flip=true,theta=0,exprs="Amin",pin=[],pout=5,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("cstblk4_m",4),in1=[],in2=[],intyp=1,out=1,out2=1,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(-1),blocktype="d",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[3-1] = scicos_block(gui="CONST_m",graphics=scicos_graphics(orig=[37.378886,245.02389],sz=[40,40],flip=true,theta=0,exprs="Amax",pin=[],pout=6,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("cstblk4_m",4),in1=[],in2=[],intyp=1,out=1,out2=1,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(1),blocktype="d",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[4-1] = scicos_block(gui="SELECT_m",graphics=scicos_graphics(orig=[116.26954,269.42294],sz=[40,40],flip=true,theta=0,exprs=[["-1"],["2"],["1"]],pin=[[5],[6]],pout=14,pein=[[9],[10]],peout=[],gr_i=[],id="",in_implicit=[["E"],["E"]],out_implicit="E"),model=scicos_model(sim=list("selector_m",4),in1=[[-1],[-1]],in2=[[-2],[-2]],intyp=[[-1],[-1]],out=-1,out2=-2,outtyp=-1,evtin=[[1],[1]],evtout=[],state=[],dstate=1,odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[5-1] = scicos_link(xx=[[86.667502],[107.69811],[107.69811]],yy=[[313.82198],[313.82198],[296.0896]],id="drawlink",thick=[0,0],ct=[1,1],from=[2,1,0],to=[4,1,1]);
        scs_m_1.objs[6-1] = scicos_link(xx=[[85.950315],[107.69811],[107.69811]],yy=[[265.02389],[265.02389],[282.75627]],id="drawlink",thick=[0,0],ct=[1,1],from=[3,1,0],to=[4,2,1]);
        scs_m_1.objs[7-1] = scicos_block(gui="ESELECT_f",graphics=scicos_graphics(orig=[106.9461,339.7496],sz=[60,40],flip=true,theta=0,exprs=[["2"],["0"],["0"]],pin=8,pout=[],pein=[],peout=[[9],[10]],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim=list("eselect",-2),in1=1,in2=1,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[[1],[1]],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="l",firing=[[-1],[-1]],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[8-1] = scicos_link(xx=[[86.80133],[98.374671]],yy=[[359.5057],[359.7496]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[7,1,1]);
        scs_m_1.objs[9-1] = scicos_link(xx=[[126.9461],[129.60287]],yy=[[334.03532],[315.13722]],id="drawlink",thick=[0,0],ct=[5,-1],from=[7,1,0],to=[4,1,1]);
        scs_m_1.objs[10-1] = scicos_link(xx=[[146.9461],[142.93621]],yy=[[334.03532],[315.13722]],id="drawlink",thick=[0,0],ct=[5,-1],from=[7,2,0],to=[4,2,1]);
        scs_m_1.objs[11-1] = mlist("Deleted");
        scs_m_1.objs[12-1] = mlist("Deleted");
        scs_m_1.objs[13-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[184.40238,278.75198],sz=[20,20],flip=true,theta=0,exprs="1",pin=14,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=-2,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[14-1] = scicos_link(xx=[[164.84097],[184.40238]],yy=[[289.42294],[288.75198]],id="drawlink",thick=[0,0],ct=[1,1],from=[4,1,0],to=[13,1,1]);
        scs_m_1.objs[15-1] = scicos_block(gui="SampleCLK",graphics=scicos_graphics(orig=[18.313686,403.57431],sz=[60,40],flip=true,theta=0,exprs=[["F/2"],["0"]],pin=[],pout=[],pein=[],peout=16,gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="sampleclk",in1=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=[],evtout=1,state=[],dstate=[],odstate=list(),rpar=[[1/2],[0]],ipar=[],opar=list(),blocktype="d",firing=-1,dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[16-1] = scicos_link(xx=[[48.313686],[48.229901]],yy=[[403.57431],[385.21998]],id="drawlink",thick=[0,0],ct=[5,-1],from=[15,1,0],to=[1,1,1]);
        model = scicos_model();
        model.sim = "csuper";
        model.in1 = [];
        model.in2 = [];
        model.intyp = 1;
        model.out = -1;
        model.out2 = -2;
        model.outtyp = -1;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.odstate = list();
        model.rpar = scs_m_1;
        model.ipar = 1;
        model.opar = list();
        model.blocktype = "h";
        model.firing = [];
        model.dep_ut = [false,false];
        model.label = "";
        model.nzcross = 0;
        model.nmode = 0;
        model.equations = list();
        Amin = -1;
        Amax = 1;
        rule = 1;
        F = 1;
        exprs = [sci2exp(Amin),sci2exp(Amax),sci2exp(rule),sci2exp(F)];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    GEN_SQR.prototype.details = function GEN_SQR() {
        return this.x;
    }
    GEN_SQR.prototype.get = function GEN_SQR() {
    }
    GEN_SQR.prototype.set = function GEN_SQR() {
        y = this.needcompile;
        arg1.model.ipar = 1;
        typ = list();
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        Btitre = "Set GEN_SQR parameters";
        Exprs0 = [["Amin"],["Amax"],["rule"],["F"]];
        Bitems = [["Minimum Value"],["Maximum Value"],["Initial Value( 1= Minimum Value 2= Maximum Value)"],["Period (sec)"]];
        Ss = list("mat",[-1,-1],"mat",[-1,-1],"pol",-1,"pol",-1);
        scicos_context = struct();
        this.x = arg1;
        ok = false;
        while (!ok) {
            [ok,scicos_context.Amin,scicos_context.Amax,scicos_context.rule,scicos_context.F,exprs] = scicos_getvalue(Btitre,Bitems,Ss,exprs);
            if (!ok) {
                return;
            }
            PREVAR_scicos_context = scicos_context;
            sblock = this.x.model.rpar;
            [PREVAR_scicos_context,ierr] = script2var(sblock.props.context,PREVAR_scicos_context);
            if (ierr==0) {
                [sblock,%w,needcompile2,ok] = do_eval(sblock,list());
                if (ok) {
                    y = max(2,this.needcompile,needcompile2);
                    this.x.graphics.exprs = exprs;
                    this.x.model.rpar = sblock;
                    break;
                }
            } else {
                message(lasterror());
                ok = false;
            }
        }
        return new BasicBlock(this.x);
    }
}
