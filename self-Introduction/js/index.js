window.onload = function() {
    $(".right").hide();    
    $("#right4").show();
}
let gno=0, sno; // 글로벌no, small no
// 왼쪽 메뉴(네비게이션) 클릭
$(function() {
    $(".menu").on("click", function() {
        let no = $(this).attr("class").substring(4, 5);
        $(".right").hide();
        $("#right" + no).show();
    })
})

// right4 속에 서브메뉴 클릭시 색상 바꾸기
$(function() {
    $(".right_menu li").on("click", function() {
        $(".right_menu li").css("background", "white");
        $(this).css("background", "#A2C7E2");

        // 4번째 네비게이션 - 첫 서브메뉴 클릭시
        gno = $(this).index();
        for (i=0; i<5; i++) {
            $(".pic" + i).attr("src", "img/menu" + gno + "_img" + i + ".jpg");
        }        
    })
    
    // right#_small pic 클릭했을 때 big에 큰사진(오른쪽)으로 출력
    $(".right4_small li").on("click", function() {
        sno = $(this).index();
        $(".right4_pic").attr("src", "img/menu" + gno + "_img" + sno + ".jpg");
    })  
})
