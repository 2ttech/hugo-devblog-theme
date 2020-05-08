$(document).ready(function() {
	
	/* ======= Highlight.js Plugin ======= */ 
    /* Ref: https://highlightjs.org/usage/ */     
    $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	});

	$('.date-since').each(function (index, dateElem) {
		var $dateElem = $(dateElem);
		var formatted = moment($dateElem.text(), 'YYYY-MM-DD').fromNow();
		$dateElem.text(formatted);
	});
});