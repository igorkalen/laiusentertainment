 /*
    Developed by: Igor Kalen  
    Contact: igor@igorkalen.dev  
    Creation Date: July 31, 2025  
    Last Updated: August 1, 2025
    Version: 1.0.0
    Status: IN PRODUCTION
    File: announcement-banner.js

    ----
    © 2025 Laius Entertainment. All rights reserved.

    This code is the exclusive property of Laius Entertainment.  
    Unauthorized use, copying, distribution, or modification  
    is strictly prohibited.

    For internal use only on systems, services, and domains  
    officially managed by Laius Entertainment.
 */
 
        function closeBanner() {
            const banner = document.getElementById('announcementBanner');
            const navbar = document.getElementById('navbar');
            const mobileNavMenu = document.getElementById('mobileNavMenu');
            const hero = document.querySelector('.hero');
            
            banner.classList.add('hidden');
            navbar.classList.add('banner-hidden');
            mobileNavMenu.classList.add('banner-hidden');
            hero.classList.add('banner-hidden');
        }

        function adjustNavbarOffset() {
    const banner = document.getElementById("announcementBanner");
    const navbar = document.querySelector(".navbar");

    if (banner && navbar) {
      const isHidden = banner.classList.contains("hidden");
      navbar.style.top = isHidden ? '0' : `${banner.offsetHeight}px`;
    }
  }

  window.addEventListener('load', adjustNavbarOffset);

  window.addEventListener('resize', adjustNavbarOffset);