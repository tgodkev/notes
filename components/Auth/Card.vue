<template>

  <div>
    <NCard class="card">
      <div v-if="!showConfirmEmailMessage">
        <h3>{{ authState }}</h3>
        <div class="input-container">
          <input v-model="input.email" placeholder="Email" type="text">
          <input v-model="input.password" placeholder="Password" type="password">
        </div>
        <NButton @click="handleSubmit">Submit</NButton>
        <p v-if="authError" class="error">{{ authError }}</p>
        <p @click="toggleAuthState">
          {{ authState === "login" ? "Dont have an accout? Create one now!" : "Already have an account? login." }}</p>
      </div>
      <div v-else>
        <h3>Check Email For Conformation Link.</h3>
      </div>
    </NCard>
  </div>


</template>


<script lang="ts" setup>
const authState = ref<"login" | "signup">("login")
const {signup, signin, user, signout} = useAuth()
// input state
const input = reactive({
  password: '',
  email: ''
})

const showConfirmEmailMessage = ref(false)

// redirecting for sign in

const router = useRouter()

// state for errors.
const authError = ref("")

const toggleAuthState = () => {
  if (authState.value === "login") authState.value = "signup"
  else authState.value = "login"
  authError.value = ""
}


const handleSubmit = async () => {
  try {
    if (authState.value === "login") {
      //sign in
      await signin({email: input.email, password: input.password})
      router.push("/profile")
    } else {
      //sign up
      await signup({email: input.email, password: input.password})
      showConfirmEmailMessage.value = true;
    }
    input.email = "";
    input.password = "";
  } catch (error) {
    authError.value = error.message;
  }
}
</script>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}

.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 1rem;
  outline: none;
  border: 0.1rem solid grey;
}

p {
  color: blue;
  font-size: 0.75rem;
}

.error {
  color: red;
}
</style>
