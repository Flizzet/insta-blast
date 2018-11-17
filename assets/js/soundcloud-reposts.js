var cellPrices = [ 2, 2.50, 3, 4, 4.50, 5, 5.50, 6, 7, 9, 12, 15, 17, 26, 35, 60, 110 ];
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
		e.html('<div class="title">' + c.LikeCount + ' Reposts</div><div class="price">$' + c.Price + '</div>');

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
