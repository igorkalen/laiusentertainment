 /*
    Developed by: Igor Kalen  
    Contact: igor@igorkalen.dev  
    Creation Date: July 15, 2025  
    Last Updated: August 1, 2025
    Version: 1.0.0
    Status: IN PRODUCTION
    File: channeltalk.js

    ----
    © 2025 Laius Entertainment. All rights reserved.

    This code is the exclusive property of Laius Entertainment.  
    Unauthorized use, copying, distribution, or modification  
    is strictly prohibited.

    For internal use only on systems, services, and domains  
    officially managed by Laius Entertainment.
 */

(function(){
  var w = window;
  if(w.ChannelIO){
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function(){ ch.c(arguments); };
  ch.q = [];
  ch.c = function(args){ ch.q.push(args); };
  w.ChannelIO = ch;
  function l(){
    if(w.ChannelIOInitialized){ return; }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if(x.parentNode){
      x.parentNode.insertBefore(s, x);
    }
  }
  if(document.readyState === "complete"){
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO('boot', {
  pluginKey: "dc7ec4de-c4eb-4103-9280-86f2e45c30bd"
});
