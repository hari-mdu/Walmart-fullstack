import Apply from "../models/apply.model.js";

// Handler to get all applications for the authenticated user
const getAllApplies = async (req, res) => {
  try {
    // Log the user's ID for debugging purposes
    console.log(req.user._id);
    
    // Find all applications associated with the authenticated user
    const applies = await Apply.find({ userId: req.user._id });
    
    // Return the applications with a 200 OK status
    return res.status(200).send(applies);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in getting applies", error: error.message });
  }
};

// Handler to get a specific application by its ID
const getApply = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the application by its ID
    const apply = await Apply.findById(id);
    
    // Return the application with a 200 OK status
    return res.status(200).send(apply);
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in getting apply", error: error.message });
  }
};

// Handler to create a new application
const createApply = async (req, res) => {
  try {
    // Check if the user has any existing applications
    const allApplies = await Apply.find({ userId: req.user._id });
    
    // If there are existing applications, check if the user has already applied for the product
    if (allApplies.length > 0) {
      if (allApplies[0].products.includes(req.params.id)) {
        return res.status(400).send({ message: "You have already applied" });
      }
      
      // If not, add the product to the existing application
      allApplies[0].products.push(req.params.id);
      await allApplies[0].save();
    } else {
      // If there are no existing applications, create a new application
      await Apply.create({
        userId: req.user._id,
        products: [req.params.id],
      });
    }
    
    // Return a success response with a 201 Created status
    return res.status(201).send({ message: "Apply created" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in creating apply", error: error.message });
  }
};

// Handler to update an existing application by its ID
const updateApply = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the application by its ID and update it with the new data
    const apply = await Apply.findByIdAndUpdate(id, req.body, { new: true });
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Apply updated Successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in updating apply", error: error.message });
  }
};

// Handler to delete an application by its ID
const deleteApply = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the application by its ID and delete it
    const apply = await Apply.findByIdAndDelete(id);
    
    // Return a success response with a 200 OK status
    return res.status(200).send({ message: "Apply deleted Successfully" });
  } catch (error) {
    // Return an error response if an exception occurs
    return res.status(500).send({ message: "Error in deleting apply", error: error.message });
  }
};

// Export the handler functions for use in other parts of the application
export {
  getAllApplies,
  getApply,
  createApply,
  updateApply,
  deleteApply,
};
