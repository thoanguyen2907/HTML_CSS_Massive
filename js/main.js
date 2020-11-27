$(document).ready(function(){
    $('.porfolio-menu ul li').click(function(){
        var value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.item').show('1000');

        } else {
            $('.item').not('.'+value).hide('1000');
            $('.item').filter('.'+value).show('1000')
           
        }
        //add active class
        $('.porfolio-menu ul li').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
    })
})