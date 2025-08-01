  /*
    Developed by: Igor Kalen  
    Contact: igor@igorkalen.dev  
    Creation Date: July 31, 2025  
    Last Updated: August 1, 2025
    Version: 1.0.0
    Status: IN PRODUCTION
    File: mobile-menu.js

    ----
    © 2025 Laius Entertainment. All rights reserved.

    This code is the exclusive property of Laius Entertainment.  
    Unauthorized use, copying, distribution, or modification  
    is strictly prohibited.

    For internal use only on systems, services, and domains  
    officially managed by Laius Entertainment.
 */   

 document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileNavMenu = document.getElementById('mobileNavMenu');
            const navbar = document.getElementById('navbar');
            const announcementBanner = document.getElementById('announcementBanner');
            const hero = document.querySelector('.hero');
            let isMobileMenuOpen = false;

            mobileMenuBtn.addEventListener('click', function() {
                isMobileMenuOpen = !isMobileMenuOpen;
                
                if (isMobileMenuOpen) {
                    mobileMenuBtn.classList.add('active');
                    mobileNavMenu.classList.add('active');
                } else {
                    mobileMenuBtn.classList.remove('active');
                    mobileNavMenu.classList.remove('active');
                }
            });

            const mobileNavLinks = mobileNavMenu.querySelectorAll('.nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenuBtn.classList.remove('active');
                    mobileNavMenu.classList.remove('active');
                    isMobileMenuOpen = false;
                });
            });

            document.addEventListener('click', function(event) {
                if (isMobileMenuOpen && 
                    !mobileMenuBtn.contains(event.target) && 
                    !mobileNavMenu.contains(event.target)) {
                    mobileMenuBtn.classList.remove('active');
                    mobileNavMenu.classList.remove('active');
                    isMobileMenuOpen = false;
                }
            });
        });