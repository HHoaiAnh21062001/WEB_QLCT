const express = require('express');
const apiRoutes = require('./router/api');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:8080', // Your Vue.js frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);


const sequelize = require('./config/postgresql');
// Kiểm tra kết nối DB trước khi khởi động server
sequelize.authenticate()
    .then(() => {
        console.log('✅ Kết nối DB thành công');
        return sequelize.sync();
    })
    .then(() => {
        console.log('✅ Đồng bộ model thành công');
        // Khởi động server sau khi DB đã sẵn sàng
        app.listen(2161, () => {
            console.log('Server đang chạy tại http://localhost:2161');
        });
    })
    .catch(err => {
        console.error('❌ Lỗi:', err);
        process.exit(1);
    });






module.exports = { app }; 