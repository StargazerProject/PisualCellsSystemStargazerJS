/**
 * Created by felixerio on 14/11/1.
 */
function StargazerUIDisplayControl(){
}
StargazerUIDisplayControl.prototype.normalAllDisPlay=function(name){
    $.ajax({
        url:'js/StargazerJS/StargazerJSUIControl.xml',
        type: 'POST',
        async:false,
        dataType: 'xml',
        timeout: 1000,
        error: function(data){
            alert('Error loading XML document'+data);
        },
        success: function(data){
            setTimeout(function(){$(data).find("element").each(function(i){
                var name = $(this).children("name").text();
                var htmlPartOne = $(this).children("htmlPartOne").text();
                var htmlPartTwo = $(this).children("htmlPartTwo").text();
                var marginTop = ($(window).height()/2)-($(this).children("marginTop").text());
                var prependId = $(this).children("prependId").text();
                var fadeInTime = $(this).children("fadeInTime").text();
                var waitTime = $(this).children("waitTime").text();
                var FadeOutTime = $(this).children("FadeOutTime").text();
                var WaitFadeOutTime = $(this).children("WaitFadeOutTime").text();
                var destroyTime = $(this).children("destroyTime").text();
                $(prependId).prepend(htmlPartOne+marginTop+'px'+htmlPartTwo);
                setTimeout(function(){$(name).fadeIn(fadeInTime)},waitTime);
                setTimeout(function(){$(name).fadeOut(FadeOutTime)},WaitFadeOutTime);
                setTimeout(function(){$(name).remove()},destroyTime);
            });},200);

        }
    });

}