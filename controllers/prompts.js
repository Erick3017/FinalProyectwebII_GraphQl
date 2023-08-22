const Prompt = require("../models/Prompts.js");

const getPrompts = async () => {
     try {
        const prompts = await Prompt.find();        
        return prompts;
  } catch (err) {
    throw err;
  }
};
const getPrompt =async ( { _id }, { Prompt }) => {
  try {
    const prompt = await Prompt.findById(_id).populate('tags');
    return prompt;
  } catch (error) {
    throw new Error(`Error fetching prompt by ID: ${error.message}`);
  }
}


module.exports = {
    getPrompts,
    getPrompt
}