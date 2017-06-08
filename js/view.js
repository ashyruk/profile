/**
 * Created by rybak on 18.01.2017.
 */
var ScrollY = 0;
function getOfsetsOfAnchors() {
    var elems = document.querySelectorAll('.separator');
    var coord = [];

    coord.push(0);
    Array.prototype.forEach.call(elems,function (i) {
        coord.push(i.offsetTop);
    });
    return coord;
}
window.addEventListener('scroll', function(e){
    //console.log(this.scrollY);

    //e.preventDefault();
    var elem = document.getElementsByTagName('header')[0];
    //console.log(this.pageYOffset);
    if (this.scrollY>0){
        elem.className = 'fixed';
    }else{
        elem.className = '';
    }
    //this.blur();


    //var top = window.pageYOffset;
    // var top = this.scrollY;
    // if (ScrollY > top){
    //         window.scrollBy(0,-10);
    // } else if (ScrollY < top){
    //     window.scrollBy(0,10);
    // }
    // ScrollY = top;
});
