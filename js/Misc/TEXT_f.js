/* autogenerated from "macros/Misc/TEXT_f.sci" */
function TEXT_f() {
    TEXT_f.prototype.define = function TEXT_f() {
        this.font = 2;
        this.siz = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["text"]);
        this.model.rpar = new ScilabString(["Text"]);
        this.model.ipar = new ScilabDouble([this.font],[this.siz]);
        this.exprs = [["Text"],[string(this.font)],[string(this.siz)]];
        this.graphics = scicos_graphics();
        this.graphics.orig = new ScilabDouble([0,0]);
        this.graphics.sz = new ScilabDouble([2,1]);
        this.graphics.exprs = new ScilabDouble(this.exprs);
        this.x = mlist(["Text","graphics","model","void","gui"],this.graphics,this.model," ","TEXT_f");
        return new TextBlock(this.x);
    }
    TEXT_f.prototype.details = function TEXT_f() {
        return this.x;
    }
    TEXT_f.prototype.get = function TEXT_f() {
        var options = {
            txt:["Text",this.txt],
            font:["Font number",this.font],
            siz:["Font size",this.siz],
        }
        return options;
    }
    TEXT_f.prototype.set = function TEXT_f() {
        var orig = this.graphics.orig;
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==1) {
            this.exprs = [[this.exprs],["3"],["1"]];
        }
        while (true) {
            var ok = true;
            this.txt = arguments[0]["txt"];
            this.font = parseFloat(arguments[0]["font"]);
            this.siz = parseFloat(arguments[0]["siz"]);
            this.exprs = inverse(arguments[0]["exprs"]);
            if (!ok) {
                break;
            }
            if (this.font<=0||this.font>6) {
                message("Font number must be greater than 0 and less than 7");
                var ok = false;
            }
            if (this.siz<0) {
                message("Font size must be positive");
                var ok = false;
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble(this.exprs);
                var gh_winpal = gca();
                var default_font_style = gh_winpal.font_style;
                var default_font_size = gh_winpal.font_size;
                var default_font_color = gh_winpal.font_color;
                gh_winpal.font_style = this.font;
                gh_winpal.font_size = this.siz;
                var r = xstringl(0,0,this.exprs[1-1],evstr(this.exprs[2-1]),evstr(this.exprs[3-1]));
                gh_winpal.font_style = default_font_style;
                gh_winpal.font_size = default_font_size;
                gh_winpal.font_color = default_font_color;
                var sz = r.slice(3-1,4);
                this.graphics.sz = new ScilabDouble(sz);
                this.x.graphics = this.graphics;
                var ipar = [[this.font],[this.siz]];
                this.model.rpar = new ScilabDouble([this.txt]);
                this.model.ipar = new ScilabDouble(ipar);
                this.x.model = this.model;
                break;
            }
        }
        return new TextBlock(this.x);
    }
}
