const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const onAddItemSubmit = (event)=>{
event.preventDefault()
if(itemInput.value===''){
    alert('please enter an item');
    
}else{
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(itemInput.value));

   const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
// Add li to the DOM
itemList.appendChild(li);
  
}
}
const createButton =(classes)=>{
    const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}
//event listeners
itemForm.addEventListener('submit', onAddItemSubmit);