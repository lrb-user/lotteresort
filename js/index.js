$(document).ready(function(){
    //
    let $travel = $('.main__travelActive');
    let $active = 'active'
    $(window).scroll(travelActive);
    
    function travelActive(){
        let $scrollPosition = $(document).scrollTop();
        let $travelTarget = $('.main__travelActive').offset().top + 600;
        console.log($travelTarget,$scrollPosition)
        
            if(window.innerWidth <= 650){
                $travelTarget = $('.main__travelActive').offset().top + 200;
                if($scrollPosition >= $travelTarget){
                    console.log('확인인')
                    $travel.addClass($active);
                }
                else{
                    $travel.removeClass($active);
                }
            }
            else{
                if($scrollPosition >= $travelTarget){
                    console.log('확인인11')
                    $travel.addClass($active);
                }
                else{
                    $travel.removeClass($active);
                }
            }
            
        
    }
});