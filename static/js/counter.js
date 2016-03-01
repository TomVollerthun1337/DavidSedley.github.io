$(function() {
  window.setTimeout(function() {
    var statCounter = $('.stat-counter');
    statCounter.append('<img src=' + statCounter.attr('data-src') + '>');
  }, 100);
});
