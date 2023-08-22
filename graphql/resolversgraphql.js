const Prompt = require("../models/Prompts.js");
const Tag = require('../models/Tag');


const typeDefs = {
  Query: {
    searchPromptsByName: async (_, { name }) => {
      return await Prompt.find({ name });
    },
    searchPromptsByTagDescription: async (_, { description }) => {
      const tags = await Tag.find({ description });
      const tagIds = tags.map(tag => tag.id);
      return await Prompt.find({ tags: { $in: tagIds } });
    },
  },
};

module.exports = typeDefs;
