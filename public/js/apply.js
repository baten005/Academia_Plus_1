const submit = document.querySelector("#submit_button");
const a_form = document.querySelector("#applicant-form");
const s_name = document.querySelector("#student-name");
const p_no = document.querySelector("#phone-number");
const f_name = document.querySelector("#father-name");
const m_name = document.querySelector("#mother-name");
const c_address = document.querySelector("#inputAddress");
const p_address = document.querySelector("#inputAddress2");
const e_address = document.querySelector("#inputEmail");
const dob = document.querySelector("#inputDob");
const classinput = document.querySelector("#inputClass");
const image = document.querySelector("#inputImage");
const div_f = document.getElementById("form-div");
let det = false;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicant-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
   

    fetch("/applyform", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        det = data.reply;
        console.log(data);
        hide_form(det, data.a_id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

function hide_form(det, get_data) {
  console.log(get_data)
  if (det) {

    const initUrl = `/init?id=${get_data[0]}&payment_type=apply_fee`;
    fetch(initUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.body) {
        window.location.href = data.body;
      } else {
        console.error("GatewayPageURL is missing in the response:", data);
      }
    })
    .catch((error) => {
      console.error("Error initiating transaction:", error);
    });
    
  } else {
    var submitButton = document.getElementById("submit_button");
    if (submitButton && submitButton.parentNode) {
      var message = document.createElement("p");
      message.style.padding = "5px";
      message.textContent = "Already Exists";
      submitButton.parentNode.appendChild(message);
    } else {
      console.error("Submit button element not found");
    }
  }
}
