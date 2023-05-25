<template>
    <!-- 화면 한쪽으로 쏠리면, LoginAndRegistView 호출하는 뷰 가운데 정렬하기(flex) -->
    <div :class="{container: true, rightPanelActive: isRegist}" id="container">
    <div class="form-container sign-up-container">
        <form v-on:submit.prevent="regist">
        <h1>Create Account</h1>
        <!--
        <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        -->
        <span>or use your email for registration</span>
        
        <div><input type="text" id="registEmail" v-model="registEmail" placeholder="Email(Gmail만)" style="width:65%" /> @gmail.com <button type="button" @click="verifyEmail">인증하기</button></div>
        <div><input type="text" id="verifyCode" v-model="verifyCode" placeholder="인증코드" /><button type="button" @click="isValid" id="verifyButton" ref="verifyButton" v-bind:disabled="this.disableVerifyButton==true">인증확인</button></div>
        
        <input type="password" id="registPassword" v-model="registPassword" placeholder="Password" />
        <input type="text" id="registUsername" v-model="registUsername" placeholder="Name" />
        <input type="text" id="registGender" v-model="registGender" placeholder="Gender" />
        <input type="number" id="registAge" v-model="registAge" placeholder="Age" />
        
        <button type="submit" v-bind:disabled="this.disableSignupButton==true">Sign Up</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form v-on:submit.prevent="login">
        <h1>Sign in</h1>
        <!--
        <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        -->
        <span>or use your account</span>
        <div><input type="text" id="loginEmail" v-model="loginEmail" placeholder="Email" style="width:65%" /> @gmail.com</div>
        <input type="password" id="loginPassword" v-model="loginPassword" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
        </form>
    </div>
    <div class="overlay-container">
        <div class="overlay">
        <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button class="ghost" id="signIn" @click="changeRegist">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp" @click="changeRegist">Sign Up</button>
        </div>
        </div>
    </div>
    </div>

</template>


<script>
import http from "@/util/http"

export default {
    name:"LoginAndRegistView",
    data(){
        return{
            isRegist : false, //회원가입 창 기본 비활성화
            registUsername : "",
            registEmail:"",
            registPassword:"",
            registGender:"",
            registAge: 0,
            loginEmail:"",
            loginPassword:"",
            verifyCode:"",
            verifyCodeCheck:"",
            disableVerifyButton: true, //default 비활성화
            disableSignupButton: true //회원가입 버튼 default 비활성화
        }
    },
    methods:{
        changeRegist(){ //Regist창 활성화/비활성화
            this.isRegist = !this.isRegist;
        },
        //api 만든 후 수정
        regist(){
            console.log(this.registUsername, this.registEmail, this.registPassword);
            //axios.post("url").then((res)=>{})
            http.post("/auth/signup", {
              //email, password, name, gender, age
              email:this.registEmail+`@gmail.com`,
              password: this.registPassword,
              name: this.registUsername,
              gender: this.registGender,
              age: this.registAge
            })
            .then((res)=>{
              console.log("회원가입 성공:", res);
              alert("회원가입이 완료되었습니다.");
            })
            .catch((err)=>{
              console.log("회원가입 실패: ", err);
              alert("회원가입에 실패하였습니다.");
            })
        },
        login(){
            // console.log(this.loginEmail, this.loginPassword);
            let email = this.loginEmail+`@gmail.com`;
            //store의 login 메소드 호출(로그인 성공시 토큰, 유저정보 localStorage에 저장)
            this.$store.dispatch("login", {
              email: email,
              password: this.loginPassword
            })
            .then((res)=>{
              console.log("로그인 성공: ",res);
              alert("환영합니다!");
              this.$router.push('/'); //메인 페이지로 redirect
            });
            
        },
        verifyEmail(){ //이메일 인증하기
          //인증 전에는 Sign up 버튼 비활성화?
          //1. 일단, db에 있는지 확인(중복확인)
          //이미 중복이메일이라면, alert로 중복임을 띄우고 종료
          let email = this.registEmail+`@gmail.com`;
          http.post("/auth/emailCheck", {
            email: email
          })
          .then((res1)=>{ 
            //정상응답(200 ok) 인 경우, 이메일 중복안됨
            //2. 중복이 아니라면, 이메일이 유효한지 체크
            console.log(res1);
            http.post("/mail/sendmail", {
              type:"register",
              email: email
            })
            .then((res2)=>{
              //3. 유효한 이메일이라면, 인증코드 전송 후 체크
              alert("이메일로 인증코드가 발송되었습니다. 인증코드를 입력해 주세요. (발송까지 최대 5분 소요)")
              const result = res2.data.message;
              if(result=="SUCCESS"){ //유효한 이메일인 경우
                this.verifyCodeCheck = res2.data.code;
                //인증확인 버튼 활성화
                // this.$refs.verifyButton
                this.disableVerifyButton = false;
              }
              else{ //유효하지 않은 이메일인 경우
                //유효하지 않은 이메일입니다(메시지 띄움)
                //인증확인 버튼 비활성화
                this.disableVerifyButton = true;
              }
            })
          })
          .catch((err)=>{
            alert("이메일이 중복되었습니다.");
            console.log(err);
          })
        },
        isValid(){ //입력한 인증코드가 일치하는지 체크
            //인증코드 일치하면 인증확인 버튼 비활성화 및 인증완료로 문구 변경?
            //그리고 regist버튼 활성화
            if(this.verifyCode==this.verifyCodeCheck){
              this.disableVerifyButton = true;
              this.$refs.verifyButton.innerText = "인증완료";
              this.disableSignupButton = false;
            }
            else{
              console.log("인증코드 틀림");
              //인증 코드가 틀렸다는 문구 띄워줌
              this.disableSignupButton = true;
            }
        }
    },
    updated:{

        // changeView(){
        //     return this.isRegist;
        // }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button:disabled{
  background-color: coral;
  border-color: coral;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}


.container {
  background-color: #fff;
  border-radius: 10px;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
      0 10px 10px rgba(0,0,0,0.22);
  position: relative;
  /*overflow: hidden;*/
  overflow: auto;
  
  width: 768px;
  max-width: 100%;
  /* min-height: 480px; */
  min-height: 650px;
}

.form-container {
  position: absolute;
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

/* rightPanelActive */
.container.rightPanelActive .sign-in-container { 
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

/* rightPanelActive */
.container.rightPanelActive .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

/* rightPanelActive */
.container.rightPanelActive .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #FF416C;
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
    transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

/* rightPanelActive */
.container.rightPanelActive .overlay {
    transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

/* rightPanelActive */
.container.rightPanelActive .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

/* rightPanelActive */
.container.rightPanelActive .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
</style>