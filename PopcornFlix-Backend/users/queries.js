const getUsers = 'SELECT * FROM users';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const checkEmailExists = 'SELECT u FROM users u WHERE u.email = $1';
const addUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
const deleteUser = 'DELETE FROM users WHERE id = $1';
const updateUser = 'UPDATE users SET name = $1, email = $2, password = $3 where id = $4 returning *';
// const updateUserByEmail = 'UPDATE users SET email = $1 WHERE id = $2';
// const updateUserByPassword = 'UPDATE users SET password = $1 WHERE id = $2';

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser,
    // updateUserByEmail,
    // updateUserByPassword,
};