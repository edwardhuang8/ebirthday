const createchoose = document.getElementsByClassName("createchoose")[0];
const creatememory = document.getElementsByClassName("createm")[0];
const firstmemory = document.getElementsByClassName("firstmemory")[0];
const secondmemory = document.getElementsByClassName("secondmemory")[0];
/* const thirdmemory = document.getElementsByClassName("thirdmemory")[0];
const fourthmemory = document.getElementsByClassName("fourthmemory")[0];
const fifthmemory = document.getElementsByClassName("fifthmemory")[0];
const funnymemory = document.getElementsByClassName("funnymemory")[0]; */

var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }
    
    // Handle going to to the next slide
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 1000);
    };
    
    nextSlide.call(this);
};

    slideShow(document.getElementById("slideshow"));

function createc() {
    creatememory.style.display = "block";
}

function hidec() {
    creatememory.style.display = "none";
}

function firstmem() {
    firstmemory.style.display = "block";
}

function firstclose() {
    firstmemory.style.display = "none";
}

function secondmem() {
    secondmemory.style.display = "block";
}

function secondclose() {
    secondmemory.style.display = "none";
}

/* function thirdmem() {
    thirdmemory.style.display = "block";
}

function thirdclose() {
    thirdmemory.style.display = "none";
}

function fourthmem() {
    fourthmemory.style.display = "block";
}

function fourthclose() {
    fourthmemory.style.display = "none";
}

function fifthmem() {
    fifthmemory.style.display = "block";
}

function fifthclose() {
    fifthmemory.style.display = "none";
}

function funnymem() {
    funnymemory.style.display = "block";
}

function funnyclose() {
    funnymemory.style.display = "none";
} */