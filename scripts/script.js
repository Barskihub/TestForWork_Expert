// Gallery
var largeImg = document.getElementById('largeImg');

var thumbs = document.getElementById('thumbs');

thumbs.onclick = function(e) {
    var target = e.target;

    while (target != this) {

        if (target.nodeName == 'A') {
            showThumbnail(target.href, target.title);
            return false;
        }

        target = target.parentNode;
    }

}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}

var imgs = thumbs.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
    var url = imgs[i].parentNode.href;
    var img = document.createElement('img');
    img.src = url;
}

//NewsContent
$(document).ready(function() {
    $('.selectMenu__navbarLinks_first').on("click", function() {
        $('.selectMenu__movies').hide();
        $('.selectMenu__tv').hide();
        $('.selectMenu__fashion').show();
        $('.triggerOne').show();
        $('.triggerTwo').hide();
        $('.triggerThree').hide();
    });
    $('.selectMenu__navbarLinks_second').on("click", function() {
        $('.selectMenu__movies').show();
        $('.selectMenu__tv').hide();
        $('.selectMenu__fashion').hide();
        $('.triggerOne').hide();
        $('.triggerTwo').show();
        $('.triggerThree').hide();
    });
    $('.selectMenu__navbarLinks_three').on("click", function() {
        $('.selectMenu__movies').hide();
        $('.selectMenu__tv').show();
        $('.selectMenu__fashion').hide();
        $('.triggerOne').hide();
        $('.triggerTwo').hide();
        $('.triggerThree').show();
    });
});


