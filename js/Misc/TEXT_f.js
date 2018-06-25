/* autogenerated from "macros/Misc/TEXT_f.sci" */
function TEXT_f() {
    TEXT_f.prototype.define = function TEXT_f() {
        font = 2;
        siz = 1;
        model = scicos_model();
        model.sim = "text";
        model.rpar = "Text";
        model.ipar = [[font],[siz]];
        exprs = [["Text"],[string(font)],[string(siz)]];
        graphics = scicos_graphics();
        graphics.orig = [0,0];
        graphics.sz = [2,1];
        graphics.exprs = exprs;
        x = mlist(["Text","graphics","model","void","gui"],graphics,model," ","TEXT_f");
    }
    TEXT_f.prototype.details = function TEXT_f() {
    }
    TEXT_f.prototype.get = function TEXT_f() {
    }
    TEXT_f.prototype.set = function TEXT_f() {
        x = arg1;
        graphics = arg1.graphics;
        orig = graphics.orig;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")==1) {
        exprs = [[exprs],["3"],["1"]];
}
        while (true) {
        [ok,txt,font,siz,exprs] = scicos_getvalue("Set Text block parameters",[["Text"],["Font number"],["Font size"]],list("str",-1,"vec",1,"vec",1),exprs);
        if (!ok) {
break;
}
        if (font<=0||font>6) {
message("Font number must be greater than 0 and less than 7");
        ok = false;
}
        if (siz<0) {
message("Font size must be positive");
        ok = false;
}
        if (ok) {
        graphics.exprs = exprs;
        gh_winpal = gca();
        default_font_style = gh_winpal.font_style;
        default_font_size = gh_winpal.font_size;
        default_font_color = gh_winpal.font_color;
        gh_winpal.font_style = font;
        gh_winpal.font_size = siz;
        r = xstringl(0,0,exprs[1-1],evstr(exprs[2-1]),evstr(exprs[3-1]));
        gh_winpal.font_style = default_font_style;
        gh_winpal.font_size = default_font_size;
        gh_winpal.font_color = default_font_color;
        sz = r.slice(3-1,4);
        graphics.sz = sz;
        x.graphics = graphics;
        ipar = [[font],[siz]];
        model.rpar = txt;
        model.ipar = ipar;
        x.model = model;
break;
}
}
    }
}
