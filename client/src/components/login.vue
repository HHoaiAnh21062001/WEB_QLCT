<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2>Đăng nhập</h2>
      <div class="form-group">
        <input type="text" v-model="tentaikhoan" placeholder="Tên tài khoản" required>
      </div>
      <div class="form-group">
        <input type="password" v-model="matkhau" placeholder="Mật khẩu" required>
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      tentaikhoan: '',
      matkhau: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch('http://localhost:2161/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tentaikhoan: this.tentaikhoan,
            matkhau: this.matkhau
          })
        });
        
        if (response.ok) {
            const data = await response.json();
            // Chuyển hướng đến trang chính với ID người dùng
            localStorage.setItem('userId', data.mataikhoan);
            this.$router.push(`/home/${data.mataikhoan}`);
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 95%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: rgb(106, 117, 234);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: blue;
}
</style>