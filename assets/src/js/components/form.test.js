export default function () {



    let respForm = document.querySelector('.responsys-test form');



    respForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('test');
    });


  }
  