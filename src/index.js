var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');

/* Set up Socket connections */
var socket = io();

// Step 1: Generate Email
$('.button-generate-email').click(function () {
    socket.emit (
        'generateEmail', 
        '{ "CampaignTitle" : "New Product!", "IntroText" : "Buy now!" }'
    );
    $('.main-production-brief').hide();
});

// Step 2: Generate Email
$('.button-generate-email').click(function () {
    $('.configure-email').hide();
    $('.tech-qa').show();
});
