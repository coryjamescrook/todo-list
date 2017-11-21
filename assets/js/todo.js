// Check off todos by clicking //
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

//click on x to delete
$("ul").on("click",".del", function(event) {
	$(this).parent().fadeOut(200, function() {
		$(this).remove();
	});
	// setFocus();
	event.stopPropagation();
});

$("ul").on("click",".fav", function(event) {
	var star = $(this).children('.fa-star-o, .fa-star');
	event.stopPropagation();

	star.toggleClass('fa-star fa-star-o');

	if(star.hasClass('fa-star')) {
		doPin(star.parent().parent());
	}
	else {
		undoPin(star.parent().parent());
	}

	// console.log(star);

	
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
	setFocus();
});

function setFocus() {
	$("input[type='text']").focus();
};

function doPin(el) {
	$(el).hide().prependTo('#todoList').fadeIn();
};

function undoPin(el) {
	$(el).hide().appendTo('#todoList').fadeIn();
};

// $("input[type='text']").on("blur", setFocus);

$( function() {
	$( ".sortable" ).sortable();
	$( ".sortable" ).disableSelection();
	$( ".sortable" ).draggable();
} );