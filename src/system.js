var System = {

           browser: (function(){

               var ua = navigator.userAgent;               
               if(/Firefox/.test(ua)) {
                 return "Firefox";
               } else if(/Chrome/.test(ua)) {
                 return "Chrome";  
               } else if(/MSIE/.test(ua)) {
                 return "Internet Explorer";
               } else if(/Opera/.test(ua)){
                 return "Opera";  
               } else if(/Safari/.test(ua)){
                 return "Safari";  
               } else if(/Mobile Safari/.test(ua)){
                 return "Mobile Safari";  
               } else if(/Arora/.test(ua)){
                 return "Arora";
               } else if(/Epiphany/.test(ua)){
                 return "Epiphany";  
               } else if(/Midori/.test(ua)){
                 return "Modori";
               } else if(/Camino/.test(ua)) {
                 return "Camino"; 
               }

             return false; 
           })(),

           os:(function(){
             
              var ua = navigator.userAgent;
              if(/Android/.test(ua)){
                  return "Android"; 
              } else if(/Linux/.test(ua)) {
                  return "Linux";
              } else if(/Windows/.test(ua)) {
                  return "Windows";
              } else if(/iP[ao]d|iPhone/i.test(ua)) {
                  return "iOS";
              } else if(/CrOS/.test(ua)) {
                  return "Chrome OS";
              } else if(/Mac OS/.test(ua)) {
                  return "Mac OS";
              }              
              
            return false;  
           })(),

           support: {

              canvas: !! window.CanvasRenderingContext2D,

              webgl: !! window.WebGLRenderingContext,

              /**
                 Web Workers provide a standard way for browsers to run JavaScript in the background. With web workers
                 you can spawn multiple "threads" that all run at the same time, more and less.(Think of how your computer
                 can run multiple applications at the same time, and you're most of the way there). These "background threads"
                 can do complex mathematical calculations, make network requests, or access local storage while the main web
                 responds to the user scrolling, clicking or typing. 
               */
              worker: !! window.Worker,

              file: !! window.File && !! window.FileReader && !! window.FileList && !! window.Blob,

              fileSystem: !! window.requestFileSystem,

              requestAnimationFrame: !! window.mozRequestAnimationFrame || !! window.webkitRequestAnimationFrame || !! window.oRequestAnimationFrame || !! window.mzRequestAnimationFrame,

              /**
                 HTML 5 storage provides a way for web sites to store information on your computer and retrieve it later.
                 The concept is similar to cookies, but it's designed for larger quantities of information. Cookies are limited
                 in size, and your browser sends them back to the web server every time it requests a new page. (which takes extra time 
                 and bandwith).HTML5 storage stayes on your computer, and websites can access it with JavaScript after the page is loaded.
               */
              localStorage: ( function(){
 
                 try{

                    return 'localStorage' in window && window['localStorage'] !== null && !! localStorage.getItem;

                 }catch(error) {

                   return false;
                 }                  
  
              })(),  

              sessionStorage: ( function(){
 
                 try{

                    return !! sessionStorage.getItem;

                 }catch(error) {

                   return false;
                 }                  
  
              })(),  

              placeholder: (function(){

               return 'placeholder' in document.createElement("input");

              })(),


              /**
                Geolocation is the art of figuring out where you are in the world and (optionally) sharing that information 
                with people you trust. There is more than one way to figure out where you are - your IP, your wireless network 
                connection, which cell tower your phone is talking to, or dedicated GPS hardware that calculates latitude and
                longitude from information sent by satellites in the sky. 
                Let's find out where you are!
               */
              geolocation: !! navigator.geolocation,
             
              range: (function(){

                 /**
                   First you create a dummy input element in memory. The default input type for all "input"
                   elements is text. Next set the type attribute on the dummy <input> element to the input type
                   you want to detect(range,color,date,email,url,time,datetime,month,week,tel). If your browser
                   supports that particular input type, the type property will retain the value you set. If your
                   browser doesn't support that particular input type. it will ignore the value you set and the
                   type property will still be "text"  
                  */
                 var i = document.createElement("input");
                     i.type = "range"; 

                 return i.type !== 'text'; 
              })()
           }
};