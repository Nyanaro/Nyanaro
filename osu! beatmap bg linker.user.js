// ==UserScript==
// @name         osu! beatmapset bg linker
// @namespace    https://github.com/Nyanaro
// @version      1.0
// @description  Links to the mapset background. I made this entirely using chatgpt I don't know how to code.
// @author       Nyanaro
// @include      https://osu.ppy.sh/beatmapsets/*
// @include      https://old.ppy.sh/s/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the base URL for the image
    var baseURL = 'https://assets.ppy.sh/beatmaps/';

    // Create a button element
    var button = document.createElement('button');
    button.textContent = 'View Cover Image';
    button.style.position = 'fixed';
    button.style.top = 'calc(8.33% + 60px)'; // Adjust the percentage value as needed
    button.style.right = '20px';
    button.style.zIndex = '9999';

    // Append the button to the document body
    document.body.appendChild(button);

    // Button click event handler
    button.addEventListener('click', function() {
        // Get the current URL
        var currentURL = window.location.href;

        // Extract the ID from the URL
        var id = extractID(currentURL);

        // Check if an ID is found
        if (id) {
            // Build the image URL by replacing "placeholder" with the extracted ID
            var imageURL = baseURL.replace('placeholder', id) + id + '/covers/fullsize.jpg';

            // Open the image URL in a new tab
            window.open(imageURL, '_blank');
        }
    });

    // Extract the ID from the URL
    function extractID(url) {
        // Match the ID using a regular expression pattern
        var match = url.match(/\/(\d+)/);

        // Check if a match is found
        if (match && match.length > 1) {
            return match[1]; // Return the captured ID
        }

        return null; // Return null if no ID is found
    }
})();
