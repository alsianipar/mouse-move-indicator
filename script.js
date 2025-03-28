
const $dcl = document.documentElement;
let initialX = 0;
const createIndicator=()=>{
    const $id = ['x','y','title']
    const obj = {};
    const scope = document.createElement('div')
    scope.classList.add('indicator-scope')
    obj.scope = scope
    for(let i=0; i<$id.length;i++){
       const sp = document.createElement('span')
       sp.classList.add(`indicator-${$id[i]}`)
       obj[$id[i]] = sp;
       scope.appendChild(sp);
       document.body.appendChild(scope)
    }
    return obj;
}
const {title,x,y,scope} = createIndicator();
 

$dcl.addEventListener('mousemove',(e)=>{
     initialX = e.clientX;
     setTimeout(()=>{
         if(initialX < e.clientX){
              title.textContent = `You Move To The Left`
         }    
         if(initialX > e.clientX){
            title.textContent = `You Move To The Right`
        }    
     },100)
      scope.classList.add('active')
      x.textContent = `X : ${e.clientX}`
      y.textContent = `Y : ${e.clientY}`
 
})

