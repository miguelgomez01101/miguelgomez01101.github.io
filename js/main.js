/*
INDEX
*/
gsap.to(".zoom_principalHID", {
    scale:0,
    duration:0,
});
gsap.to(".zoom_principalHIDph", {
    scale:0,
    duration:0,
});
gsap.to(".zoom_principalHIDnh", {
    scale:0,
    duration:0,
});
gsap.to(".zoom_poster1", {
    scale:0,
    duration:0,
});
gsap.to(".zoom_poster2", {
    scale:0,
    duration:0,
});





var zoomImg=false;
// var zoomImgh=false;

function zoomPid(){
    if(zoomImg==false){
        gsap.to(".zoom_principalHID", {
            scale:1,
            duration:0.1,
        });
        gsap.to(".zoom_principalHID", {
            backgroundColor:"rgba(0, 0, 0, 0.4)",
            duration:0.08,
            delay:0.1,
        });
        zoomImg=true;
    }
    else{
        gsap.to(".zoom_principalHID", {
            scale:0,
            duration:0.1,
            delay:0.1,
        });
        gsap.to(".zoom_principalHID", {
            backgroundColor:"rgba(0, 0, 0, 0)",
            duration:0.08,
            delay:0,
        });
        zoomImg=false;
    }
}

function zoomPidh(){
    if(zoomImg==false){
        gsap.to(".zoom_principalHIDph", {
            scale:1,
            duration:0.1,
        });
        gsap.to(".zoom_principalHIDph", {
            backgroundColor:"rgba(0, 0, 0, 0.4)",
            duration:0.08,
            delay:0.1,
        });
        zoomImg=true;
    }
    else{
        gsap.to(".zoom_principalHIDph", {
            scale:0,
            duration:0.1,
            delay:0.1,
        });
        gsap.to(".zoom_principalHIDph", {
            backgroundColor:"rgba(0, 0, 0, 0)",
            duration:0.08,
            delay:0,
        });
        zoomImg=false;
    }
}

function zoomPidnh(){
    if(zoomImg==false){
        gsap.to(".zoom_principalHIDnh", {
            scale:1,
            duration:0.1,
        });
        gsap.to(".zoom_principalHIDnh", {
            backgroundColor:"rgba(0, 0, 0, 0.4)",
            duration:0.08,
            delay:0.1,
        });
        gsap.to(".Zcont_img", {
            backgroundColor:"rgba(0, 0, 0, 1)",
            duration:0,
            delay:0,
        });
        zoomImg=true;
    }
    else{
        gsap.to(".zoom_principalHIDnh", {
            scale:0,
            duration:0.1,
            delay:0.1,
        });
        gsap.to(".zoom_principalHIDnh", {
            backgroundColor:"rgba(0, 0, 0, 0)",
            duration:0.08,
            delay:0,
        });
        gsap.to(".Zcont_img", {
            backgroundColor:"rgba(255, 255, 255, 1)",
            duration:0,
            delay:0.2,
        });
        zoomImg=false;
    }
}
function zoomPoster1(){
    if(zoomImg==false){
        gsap.to(".zoom_poster1", {
            scale:1,
            duration:0.1,
        });
        gsap.to(".zoom_poster1", {
            backgroundColor:"rgba(0, 0, 0, 0.4)",
            duration:0.08,
            delay:0.1,
        });
        gsap.to(".Zcont_img", {
            backgroundColor:"white)",
            duration:0,
            delay:0,
        });
        zoomImg=true;
    }
    else{
        gsap.to(".zoom_poster1", {
            scale:0,
            duration:0.1,
            delay:0.1,
        });
        gsap.to(".zoom_poster1", {
            backgroundColor:"rgba(0, 0, 0, 0)",
            duration:0.08,
            delay:0,
        });
        gsap.to(".Zcont_img", {
            backgroundColor:"rgba(255, 255, 255, 1)",
            duration:0,
            delay:0.2,
        });
        zoomImg=false;
    }
}
function zoomPoster2(){
    if(zoomImg==false){
        gsap.to(".zoom_poster2", {
            scale:1,
            duration:0.1,
        });
        gsap.to(".zoom_poster2", {
            backgroundColor:"rgba(0, 0, 0, 0.4)",
            duration:0.08,
            delay:0.1,
        });
        gsap.to(".Zcont_img", {
            backgroundColor:"white)",
            duration:0,
            delay:0,
        });
        zoomImg=true;
    }
    else{
        gsap.to(".zoom_poster2", {
            scale:0,
            duration:0.1,
            delay:0.1,
        });
        gsap.to(".zoom_poster2", {
            backgroundColor:"rgba(0, 0, 0, 0)",
            duration:0.08,
            delay:0,
        });
        gsap.to(".Zcont_img", {
            backgroundColor:"rgba(255, 255, 255, 1)",
            duration:0,
            delay:0.2,
        });
        zoomImg=false;
    }
}


/*
INDEX
*/



/*
INDEX
*/



/*
INDEX
*/



/*
INDEX
*/



/*
INDEX
*/

