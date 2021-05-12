export default function initCarController(db) {
  const index = async (request, response) => {
    try{
      // const cars = await db.Car.findAll();
      // console.log(cars)
      console.log("request came in");
      response.send("yay");
    } catch (error) {
      console.log(error)
    }
  };


  return {
    index,
  };
}