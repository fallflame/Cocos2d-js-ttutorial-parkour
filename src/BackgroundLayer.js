/**
 * Created by FallFlame on 14/12/24.
 */

var BackgroundLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },

    init: function(){
        this._super();
        var winsize = cc.director.getWinSize();

        var centerPos = cc.p(winsize.width / 2, winsize.height / 2);
        var spriteBG = new cc.Sprite(res.PlayBG_png);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);
    }
});