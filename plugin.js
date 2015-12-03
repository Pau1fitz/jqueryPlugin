(function($){
	$.fn.genderfy = function() {
		$(this).html($("p").html().replace("he", "she"));
		return this;
	};
}(jQuery));
