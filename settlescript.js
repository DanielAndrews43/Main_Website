/*jslint browser: true */
/*global $, jQuery, alert*/
function Person(name, points) {
    "use strict";
    this.name = name;
    this.points = points;
    this.height = 0;
}

var daniel = new Person('Daniel', '2');
var boaz = new Person('Boaz', '4');
var josh = new Person('josh', '5');

Person.prototype.getHeight = function () {
    "use strict";
    var scores = [daniel.points, boaz.points, josh.points],
        highest = 0,
        i = 0;
    for (i; i < scores.length; i += 1) {
        if (scores[i] > highest) {
            highest = scores[i];
        }
    }
    this.height = String((this.points / highest) * 60);
    return this.height;
};

$(document).ready(function () {
    "use strict";
    var $daniel = daniel.getHeight() + '%',
        $boaz = boaz.getHeight() + '%',
        $josh = josh.getHeight() + '%';
    $('#daniel').animate({
        'height': $daniel,
        'bottom': '0'
    });
    $('#boaz').animate({
        'height': $boaz,
        'bottom': '0'
    });
    $('#josh').animate({
        'height': $josh,
        'bottom': '0'
    });
    
    $('#dscore').append('<p>' + daniel.points + '</p>');
    $('#bscore').append('<p>' + boaz.points + '</p>');
    $('#jscore').append('<p>' + josh.points + '</p>');
    
    $('.scoreWrap2 .score').hide();
    
    $('.scoreWrap2').mouseover(function () {
        $(this).find('.score').stop(true, true).fadeIn('fast');
    });
    $('.scoreWrap2').mouseleave(function () {
        $(this).find('.score').stop(true, true).fadeOut(1500);
    });
});