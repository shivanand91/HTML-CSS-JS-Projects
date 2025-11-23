const accordionItem = document.querySelectorAll('.accordionitem');

accordionItem.forEach(item =>{
    const title = item.querySelector('.accordionTitle');
    const content = item.querySelector('.accordionContent');

    title.addEventListener('click', ()=>{

        for(let i =0; i<accordionItem.length; i++){
            if(accordionItem[i] != item){
                accordionItem[i].classList.remove('active');
            }else{

                item.classList.toggle('active');
            }
        }
    });
});
