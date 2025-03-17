$(function() {
    // header 불러오기
    $("#header").load("../layout/header.html", function() {
        // project로 스크롤 이동
        $("#to-project").click(function (e) {
            e.preventDefault(); // 기본 동작 방지
    
            let targetOffset = $("#scroll-project").offset().top - 60; // 위쪽 여백 추가
    
            $("#wrap .inner").animate({
                scrollTop: targetOffset
            }, 500); // 500ms 동안 부드러운 스크롤
        });

        // work로 스크롤 이동
        $("#to-work").click(function (e) {
            e.preventDefault(); // 기본 동작 방지
    
            let targetOffset = $("#scroll-work").offset().top - 60; // 위쪽 여백 추가
    
            $("#wrap .inner").animate({
                scrollTop: targetOffset
            }, 500); // 500ms 동안 부드러운 스크롤
        });
    });

    // 버튼 클릭 시 최상단 이동
    const $topBtn = document.querySelector(".btn-float");
    const $topTarget = document.querySelector("#wrap .inner");

    $topBtn.onclick = () => {
        $topTarget.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 팝업 열기
    window.popupOpen = function (number) {
        $(".popup-wrap").eq(number).fadeIn();
    };

    // 팝업 닫기
    $(".popup-close").click(function (e) {
        e.preventDefault();
        $(this).closest(".popup-wrap").fadeOut();
    });

    // 외부영역 클릭시 팝업 닫기
    $(document).mouseup(function (e) {
        let popup = $(".popup");
        // 클릭한 위치(e.target)가 .popup이 아니라면 팝업 닫기
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $(".popup-wrap").fadeOut();
        }
    });
});