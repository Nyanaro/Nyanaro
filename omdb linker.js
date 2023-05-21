// ==UserScript==
// @name         OMDB linker
// @namespace    https://twitter.com/siskfh
// @version      0.728
// @description  Links to OMDB. I made this entirely using chatgpt I don't know how to code.
// @author       Nyanaro
// @match        https://osu.ppy.sh/beatmapsets/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the URL you want to append the cut section to
    var appendURL = 'https://omdb.nyahh.net/mapset/';

    // Create a button element
    var button = document.createElement('button');
    button.textContent = 'Go to OMDB Mapset';
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

        // Extract the IDs from the URL
        var ids = currentURL.match(/\/(\d+)/g);

        // Check if at least one ID is found
        if (ids && ids.length > 0) {
            // Extract the first ID
            var extractedID = ids[0].substring(1);

            // Build the new URL by appending the extracted ID
            var newURL = appendURL + extractedID;

            // Redirect to the new URL
            window.location.href = newURL;
        }
    });
})();
