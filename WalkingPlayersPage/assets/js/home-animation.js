function menuAnimationScroll() {
  $(function () {
    var shrinkHeader = 100;
    $(window).scroll(function () {
      var scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $('.logo-container').addClass('shrink-container');
        $('.logo-wp').addClass('shrink-logo');
      }
      else {
        $('.logo-container').removeClass('shrink-container');
        $('.logo-wp').removeClass('shrink-logo');
      }
    });
    function getCurrentScroll() {
      return window.pageYOffset;
    }
  });
}


function animationHomeParallax() {
  let stars = document.getElementById('stars');
  let moon = document.getElementById('moon');
  let mountains_behind = document.getElementById('mountains_behind');
  let btn = document.getElementById('btn');
  let mountains_front = document.getElementById('mountains_front');

  window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
  });
}


function animationHomeMeteors() {
  (function ($) {
    $(function () {
      function index_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
        }
      }

      var index_Meteor = function () {
        function Meteor(options) {
          var _this = this;
          !function (instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
          }(this, Meteor), this.options = options, this.container = $("#".concat(this.options.container)), this.containerWidth = this.container.width(), this.containerHeight = this.container.height(), setInterval((function () {
            _this.init()
          }), 500)
        }

        var Constructor, protoProps, staticProps;
        return Constructor = Meteor, (protoProps = [{
          key: "init", value: function () {
            var _this2 = this, id = "".concat(this.options.container, "_").concat(this.getRandomInt(0, 10000));
            if (0 === $("#".concat(id)).length) {
              var index = this.getRandomInt(0, this.options.meteors.length - 1), meteor = this.options.meteors[index];
              if (meteor.count <= meteor.maxCount) {
                meteor.count++, this.container.append('\n<div id="'.concat(id, '" class="meteor__item">\n<div class="meteor__item-img"></div>\n</div>\n'));

                var topOrLeft = this.getRandomInt(0, 1),
                  top = this.getRandomInt(0, this.containerHeight),
                  left = this.getRandomInt(0, this.containerWidth),
                  zIndex = 10 * meteor.zIndex,
                  size = meteor.size,
                  transition = meteor.speed;

                $("#".concat(id)).css({
                  left: topOrLeft ? "100%" : "".concat(left, "px"),
                  top: topOrLeft ? "".concat(top + 1000, "px") : 0,
                  transition: "transform ".concat(transition, "s linear"),
                  transform: "translate(".concat(size, "px, -").concat(size, "px"),
                  "z-index": zIndex
                });

                $("#".concat(id)).find(".meteor__item-img").css({
                  width: "".concat(size, "px"),
                  height: "".concat(size, "px")
                });

                setTimeout((function () {
                  $("#".concat(id)).css({ transform: "translate(-".concat(_this2.containerHeight - (topOrLeft ? top : 0), "px, ").concat(_this2.containerHeight - (topOrLeft ? top : 0), "px") })
                }), 100);

                setTimeout((function () {
                  $("#".concat(id)).remove(), meteor.count--
                }), 1000 * transition);
              }
            }
          }
        }, {
          key: "getRandomInt", value: function (min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min))
          }
        }, {
          key: "isScrolledIntoView", value: function (elem) {
            var docViewTop = $(window).scrollTop(), docViewBottom = docViewTop + $(window).height(), elemTop = elem.offset().top;
            return elemTop + elem.height() >= docViewTop && elemTop <= docViewBottom
          }
        }]) && index_defineProperties(Constructor.prototype, protoProps), staticProps && index_defineProperties(Constructor, staticProps), Meteor
      }();

      new index_Meteor({
        container: "js-meteor-block",
        meteors: [{ size: 600, speed: 5, maxCount: 2, count: 0, zIndex: 10 }, {
          size: 300,
          speed: 10,
          maxCount: 3,
          count: 0,
          zIndex: 0
        }, { size: 150, speed: 15, maxCount: 5, count: 0, zIndex: 0 }]
      });
    });
  })(jQuery);
}


function animationMouseMoveImg() {
  var rect = $('#sec')[0].getBoundingClientRect();
  var mouse = { x: 0, y: 0, moved: false };

  $("#sec").mousemove(function (e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  // Ticker event will be called on every frame
  TweenLite.ticker.addEventListener('tick', function () {
    if (mouse.moved) {
      parallaxIt(".slide", -100);
      parallaxIt(".img-illustration-wp", 100);
    }
    mouse.moved = false;
  });

  function parallaxIt(target, movement) {
    WPAnimateImages.to(target, 0.5, {
      x: (mouse.x - rect.width / 2) / rect.width * movement,
      y: (mouse.y - rect.height / 2) / rect.height * movement
    });
  }

  $(window).on('resize scroll', function () {
    if ($('#sec')[0]) {
      rect = $('#sec')[0].getBoundingClientRect(); 
    }
  })
}
