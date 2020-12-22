export const formSubmitHelper = (values, form_id, url) => {
  // Get Form Object
  let outputDiv = document.querySelector('#' + form_id + ' > .output');

  // Remove Old Form Output
  if(outputDiv.hasChildNodes()) {
    outputDiv.innerHtml = '';
  }

  // Set AJAX Variables
  const requestOptions = {
    method: 'post',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: JSON.stringify(values)
  };

  // Make AJAX Request
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
      if(typeof data.error !== "undefined") {
        for(const key in data.messages) {
          let error = document.createElement("p");
          error.classList.add("error");
          error.textContent = data.messages[key];
          outputDiv.append(error);
        }
      } else {
        let output = document.createElement("p");
        output.classList.add("output");
        output.textContent = data.message;
        outputDiv.append(output);
      }
    });
};
