const table = document.querySelector('.table');
const section_infoNumber = document.querySelector('.section_info--number');
        
const createAlertMsg = msg => {
    const div = document.createElement('div');
    div.className = 'box_msg';
    const p = document.createElement('p');
    div.appendChild(p);
    p.textContent = msg;
    p.className = 'alert_msg';
    document.querySelector('.container')
    .insertAdjacentElement("afterbegin", div);

    
}

const transferArabic = date => {
    let dateAR = new Date(date);
    let option = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    let dateStr = dateAR.toLocaleDateString('ar-SA', option);

    return dateStr;
}

const fetchData = async e => {
    try{
        
        const res = await fetch('https://fatiblog.onrender.com/api/v1/blog');
        const result = await res.json();
        const { data } = result.data;
        section_infoNumber.textContent = data.length;
        data.forEach(el => {
          const tr = `<tr>
               <td>${el.title}</td>
               <td class="image"><img src='${el.image}' width='70' /></td>
               <td class='texto'>${el.text.slice(0, 19)}... <p>${el.text}</p></td>
               <td>${transferArabic(el.date).slice(0, 11)}</td>
               <td class='centered'>
                   <button class='edit'><i class="fa-regular fa-pen-to-square"></i></button>
               </td>
               <td class=''>
                  <button class='del' id='${el._id}'><i class="fa-solid fa-trash"></i></button>
               </td>
           </tr>`;
          table.insertAdjacentHTML('beforeend', tr);
      });
      Array.from(document.querySelectorAll('.del').forEach(el => {
              el.addEventListener('click', e => {
                  
                  fetch('https://fatiblog.onrender.com/api/v1/blog/' + e.target.closest('.del').id, {
                      method: 'DELETE'
                  })
                  .then(res => res.json()).then(msg => {
                      createAlertMsg('تم حذف بنجاح');
                      
                      
                  })
                  .catch(err => console.log(err))
              })
     }));
  
      }catch(err){
        console.log(err);
    }
}
    
fetchData();