/**
 * Created by Quixotical on 9/20/15.
 */
jQuery(document).ready(function(){
    jQuery('.bxslider').bxSlider({
        'auto' : {{auto_play}},
        'pause' : {{auto_play_speed}},
        'touchEnabled' : {{fluid_touch}},
        'oneToOneTouch' : {{fluid_touch}},
        'pager' : {{pager}}
    });
});