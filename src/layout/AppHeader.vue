<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="@/assets/img/brand/logo.svg" alt="logo">

            </router-link>

            <ul class="navbar-nav navbar-nav-hover ms-auto">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button"  style="padding-right:60px">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Board</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">List</router-link>
                    <router-link to="/register" class="dropdown-item">Create Board</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button" style="padding-right:50px">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Schedule</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">List</router-link>
                    <router-link to="/register" class="dropdown-item">Create</router-link>
                </base-dropdown>
                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button" >
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">User</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown> -->
                <li class="nav-item" style="padding-right:40px">
                    <a class="nav-link"><span>Login</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><span>Register</span></a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
// import CloseButton from "@/components/CloseButton";
// import { ref } from 'vue';
export default {
  components: {
    BaseNav,
    // CloseButton,
    BaseDropdown
  },
};
</script>
<style>
</style>
