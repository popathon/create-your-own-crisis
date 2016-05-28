// show twitter feeds on hash tag click

// Venezuela
$('#tag-fueramaduro').click(function () {
	console.log('tag-fueramaduro clicked!!!');
	$('.twitterfeed').hide();
	$('#feed-fueramaduro').show();
});
$('#tag-quelediriasamaduro').click(function () {
	console.log('tag-quelediriasamaduro clicked!!!');
	$('.twitterfeed').hide();
	$('#feed-quelediriasamaduro').show();
});
$('#tag-crisisvenezuela').click(function () {
	console.log('tag-crisisvenezuela clicked!!!');
	$('.twitterfeed').hide();
	$('#feed-crisisvenezuela').show();
});
// clear tags
$('#tag-clear-venezuela').click(function () {
	$('.twitterfeed.venezuela').hide();
});


// Spain
$('#tag-fuerarajoy').click(function () {
	console.log('tag-fuerarajoy clicked!!!');
	$('.twitterfeed').hide();
	$('#feed-fuerarajoy').show();
});
$('#tag-votapp').click(function () {
	console.log('tag-votapp clicked!!!');
	$('.twitterfeed').hide();
	$('#feed-votapp').show();
});
$('#tag-crisisespana').click(function () {
	console.log('tag-crisisespana clicked!!!');
	$('.twitterfeed').hide();
	$('#feed-crisisespana').show();
});
// clear tags
$('#tag-clear-spain').click(function () {
	$('.twitterfeed.spain').hide();
});


// Slider (With JQuery)
$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

// youtube embed widths

// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();