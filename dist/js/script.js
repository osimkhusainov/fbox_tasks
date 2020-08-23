window.addEventListener('DOMContentLoaded', () => {

  const closeEvent = (n) => {
    n.addEventListener("click", () => {
      n.classList.toggle("close");
      document.querySelector('.info__error').classList.toggle('show');
    });
  };
  document.querySelectorAll("#close").forEach((n) => closeEvent(n));


  document.querySelector(".cards").addEventListener("click",  e => {
    const card = e.target.closest('.card');
    if(!card) return;
    card.classList.toggle('card-active');

    
    const product = e.target.closest('.product');
  
    product.querySelector(".info__buy").classList.toggle("hide");
    product.querySelector(".info__descr").classList.toggle("show");


    const cardActive = document.querySelector('.card-active');
    cardActive.addEventListener('mouseout', (event) => {
        const target = event.target;
        if(target !== cardActive) {
            document.querySelector('.card__label').style.display = 'none';
            document.querySelector('.card__cansel').style.display = 'block';

        }else {
            document.querySelector('.card__label').style.display = 'block';
            document.querySelector('.card__cansel').style.display = 'none';
        }
    });
 
  });

});
