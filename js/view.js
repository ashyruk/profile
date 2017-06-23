/**
 * Created by rybak on 18.01.2017.
 */
function WriteTextTimeout(text,selector, callback){
    var elem = document.querySelector(selector);
    elem.nextSibling.hidden=false;
    elem.textContent=" ";
    var i=0;
    var timer = setTimeout(function print(){
        if (i<text.length){
            elem.textContent+=text[i];
            i++;
        }else {
            clearTimeout(timer);
            setTimeout(function(){
                elem.nextSibling.hidden=true;
                if (callback && typeof callback == 'function'){
                    callback();
                }
            },2000);
        }
        if (text[i - 1] === '.') {
            setTimeout(print.bind(text), 500);
        } else {
            setTimeout(print.bind(text), 100);
        }
        //setTimeout(print.bind(text),100);
    },1000);
}
function WriteTextInterval(text,selector,callback){
    var elem = document.querySelector(selector);
    elem.nextSibling.hidden=false;
    elem.textContent=" ";
    var i=0;
    var timer = setInterval(function (){
        if (i<text.length){
            elem.textContent+=text[i];
            i++;
        }else {
            clearInterval(timer);
            setTimeout(function(){
                elem.nextSibling.hidden=true;
                if (callback && typeof callback == 'function'){
                    callback();
                }
            },2000);
        }
    }.bind(text),100);
}


var app;
app = {
    ScrollY: 0,
    anchorsCoord: [],
    about:{
        cap:{selector:'.description-cap span.text', text:"Valery Rybak"},
        desc:{selector:'.description-text span.text', text:"Junior FrontEnd Developer from Minsk, Belarus. " +
        "Website maker. Idea thinker. Beer drinker."}

    },
    getOffsetsOfAnchors: function () {
        var elems = document.querySelectorAll('.separator');
        var coords = this.anchorsCoord;
        coords.push(0);
        Array.prototype.forEach.call(elems, function (i) {
            coords.push(i.offsetTop);
        });
        return coords;
    },
    addListeners: function () {
        window.addEventListener('scroll', function () {
            var elem = document.getElementsByTagName('header')[0];
            if (this.scrollY > 600) {
                elem.className = 'show';
            } else {
                elem.className = '';
            }
        });
        //document.addEventListener('load',WriteTextTimeout(this.about.cap.text,this.about.cap.selector).bind(this.about));
        document.addEventListener('load',this.writingAbout(this.about) );
    },
    writingAbout:function (about) {
        var elem = document.querySelector(about.cap.selector);
        elem.textContent=" ";
        elem = document.querySelector(about.desc.selector);
        elem.textContent=" ";
        setTimeout(function(){
            WriteTextInterval(about.cap.text,about.cap.selector,function () {
                WriteTextTimeout(about.desc.text, about.desc.selector, function () {
                    //var elem = document.querySelector(about.desc.selector);
                    //var idx = elem.innerHTML.indexOf("Water");
                    //console.log(elem.innerHTML);
                    //elem.innerHTML.replace("Water","<span class='cursor'>_</span>Water");
                });
            });},2000);

    },
    setCopyright: function () {
        var date = new Date().getFullYear();
        var el = document.querySelector('.copy');
        el.innerText = "© 2017–" + date + " Valery Rybak";
    },
    init: function () {
        this.addListeners();
        this.setCopyright();
        this.getOffsetsOfAnchors();
       // console.log(this.anchorsCoord);
    }
};
app.init();