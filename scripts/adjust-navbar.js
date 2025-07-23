/*
    Developed by: Igor Kalen
    Contact: igor@igorkalen.dev
    Date: July 23, 2025
    Last Updated: July 23, 2025

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

  function closeBanner() {
    const banner = document.getElementById("announcementBanner");
    banner.classList.add("hidden");
    adjustNavbarOffset();
  }