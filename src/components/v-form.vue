<template>
    <form @submit.prevent="submitForm">
        <ul class="form-ul">
            <li><input type="text" name="name" v-model="name" placeholder="Ваше имя"/></li>
            <li><input type="text" name="comp" v-model="comp" placeholder="Название организации"/></li>
            <li><input type="email" name="email"  v-model="email" placeholder="Укажите email"/></li>
            <li><input type="tel" name="tel" v-model="tel" maxlength="10" placeholder="+7"/></li>
            <li><textarea name="message" v-model="message" placeholder="Напишите Ваш вопрос"></textarea></li>
            <li><button type="submit">Отправить</button></li>
        </ul>
    </form>
</template>

<script>
  const WEB3FORMS_ACCESS_KEY = "910582c6-f0a9-4a2c-88bc-e1e317403f42";

  export default {
    data() {
      return {
        name: "",
        comp: "",
        email: "",
        tel:"",
        message: "",
      };
    },
    methods: {
      async submitForm() {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            Имя: this.name,
            Организация: this.comp,
            Email: this.email,
            Телефон: this.tel,
            Обращение: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log(result);
        }
      },
    },
  };
</script>

<style>
*{
    font-size: 24px;
}
  .form-ul{
    text-align: start;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 10%;
  }

  .form-ul li{
    margin: 25px 0px 25px 0px;
    text-align: center;
   }

  .form-ul input{
    width: 320px;
    border: 1px solid gray;
    border-radius: 8px;
    height: max-content;
    opacity: 0.6;
  }

  .form-ul textarea{
    width: 320px;
    height: 200px;
    border-radius: 10px;
    resize: none;
    opacity: 0.6;
  }

  .form-ul button{
    border-radius: 10px;
    width: 200px;
    height: 50px;
    background-color: rgb(237, 125, 49);
    transition: 0.4s;
  }

  .form-ul button:hover{
    background: transparent;
  }
</style>