$(document).ready(function(){
    
    
    $( ".contact-toggle" ).click(function() {
        $('.contact-container').toggle("slow");
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
        hoverElem: '.portfolio-info-full'
    });
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
      });
});
