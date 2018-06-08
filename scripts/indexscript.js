document.getElementById('contact').addEventListener('mouseover', function () {
    console.log("contact ENT");
    var el = document.getElementById('contact');
    highlight(el);
});
document.getElementById('contact').addEventListener('mouseout', function () {
    console.log("contact EXT");
    var el = document.getElementById('contact');
    unHighlight(el);
});
document.getElementById('portraits').addEventListener('mouseover', function () {
    console.log("Por ENT");
    var el = document.getElementById('portraits');
    highlight(el);
});
document.getElementById('portraits').addEventListener('mouseout', function () {
    console.log("Por EXT");
    var el = document.getElementById('portraits');
    unHighlight(el);
});

document.getElementById('portraits').onclick = function () {
    location.href = "portraits.html";
};

document.getElementById('contact').onclick = function () {
    location.href = "contact.html";
};

function highlight(el) {
    el.style.color = 'lightgrey';
}

function unHighlight(el) {
    el.style.color = 'rgb(128,128,128)';
}