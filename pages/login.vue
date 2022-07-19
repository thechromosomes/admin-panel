<template>
  <div>
    <div class="page page-center">
      <div class="container-tight">
        <div class="text-center mb-4">
          <img src="/logo/kartmax-logo-new.png" alt="Kartmax" width="200" />
        </div>
        <div class="card card-md">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Login to your account</h2>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                v-model="user.email"
                type="email"
                name="email"
                placeholder="Enter email"
                class="form-control"
                aria-required="true"
                aria-invalid="false"
              />
              <span class="text-danger"></span>
            </div>
            <div class="mb-2">
              <label class="form-label"> Password </label>
              <div class="input-group input-group-flat">
                <input
                  v-model="user.password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autocomplete="off"
                  class="form-control"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
              <span class="text-danger"></span>
            </div>
            <!---->
            <div class="form-footer">
              <button @click="login_submit()" class="btn btn-primary w-100">
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div class="text-center text-muted mt-3">
          Forgot Password?
          <a href="/password/reset" class=""> Forgot Password </a>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login_submit() {
      try {
        if (this.user.email == "" || this.user.password == "") {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill the user credentials!",
          });
          return;
        }
        let response = await this.$store.dispatch("apiCall", {
          method: "post",
          url: this.$_api.logIn,
          params: {
            email: this.user.email,
            password: this.user.password,
          },
        });

        if (response && response.authToken) {
          this.$store.commit("UPDATE_USER_DETAILS", {
            payload: {
              cdpAuthToken: response.authToken,
            },
          });
          this.$cookies.set("cdpAuthToken", response.authToken, "60MIN");
          this.$router.push("/dashboard");
        } else {
          throw "No response from the login API";
        }
      } catch (error) {
        this.$globalError(error);
      }
    },
  },

  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.login_submit();
      }
    });
  },

  beforeMount() {
    if (this.$store.state.cdpAuthToken) {
      this.$router.push("/dashboard");
    }
  },

  beforeDestroy() {
    window.removeEventListener("keyup", () => {});
  },
};
</script>
