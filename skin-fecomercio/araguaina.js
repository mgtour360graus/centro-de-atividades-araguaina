(function(){
  'use strict';
  var title='Centro de Atividades Sesc Araguaína | Tour 360°';
  var element=document.querySelector('title');
  function updateTitle(){if(document.title!==title)document.title=title;}
  updateTitle();
  if(element)new MutationObserver(updateTitle).observe(element,{childList:true,characterData:true,subtree:true});
})();
