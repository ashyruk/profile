/**
 * Created by rybak on 18.01.2017.
 */
window.addEventListener('scroll', function(){
    //console.log(this.scrollY);
    var elem = document.getElementsByTagName('header')[0];
    if (this.scrollY>600){
        elem.className = 'nav fixed';
    }else{
        elem.className = 'nav';
    }
    this.blur();
});
//