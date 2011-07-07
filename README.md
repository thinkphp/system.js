System.js
=========

This Object System allows you to find out the user's system information.

How to use
----------

   <div id="info"></div>
   <script type="text/javascript">
   (function(){
      var out = '<table border="1" cellpadding="10" cellspacing="2">';
          out += ['<tr><td>OS</td><td>' + System.os,
                  '<tr><td>Browser</td><td>' + System.browser,
                  '<tr><td>Canvas</td><td>' + System.support.canvas,
                  '<tr><td>WebGL</td><td>' + System.support.webgl,
                  '<tr><td>Web Worker</td><td>' + System.support.worker,
                  '<tr><td>FILE API</td><td>' + System.support.file,
                  '<tr><td>File System API</td><td>' + System.support.fileSystem,
                  '<tr><td>localStorage</td><td>' + System.support.localStorage,
                  '<tr><td>sessionStorage</td><td>' + System.support.sessionStorage,
                  '<tr><td>requestAnimationFrame</td><td>' + System.support.requestAnimationFrame,
                  '<tr><td>Placeholder Attribute</td><td>' + System.support.placeholder,
                  '<tr><td>Range Attribute</td><td>' + System.support.range,
                  '<tr><td>Geolocation</td><td>' + System.support.geolocation,
                 ].join('</td></tr>');
      document.getElementById("info").innerHTML = out;  
   })();
   </script>
