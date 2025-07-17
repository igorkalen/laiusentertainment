/*
    Developed by: Igor Kalen
    Contact: igor@igorkalen.dev
    Date: July 11, 2025

    ---
    Copyright (c) 2025 Laius Group. All rights reserved.

    This code and its contents are proprietary to Laius Group. Unauthorized use,
    reproduction, distribution, or modification of any part of this code is strictly
    prohibited without explicit written permission from Laius Group.

    This code is intended solely for internal use by official Laius Group operations
    and deployment on verified domains and subdomains controlled by Laius Group.
    This restriction does not apply to domains or subdomains where customers have
    access to user-generated content, which may utilize parts of this code under
    specific agreements. 
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
