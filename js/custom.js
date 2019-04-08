
        $(document).ready(function(){
            $('.item-info .item').click(function(){
                
                // $('.leadership').addClass('of-hid');
                $(this).closest('.leader').toggleClass('active');
                $(this).closest('.leader').siblings('.leader').removeClass('active');
var lead = '#lead' + $(this).data('lead');
console.log(lead);
/*$('.author-content').not(lead).hide();*/
$(lead).toggle();

            });
            $('.close').click(function(){
                $('.item-info').removeClass('auc');
                $('.leadership').removeClass('of-hid');
                $(this).parent('.author-content').css("display","none");
                
            });
        });
     