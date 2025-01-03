$(function () {
    // visual text
    const targets = gsap.utils.toArray(".keyword");
    setTimeout(function () {
        targets.forEach((target) => {
            let SplitClient = new SplitType(target, {
                type: "lines, words, chars",
            });
            let lines = SplitClient.lines;
            let words = SplitClient.words;
            let chars = SplitClient.chars;
            gsap.from(chars, {
                yPercent: 50,
                autoAlpha: 0,
                duration: 1,
                ease: "circ.out",
                stagger: {
                    amount: 1,
                    from: "random",
                },
                scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "+=400",
                    markers: true,
                },
            });
        });
    }, 1500);
    const text =
        "변화를 두려워 하지않고 끊임없이 도전하고 배우며 성장하는 정희윤 입니다."; // 타이핑할 문구
    let index = 0;
    let speed = 50; // 글자 타이핑 속도 (밀리초 단위)
    setTimeout(function () {
        function typeWriter() {
            if (index < text.length) {
                document.getElementById("text").textContent +=
                    text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }, 2500);
    // header
    $("header li").on("mouseenter", function () {
        $(this).addClass("on");
    });
    $("header li").on("mouseleave", function () {
        $(this).removeClass("on");
    });
    $("header i").on("click", function () {
        // $(this).addClass("on");
        $("nav").slideDown(1000);
    });
    $("nav i").on("click", function () {
        $("nav").hide();
        $("header i").removeClass("on");
    });
    $("nav li").on("mouseenter", function () {
        $(this).addClass("on");
    });
    $("nav li").on("mouseleave", function () {
        $(this).removeClass("on");
    });
    //visual
    // let upbox = document.querySelector(".con1_wrap");
    // let txt = document.querySelector(".con1_txt");
    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#con1",
    //         pin: true,
    //         start: "top top",
    //         end: "bottom top",
    //         scrub: 2,
    //         markers: true,
    //     },
    // });
    // tl.to(txt, { opacity: "1", duration: "10" }, 30);
    // tl.to(
    //     upbox,
    //     {
    //         scale: "0.5",
    //         duration: "10",
    //         opacity: "0.5",
    //     },
    //     10
    // );
    // scroll
    let baseline = -200;
    let con1 = $("#con1").offset().top + baseline;
    let con2 = $("#con2").offset().top;
    let con3 = $("#con3").offset().top + baseline;
    let con4 = $("#con4").offset().top;
    let robo = $(".portfolio li:first").offset().top;
    console.log(con4);
    // console.log(con1, con2, con3, con4, footer);
    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();
        if (scroll >= con1) {
            // console.log("con1입니다.");
            $(".con1_wrap").addClass("on");
            $(".con1_wrap .idphoto").addClass("on");
            $(".about p").addClass("on");
            $(".about h4").addClass("on");
            $(".con1_wrap .skill img").addClass("on");
        } else {
            $(".con1_wrap").removeClass("on");
            $(".con1_wrap .idphoto").removeClass("on");
            $(".about p").removeClass("on");
            $(".about h4").removeClass("on");
            $(".con1_wrap .skill img").removeClass("on");
        }
        if ((scroll = robo)) {
            $(".con2_wrap .index li").addClass("on");
        } else {
            $(".con2_wrap .index li").removeClass("on");
        }
        if (scroll <= con3) {
            $(".snsicon div").addClass("on");
        } else if (scroll < con4) {
            $(".snsicon div").removeClass("on");
        }
    });

    window.addEventListener("scroll", () => {
        const menu = document.querySelector(".menu");
        const section = document.querySelector(".section");

        if (window.scrollY >= section.offsetTop) {
            menu.classList.add("active"); /* 필요에 따라 스타일을 추가 */
        } else {
            menu.classList.remove("active");
        }
    });

    $(".index li").removeClass("on"); // 모든 메뉴 초기화
    $(".index li").eq(0).addClass("on"); // 첫 번째 메뉴에 'on' 클래스 적용

    $(document).ready(function () {
        function updateMenu() {
            let scrollTop = $(window).scrollTop(); // 현재 스크롤 위치 확인
            let found = false;

            $(".index li").removeClass("on"); // 모든 메뉴 초기화
            $(".index li").eq(0).addClass("on"); // 첫 번째 메뉴에 'on' 클래스 적용

            // 포트폴리오 항목 스크롤 위치 체크
            $(".portfolio li").each(function (index) {
                let offsetTop = $(this).offset().top; // li의 상단 위치
                let height = $(this).outerHeight(); // li의 높이

                // 스크롤 위치가 현재 li 영역 안에 있는 경우
                if (
                    scrollTop >= offsetTop - 200 &&
                    scrollTop < offsetTop + height &&
                    !found
                ) {
                    $(".index li") // 모든 메뉴 초기화
                        .removeClass("on");
                    $(".index li") // 해당 메뉴에 'on' 클래스 추가
                        .eq(index)
                        .addClass("on");
                    found = true; // 하나만 찾으면 루프 종료
                }
            });
        }

        // 페이지 로드 시와 스크롤 이벤트에 따라 실행
        updateMenu();
        $(window).on("scroll", updateMenu);
    });

    let list = gsap.utils.toArray(".ilust li");
    gsap.to(list, {
        xPercent: -100 * (list.length - 2),
        scrollTrigger: {
            trigger: "#con3",
            pin: true,
            scrub: 2,
            start: "top",
            end: "300%",
            markers: true,
        },
    });
});
