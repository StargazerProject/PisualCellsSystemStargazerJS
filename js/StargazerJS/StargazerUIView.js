/**
 * Created by felixerio on 14/11/1.
 */
/**
 * StargazerJS
 * **/
function StargazerUI(){
    var StargazerUIxml;
}
StargazerUI.prototype.getselect=function(file){
    var url;
    $.ajax({
        url:'js/StargazerJS/StargazerUIView.xml',
        type: 'POST',
        async:false,
        dataType: 'xml',
        timeout: 1000,
        error: function(xml){
            alert('Error loading XML document'+xml);
        },
        success: function(xml){
            $(xml).find("view").each(function(i){
                var name = $(this).children("name").text();
                if(file == name)
                {
                    url=$(this).children("url").text();
                    return url;
                }
            });
        }
    });
    return url;
}