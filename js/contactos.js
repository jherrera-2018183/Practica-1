$(function () {
	$(".content > div .section-name").click(function (event) {
		$(event.target).parent().toggleClass("raised");
		$(".content > div.raised")
			.not($(event.target).parent())
			.removeClass("raised");
		$(".button.add").addClass("active");
		$(".add-new-panel").removeClass("active");
	});
	$(".button.add").click(function (event) {
		$(".add-new-panel").addClass("active raised");
		$(".button.add").toggleClass("active");
	});

	$("#cancel-btn").click(function () {
		$(".add-new-panel").removeClass("active raised");
		$(".button.add").toggleClass("active");
	});
});

