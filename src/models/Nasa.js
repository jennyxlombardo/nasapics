const { DataTypes } = require('sequelize')
const axios = require('axios')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    'nasapics',
    {
      name: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        primaryKey: true
      },
      diameterMax: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
      },
      diameterMin: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
      },
      hazardous: {
        type: DataTypes.ARRAY(DataTypes.BOOLEAN),
        allowNull: false
      },
      approachDate: {
        type: DataTypes.ARRAY(DataTypes.DATE),
        allowNull: false
      },
      miss: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
      },
      orbitingBody: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }
    },
    { timestamps: false }
  )
}
