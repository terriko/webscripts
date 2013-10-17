// ==UserScript==
// @name        Book review header generator
// @namespace   tko-bookreview
// @description Takes any librarything book page and gives me a nice link to the book with cover and author details
// @include     http://www.librarything.com/work/*
// @version     1
// @grant       none
// ==/UserScript==

// Get all the data we'd like to display at the top of a review
var coverimage = document.getElementById('mainCover').outerHTML;
var title = document.getElementsByTagName('h1')[0].innerHTML;
var author = document.getElementsByTagName('h2')[0].innerHTML;
var librarythinglink = document.URL; 


// Trim down the title and author info
title = title.replace(/ *<span .*<\/span>/, '');

author = author.replace(/href="/, 'href="http://www.librarything.com');
author = author.replace(/<hr>/, '');

// Generate the code for this book
var reviewheader = '<a href="' + librarythinglink + '">' + 
   coverimage + '<br />' +
   '<b>' + title + '</b></a> ' +
   '<em>' + author + '</em>';

// Add code around this for embedding it into the page
var textbox = '<h4>Review Code</h4>' +
	'<textarea name="embedHTML" onFocus="this.select();" rows="5" ' + 
	'style="width: 250px;" wrap="virtual">' + reviewheader + '</textarea>';


// Find a good spot and add it to the page
var insert = document.getElementsByClassName('gap')[0];
insert.outerHTML =  textbox + insert.outerHTML;



