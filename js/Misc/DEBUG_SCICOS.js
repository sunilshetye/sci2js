/* autogenerated from "macros/Misc/DEBUG_SCICOS.sci" */
function DEBUG_SCICOS() {
    DEBUG_SCICOS.prototype.define = function DEBUG_SCICOS() {
        this.x = DEBUG("define");
        return new BasicBlock(this.x);
    }
    DEBUG_SCICOS.prototype.details = function DEBUG_SCICOS() {
        return this.x;
    }
    DEBUG_SCICOS.prototype.get = function DEBUG_SCICOS() {
    }
    DEBUG_SCICOS.prototype.set = function DEBUG_SCICOS() {
        arg1.gui = "DEBUG";
        [this.x,y,typ] = DEBUG("set",arg1);
        return new BasicBlock(this.x);
    }
}
