import "./style.css";

var grecaptcha: any = (window as any).grecaptcha ?? {};
var Toastify: any = (window as any).Toastify ?? {};

window.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (!hash) {
    window.location.href = "/#17";
    window.location.reload();
    return;
  }
  const hashString = hash.slice(1);
  const time = document.getElementById("time")!;
  const date1 = document.getElementById("date1")!;
  const date2 = document.getElementById("date2")!;
  const place = document.getElementById("place")!;
  const location = document.getElementById("location")! as HTMLIFrameElement;
  switch (hash) {
    case "#17":
      date1.innerText = "- 17.05.2024 -";
      date2.innerText = "- 17.05.2024 -";
      time.innerText = "19:00 17 tháng 5 năm 2024";
      place.innerText =
        "Hôtel Colline, Số 10 Phan Bội Châu, Phường 1, TP.Đà Lạt";
      location.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4407938119366!2d108.43552667587794!3d11.94395343657313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171135333d87745%3A0xef770fc699bf659b!2sH%C3%B4tel%20Colline!5e0!3m2!1sen!2s!4v1709713910678!5m2!1sen!2s";
      break;
    case "#18":
      date1.innerText = "- 18.05.2024 -";
      date2.innerText = "- 18.05.2024 -";
      time.innerText = "11:00 18 tháng 5 năm 2024";
      place.innerText =
        "Restaurant Garden Palace, Số 01 Cô Giang, Phường 9, TP.Đà Lạt";
      location.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4003565318194!2d108.45596797587793!3d11.946759036516152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112e26da83cb3%3A0xb2409bf4e87996b!2sRestaurant%20Garden%20Palace!5e0!3m2!1sen!2s!4v1709712086786!5m2!1sen!2s";
      break;
    default:
      break;
  }

  const submit = (payload: { name: string; phoneNumber: string }) => {
    return new Promise<string>((resolve, reject) => {
      grecaptcha.ready(async function () {
        try {
          const token = await grecaptcha.execute(
            "6LdylJEpAAAAAEoKHoiZuqXdNzm73aASn8at_-oc",
            {
              action: "submit",
            }
          );
          const resp = await fetch(`${import.meta.env.VITE_API_URL}/attend`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recaptchaToken: token,
              ...payload,
              range: hashString,
            }),
          });
          resolve(await resp.json());
        } catch (e) {
          reject(e);
        }
      });
    });
  };

  const form = document.getElementById("form")! as HTMLFormElement;
  form.onsubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!e.submitter) {
      return;
    }
    e.submitter.classList.add("loading");
    e.submitter.setAttribute("disabled", "");
    const spinner = document.createElement("div");
    spinner.innerHTML = `<svg class="text-white w-4" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_6kVp{transform-origin:center;animation:spinner_irSm .75s infinite linear}@keyframes spinner_irSm{100%{transform:rotate(360deg)}}</style><path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z" class="spinner_6kVp"/></svg>`;
    e.submitter.appendChild(spinner);
    const data = new FormData(e.target! as HTMLFormElement);
    const name = data.get("name") as string;
    const phoneNumber = data.get("phoneNumber") as string;
    await submit({ name, phoneNumber });
    // Cleaning up the form
    form.reset();
    e.submitter.classList.remove("loading");
    e.submitter.removeAttribute("disabled");
    e.submitter.removeChild(spinner);
    Toastify({
      text: "Cảm ơn bạn đã phản hồi. Chúng tôi rất mong đợi sự có mặt của bạn.",
      duration: 5000,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
    }).showToast();
  };
});
