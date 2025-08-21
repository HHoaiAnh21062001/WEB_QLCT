const { chi_item_model,
    thu_item_model,
    acc_model
     } = require('../model/cau-truc-du-lieu');





// lay toan bo item chi tieu
exports.chi_item_get_all = async (req, res) => {
    console.log(req.params.id);
    const chitieuitem = await chi_item_model.findAll(
        {
            where: {
                mataikhoan: req.params.id
            },
            order: [['ngaychitien', 'DESC']] // Sắp xếp theo ngày chi tiền mới nhất
        }
    );
    
    
    console.log(chitieuitem);
    return res.status(200).json(chitieuitem);
}

// lay toan bo item thu
exports.thu_item_get_all = async (req, res) => {
    console.log(req.params.id);
    const thuitem = await thu_item_model.findAll(
        {
            where: {
                mataikhoan: req.params.id
            },
            order: [['ngay', 'DESC']],
        }
    )
    console.log(thuitem);
    return res.status(200).json(thuitem);
};



// xoa item chi tieu
exports.chi_item_xoa = async (req, res) => { 
    const xoa = await chi_item_model.destroy({
        where: {
            machitien: req.body.machitien
        }
    })
    return res.status(200).json({ xoa });
}
//them item chi tieu
exports.chi_item_them = async (req, res) => { 
    const { sotienchira, ngaychitien, mota, danhmuc } = req.body;
    const newChiItem = await chi_item_model.create({
        mataikhoan: req.params.id, // Lấy ID tài khoản từ tham số URL
        sotienchira,
        ngaychitien,
        mota,
        danhmuc
    });
    console.log(newChiItem)
    // gửi lại để xác nhận dữ liệu hoặc lấy những thông tin tự động thêm mà không cần nhập
    return res.status(201).json(newChiItem);
}
// chinh sua item chi tieu
exports.chi_item_sua = async (req, res) => {
    const { machitien, sotienchira, ngaychitien, mota, danhmuc } = req.body;
    const updatedChiItem = await chi_item_model.update(
        {
            sotienchira,
            ngaychitien,
            mota,
            danhmuc
        },
        {
            where: {
                mataikhoan: req.params.id,
                machitien: machitien
            }
        }
    );
    return res.status(200).json({ updatedChiItem });
}
 





// xoa item thu
exports.thu_item_xoa = async (req, res) => { 
    const thu_xoa = await thu_item_model.destroy({
        where: {
            mathunhap: req.body.mathunhap
        }
    })
    return res.status(200).json({ thu_xoa });
}
//them item thu nhap
exports.thu_item_them = async (req, res) => { 
    const { sotien, ngay, mota, danhmuc } = req.body;
    const newThuItem = await thu_item_model.create({
        mataikhoan: req.params.id, // Lấy ID tài khoản từ tham số URL
        sotien,
        ngay,
        mota,
        danhmuc
    });
    console.log(newThuItem)
    // gửi lại để xác nhận dữ liệu hoặc lấy những thông tin tự động thêm mà không cần nhập
    return res.status(201).json(newThuItem);
}
// chinh sua item thu nhap
exports.thu_item_sua = async (req, res) => {
    const { mathunhap, sotien, ngay, mota, danhmuc } = req.body;
    const updated = await thu_item_model.update(
        {
            sotien,
            ngay,
            mota,
            danhmuc
        },
        {
            where: {
                mathunhap
            }
        }
    );
    return res.status(200).json({ updated });
}

// tao acc moi
exports.acc_them = async (req, res) => { 
    const { tentaikhoan,matkhau,gmail } = req.body;
    const newacc = await acc_model.create({
        tentaikhoan,
        matkhau,
        gmail
    });
    console.log(newacc)
    // gửi lại để xác nhận dữ liệu hoặc lấy những thông tin tự động thêm mà không cần nhập
    return res.status(201).json(newacc);
}


exports.login = async (req, res) => { 
    const { tentaikhoan, matkhau } = req.body;
    const user = await acc_model.findOne({
        where: {
            tentaikhoan,
            matkhau
        }
    });
    res.status(200).json({mataikhoan: user.mataikhoan});
}


