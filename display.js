
export default class DisplayContent {
  static render(id) {
    console.log("i GOT HERE")
    document.querySelectorAll(".page-content").forEach((section) => {
      section.setAttribute("style", "display: none");
    })

    if (id === "list") {
      document.querySelector(".book-list").setAttribute("style", "display: block");
    }

    if (id === "addNew") {
      document.querySelector(".book-form").setAttribute("style", "display: block");
    }

    if (id === "contact") {
      document.querySelector(".contact-info").setAttribute("style", "display: block");
    }
  }

  static renderTime(dateandtime){
    document.querySelector('#dateAndTime').innerText = dateandtime;
  }
}