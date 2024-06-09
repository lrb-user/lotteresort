$(document).ready(function(){
    let $tabBtn = $('.tabType1 button');
    let $tabContent = $('.roomInfoContent');
    let $tabContent3 = $('.contactMapInfo');
    let $active = 'active';


    $tabBtn.click(tabActive);

    function tabActive(){
        let idx = $(this).parent().index();
        $tabBtn.parent().removeClass($active);
        $(this).parent().addClass($active);

        tabContentActive(idx);
        console.log("확인")
    }

    function tabContentActive(idx){
        $tabContent.removeClass($active);
        $tabContent.eq(idx).addClass($active);
        $tabContent3.removeClass($active);
        $tabContent3.eq(idx).addClass($active);
    }

    let $tabBtn2 = $('.tabType2 li a');
    console.log($tabBtn2);
    let $tabContent2 = $('.roomType__content');

    $tabBtn2.click(tabActive2);

    function tabActive2(){
        console.log("탭확인");
        let idx = $(this).parent().index();
        $tabBtn2.removeClass($active);
        $(this).addClass($active);

        tabContent2Active(idx);
    }

    function tabContent2Active(idx){
        $tabContent2.removeClass($active);
        $tabContent2.eq(idx).addClass($active);
    }
});