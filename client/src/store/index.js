import { createApp } from 'vue'
import { createStore } from 'vuex'

const dsChiTieu1 = []

createStore({
  create() {
    this.userId = localStorage.getItem('userId')
      this.loadChiTieu();
        if (this.userId == 'null') {
        this.$router.push('/login')
        alert('bạn chưa đăng nhập')
      }
  },
  methods: {
    async loadChiTieu() {
      console.log(this.userId)
        if (this.userId != 'null') {
          try {
          const response = await fetch(`http://localhost:2161/api/chitien/${this.userId}`);
          console.log(response)
          if (response.ok) {
            const data = await response.json();
            dsChiTieu = data;
            for (let i = 0; i < this.dsChiTieu.length; i++) {
              this.tong += parseInt(this.dsChiTieu[i].sotienchira);
            }
          }
          } catch (error) {
            console.error('Lỗi khi tải dữ liệu:', error);
          }
        }
      else {
        this.$router.push('/login')
      }
    },
  },
  
})


export default dsChiTieu1;