<template>

  <div>
    <Nav></Nav>
    <div class="container">
      <AuthCard/>

    </div>
  </div>


</template>

<script lang="ts" setup>

const {supabase} = useSupabase()


</script>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
