const formData = {
    email: '',
    message: '',
}
const LS_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

startSite();

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", onFormInput);



function startSite() {
    const saveData = JSON.parse(localStorage.getItem(LS_KEY));
    if (saveData) {
        const { email, message } = saveData;
        formEl.elements.email.value = email;
        formEl.elements.message.value = message;
    }
    
}

function onFormSubmit(event){
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;
    
    if (!email || !message) {
        console.log("Fill please all fields");
        return;
    }

    console.log(formData);
    formData.email = "";
    formData.message = "";
    
    const form = event.currentTarget;
    form.reset();
    localStorage.removeItem(LS_KEY);
}

function onFormInput(event){
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;
    formData.email = email.trim();
    formData.message = message.trim();
    
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}



