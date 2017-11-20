// Check off todos by clicking //
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

//click on x to delete
$("ul").on("click",".del", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// setFocus();
	event.stopPropagation();
});

$("ul").on("click",".fav", function(event) {
	$(this).children('.fa-star-o, .fa-star').toggleClass('fa-star fa-star-o');
	// setFocus();
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li title='" + todoText + "'><span class='del'><i class='fa fa-trash'></i></span> " + todoText + "<span class='fav'><i class='fa fa-star-o'></span></li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle("fast");
	// setFocus();
});

$(document).ready(function() {
	// setFocus();
});

function setFocus() {
	$("input[type='text']").focus();
};

// $("input[type='text']").on("blur", setFocus);

$( function() {
	$( ".sortable" ).sortable();
	$( ".sortable" ).disableSelection();
} );