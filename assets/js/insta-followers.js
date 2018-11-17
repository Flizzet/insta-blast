var cellPrices = [ 2, 4, 6, 7, 8, 9, 10, 12, 15, 18, 20, 35, 45, 75, 120 ];
var cellAmounts = [ 100, 200, 350, 500, 750, 1000, 1500, 2000, 3000, 4000, 5000, 10000, 15000, 25000, 50000 ];

var cells = new Array(cellPrices.length);

var emailFilled = false;
var usernameFilled = false;
var cellSelected = false;

$(document).ready(function() {

	// Add all properties to cellProperties
	// for (var i = 0; i < cellProperties.length; i++) {
	// 	console.log(i);
	// }
	console.log(cellPrices.length + ", " + cellAmounts.length);

	// Create all follower purchase objects
	for (var i = 0; i < cellPrices.length; i++) {
		// Create new follower purchase
		cells[i] = new FollowerPurchase(cellAmounts[i], cellPrices[i]);
	}

	// Create cells from all follower purchase objects
	for (var i = 0; i < cells.length; i++) {
		let c = cells[i];

		let e = $('<div class="purchase-cell" onclick="clickedCell('+i+')"></div>');

		// Add new html element to DOM using properties
		e.html('<div class="title">' + c.FollowerCount + ' Followers</div><div class="price">$' + c.Price + '</div>');

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
		$(".purchase-name").val("Social Media Interaction for " + $(".username-input").val() + " | F");
		checkFormFilled();
	});
});

function checkFormFilled() {
	if (usernameFilled && emailFilled && cellSelected) {
		$(".submit-button").removeClass('disabled');
		$(".submit-button").prop('disabled', false);
	} else {
		$(".submit-button").addClass('disabled');
		$(".submit-button").prop('disabled', true);
	}
}

function clickedCell(val) {
	// Get properties based on val
	let c = cells[val];
	console.log(c.FollowerCount + " followers, $" + c.Price);

	$('#price-input').val(c.Price);
	$('#followers-input').val(c.FollowerCount);

	// Set cell selected
	cellSelected = true;

	$('.order-container').css('bottom', '0px');
	checkFormFilled();
}

class FollowerPurchase {
	constructor(followerCount, price) {
		this.FollowerCount = followerCount;
		this.Price = price;
	}
}
