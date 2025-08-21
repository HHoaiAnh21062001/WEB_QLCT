const { DataTypes } = require('sequelize');
const  sequelize  = require('../config/postgresql');


const chi_item_model = sequelize.define('chitien', {
    machitien: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mataikhoan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sotienchira: {
        type: DataTypes.DECIMAL(15, 3),
        allowNull: false
    },
    ngaychitien: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    mota: DataTypes.STRING(200),
    danhmuc: DataTypes.STRING(50)
}, {
    tableName: 'chitien',
    timestamps: false
});

const thu_item_model = sequelize.define('thunhap', {
    mathunhap: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mataikhoan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sotien: {
        type: DataTypes.DECIMAL(15, 3),
        allowNull: false
    },
    ngay: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    mota: DataTypes.STRING(200),
    danhmuc: DataTypes.STRING(50)
}, {
    tableName: 'thunhap',
    timestamps: false
});


const acc_model = sequelize.define('acc', {
    mataikhoan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tentaikhoan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    matkhau: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gmail: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
}, {
    tableName: 'acc',
    timestamps: false
})

module.exports = {
    chi_item_model,
    thu_item_model,
    acc_model,
}