import "./style.css";

window.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  const time = document.getElementById("time")!;
  const date = document.getElementById("date")!;
  const place = document.getElementById("place")!;
  const location = document.getElementById("location")! as HTMLIFrameElement;
  switch (hash) {
    case "#17":
      date.innerText = "17.05.2024";
      time.innerText = "19:00 17 tháng 5 năm 2024";
      place.innerText =
        "Hôtel Colline, Số 10 Phan Bội Châu, Phường 1, TP.Đà Lạt";
      location.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4407938119366!2d108.43552667587794!3d11.94395343657313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171135333d87745%3A0xef770fc699bf659b!2sH%C3%B4tel%20Colline!5e0!3m2!1sen!2s!4v1709713910678!5m2!1sen!2s";
      break;
    case "#18":
      date.innerText = "18.05.2024";
      time.innerText = "11:00 18 tháng 5 năm 2024";
      place.innerText =
        "Restaurant Garden Palace, Số 01 Cô Giang, Phường 9, TP.Đà Lạt";
      location.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.4003565318194!2d108.45596797587793!3d11.946759036516152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112e26da83cb3%3A0xb2409bf4e87996b!2sRestaurant%20Garden%20Palace!5e0!3m2!1sen!2s!4v1709712086786!5m2!1sen!2s";
      break;
    default:
      break;
  }
});
