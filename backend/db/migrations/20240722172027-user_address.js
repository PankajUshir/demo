module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_address', {
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
            address_line1: {
                type: Sequelize.DataType.STRING,
            },
            address_line2: {
                type: Sequelize.DataType.STRING,
            },
            city: {
                type: Sequelize.DataType.STRING,
            },
            country: {
                type: Sequelize.DataType.STRING,
            },
            postal_code: {
                type: Sequelize.DataType.STRING,
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
        return queryInterface.dropTable('user_address')
    },
}
