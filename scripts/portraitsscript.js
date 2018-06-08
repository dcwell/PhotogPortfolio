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
document.getElementById('pf').addEventListener('mouseover', function () {
    console.log("Pf ENT");
    var el = document.getElementById('pf');
    highlight(el);
});
document.getElementById('pf').addEventListener('mouseout', function () {
    console.log("Pf EXT");
    var el = document.getElementById('pf');
    unHighlight(el);
});

document.getElementById('pf').onclick = function () {
    location.href = "index.html";
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