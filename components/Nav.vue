<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/"> Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">My Profile</NuxtLink>
      </li>
      <li v-if="isLoggedIn()" class="logout" @click="signout">Logout</li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const {signout, isLoggedIn} = useAuth()

</script>

<style scoped>
nav {
  background-color: black;
  height: 10vh;
}

ul {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 3rem;
}

li {
  color: white;
  margin-right: 2rem;
}

.logout {
  margin-left: auto;
  cursor: pointer;
}
</style>
