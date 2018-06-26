/* autogenerated from "macros/IntegerOp/SRFLIPFLOP.sci" */
function SRFLIPFLOP() {
    SRFLIPFLOP.prototype.define = function SRFLIPFLOP() {
        scs_m = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["SRFLIPFLOP"],tol=[[0.0001],[0.000001],[1.000e-10],[100001],[0],[0],[0]],tf=60,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
        scs_m.objs[1-1] = scicos_block(gui="LOGIC",graphics=scicos_graphics(orig=[298.504,201.45067],sz=[40,40],flip=true,theta=0,exprs=[["[0 1;1 0;1 0;1 0;0 1;0 1;0 0;0 0]"],["1"]],pin=[[4],[10],[12]],pout=[[3],[8]],pein=[],peout=[],gr_i=[],id="",in_implicit=[["E"],["E"],["E"]],out_implicit=[["E"],["E"]]),model=scicos_model(sim=list("logic",4),in1=[[1],[1],[1]],in2=[[1],[1],[1]],intyp=[[5],[5],[5]],out=[[1],[1]],out2=[[1],[1]],outtyp=[[5],[5]],evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(int8([[0,1],[1,0],[1,0],[1,0],[0,1],[0,1],[0,0],[0,0]])),blocktype="c",firing=false,dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[2-1] = scicos_block(gui="DOLLAR_m",graphics=scicos_graphics(orig=[299.23733,254.25067],sz=[40,40],flip=false,theta=0,exprs=[["int8(0)"],["1"]],pin=6,pout=4,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("dollar4_m",4),in1=1,in2=1,intyp=5,out=1,out2=1,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(int8(0)),rpar=[],ipar=[],opar=list(),blocktype="d",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[3-1] = scicos_link(xx=[[347.07543],[363.03733],[363.03733]],yy=[[228.11733],[228.11733],[248.584]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[5,1,1]);
        scs_m.objs[4-1] = scicos_link(xx=[[290.6659],[272.104],[272.104],[289.93257]],yy=[[274.25067],[274.25067],[231.45067],[231.45067]],id="drawlink",thick=[0,0],ct=[1,1],from=[2,1,0],to=[1,1,1]);
        scs_m.objs[5-1] = scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[363.03733,248.584],sz=[0.3333333,0.3333333],flip=true,theta=0,exprs=[],pin=3,pout=[[6],[14]],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[["E"],["E"],["E"]]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[[-1],[-1],[-1]],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[6-1] = scicos_link(xx=[[363.03733],[363.03733],[344.95162]],yy=[[248.584],[274.25067],[274.25067]],id="drawlink",thick=[0,0],ct=[1,1],from=[5,1,0],to=[2,1,1]);
        scs_m.objs[7-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[367.07543,204.784],sz=[20,20],flip=true,theta=0,exprs="2",pin=8,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[8-1] = scicos_link(xx=[[347.07543],[367.07543]],yy=[[214.784],[214.784]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,2,0],to=[7,1,1]);
        scs_m.objs[9-1] = scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[249.93257,211.45067],sz=[20,20],flip=true,theta=0,exprs="1",pin=[],pout=10,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[10-1] = scicos_link(xx=[[269.93257],[289.93257]],yy=[[221.45067],[221.45067]],id="drawlink",thick=[0,0],ct=[1,1],from=[9,1,0],to=[1,2,1]);
        scs_m.objs[11-1] = scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[249.93257,201.45067],sz=[20,20],flip=true,theta=0,exprs="2",pin=[],pout=12,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[12-1] = scicos_link(xx=[[269.93257],[289.93257]],yy=[[211.45067],[211.45067]],id="drawlink",thick=[0,0],ct=[1,1],from=[11,1,0],to=[1,3,1]);
        scs_m.objs[13-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[383.03733,238.584],sz=[20,20],flip=true,theta=0,exprs="1",pin=14,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[14-1] = scicos_link(xx=[[363.03733],[383.03733]],yy=[[248.584],[248.584]],id="drawlink",thick=[0,0],ct=[1,1],from=[5,2,0],to=[13,1,1]);
        model = scicos_model();
        model.sim = "csuper";
        model.in1 = [[1],[1]];
        model.in2 = [[1],[1]];
        model.out = [[1],[1]];
        model.out2 = [[1],[1]];
        model.intyp = [5,5];
        model.outtyp = [5,5];
        model.blocktype = "h";
        model.firing = false;
        model.dep_ut = [true,false];
        model.rpar = scs_m;
        gr_i = [];
        this.x = standard_define([2,3],model,[],gr_i);
        return new BasicBlock(this.x);
    }
    SRFLIPFLOP.prototype.details = function SRFLIPFLOP() {
        return this.x;
    }
    SRFLIPFLOP.prototype.get = function SRFLIPFLOP() {
    }
    SRFLIPFLOP.prototype.set = function SRFLIPFLOP() {
        for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
            o = arg1.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="DOLLAR_m") {
                path = i;
                break;
            }
        }
        newpar = list();
        xx = arg1.model.rpar.objs[path-1];
        exprs = xx.graphics.exprs[1-1];
        model = xx.model;
        init_old = model.odstate[1-1];
        while (true) {
            [ok,this.init,this.exprs0] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"SRFLIPFLOP")],[" "],[gettext("SR flip-flop")],[" "],[gettext("The \'Initial Value\' must be 0 or 1 of type int8")],[gettext("&nbsp;- Negative values are considered as int8(0)")],[gettext("&nbsp;- Positive values are considered as int8(1)")],[" "]],gettext("Initial Value"),list("vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.init<=0) {
                this.init = int8(0);
            } else if (this.init>0) {
                this.init = int8(1);
            }
            if (ok) {
                xx.graphics.exprs[1-1] = this.exprs0;
                model.odstate[1-1] = this.init;
                xx.model = model;
                arg1.model.rpar.objs[path-1] = xx;
                break;
            }
        }
        needcompile = 0;
        if (init_old!=this.init) {
            newpar[size(newpar)+1-1] = path;
            needcompile = 2;
        }
        this.x = arg1;
        y = needcompile;
        typ = newpar;
        return new BasicBlock(this.x);
    }
}
