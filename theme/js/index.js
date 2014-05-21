var container = document.querySelector('#post-list');

var msnry = new Masonry( container, {
  // columnWidth: 100,
  itemSelector: '.item',
  gutter: 0,
});

window.onload = function () {
  msnry.layout();
}
