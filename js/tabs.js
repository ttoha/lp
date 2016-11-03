$(document).ready(function(){
    var tabs = $('#tabs-block');
    $('.tabs-content > .tab', tabs).each(function(i){
        if (i!=0) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs a',tabs).parent().removeClass('tabs__item-active');
        $(this).parent().addClass('tabs__item-active');
        $('.tabs-content > .tab', tabs).hide(0);
        $(tabId).show();
    });
});
