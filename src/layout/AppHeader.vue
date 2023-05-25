<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="@/assets/img/brand/logo.svg" alt="logo">

            </router-link>

            <ul class="navbar-nav navbar-nav-hover ms-auto">
                <li class="nav-item" style="padding-right:40px">
                    <router-link :to="{name:'search'}" class="nav-link"><span>Attraction</span></router-link>
                </li>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button"  style="padding-right:60px">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Board</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">List</router-link>
                    <router-link to="/register" class="dropdown-item">Create Board</router-link>
                </base-dropdown>
                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button" style="padding-right:50px">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Schedule</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">List</router-link>
                    <router-link to="/register" class="dropdown-item">Create</router-link>
                </base-dropdown> -->
                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button" >
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">User</span>
                    </a>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown> -->
                <!-- <li class="nav-item" style="padding-right:40px">
                    <a class="nav-link"><span>Login</span></a>
                </li> -->
                <!-- <li class="nav-item">
                    <a class="nav-link"><span>Register</span></a>
                </li> -->
            </ul>
            <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link :to="{ name: 'signin'}" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Login</span>
                    </router-link>
                </li>
            <!-- <button class="btn btn-outline-success my-2 my-sm-0 na" type="button">Login</button> -->
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
