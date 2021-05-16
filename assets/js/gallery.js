function showPrev() {

    document.getElementsByClassName("img")[0].src = "assets/images/img2.jpg";
    document.getElementsByClassName("img")[1].src = "assets/images/img3.jpg";
    document.getElementsByClassName("img")[2].src = "assets/images/img1.jpg";
}


function showNext() {
    document.getElementsByClassName("img")[0].src = "assets/images/img3.jpg";
    document.getElementsByClassName("img")[1].src = "assets/images/img1.jpg";
    document.getElementsByClassName("img")[2].src = "assets/images/img2.jpg";
}