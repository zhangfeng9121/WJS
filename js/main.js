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

        // ul滚动条设置
        var ulWidth = 40;
        $("#cptj .ul-wapper .nav-tabs").children().each(function(index, el) {
            ulWidth += el.clientWidth;
            // console.log(ulWidth);
        });
        if(ulWidth > $(window).width()) {
            $("#cptj .ul-wapper .nav-tabs").css({
                'width': ulWidth,
            }).parent().css({
                'overflow-x':'scroll'
            });;
        }else {
             $("#cptj .ul-wapper .nav-tabs").css({
                'width': '',
            }).parent().css({
                'overflow-x':''
            });;
        }
    }

    //页面尺寸改变时出发
    $(window).on('resize', resizeScreen).trigger('resize');

    // 初始化tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // 新闻标题反写
    var $newTitle = $('.news-title');
    $("#news .nav-stacked a").on('click', function(event) {
        var $this = $(this);
        var titleText = $this.data('title');
        $newTitle.text(titleText);
    });


    // 获取界面上的轮播图容器
    var $co = $('.carousel');
    var startX,endX;
    // 灵敏度控制
    var offset = 50;
    $co.on('touchstart', function(e) {
        // console.log(e);
        startX = e.originalEvent.touches[0].clientX;
        // console.log('startX' + startX);
    });

    $co.on('touchmove', function(e) {
        // console.log(e);
        endX = e.originalEvent.touches[0].clientX;
        // console.log('endX' + endX);
    });

    
    $co.on('touchend', function(e) {
        var distance = Math.abs(startX - endX);
        // console.log(distance);
        // 触发轮播事件
        if(offset < distance) {
            console.log(distance);
            $(this).carousel(startX > endX ? 'next' : 'prev')
        }
    });

    // console.log(startX + '---' + endX);
});