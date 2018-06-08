document.getElementById('submitter').addEventListener('mouseover', function () {
    console.log("ENT");
    var el = document.getElementById('submitter');
    bgHighlight(el);
});
document.getElementById('submitter').addEventListener('mouseout', function () {
    console.log("EXT");
    var el = document.getElementById('submitter');
    bgUNHighlight(el);
});
document.getElementById('pf').addEventListener('mouseover', function () {
   console.log("PF ENT");
   var el = document.getElementById('pf');
   highlight(el);
});
document.getElementById('pf').addEventListener('mouseout', function () {
    console.log("PF EXT");
    var el = document.getElementById('pf');
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

document.getElementById('pf').onclick = function () {
    location.href = "index.html";
};

function highlight(el) {
    el.style.color = 'lightgrey';
}

function unHighlight(el) {
    el.style.color = 'rgb(128,128,128)';
}

function bgHighlight(el) {
    el.style.backgroundColor = 'orange';
}

function bgUNHighlight(el) {
    el.style.backgroundColor = 'black';
}