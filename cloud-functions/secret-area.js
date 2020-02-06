exports.handler = function(event, context, callback) {
  const secretContent = `
  <h3>The Secret Area</h3>
  <p>Welcome to the <strong>secret area</strong> in the cloud.</p>
  `;

  let body;

  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    });
  } else {
    callback(null, {
      statusCode: 401
    });
  }
};
