import Apply from "../models/apply.model.js";


const getAllApplies = async (req, res) => {
  try {
    console.log(req.user._id)
    const applies = await Apply.find({userId: req.user._id});
    return res.status(200).send(applies);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting applies", error: error.message });
  }
};

const getApply = async (req, res) => {
  const { id } = req.params;
  try {
    const apply = await Apply.findById(id);
    return res.status(200).send(apply);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting apply", error: error.message });
  }
};

const createApply = async (req, res) => {
  try {
    const allApplies = await Apply.find({userId : req.user._id}); 
        if (allApplies.length > 0) {
            if (allApplies[0].products.includes(req.params.id)) {
                return res.status(400).send({message : "You have already applied"});
            }
            allApplies[0].products.push(req.params.id);
            await allApplies[0].save();
        }
        else {
            await Apply.create({
                userId : req.user._id,
                products : [req.params.id],
            });
        }
    return res.status(201).send({ message: "Apply created" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in creating apply", error: error.message });
  }
};

const updateApply = async (req, res) => {
  const { id } = req.params;
  try {
    const apply = await Apply.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({ message: "Apply updated Successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in updating apply", error: error.message });
  }
};

const deleteApply = async (req, res) => {
  const { id } = req.params;
  try {
    const apply = await Apply.findByIdAndDelete(id);
    return res.status(200).send({ message: "Apply deleted Successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in deleting apply", error: error.message });
  }
};

export {
  getAllApplies,
  getApply,
  createApply,
  updateApply,
  deleteApply,
};
