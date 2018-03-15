$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2279131956',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2279131956.1677ed0.ac1a79e8f3e04ac0aa7a6ec936d942e5',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

	userFeed.run();

    // Use following to link to instagram post
    // template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

    // Use following to link to display picture as pop up on page 
    // template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',



     // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

});


//2279131956
//2279131956.1677ed0.ac1a79e8f3e04ac0aa7a6ec936d942e5