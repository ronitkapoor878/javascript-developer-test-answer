const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const requests = urls.map(url => httpGet(url));
  const responses = await Promise.all(requests);
  const results = responses.map(response => {
    const parsedBody = JSON.parse(response.body);
    const message = parsedBody.message;
    
    if (response.status === 200) {
      return { 'Arnie Quote': message };
    } else {
      return { 'FAILURE': message };
    }
  });
  
  return results;
};

module.exports = {
  getArnieQuotes,
};
