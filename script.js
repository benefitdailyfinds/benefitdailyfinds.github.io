
let data=[],cat='All';
fetch('products.json').then(r=>r.json()).then(d=>{data=d;show();});
function filterCat(c){cat=c;show();}
document.addEventListener('input',e=>{if(e.target.id==='search')show();});
function show(){
const s=(document.getElementById('search')?.value||'').toLowerCase();
const box=document.getElementById('products');
box.innerHTML='';
data.filter(p=>(cat==='All'||p.category===cat)&&p.name.toLowerCase().includes(s)).forEach(p=>{
box.innerHTML+=`<div class="card">
<img src="${p.image}" alt="">
<h3>${p.name}</h3>
<p>${p.description}</p>
<a class="buy" href="${p.link}" target="_blank">Buy on Amazon</a>
</div>`;
});
}
