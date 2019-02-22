(($) => {

    class RtMobileMenu {

        static _jQueryInterface(config) {
            return this.each(function () {
                new RtMobileMenu(this, config)
            })
        }

        constructor(element, config) {
            // Assign
            this._el = element;
            this._element = $(element);
            this.targetMenu = $(element).clone()
            this.defaults = {
                target: this._element,
                menuContainer: "body",
                menuContainerClass: "rt-mmenu-container",
                screenWidth: "991",
                menuClose: "X",
                siteLogo: '',
                siteLogoId: '',
                meanMenuOpen: "<span /><span /><span />",
                meanRevealPositionDistance: "0",
                showChildren: false,
                expandableChildren: true,
                meanExpand: "+",
                meanContract: "-",
                onePage: false,
                meanDisplay: "block",
                removeElements: ""
            };
            this._config = $.extend(this.defaults, config);
            this.rtMenuExist = false;
            this.currentWidth = window.innerWidth || document.documentElement.clientWidth;
            this.is_mobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i));
            this.logo = this._config.siteLogoId ? $("#" + this._config.siteLogoId).clone().html() : this._config.siteLogo;

            this.init();
        }

        resetMenu() {
            this.rtMenuExist = false;
            $('.' + this._config.menuContainerClass).find('#rt-mmenu').remove().parent().attr("id", '').removeClass(this._config.menuContainerClass);
        }

        createMenu() {
            this.rtMenuExist = true;
            $(this._config.menuContainer).addClass(this._config.menuContainerClass);
            const menu = $('<div id="rt-mmenu" />');
            if (this.logo) {
                menu.addClass('rt-has-logo');
                $('<div class="rt-mmneu-logo" />').append(this.logo).appendTo(menu);
            }
            var new_menu = $('<nav class="rt-mmenu-nav" />').append(this.getMenu(this.targetMenu))
            new_menu.find('nav.rt-mmenu-nav ul li').removeAttr("class").removeAttr("id");
            new_menu.appendTo(menu);
            menu.prependTo($('.' + this._config.menuContainerClass));
        }

        getMenu(target) {
            if (target.find('> ul > li').length) {
                const menuItem = $('<ul />');
                const item = this;
                target.find('> ul > li').each(function () {
                    const txt = $(this).find(' > a').removeAttr('class').removeAttr('id'),
                        hMenu = item.getMenu($(this));
                    $('<li />').append(txt).append(hMenu).appendTo(menuItem);
                });

                return menuItem;
            }
            return '';
        }

        renderMenu() {
            if (this.currentWidth <= this._config.screenWidth) {
                if (this.rtMenuExist === false) {
                    this.createMenu();
                }
            } else {
                this.resetMenu();
            }
        }

        init() {
            let refThis = this;
            $(window).resize(function () {
                console.log(refThis);
                refThis.__proto__.renderMenu();
            });

            this.renderMenu();
        }

    }

    $.fn.RtMobileMenu = RtMobileMenu._jQueryInterface;
    $.fn.RtMobileMenu.Constructor = RtMobileMenu;
    $.fn.RtMobileMenu.noConflict = function () {
        $.fn.RtMobileMenu = $.fn.RtMobileMenu;
        return RtMobileMenu._jQueryInterface
    };

    return RtMobileMenu;

})(jQuery)