const form = document.querySelector('.form');
const inputTitle = document.querySelector('input[type="text"]');
const inputs= Array.from(document.querySelectorAll('.f_input'));
const btn = document.querySelector('.form_btn');




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


inputs.forEach(el => 
    el.addEventListener('change', e => 
        btn.disabled = false));

const checkInput = () => {
    inputs.forEach(el => {
        if(el.value === '') return false;
    });

    return true;
}


inputTitle.addEventListener('keypress', e => {
  document.getElementById('lb').style.display = 'none';
  document.querySelector('.form_btn').disabled = false;
});

 

const sendData = async (e) => {
     try{
      e.preventDefault();
      
      console.log(checkInput());
    //   if(!checkInput()) return console.log('Please complete field');
      const fm = new FormData(form);
      fm.append('text', document.getElementById('txt').value);
      
      const res = await fetch('https://fatiblog.onrender.com/api/v1/blog/createblog', {
        method: 'POST',
        body: fm
      });
      const result = await res.json();
      
      if(result.status){
        createAlertMsg('لقد تم إضافة المقال بنجاح');
        inputs.forEach(el  => el.value = '');
      }
     }catch(err){
      console.log(err)
     }
};

form.addEventListener('submit', sendData);