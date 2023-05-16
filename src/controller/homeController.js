import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.render('test/index.ejs', { dataUser: rows, test: 'abc string test' })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;

    let user = await pool.execute('select * from users where id = ?', [userId]);
    console.log('gia tri tham so', req.params)
    return res.send(user[0])
}

let createNewUser = async (req, res) => {
    console.log('check req', req.body)
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) value(?, ?, ?, ?)', [firstName, lastName, email, address])
    return res.redirect('/')
}
let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/');

}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let user = await pool.execute('select * from users where id = ?', [id])

    return res.render('test/update.ejs', { dataUser: user[0] })
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update users set firstName = ?, lastName =?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id])
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}