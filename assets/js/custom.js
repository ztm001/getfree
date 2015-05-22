// custom.js


$(document).ready(function(){

// Changing the size and font-weight of heading in middle section 

	$('#clean-pure, #free-inde, #integrity, #prosperity').on('mouseenter', function(){
		$('#middle-id').addClass('clean-pure');
	});

	$('#clean-pure, #free-inde, #integrity, #prosperity').on('mouseleave', function(){
		$('#middle-id').removeClass('clean-pure');
	});




// Changing the content of middle heading text and bulb image to something different for each bulb on hover


	$('#clean-pure').on({
		mouseenter: function(){
			$('#tl-bulb').attr("src", "images/tl-hover.png");
			$("#middle-id").html("Sustainable Living?");
		}, 
		mouseleave: function(){
			$('#tl-bulb').attr("src", "images/tl-white.png")
		}
	});

	

	$('#free-inde').on({
		mouseenter: function(){
			$('#tr-bulb').attr("src", "images/tr-hover.png");
			$("#middle-id").html("Clean Energy?");
		}, 
		mouseleave: function(){
			$('#tr-bulb').attr("src", "images/tr-white.png")
		}
	});

	


	$('#integrity').on({
		mouseenter: function(){
			$('#bl-bulb').attr("src", "images/bl-hover.png");
			$("#middle-id").html("Small Footprints?");
		}, 
		mouseleave: function(){
			$('#bl-bulb').attr("src", "images/bl-white.png")
		}
	});



	$('#prosperity').on({
		mouseenter: function(){
			$('#br-bulb').attr("src", "images/br-hover.png");
			$("#middle-id").html("Reduce Excess?");
		}, 
		mouseleave: function(){
			$('#br-bulb').attr("src", "images/br-white.png")
		}
	});



// Changing the content of middle heading back on mouse leave

	$('#clean-pure, #free-inde, #integrity, #prosperity').on('mouseleave', function(){
		$("#middle-id").html("Lets Think Together");
	});




}); // Closing doc ready





