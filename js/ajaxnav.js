$(document).ready(function(){
    $('#ajaxmenu a').each(function(){
        id = $(this).attr('href');
        id = id.substring(id.lastIndexOf('/'));
        id = id.substring(0,id.indexOf('.'));
        $(this).attr('rel',id);
    });
    $('#ajaxhome').show();
    $('#ajaxmenu a').click(function(e){
        e.preventDefault();
        $('.ajaxcontent').hide();
        $('#'+$(this).attr('rel')).show();
        location.hash = 'nav/'+$(this).attr('rel');
        return false;
    });
});
