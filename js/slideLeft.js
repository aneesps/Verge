 document.getElementById('app_logo').addEventListener('click', drawer, false);

 function drawer() {
     document.getElementById('drawer').classList.toggle('drawer_left');
 }
 document.getElementById('app_articles').addEventListener('click', drawer_articles, false);

 function drawer_articles() {
     document.getElementById('drawer_articles').classList.toggle('drawer_right');
 }
