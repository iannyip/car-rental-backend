export default function initBookingModel(sequelize, DataTypes){
  return sequelize.define('booking',{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "cars",
        key: "id",
      }
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, 
  {
    underscored:true
  }
  );
}