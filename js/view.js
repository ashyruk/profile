/**
 * Created by rybak on 18.01.2017.
 */
var app;
app = {
    ScrollY: 0,
    anchorsCoord: [],
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