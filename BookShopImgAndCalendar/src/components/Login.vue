<template>
<div>
    <br/><br/>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="card">
                <div class="card-header bg-dark">
                    <h3>Sign In</h3>                   
                </div>
                <div class="card-body bg-dark">
                    <form v-on:submit.prevent="">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" v-model="username" class="form-control" placeholder="username">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" v-model="password" class="form-control" placeholder="password">
                        </div>
                        <div class="form-group">
                            <button class="btn float-center login_btn" v-on:click="Login()">Login</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

import axios from "axios";

export default {

    name: "Login",
    components: {
    },
    data() {
        return {
            username: '',            
            password: '',
            message:''
        }
    },
    methods: {

        async Login() {          
            
            let user={"username":this.username,"password":this.password}

            let result = await axios.post(this.$apiUrl + "auth/signin", user)
                .catch(function(error) {
                    if (error.response && error.response.status === 401) {
                       console.log(error.response)
                    }
                });
                   
            if (result){        
                 localStorage.setItem('accessToken', result.data.accessToken);
                 this.$router.push('/books');
            }else{          
                console.log("")
            }
            

        },

    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Numans');

body{

    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    font-family: 'Numans', sans-serif;
}

.container{
height: 100%;
align-content: center;
}

.card{

margin-top: auto;
margin-bottom: auto;


}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>