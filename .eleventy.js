//require contentA from 'content-a';

// var fs = require('fs');
// var fs_Extra = require('fs-extra');
// var path = require('path');

// var sourceDir = path.join(__dirname, "/node_modules/content-a/");
// var destinationDir = path.join(__dirname, "/src/team-a/")

// fs_Extra.copy(sourceDir, destinationDir, function(error) {
//     if (error) {
//         throw error;
//     } else {
//       console.log("success!");
//     }
// }); 

// var sourceDir = path.join(__dirname, "/node_modules/content-b/");
// var destinationDir = path.join(__dirname, "/src/team-b/")

// fs_Extra.copy(sourceDir, destinationDir, function(error) {
//     if (error) {
//         throw error;
//     } else {
//       console.log("success!");
//     }
// }); 


const contentA = require("content-a")

module.exports = function(eleventyConfig) {

//	eleventyConfig.addPassthroughCopy({ "src/team-a/*.png": "img" });

	return {
		dir: {
			input: "src",
			output: "_site",
			data: "_data",
		},
		templateFormats: ["html", "njk", "md", "11ty.js"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: false
	};

};