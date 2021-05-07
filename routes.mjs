import db from './models/index.mjs'

// Import controllers here
import initCarController from "./controllers/carController.mjs";
import initBookingController from "./controllers/bookingController.mjs";

export default function bindRoutes(app) {
  const carController = initCarController(db)
  const bookingController = initBookingController(db)

  app.get("/carindex", carController.index);
  app.get("/bookingindex", bookingController.index);
  
}