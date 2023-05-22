// ==UserScript==
// @name         OMDB linker
// @namespace    https://twitter.com/siskfh
// @version      7.27
// @description  Links to OMDB. I made this entirely using chatgpt I don't know how to code.
// @author       Nyanaro
// @include      https://osu.ppy.sh/beatmapsets/*
// @include      https://old.ppy.sh/s/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the URL you want to append the cut section to
    var appendURL = 'https://omdb.nyahh.net/mapset/';

    // Create a button element
    var button = document.createElement('button');
    button.textContent = 'Go to OMDB';
    button.style.position = 'fixed';
    button.style.top = '20px';
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
            // Build the new URL by appending the extracted ID
            var newURL = appendURL + id;

            // Redirect to the new URL
            window.location.href = newURL;
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
