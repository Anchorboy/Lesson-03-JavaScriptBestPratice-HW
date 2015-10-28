'use strict';

(function() {

  var ContentManager = function () {
    var _wrapper = document.querySelector('#note-content-wrapper'); 
  }
 
  ContentManager.prototype = {

    start() {
      window.addEventListener('note-open', function(event) {
        var note = event.detail;
        resetWrapper();
        drawNote(note);
      });
    },

    resetWrapper() {
      _wrapper.innerHTML = '';
    },

    drawNote(note) {
      var title = note.title;
      var h = document.createElement('h2');
      h.textContent = title;
      var passages = note.passages;
      var buff = document.createDocumentFragment();
      passages.forEach(function(passage) {
        var p = document.createElement('p');
        p.classList.add('note-passage');
        p.textContent = passage;
        buff.appendChild(p);
      });
      _wrapper.appendChild(h);
      _wrapper.appendChild(buff);
    },

    document.addEventListener('DOMContentLoaded', function(event) {
      start();
    });

  }
})(window);