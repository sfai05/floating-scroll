(function () {

  $.fn.floatingScroll = function($bounder, bounded){
    var $that     = this;
    height_diff = $that.offset().top - $bounder.offset().top;
    $bounder.addClass('floating-scroll-bounding-box');

    return this.each(function(){
      function relocate(pixel_depth) {
        $that.addClass('floating-scroll-sticky');
        var above_bounding = $bounder.offset().top,
            height_bounding = $bounder.height(),
            height_content = $that.height();

        if (pixel_depth - height_diff> above_bounding) {
            $that.addClass('floating-scroll-stick');
            if(bounded != 'bounded'){
              $bounder.height(height_content);
            }
        } else {
            $that.removeClass('floating-scroll-stick');
        };

        if (bounded == 'bounded'){
          if (pixel_depth - height_diff > above_bounding + height_bounding - height_content) {
              $that.addClass('floating-scroll-stuck');
          } else {
              $that.removeClass('floating-scroll-stuck');
          };
        };
      };

      $(window).scroll(function () {
        var pixel_depth = $(window).scrollTop();
        relocate(pixel_depth);
      });
    });
  };

}).call(this);
