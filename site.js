document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
toggle?.addEventListener('click',()=>{
 const expanded=toggle.getAttribute('aria-expanded')!=='true';
 toggle.setAttribute('aria-expanded',String(expanded));
 navigation.classList.toggle('is-open',expanded);
 toggle.querySelector('span').textContent=expanded?'−':'+';
});
navigation?.addEventListener('click',event=>{
 if(event.target.closest('a')){
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded','false');
  toggle.querySelector('span').textContent='+';
 }
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&navigation?.classList.contains('is-open')){
  navigation.classList.remove('is-open');
  toggle.setAttribute('aria-expanded','false');
  toggle.querySelector('span').textContent='+';
  toggle.focus();
 }
});
const snapshotImage=document.querySelector('#snapshot-image');
const snapshotCaption=document.querySelector('#snapshot-caption');
document.querySelectorAll('[data-snapshot]').forEach(button=>button.addEventListener('click',()=>{
 const missing=button.dataset.snapshot==='missing';
 snapshotImage.src=`../assets/tool-${missing?'missing':'present'}.webp`;
 snapshotImage.alt=missing?'Prototype output with red outlines marking two missing tool slots and green outlines marking present tools':'Prototype output marking all tool slots as present with green outlines';
 snapshotCaption.textContent=missing?'Recorded prototype snapshot: two slots are marked missing in red. These are example outputs, rather than accuracy benchmarks.':'Recorded prototype snapshot: green outlines mark slots classified as present. These are example outputs, rather than accuracy benchmarks.';
 document.querySelectorAll('[data-snapshot]').forEach(control=>control.setAttribute('aria-pressed',String(control===button)));
}));
