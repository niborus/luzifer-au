export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styling.css");
    eleventyConfig.addPassthroughCopy("lazyload.js");
};
