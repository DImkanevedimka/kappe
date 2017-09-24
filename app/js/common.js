$(document).ready(function(){

    $(window).on('load resize', check);
    
    function check(){
        $('.slider').css('width','100px')
        var truewidth = $('.slider-container').css('width')
        var falsewidth = $('.slider').css('width')
        if (truewidth != falsewidth){
            $('.slider').css('width',''+truewidth)
        }
    }
    

    $('.colums').imagesLoaded(function(){
    	$('.colums').masonry({
    		itemSelector: '.block-item',
            columnWidth: '.block-item',
            percentPosition: true,
            horizontalOrder: true
    	});
    });
    
    var postindex = 0
    
    function counter(){
        postindex++  
    }

    $('.older-post-button').click(function(){
        counter()
        $('.colums').find('.older-post'+ postindex).removeClass('older-post'+postindex)
        $('.colums').masonry( 'layout' )
    })


    $( ".contact-toggle" ).click(function() {
        $('.contact-container').toggle("slow");
    });
    
    $( ".toggle-nav" ).click(function() {
        $('.link-list2').toggle("slow");
        $('.fa-bars').toggleClass('toggle-on')
        $('.fa-times').toggleClass('toggle-on')
    });


    $(".filter-list li").click(function(){
        
        $(".filter-list li").removeClass('current')
        $(this).addClass('current')
        
        var id = $(this).attr('data-info')
        
        $(".portfolio-item").not("."+id).hide(1000);
        $("."+id).show(1000);
    });
    

    $('body').niceScroll({
        cursorcolor:"#1ab5b3",
        cursorwidth: 8,
        cursorborderradius: 0,
        cursorborder: "0px solid #fff"
    });
    
    $('.portfolio-item').hoverdir({
        hoverElem: '.portfolio-info-full',
        speed: 500
    });
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        fade: true,
        speed: 500,
        autoplay: true
    });
    
    $('.slider-mini').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    })

    $('.buttom').click(function(){
        $('.buttom').removeClass('active-buttom')
        $(this).addClass('active-buttom')
        index = $(this).attr('data-index')
        $('.active').slideUp('slow',function() {
            $('.text').removeClass('active')
            $('#text'+index).slideDown('slow')
            $('#text'+index).addClass('active')
        })
    })




    
    // $('.progress-title[data-percentage]').each(function () {
    //     var progress = $(this);
    //     var title = $(this).find(".procents")
    //     var percentage = Math.ceil($(this).attr('data-percentage'));
    
    //     $({countNum: 0}).animate({countNum: percentage}, {
    //       duration: 3000,
    //       easing:'linear',
    //       step: function() {
    //         var pct = Math.ceil(this.countNum) + '%';
    //         title.text(pct) && progress.siblings().children().css('width',pct);
    //       }
    //     });
    //   });
    
    
    $(".progress-bar").each(function(){
        var percentage = parseInt($(this).html());
        var index = $(this).attr('data-index')
        if(percentage > 0){
            $(this).animate({
                easing:'linear',
                'width':''+percentage+'%'}
                ,800)
                test()
            }else{
                $(this).css({'background':'none'}, 800);
            }
            function test(){
                $('#' + index).animate({ num: percentage }, {
                    duration: 800,
                    step: function (num){
                        this.innerHTML = (num + 0).toFixed(0) + '%'
                    }
                }
            )
        }
    })
})




