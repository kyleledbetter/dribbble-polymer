(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
    // custom transformation: scale header's title
    var titleStyle = document.querySelector('.title').style;
    addEventListener('core-header-transform', function(e) {
      var d = e.detail;
      var m = d.height - d.condensedHeight;
      var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
      titleStyle.transform = titleStyle.webkitTransform =
          'scale(' + scale + ') translateZ(0)';
    });
    //tabs
    var pages = document.querySelector('core-pages');
    var tabs = document.querySelector('[drawer] paper-tabs');
    tabs.addEventListener('core-select', function() {
      pages.selected = tabs.selected;
    });
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
