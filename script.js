const prevButton = document.querySelectorAll(".button-previous");
const nextButton = document.querySelectorAll(".button-next");
const formSteps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");
const submitbutton = document.querySelector(".submit");
const form = document.getElementById("form");
const select = document.getElementById("myDropdown");
select.selectedIndex = -1;

let currentStep = 0;


nextButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inputFields = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputFields.every((inputs) => inputs.reportValidity());
    if (allValid) {
      currentStep++;
      console.log(currentStep)
      console.log(formSteps)
      updateFormSteps();
      updateProgressbar();
    }
  });
});
prevButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  formSteps[currentStep].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < currentStep + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");
  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
function Calculate() {
  const productQuantity = document.getElementById("ProductQty").value;
  const NegotiatedPrice = document.getElementById("NegotiatedPrice").value;
  document.getElementById("TotalPrice").value =
    productQuantity * NegotiatedPrice;
}

submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const FirstName = document.getElementById("FirstName").value;
  const LastName = document.getElementById("LastName").value;
  const Phone = document.getElementById("Phone").value;
  const Email = document.getElementById("Email").value;
  const CompanyName = document.getElementById("CompanyName").value;
  const CompanyType = select.options[select.selectedIndex].value;
  const PANNO = document.getElementById("PANNO").value;
  const GSTNO = document.getElementById("GSTNO").value;
  const ProductId = document.getElementById("ProductId").value;
  const ProductQty = document.getElementById("ProductQty").value;
  const NegotiatedPrice = document.getElementById("NegotiatedPrice").value;
  const TotalPrice = document.getElementById("TotalPrice").value;
 
// let formData=new FormData(form)
// let obj={}
// for (const [key, value] of formData) {
// //    console.log(`${key} ${value}`)
//     obj[key]=value

   
// }
// console.log(obj)
  


  // console.log(TotalPrice)

// fetch('http://localhost:3000/order')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })
// alert('Posting!!!')
  fetch("http://localhost:3000/order", {
    method: "POST",
    body: JSON.stringify({
      FirstName,
      LastName,
      Phone,
      Email,
      CompanyName,
      CompanyType,
      PANNO,
      GSTNO,
      ProductId,
      ProductQty,
      NegotiatedPrice,
      TotalPrice,
    }),
    // body:JSON.stringify(obj),
  
    headers: {
      "Content-type": "application/json; charset=UTF-8",
        
    }
    }).then((res) => 
       res.json()
    
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  
});
 





// submitbutton.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const FirstName=document.getElementById("FirstName").value
//     const LastName=document.getElementById("LastName").value
//     const Phone=document.getElementById("Phone").value
//     const Email=document.getElementById("Email").value
//     const CompanyName=document.getElementById("CompanyName").value
//     const CompanyType=select.options[select.selectedIndex].value;
//     const PANNO=document.getElementById("PANNO").value
//     const GSTNO=document.getElementById("GSTNO").value
//     const ProductId=document.getElementById("ProductId").value
//     const ProductQty=document.getElementById("ProductQty").value
//     const NegotiatedPrice=document.getElementById("NegotiatedPrice").value
//     const TotalPrice=document.getElementById("TotalPrice").value

//     fetch('http://localhost:3000/order', {
//     method: 'POST',
//     body: JSON.stringify({
//     FirstName,
//     LastName,
//     Phone,
//     Email,
//     CompanyName,
//     CompanyType,
//     PANNO,
//     GSTNO,
//     ProductId,
//     ProductQty,
//     NegotiatedPrice,
//     TotalPrice

//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
//   })
//   .then(res=>{
//     return res.json()
//   }).then(data=>{
//     console.log(data)
//   }).catch(error=>{
//     console.log(error)
//   })

// })
