const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".textarea"),emailInput:document.querySelector(".emailInput")};e.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state"),localStorage.removeItem("feedback-form")})),e.textarea.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)})),e.emailInput.addEventListener("input",(function(e){const t=e.target.value;localStorage.setItem("feedback-form",t)})),function(){const t=localStorage.getItem("feedback-form-state");t&&(e.textarea.value=t)}(),function(){const t=localStorage.getItem("feedback-form");t&&(e.emailInput.value=t)}();
//# sourceMappingURL=03-feedback.ab098ff3.js.map
