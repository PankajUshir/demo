module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_payment', {
            id: {
                type: Sequelize.DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                required: true,
            },
            user_id: {
                type: Sequelize.DataType.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            payment_type: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            provider: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            account_no: {
                type: Sequelize.DataType.STRING,
                allowNull: false,
                required: true,
            },
            expiry: {
                type: Sequelize.DataType.DATE,
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
        return queryInterface.dropTable('user_payment')
    },
    s,
}
