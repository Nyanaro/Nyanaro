// ==UserScript==
// @name         Copy osu! beatmap Song Information
// @namespace    https://github.com/Nyanaro/
// @version      1.0
// @description  Copy artist and title of the song to the clipboard in the format: artist - title
// @author       Nyanaro
// @match      https://osu.ppy.sh/beatmapsets/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a button element
    var button = document.createElement('button');
    button.textContent = 'Copy Song Information';
    button.style.position = 'fixed';
    button.style.top = 'calc(8.33% + 100px)'; // Adjust the percentage value as needed
    button.style.right = '20px';
    button.style.zIndex = '9999';

    // Append the button to the document body
    document.body.appendChild(button);

    // Button click event handler
    button.addEventListener('click', function() {
        // Get the artist and title elements
        var artistElement = document.querySelector('.beatmapset-header__details-text--artist a');
        var titleElement = document.querySelector('.beatmapset-header__details-text--title a');

        // Check if both artist and title elements are found
        if (artistElement && titleElement) {
            // Get the artist and title text
            var artist = artistElement.textContent.trim();
            var title = titleElement.textContent.trim();

            // Build the song information string
            var songInfo = artist + ' - ' + title;

            // Copy the song information to the clipboard
            copyToClipboard(songInfo);
        }
    });

    // Copy text to clipboard
    function copyToClipboard(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        console.log('Song information copied to clipboard:', text);
    }
})();
