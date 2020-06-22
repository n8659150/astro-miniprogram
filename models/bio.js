const AV = require('../libs/av-core-min');

const fetchBioDataFromServer = (whichAstro) => {
  return new AV.Query('bio').equalTo('name', whichAstro).find();
} 
const renderBioData = data => ({
  name: data.get('name'),
  content: data.get('content')
});


export {
  fetchBioDataFromServer,
  renderBioData
}
