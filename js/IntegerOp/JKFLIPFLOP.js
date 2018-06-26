/* autogenerated from "macros/IntegerOp/JKFLIPFLOP.sci" */
function JKFLIPFLOP() {
    JKFLIPFLOP.prototype.define = function JKFLIPFLOP() {
        scs_m = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["JKFLIPFLOP"],tol=[[0.0001],[0.000001],[1.000e-10],[100001],[0],[0],[0]],tf=60,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
        scs_m.objs[1-1] = scicos_block(gui="DOLLAR_m",graphics=scicos_graphics(orig=[299.96961,261.584],sz=[40,40],flip=false,theta=0,exprs=[["int8(0)"],["1"]],pin=7,pout=5,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("dollar4_m",4),in1=1,in2=1,intyp=5,out=1,out2=1,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(int8(0)),rpar=[],ipar=[],opar=list(),blocktype="d",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1 = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["EDGE_TRIGGER","./"],tol=[[0.0001],[0.000001],[1.000e-10],[100001],[0],[0],[0]],tf=30,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
        scs_m_1.objs[1-1] = scicos_block(gui="EDGETRIGGER",graphics=scicos_graphics(orig=[288.58631,257.1131],sz=[60,40],flip=true,theta=0,exprs="-1",pin=5,pout=3,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("edgetrig",4),in1=1,in2=[],intyp=1,out=1,out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=0,odstate=list(),rpar=[],ipar=-1,opar=list(),blocktype="c",firing=[],dep_ut=[true,false],label="",nzcross=1,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[2-1] = scicos_block(gui="IFTHEL_f",graphics=scicos_graphics(orig=[388.28869,247.1131],sz=[60,60],flip=true,theta=0,exprs=[["0"],["0"]],pin=3,pout=[],pein=[],peout=[[7],[0]],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim=list("ifthel",-1),in1=1,in2=[],intyp=1,out=[],out2=1,outtyp=[],evtin=[],evtout=[[1],[1]],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="l",firing=[-1,-1],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[3-1] = scicos_link(xx=[[357.15774],[362.99107],[379.71726]],yy=[[277.1131],[277.1131],[277.1131]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[2,1,1]);
        scs_m_1.objs[4-1] = scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[240.01488,267.1131],sz=[20,20],flip=true,theta=0,exprs="1",pin=[],pout=5,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[5-1] = scicos_link(xx=[[260.01488],[280.01488]],yy=[[277.1131],[277.1131]],id="drawlink",thick=[0,0],ct=[1,1],from=[4,1,0],to=[1,1,1]);
        scs_m_1.objs[6-1] = scicos_block(gui="CLKOUTV_f",graphics=scicos_graphics(orig=[398.28869,181.39881],sz=[20,30],flip=true,theta=0,exprs="1",pin=[],pout=[],pein=7,peout=[],gr_i=[],id="",in_implicit=[],out_implicit=[]),model=scicos_model(sim="output",in1=[],in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=1,evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="d",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[7-1] = scicos_link(xx=[[408.28869],[408.28869]],yy=[[241.39881],[211.39881]],id="drawlink",thick=[0,0],ct=[5,-1],from=[2,1,0],to=[6,1,1]);
        scs_m.objs[2-1] = scicos_block(gui="EDGE_TRIGGER",graphics=scicos_graphics(orig=[292.52452,323.54888],sz=[60,40],flip=true,theta=0,exprs=[],pin=14,pout=[],pein=[],peout=8,gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="csuper",in1=-1,in2=[],intyp=1,out=[],out2=[],outtyp=1,evtin=[],evtout=1,state=[],dstate=[],odstate=list(),rpar=scs_m_1,ipar=[],opar=list(),blocktype="h",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[3-1] = scicos_block(gui="LOGIC",graphics=scicos_graphics(orig=[302.79613,202.52782],sz=[40,40],flip=true,theta=0,exprs=[["[0;1;1;1;0;0;1;0]"],["0"]],pin=[[5],[16],[18]],pout=4,pein=8,peout=[],gr_i=[],id="",in_implicit=[["E"],["E"],["E"]],out_implicit="E"),model=scicos_model(sim=list("logic",4),in1=[[1],[1],[1]],in2=[[1],[1],[1]],intyp=[[5],[5],[5]],out=1,out2=1,outtyp=5,evtin=1,evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(int8([[0],[1],[1],[1],[0],[0],[1],[0]])),blocktype="c",firing=false,dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[4-1] = scicos_link(xx=[[351.36756],[368.82793],[368.82793]],yy=[[222.52782],[222.52782],[223.06473]],id="drawlink",thick=[0,0],ct=[1,1],from=[3,1,0],to=[10,1,1]);
        scs_m.objs[5-1] = scicos_link(xx=[[291.39818],[274.18235],[274.18235],[294.2247]],yy=[[281.584],[281.584],[232.52782],[232.52782]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[3,1,1]);
        scs_m.objs[6-1] = scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[368.82793,243.45067],sz=[0.3333333,0.3333333],flip=true,theta=0,exprs=[],pin=11,pout=[[7],[20]],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[["E"],["E"],["E"]]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[[-1],[-1],[-1]],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[7-1] = scicos_link(xx=[[368.82793],[368.82793],[345.68389]],yy=[[243.45067],[281.584],[281.584]],id="drawlink",thick=[0,0],ct=[1,1],from=[6,1,0],to=[1,1,1]);
        scs_m.objs[8-1] = scicos_link(xx=[[322.52452],[374.69743],[374.69743],[322.79613]],yy=[[317.8346],[317.8346],[248.24211],[248.24211]],id="drawlink",thick=[0,0],ct=[5,-1],from=[2,1,0],to=[3,1,1]);
        scs_m.objs[9-1] = scicos_block(gui="LOGICAL_OP",graphics=scicos_graphics(orig=[377.63217,159.25363],sz=[60,40],flip=true,theta=0,exprs=[["1"],["5"],["5"],["0"]],pin=12,pout=22,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("logicalop_i8",4),in1=-1,in2=-2,intyp=5,out=-1,out2=-2,outtyp=5,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[[5],[0]],opar=list(),blocktype="c",firing=[],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[10-1] = scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[[368.82793],[223.06473]],sz=[0.3333333,0.3333333],flip=true,theta=0,exprs=[],pin=4,pout=[[11],[12]],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[["E"],["E"],["E"]]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[[-1],[-1],[-1]],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[11-1] = scicos_link(xx=[[368.82793],[368.82793]],yy=[[223.06473],[243.45067]],id="drawlink",thick=[0,0],ct=[1,1],from=[10,1,0],to=[6,1,1]);
        scs_m.objs[12-1] = scicos_link(xx=[[368.82793],[368.82793],[369.06074]],yy=[[223.06473],[177.7867],[179.25363]],id="drawlink",thick=[0,0],ct=[1,1],from=[10,2,0],to=[9,1,1]);
        scs_m.objs[13-1] = scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[243.95309,333.54888],sz=[20,20],flip=true,theta=0,exprs="2",pin=[],pout=14,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[14-1] = scicos_link(xx=[[263.95309],[283.95309]],yy=[[343.54888],[343.54888]],id="drawlink",thick=[0,0],ct=[1,1],from=[13,1,0],to=[2,1,1]);
        scs_m.objs[15-1] = scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[254.2247,212.52782],sz=[20,20],flip=true,theta=0,exprs="1",pin=[],pout=16,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[16-1] = scicos_link(xx=[[274.2247],[294.2247]],yy=[[222.52782],[222.52782]],id="drawlink",thick=[0,0],ct=[1,1],from=[15,1,0],to=[3,2,1]);
        scs_m.objs[17-1] = scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[254.2247,202.52782],sz=[20,20],flip=true,theta=0,exprs="3",pin=[],pout=18,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=3,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[18-1] = scicos_link(xx=[[274.2247],[294.2247]],yy=[[212.52782],[212.52782]],id="drawlink",thick=[0,0],ct=[1,1],from=[17,1,0],to=[3,3,1]);
        scs_m.objs[19-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[388.82793,233.45067],sz=[20,20],flip=true,theta=0,exprs="1",pin=20,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[20-1] = scicos_link(xx=[[368.82793],[388.82793]],yy=[[243.45067],[243.45067]],id="drawlink",thick=[0,0],ct=[1,1],from=[6,2,0],to=[19,1,1]);
        scs_m.objs[21-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[466.2036,169.25363],sz=[20,20],flip=true,theta=0,exprs="2",pin=22,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=2,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m.objs[22-1] = scicos_link(xx=[[446.2036],[466.2036]],yy=[[179.25363],[179.25363]],id="drawlink",thick=[0,0],ct=[1,1],from=[9,1,0],to=[21,1,1]);
        model = scicos_model();
        model.sim = "csuper";
        model.in1 = [[1],[1],[1]];
        model.in2 = [[1],[1],[1]];
        model.out = [[1],[1]];
        model.out2 = [[1],[1]];
        model.intyp = [5,1,5];
        model.outtyp = [5,5];
        model.blocktype = "h";
        model.firing = false;
        model.dep_ut = [true,false];
        model.rpar = scs_m;
        gr_i = [];
        this.x = standard_define([2,3],model,[],gr_i);
        return new BasicBlock(this.x);
    }
    JKFLIPFLOP.prototype.details = function JKFLIPFLOP() {
        return this.x;
    }
    JKFLIPFLOP.prototype.get = function JKFLIPFLOP() {
    }
    JKFLIPFLOP.prototype.set = function JKFLIPFLOP() {
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
            [ok,this.init,this.exprs0] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"JKFLIPFLOP")],[" "],[gettext("JK flip-flop")],[" "],[gettext("The \'Initial Value\' must be 0 or 1 of type int8")],[gettext("&nbsp;- Negative values are considered as int8(0)")],[gettext("&nbsp;- Positive values are considered as int8(1)")],[" "]],gettext("Initial Value"),list("vec",1),exprs);
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
            newpar[size(newpar)+1-1] = 1;
            needcompile = 2;
        }
        this.x = arg1;
        y = needcompile;
        typ = newpar;
        return new BasicBlock(this.x);
    }
}
