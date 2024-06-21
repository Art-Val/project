<template>
  <div id="app">
    <div class="block-1" id="section1">
      <h1>AirDrop</h1>
      <ul class="ul-bl-1">
        <li class="li-bl-1"><a href="#section1">О нас</a></li>
        <li class="li-bl-1"><a href="#section2">Контакты</a></li>
        <li class="li-bl-1"><a href="#section3">Обратная связь</a></li>
      </ul>
      <div class="info-bl-1">
        <p><span style="background: rgb(237, 125, 49);">Добро пожаловать на наш сайт презентации по продаже дронов для
            доставки товаров!
            <br>
            <br>
            Наш сервис идеален для бизнеса, который ценит свое время и хочет оптимизировать процесс доставки товаров. Мы
            гарантируем высокое качество обслуживания и надежность доставки.
          </span></p>
        <div class="info-img-1"><img src="assets/drone-2.png" alt=""></div>
      </div>
    </div>
    <div class="block-2">
      <h2> Ключевые особенности</h2>
      <div class="p-bl p-bl-1">
        <p>Более быстрая доставка. <br>
          Скорость доставки по Zipline в 7 раз превышает скорость традиционных автомобильных перевозок.</p>
      </div>
      <div class="p-bl p-bl-2">
        <p>Максимальное удобство <br>
          Поставки прибывают в нужное место с точностью до секунды.</p>
      </div>
      <div class="p-bl p-bl-3">
        <p>Больше клиентов <br>
          Расширенный ассортимент Zipline увеличивает зону вашего обслуживания до 150 раз.</p>
      </div>
      <div class="p-bl p-bl-4">
        <p>Более низкая стоимость <br>
          Масштабируйте свои операции по низким и предсказуемым ценам благодаря автономной доставке.</p>
      </div>
      <div class="p-bl p-bl-5">
        <p>Простая интеграция <br>
          Выполните настройку всего за несколько дней благодаря нашей простой интеграции программного обеспечения и
          инфраструктуры.</p>
      </div>
      <List-p></List-p>
    </div>
    <div class="block-3">
      <h2>Технологии</h2>
      <p>Мы предлагаем инновационное решение для бизнеса, которое позволит
        оптимизировать процесс доставки товаров и снизить затраты на логистику.</p>
      <div class="project-bl">
        <div class="project-bl-info">
          <div class="project-bl-info-img-1" loading="lazy"></div>
          <div>
            <p>Наши дроны оснащены самыми современными технологиями, которые гарантируют безопасность и надежность
              доставки. Мы используем систему автономного управления, которая позволяет дрону летать по заданному маршруту
              без участия оператора. <br>
              Наши дроны также оснащены системой предотвращения столкновений, которая гарантирует
              безопасность полета.</p>
          </div>
        </div>
        <div class="project-bl-info">
          <p>Мы работали с нашими партнерами над разработкой инновационных химических элементов и эффективных
            аккумуляторных блоков. <br>
            Эти аккумуляторы протестированы и проверены на долговечность в течении тысячи
            полетов и многих лет, прежде чем они выйдут из строя.</p>
          <div class="project-bl-info-img-2" loading="lazy"></div>
        </div>
        <div class="project-bl-info">
          <div class="project-bl-info-img-3" loading="lazy"></div>
          <p>Программное обеспечение дронов для управления автопарком предоставляет операторам полетов возможность
            контролировать операции на уровне автопарка во всех странах.
            <br>
          </p>
        </div>
        <div class="project-bl-info">
          <p>В случае, если ваши операторы или бортовой компьютер дрона решат, что беспилотник необходимо вывести из
            воздушного пространства, раскрывается парашют, позволяющий аппарату мягко приземлиться. <br>
            Дроны выполнены в
            такой легкой форме, чтобы минимизировать любое повреждение частей дрона на земле.</p>
          <div class="project-bl-info-img-4" loading="lazy"></div>
        </div>
      </div>
    </div>
    <div class="block-4">
      <Form id="section3"></Form>
      <div class="bl-4-info">
        <h2>Остались вопросы?</h2>
        <p>Вы всегда можете оставить свои контактные данные, чтобы с вами связались наши менеджеры.
          <br> <br>
          Мы будем рады предоставить обратную связь!
        </p>
      </div>
    </div>
    <div class="block-5">
      <h2>Галерея</h2>
      <Carousel></Carousel>
    </div>
    <div class="footer" id="section2">
      <div class="f-con">
        <div class="f-line"></div>
        <div class="f-nav">
          <h1>AirDrop</h1>
          <ul class="ul-f">
            <li class="li-f"><a href="#section1">О нас</a></li>
            <li class="li-f"><a href="#section2">Контакты</a></li>
            <li class="li-f"><a href="#section3">Обратная связь</a></li>
          </ul>
        </div>
        <div class="f-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './components/v-form.vue'
import Carousel from './components/v-carousel.vue'

export default {
  name: 'App',
  components: {
    Form,
    Carousel
  },
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

.block {
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 100px;
  height: 350px;
  width: 80%;
}

.block-1 {
  border: 1px solid black;
  min-height: 700px;
  /*background-color: rgba(146, 142, 142, 0.473);*/
  background-image: url(assets/back-city.gif);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
}

.block-1 h1 {
  margin-top: 40px;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.block-2 {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  height: max-content;
  padding-top: 100px;
  
}

.block-2 h2{
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 34px;
}

.block-3 {
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  
}

.block-3 p {
  margin-top: 40px;
  color: rgb(105, 75, 75);
  max-width: 800px;
  font-size: 24px;
}

.block-3 h2 {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 34px;
  padding: 20px;
}

.block-4 {
  height: 600px;
  width: 80%;
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 30px;
  border: none;
  border-radius: 40px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(250deg, rgb(237, 125, 49), 55%, #7bafe2);
}

.block-5{
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
}

.block-5 h2{
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  padding: 20px 0px 40px 20px;
  font-size: 36px;
}

.bl-4-info {
  width: 25%;
}

.bl-4-info p {
  max-width: 300px;
  text-align: center;
  font-size: 28px;
  vertical-align: middle;
}

.bl-4-info h2 {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-size: 38px;
  padding-bottom: 20px;
  text-align: center; 
  max-width: 300px;
}

.project-bl {
  display: flex;
  height: max-content;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.project-bl-info {
  display: flex;
  height: 500px;
  width: 80%;
  margin: 20px;
  padding-top: 60px;
  align-items: center;
  justify-content: space-around;
}

.project-bl-info p {
  max-width: 400px;
  color: rgb(105, 75, 75);
}

.project-bl-info-img-1 {
  background-image: url("/src/assets/drone-project.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 40px;
  height: 100%;
  width: 60%;
}

.project-bl-info-img-2 {
  background-image: url("/src/assets/drone-project-2.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 40px;
  height: 100%;
  width: 60%;
}

.project-bl-info-img-3 {
  background-image: url("/src/assets/drone-project-3.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 40px;
  height: 100%;
  width: 60%;
}

.project-bl-info-img-4 {
  background-image: url("/src/assets/drone-project-4.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 40px;
  height: 100%;
  width: 60%;
}

.block-2 p {
  font-size: 24px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  text-align: center;
  font-size: 50px;
}

.p-bl {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 184px;
  font-size: 24px;
  color: white;
  margin-top: 30px;
}

.p-bl-1 {
  background: linear-gradient(to left, rgb(237, 125, 49), 25%, #7bafe2);
}

.p-bl-2 {
  background: linear-gradient(to left, rgb(237, 125, 49), 35%, #7bafe2);
}

.p-bl-3 {
  background: linear-gradient(to left, rgb(237, 125, 49), 45%, #7bafe2);
}

.p-bl-4 {
  background: linear-gradient(to left, rgb(237, 125, 49), 55%, #7bafe2);
}

.p-bl-5 {
  background: linear-gradient(to left, rgb(237, 125, 49), 65%, #7bafe2);
}

.ul-bl-1 {
  display: flex;
  font-size: 18px;
  text-align: center;
  padding: 0;
  margin: 0 auto;
  background-color: rgb(237, 125, 49);
  width: max-content;
  height: max-content;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.li-bl-1 {
  display: inline;
  padding: 15px;
}

.li-bl-1 a {
  text-decoration: none;
  color: white;
  transition: 0.7s;
}

.li-bl-1 a:hover {
  background-color: bisque;
  color: black;
}

.info-bl-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}

.info-bl-1 p {
  max-width: 600px;
  font-size: 25px;
  margin-right: 95px;
  color: white;
}

.info-img-1 {
  background-image: url(assets/drone-4.png);
  width: 350px;
  height: 300px;
  background-size: 100% 100%;
  animation: 5s slidein forwards;
  opacity: 0;
  overflow-x: hidden;
}

@keyframes slidein {
  from {
    transform: translate(-2000px);
    opacity: 0.7;
  }

  to {
    transform: translate(1500px);
    opacity: 0;
  }

  50% {
    transform: translate(0px);
    opacity: 1;
  }
}

.footer {
  background: rgb(214, 142, 94);
  background-size: 100% 100%;
  margin-top: 80px;
  
}

.f-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 400px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.li-f{
  list-style: none;
  text-decoration: none;
  display: inline;
  text-align: end;
  margin-left: 40px;
}

.li-f a{
  text-decoration: none;
  color: white;
  transition: 0.7s;
}

.li-f a:hover{
  background-color: bisque;
  color: black;
}

.f-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}

.f-line{
  border-top: 1px solid white;
  width: 100%;
}

.f-line p{
  margin-top: 30px;
}

</style>
