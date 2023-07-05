jQuery(document).ready(function($) {
    let cursor = document.querySelector('#custom-cursor');
  
    document.addEventListener('mousemove', evt => {
        cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left:"+(e.pageX-10)+"px;")
    });
});