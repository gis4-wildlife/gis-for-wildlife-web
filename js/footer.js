// Shared footer — edit here, both pages update automatically.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('shared-footer');
  if (!el) return;
  el.innerHTML =
    '<footer style="padding: 32px 48px 48px;">' +
      '<div style="margin-bottom: 12px; font-family: Lato, sans-serif; font-weight: 300; font-size: 12px; letter-spacing: 0.04em;">' +
        '🚀 GIS4 Wildlife Movement Analytics &reg;' +
      '</div>' +
      '<div>' +
        '<a href="mailto:admin@gis4-wildlife.com">admin@gis4-wildlife.com</a>' +
      '</div>' +
    '</footer>';
});
