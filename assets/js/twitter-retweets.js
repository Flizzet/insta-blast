var cellPrices = [ 3, 3.50, 4, 5, 6.50, 7.50, 8.50, 9.50, 10.50, 12, 15, 18, 20, 29, 38, 63, 113 ];
var cellAmounts = [ 20, 50, 100, 200, 350, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000, 10000, 15000, 25000, 50000 ];

var cells = new Array(cellPrices.length);

var emailFilled = false;
var usernameFilled = false;
var cellSelected = false;


$(document).ready(function() {
	// Create all like purchase objects
	for (var i = 0; i < cellPrices.length; i++) {
		// Create new follower purchase
		cells[i] = new LikePurchase(cellAmounts[i], cellPrices[i]);
	}

	// Create cells from all follower purchase objects
	for (var i = 0; i < cells.length; i++) {
		let c = cells[i];

		let e = $('<div class="purchase-cell" onclick="clickedCell('+i+')"></div>');

		// Add new html element to DOM using properties
		e.html('<div class="title">' + c.LikeCount + ' Retweets</div><div class="price">$' + c.Price + '</div>');

		$('.cell-group').append(e);
	}

	$(".email-input").on("input", function() {
		if (this.value) {
			emailFilled = true;
		} else {
			emailFilled = false;
		}
		checkFormFilled();
	});
	$(".username-input").on("input", function() {
		if (this.value) {
			usernameFilled = true;
		} else {
			usernameFilled = false;
		}
		$(".purchase-name").val("Social Media Interaction for " + $(".username-input").val() + " | L");
		checkFormFilled();
	});
});

function checkFormFilled() {
	if (usernameFilled && emailFilled && cellSelected) {
		$(".submit-button").removeClass('disabled');
		$(".submit-button").prop('disabled', false);
		console.log('filled');
	} else {
		$(".submit-button").addClass('disabled');
		$(".submit-button").prop('disabled', true);
		console.log('empty');
	}
}

function clickedCell(val) {
	// Get properties based on val
	let c = cells[val];
	console.log(c.LikeCount + " likes, $" + c.Price);

	$('#price-input').val(c.Price);
	$('#likes-input').val(c.LikeCount);

	$('.order-container').css('bottom', '0px');
	// Set cell selected
	cellSelected = true;
}

class LikePurchase {
	constructor(likeCount, price) {
		this.LikeCount = likeCount;
		this.Price = price;
	}
}
