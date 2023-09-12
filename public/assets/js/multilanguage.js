// Load the language file
import enUS from "./en-us.json" assert { type: "json" };
import frFR from "./fr-fr.json" assert { type: "json" };

// Merge all languages in one object
var arrLang = {
	"en-us": enUS,
	"fr-fr": frFR,
};

(function ($) {
	"use strict";
	$(document).ready(function () {
		console.log("Multilanguage script loaded :", arrLang);
		// The default language is English
		var lang = "en-us";
		$("lang").each(function (index, element) {
			$(this).html(arrLang[lang][$(this).attr("key")]);
		});
		$(".lang").each(function (index, element) {
			$(this).html(arrLang[lang][$(this).attr("key")]);
		});
	});

	// get/set the selected language
	$(".translate").click(function () {
		var lang = $(this).attr("id");

		$("lang").each(function (index, element) {
			$(this).html(arrLang[lang][$(this).attr("key")]);
		});
		$(".lang").each(function (index, element) {
			$(this).html(arrLang[lang][$(this).attr("key")]);
		});
	});
})(jQuery);
