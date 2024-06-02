import emailjs from "emailjs-com";

export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sendEmail(
  name: string,
  email: string,
  message: string,
  recaptchaValue: any
) {
  const templateParams = {
    to_name: "Matt",
    from_name: name,
    from_email: email,
    message: message,
    "g-recaptcha-response": recaptchaValue,
  };

  if (recaptchaValue === null) {
    console.error("Please complete the reCAPTCHA");
    return;
  }

  emailjs
    .send(
      "service_ba2crgg",
      "template_jj24cvv",
      templateParams,
      "cXUmEpnVJKayLJEPi"
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
      },
      (error) => {
        console.error("Failed to send email", error);
      }
    );
}
