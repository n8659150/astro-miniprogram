const AV = require('../libs/av-core-min');

const fetchBioDataFromServer = (whichAstro) => {
  // const query = new AV.Query('Encyclopedia').equalTo('name', whichAstro);
  return new AV.Query('Encyclopedia').equalTo('name', whichAstro).select('starDetail').find();
} 
// const renderBioData = data => ({
//   name: data.get('name'),
//   title: data.get('title')
// });

const renderBioData = data => data.toJSON();

export {
  renderBioData,
  fetchBioDataFromServer
}