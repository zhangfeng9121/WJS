/**
 * 项目js文件
 */

/*广告轮播-更换图片大小*/
$(function() {

    function resizeScreen() {
        var windowWight = $(window).width();
        var isSmallScreen = windowWight < 750;
        $('#main_ad > .carousel-inner >.item').each(function(i, e) {
            var $e = $(e);
            var imageSrc =  (isSmallScreen ? $e.data('img-sm') : $e.data('img-lg'));
            $e.css({
                backgroundImage: 'url(' + imageSrc+ ')'
            });

            if (isSmallScreen) {
                $e.html('<img src="'+imageSrc+'" alt="" />');
            }else {
                 $e.html('');
            }
        });


    }

    //页面尺寸改变时出发
    $(window).on('resize', resizeScreen).trigger('resize');

    // 初始化tooltips
    $('[data-toggle="tooltip"]').tooltip()
});