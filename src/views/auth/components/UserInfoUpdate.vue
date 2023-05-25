<template>
  <div>
    <h2>개인 정보 수정</h2>
    <form @submit.prevent="updateInfo">
        <label for="email">이메일</label><input type="text" name="email" v-model="email" disabled /><br />
        <label for="password">비밀번호</label><input type="password" name="password" v-model="password" /><br />
        <label for="newpassword">새 비밀번호</label><input type="password" name="newpassword" v-model="newpassword" /><br />
        <label for="newpasswordcheck">새 비밀번호 확인</label><input type="password" name="newpasswordcheck" v-model="newpasswordcheck" /><br />
        <!--<div ref="">새 비밀번호가 일치합니다</div><br />-->
        <label for="name">이름</label><input type="text" name="name" v-model="name" /><br />
        <label for="gender">성별</label><input type="text" name="gender" v-model="gender" /><br />
        <label for="age">나이</label><input type="number" name="age" v-model="age" /><br />

        <button type="submit">정보 수정</button>
        <button type="button" @click.prevent="deleteUser">탈퇴하기</button>

    </form>
  </div>
</template>

<script>
import http from "@/util/http.js"
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
    created(){
        http.post("/auth/getUserInfo", {
            id: this.$store.state.userInfo.loginedUserId
        })
        .then((res)=>{
            const info = res.data;
            this.email = info.email;
            this.name = info.name;
            this.gender = info.gender;
            this.age = info.age;
        })
    },
    methods:{
        updateInfo(){
            console.log("회원 정보 수정");
            http.put("/auth/update", {
                email: this.email,
                password: this.password,
                newpassword: this.newpassword,
                name: this.name,
                gender: this.gender,
                age: this.age
            })
            .then((res)=>{
                console.log("회원정보 수정 성공: ", res);
                alert("회원정보 수정이 완료되었습니다.");
            })
            .catch((err)=>{
                console.log("회원정보 수정 실패: ", err);
                alert("회원정보 수정에 실패했습니다.");
            })
        },
        deleteUser(){
            console.log("회원 탈퇴: ", this.$store.state.userInfo.loginedUserId);
            const userId = this.$store.state.userInfo.loginedUserId;
            //DELETE 메소드는 다른 요청처럼 Body에 데이터 바로 넣을 수 없음. 그래서 따로 지정해줘야 함
            http.delete("/auth/deleteUser", {
                headers: {
                    'Content-Type': `application/json`,
                },
                data: { 
                    id: userId
                },
            })
            .then((res)=>{
                this.$store.commit("CLEAR_USER"); //localStorage에서 토큰, 유저정보 제거
                console.log("탈퇴 완료: ", res);
                alert("탈퇴 처리가 완료되었습니다.");
                //메인 화면으로 redirect
                this.$router.push("/");
            })
            .catch((err)=>{
                console.log("에러 발생: ", err);
            })
        }
    },
    updated(){
        //새 비밀번호 입력 시, 일치 여부 체크하면서 "일치합니다/일치하지 않습니다" 화면에 띄움
        //새 비밀번호 란 비었다면, 비밀번호 업데이트 하지않음
        //새 비밀번호 일치하지 않으면 수정 버튼 비활성화
        // console.log(this.password);

    }
}
</script>

<style>

</style>