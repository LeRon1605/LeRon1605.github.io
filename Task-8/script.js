let count = 0;
let block;
function preview_image(event){
  let files = event.target.files;
  block = URL.createObjectURL(files[0]);
  document.getElementsByTagName('img')[0].src = block
}
function getData(event){
  event.preventDefault();
  count++;
  let id = count;
  let itemName = document.getElementById('itemname').value;
  let catagory = document.getElementsByTagName('select')[0].value;
  let img = block;
  let newRow = `
      <tr>
            <th scope="row">
              <p class=idItem-${id}>${id}</p>
            </th>
            <td>
              <input type="text" name="itemName" readonly="" value=${itemName} id=itemname-${id}>
            </td>
            <td>
              <select id=select-${id} disabled>
                <option readonly>${catagory}</option>
              </select>
            </td>
            <td>
              <img src=${img} alt="" id=image-${id} >
              <input type="file" name="" id=chooseFile-${id} accept = image/*>
            </td>
            <td>
              <button type="button" id=edit-button-${id} class="btn btn-primary edit-button" onclick=edit(this)>Edit</button>
              <button type="button" id=delete-button-${id} class="btn btn-danger delete-button" onclick=deleteProfile(this)>Delete</button>
            </td>
      </tr>
  `;
  document.getElementById('itemname').value = '';
  document.getElementsByTagName('select')[0].value = 'No selected';
  block = '';
  document.getElementsByTagName('img')[0].src = '';
  document.querySelector('tbody').innerHTML += newRow;
}
function findNum(str){
  let myArr = str.split('');
  let newArr = myArr.filter(function(element){
    if (element >= '0' && element <= '9') return element;
  })
  return newArr.join('');
}
function edit(event) {
  let id = findNum(event.id);
  function preview_image1(event){
    let files = event.target.files;
    block = URL.createObjectURL(files[0]);
    document.querySelector(`#image-${id}`).src = block;
  }
  document.querySelector(`#itemname-${id}`).readOnly = false;
  document.querySelector(`#select-${id}`).disabled = false;
  document.querySelector(`.table #chooseFile-${id}`).style.display = 'block';
  document.querySelector(`.table #chooseFile-${id}`).onchange = preview_image1;
  document.querySelector(`#select-${id}`).innerHTML = `
    <select id=select-${id}>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
    </select>
  `;
  document.querySelector(`#edit-button-${id}`).innerText = 'Save';
  function Save(event){
    document.querySelector(`#itemname-${id}`).readOnly = true;
    document.querySelector(`.table #chooseFile-${id}`).style.display = 'none';
    document.querySelector(`#select-${id}`).disabled = true;
    document.querySelector(`#edit-button-${id}`).innerText = 'Edit';
  }
  event.onclick = Save;
}
function deleteProfile(event){
  count--;
  let id = findNum(event.id);
  let trTag = document.getElementsByTagName('tr')[id];
  trTag.parentNode.removeChild(trTag);
}
document.querySelector('#input-img').onchange = preview_image;
document.querySelector('#form').onsubmit = getData;