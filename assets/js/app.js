let fruitBox = document.querySelector('.boxFruits');
let vegetableBox = document.querySelector('.boxVegetables');
let boxes = document.querySelectorAll('.box')
let mixedBox = document.querySelector('.boxMixed')
let items = document.querySelectorAll('img.item');


for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('picIndex', i );
    });
}

boxes.forEach(box => {
    box.addEventListener('dragover', function(e){
        e.preventDefault();
    })
    box.addEventListener('drop', function(e){
       if( items[e.dataTransfer.getData('picIndex')].classList.contains('vegetable') && box.classList.contains('boxVegetables')){
           box.appendChild(items[e.dataTransfer.getData('picIndex')])
           
       }
       else if( items[e.dataTransfer.getData('picIndex')].classList.contains('fruit') && box.classList.contains('boxFruits')){
        box.appendChild(items[e.dataTransfer.getData('picIndex')])
        
    }
    })
});


mixedBox.addEventListener('dragover', e=>{
    e.preventDefault();

})
mixedBox.addEventListener('drop', e=>{
    mixedBox.appendChild(items[e.dataTransfer.getData('picIndex')])
    
    
})


