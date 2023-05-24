<template>
  <div>
    <h2>개인 정보 수정</h2>
    <form @submit.prevent="updateInfo">
        <label for="email">이메일</label><input type="text" name="email" v-model="this.email" disabled /><br />
        <label for="password">비밀번호</label><input type="password" name="password" v-model="this.password" /><br />
        <label for="newpassword">새 비밀번호</label><input type="password" name="newpassword" v-model="this.newpassword" /><br />
        <label for="newpasswordcheck">새 비밀번호 확인</label><input type="password" name="newpasswordcheck" v-model="this.newpasswordcheck" /><br />
        <label for="name">이름</label><input type="text" name="name" v-model="this.name" /><br />
        <label for="gender">성별</label><input type="text" name="gender" v-model="this.gender" /><br />
        <label for="age">나이</label><input type="number" name="age" v-model="this.age" /><br />

        <button type="submit">정보 수정</button>
        <button type="button">탈퇴하기</button>

    </form>
  </div>
</template>

<script>
export default {
    name:"UserInfoUpdate",
    data(){
        return{
            email:"",
            password:"",
            newpassword:"",
            newpasswordcheck:"",
            name:"",
            gender:"",
            age:0
        }
    },
    created:{
        
    },
    methods:{
        updateInfo(){
            console.log("회원 정보 수정");
        }
    },
    updated:{

    }
}
</script>

<style>

</style>