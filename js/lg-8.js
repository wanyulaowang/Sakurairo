/*! For license information please see lg-8.js.LICENSE.txt */
(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[7435],{9082:function(t){t.exports=function(){var t=function(){return(t=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function e(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<r;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,n++)o[n]=i[s];return o}var r={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",pinterest:!0,pinterestDropdownText:"Pinterest",additionalShareOptions:[],sharePluginStrings:{share:"Share"}};function o(t){return"//www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t.facebookShareUrl||window.location.href)}function n(t){var e=encodeURIComponent(t.twitterShareUrl||window.location.href);return"//twitter.com/intent/tweet?text="+t.tweetText+"&url="+e}function i(t){var e=t.pinterestText,r=encodeURIComponent(t.src);return"http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(t.pinterestShareUrl||window.location.href)+"&media="+r+"&description="+e}var s="lgAfterSlide";return function(){function a(e){return this.shareOptions=[],this.core=e,this.settings=t(t({},r),this.core.settings),this}return a.prototype.init=function(){this.settings.share&&(this.shareOptions=e(this.getDefaultShareOptions(),this.settings.additionalShareOptions),this.setLgShareMarkup(),this.core.outer.find(".lg-share .lg-dropdown").append(this.getShareListHtml()),this.core.LGel.on(s+".share",this.onAfterSlide.bind(this)))},a.prototype.getShareListHtml=function(){var t="";return this.shareOptions.forEach((function(e){t+=e.dropdownHTML})),t},a.prototype.setLgShareMarkup=function(){var t=this;this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.sharePluginStrings.share+'" aria-haspopup="true" aria-expanded="false" class="lg-share lg-icon">\n                <ul class="lg-dropdown" style="position: absolute;"></ul></button>'),this.core.outer.append('<div class="lg-dropdown-overlay"></div>'),this.core.outer.find(".lg-share").first().on("click.lg",(function(){t.core.outer.toggleClass("lg-dropdown-active"),t.core.outer.hasClass("lg-dropdown-active")?t.core.outer.attr("aria-expanded",!0):t.core.outer.attr("aria-expanded",!1)})),this.core.outer.find(".lg-dropdown-overlay").first().on("click.lg",(function(){t.core.outer.removeClass("lg-dropdown-active"),t.core.outer.attr("aria-expanded",!1)}))},a.prototype.onAfterSlide=function(t){var e=this,r=t.detail.index,o=this.core.galleryItems[r];setTimeout((function(){e.shareOptions.forEach((function(t){var r=t.selector;e.core.outer.find(r).attr("href",t.generateLink(o))}))}),100)},a.prototype.getShareListItemHTML=function(t,e){return'<li><a class="lg-share-'+t+'" rel="noopener" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+e+"</span></a></li>"},a.prototype.getDefaultShareOptions=function(){return e(this.settings.facebook?[{type:"facebook",generateLink:o,dropdownHTML:this.getShareListItemHTML("facebook",this.settings.facebookDropdownText),selector:".lg-share-facebook"}]:[],this.settings.twitter?[{type:"twitter",generateLink:n,dropdownHTML:this.getShareListItemHTML("twitter",this.settings.twitterDropdownText),selector:".lg-share-twitter"}]:[],this.settings.pinterest?[{type:"pinterest",generateLink:i,dropdownHTML:this.getShareListItemHTML("pinterest",this.settings.pinterestDropdownText),selector:".lg-share-pinterest"}]:[])},a.prototype.destroy=function(){this.core.outer.find(".lg-dropdown-overlay").remove(),this.core.outer.find(".lg-share").remove(),this.core.LGel.off(".lg.share"),this.core.LGel.off(".share")},a}()}()}}]);
//# sourceMappingURL=lg-8.js.map