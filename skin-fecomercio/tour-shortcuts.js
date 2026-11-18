/* © 2026 MG Tour 360°. Direitos reservados ao layout. */
(function () {
  'use strict';

  window.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();
    var control = (event.ctrlKey || event.metaKey) && !event.altKey;
    var inspector = control && event.shiftKey && ['i', 'j', 'c', 'k'].includes(key);
    var sourceOrSave = control && !event.shiftKey && ['u', 's'].includes(key);
    if (key === 'f12' || inspector || sourceOrSave) event.preventDefault();
  }, { capture: true });

  function protectPanorama(event) {
    if (event.target instanceof Element && event.target.closest('#viewer canvas, #viewer img')) {
      event.preventDefault();
    }
  }

  document.addEventListener('contextmenu', protectPanorama, { capture: true });
  document.addEventListener('dragstart', protectPanorama, { capture: true });
}());
