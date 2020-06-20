const renderBioData = data => ({
  name: data.get('name'),
  title: data.get('title')
});

export {
  renderBioData
}