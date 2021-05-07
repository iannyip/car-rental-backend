export default function initBookingController(db) {
  const index = async (request, response) => {
    try{
      const cars = await db.Car.findAll();
      console.log(cars)
      response.send(cars);
    } catch (error) {
      console.log(error)
    }
  };


  return {
    index,
  };
}