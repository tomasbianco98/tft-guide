// Stars
(function(){const c=document.getElementById('stars'),x=c.getContext('2d');let w,h,pts=[];function resize(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;pts=[];for(let i=0;i<120;i++)pts.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.5+.5,s:Math.random()*.3+.1,o:Math.random()})}
function draw(){x.clearRect(0,0,w,h);pts.forEach(p=>{p.o+=p.s*.02;let a=.3+Math.sin(p.o)*.4;x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fillStyle=`rgba(255,255,255,${a})`;x.fill();p.y-=p.s;if(p.y<-5){p.y=h+5;p.x=Math.random()*w}});requestAnimationFrame(draw)}
resize();draw();window.addEventListener('resize',resize)})();
// Back to top
const btt=document.getElementById('btt');
window.addEventListener('scroll',()=>{btt.classList.toggle('show',window.scrollY>600)});
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
// Reveal on scroll
const obs=new IntersectionObserver(e=>e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('visible')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
// Tabs
document.addEventListener('click',e=>{if(!e.target.classList.contains('tab-btn'))return;const g=e.target.closest('.tabs-container');g.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');const t=e.target.dataset.tab;g.querySelectorAll('.tab-content').forEach(c=>{c.classList.toggle('active',c.id===t)})});
// Accordion
document.addEventListener('click',e=>{const h=e.target.closest('.acc-header');if(!h)return;const b=h.nextElementSibling;const inner=b.querySelector('.acc-body-inner');h.classList.toggle('open');b.style.maxHeight=h.classList.contains('open')?inner.scrollHeight+'px':'0'});
// Burger menu
document.getElementById('burger').addEventListener('click',()=>{document.getElementById('navLinks').classList.toggle('open')});
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('navLinks').classList.remove('open')}));
