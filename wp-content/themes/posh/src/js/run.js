var posh = posh || {};

(function() {
  'use strict';

  //

  posh.globals = {};

  posh.globals.baseUrl = window.location.href;
  if (posh.globals.baseUrl.substr(-1) === "/") {
    posh.globals.baseUrl = posh.globals.baseUrl.replace(/\/+$/, "");
  }

  posh.globals.scrollingDown = false;
  posh.globals.atBottom = false;
  posh.globals.scrollTop = 0;

  //
  // ready

  $(document).ready(function() {
    posh.globals.windowHeight = $(window).height();
    posh.globals.windowWidth = $(window).width();
  });

  //
  // load

  $(window).on("load resize", function() {
    posh.globals.windowHeight = $(window).height();
    posh.globals.windowWidth = $(window).width();
  });

  //
  // scroll

  $(window).on("scroll", function() {
    var scrollTop = $(document).scrollTop();

    posh.globals.scrollDiff = scrollTop - posh.globals.scrollTop;
    posh.globals.scrollingDown = posh.globals.scrollDiff > 0;
    posh.globals.scrollTop = scrollTop;

    if (posh.globals.scrollTop >= $(document).height() - posh.globals.windowHeight) {
      posh.globals.atBottom = true;
    } else {
      posh.globals.atBottom = false;
    }
  });

  posh.init = function() {
    posh.header.init();
    posh.home.init();
  }

  jQuery(function($) {
    posh.init();
  });
})();
