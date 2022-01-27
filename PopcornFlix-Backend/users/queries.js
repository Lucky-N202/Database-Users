const getUsers = 'SELECT * FROM users';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const checkEmailExists = 'SELECT u FROM users u WHERE u.email = $1';
const addUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
const deleteUser = 'DELETE FROM users WHERE id = $1';
const updateUser = 'UPDATE users SET (name, email, password) VALUES ($1, $2, $3) WHERE id = $4';

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser,
};