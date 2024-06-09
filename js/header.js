$(document).ready(function(){
    //1. 스크롤시 header 배경색 & 로고 변경
    let $header = $('.headerWrap');
    let $logo = $('.logoImg');
    let $hamBtnLine = $('.hamBtn .line');

    //스크롤 시 이벤트함수
    let $target = $('.hScrollEvent').offset().top;
    let $targetPc = Number($target - 200);
    let $mobileTarget = (($('.hScrollEvent__mobile').offset().top) - 200);
    $(window).scroll(headerActive);
    
    
    function headerActive(){   
        //현재 스크롤 위치 구하기
        let $scrollPosition = $(document).scrollTop();
        if(window.innerWidth <= 1280){
            if($mobileTarget <= $scrollPosition){
                console.log("스크롤 위치가 더 길때")
                $header.css({
                    'backgroundColor':'white',
                    'color':'black',
                })
                $logo.attr('src','images/logo.png')
                $hamBtnLine.css(
                    'backgroundColor','#da291c'
                )
            }
            else{
                console.log('스크롤 위치가 더 짧을때')
                $header.css({
                    'backgroundColor':'transparent',
                    'color':'white'
                })
                $logo.attr('src','images/logoWhite.png')
                $hamBtnLine.css(
                    'backgroundColor','white'
                )
            }
        }
    
        //현재 스크롤 위치가 target보다 같거나 클때.
        if(window.innerWidth >= 1280){
            if($targetPc <= $scrollPosition){
                $header.css({
                    'backgroundColor':'white',
                    'color':'black',
                })
                $logo.attr('src','images/logo.png')
                $hamBtnLine.css(
                    'backgroundColor','#da291c'
                )
            }
            else{
                $header.css({
                    'backgroundColor':'transparent',
                    'color':'white'
                })
                $logo.attr('src','images/logoWhite.png')
                $hamBtnLine.css(
                    'backgroundColor','white'
                )
            }
        }
    
    }
    

    //2. 햄버거 버튼 클릭시 메뉴 보임.
    let $backPan = $('.backPan');
    let $hamBtn = $('.hamBtn');
    let $mobileMenu = $('.mMenu');
    $hamBtn.click(hamBtnMenu);
    function hamBtnMenu(){
        $header.css({
            'backgroundColor':'white',
        })
        $logo.attr('src','images/logo.png')
        $hamBtnLine.css(
            'backgroundColor','#da291c'
        )
        $mobileMenu.toggleClass('active')
        $backPan.toggleClass('active')
    }

    //3. gnb hover시 depth2메뉴 보임.
    let $depth2 = $('.gnb .depth2');
    let $bgGnb = $('.bgGnb');

    $header.mouseenter(menuBlock);
    $header.mouseleave(menuNone);

    function menuBlock(){
        let $scrollPosition = $(document).scrollTop();
        if(window.innerWidth >= 1280){
            $depth2.css({
                'display':'block',
                'color':'black',
            })
            $header.css({
                'backgroundColor':'white',
                'color':'black'
            })
            $logo.attr('src','images/logo.png')
            $bgGnb.css(
                'height','20rem'
            )
        }
        else{
            console.log("ㄹㅇㅇ")
            $header.css({
                'backgroundColor':'transparent'
            })
        }

        // if($targetPc <= $scrollPosition){
        //     $header.css({
        //         'backgroundColor':'white',
        //         'color':'black'
        //     })
        //     $hamBtnLine.css(
        //         'backgroundColor','#da291c'
        //     )
        //     $logo.attr('src','images/logo.png')
        // }
    }
    function menuNone(){
        let $scrollPosition = $(document).scrollTop();
        if(window.innerWidth >= 1280){
            $depth2.css(
                'display','none'
            )
            $header.css({
                'backgroundColor':'transparent',
                'color':'white'
            })
            $logo.attr('src','images/logoWhite.png')
            $bgGnb.css(
                'height','0'
            )
        }
        // if($targetPc <= $scrollPosition){
        //     console.log('ㅠㄹ')
        //     $header.css({
        //         'backgroundColor':'white',
        //         'color':'black'
        //     })
        //     $logo.attr('src','images/logo.png')
        // }
    }

});