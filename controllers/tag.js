const Tag = require("../models/Tag.js") ;
const getTag = async () => {
    try {
       const tags = await Tag.find();
       return tags;
 } catch (err) {
   throw err;
 }
};


module.exports = {
   getTag
}