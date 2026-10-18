
(function(){
  const base = location.pathname.includes('/pages/') ? '../' : '';
  const links = [
    ['🏠 Home','index.html'],
    ['📖 Leren','pages/learn.html'],
    ['🎯 Quiz','pages/quiz.html'],
    ['🚦 Hoofdstukken','pages/sections.html'],
    ['📊 Voortgang','pages/progress.html']
  ];
  document.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('[data-nav]');
    if(nav) nav.innerHTML=links.map(([t,u])=>`<a href="${base}${u}">${t}</a>`).join('');
    const footer=document.querySelector('[data-footer]');
    if(footer) footer.innerHTML='🚦 Mijn Verkeersborden Test · Exacte leerstof uit jouw PDF';
  });
  window.basePath=base;
})();
