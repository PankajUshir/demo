module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                required: true,
            },
            username: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            password: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            first_name: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            last_name: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            email: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            telephone: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            is_active: {
                type: Sequelize.DataType.BOOLEAN,
                allowNull: false,
                required: true,
            },
            created_at: {
                type: Sequelize.DataType.DATE,
            },
            updated_at: {
                type: Sequelize.DataType.DATE,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
    },
}
