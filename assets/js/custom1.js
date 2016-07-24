console.log('script from custom 1');
 $(document).ready(function() {
    // js for gallery carouesel     
	var owl = $("#owl-demo");
      owl.owlCarousel({
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      // js for testimonials carousel
      var owl_1 = $("#owl-demo-1");
      owl_1.owlCarousel({
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
     
      // Custom Navigation Events
      $(".next-1").click(function(){
        owl_1.trigger('owl.next');
      })
      $(".prev-1").click(function(){
        owl_1.trigger('owl.prev');
      })
      // js for meet the team carousel
      var owl_2 = $("#owl-demo-2");
      owl_2.owlCarousel({
          items : 7, //10 items above 1000px browser width
          itemsDesktop : [1200,6], //5 items between 1000px and 901px
          itemsDesktopSmall : [992,5], // betweem 900px and 601px
          itemsTablet: [768,5], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
     
      // Custom Navigation Events
      $(".next-2").click(function(){
        owl_2.trigger('owl.next');
      })
      $(".prev-2").click(function(){
        owl_2.trigger('owl.prev');
      })
      // js for footer carousel
      var owl_3 = $("#owl-demo-3");
      owl_3.owlCarousel({
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      });
     
      // Custom Navigation Events
      $(".next-3").click(function(){
        owl_3.trigger('owl.next');
      })
      $(".prev-3").click(function(){
        owl_3.trigger('owl.prev');
      })
      //js for scroll back to top
	      // hide #back-top first
		$("#back-to-top").hide();
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('#back-to-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});
    //js for accordion
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
      }
    }
    

 });