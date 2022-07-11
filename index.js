//  myname = "20";
// console.log(myname);
var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";

		$('.set-amount').autoGrow(0);

		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/

		//Set & Highlight Donation Amount
		$(".button").click(function(){
			$(".button").removeClass("selected");
			$(this).addClass("selected");

			$(this).find("input").focus();
		});

		//Grow the donation box if they type more than 4 numbers
		$(".set-amount").keyup(function(){

			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});


		$("input").on("change", function(){
			// $(".donation-box").css("height", "500px");

			firstName = $("#firstName").val();
			lastName = $("#lastName").val();
			email = $("#email").val();

			if ( $("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( $("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});



    $(document).ready(function() {
  var city, map;
  map = $('.ct-map');
  city = map.find('.ct-city');
  city.each(function() {
    var button, that;
    that = $(this);
    button = that.find('.ct-city__button');
    return button.on('click', function() {
      city.not(that).removeClass('active');
      if (that.hasClass('active')) {
        that.removeClass('active');
        return map.removeClass('popup-open');
      } else {
        that.addClass('active');
        return map.addClass('popup-open');
      }
    });
  });
});
