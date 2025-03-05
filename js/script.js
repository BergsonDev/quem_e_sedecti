
window.addEventListener("load",()=>{
    document.querySelector("header").style.display = "";
    document.querySelector(".content-page").style.display = "";
    document.querySelector("footer").style.display = "";
    document.querySelector(".load").style.display = "none";
})

// Animações ao scroolar
window.addEventListener("scroll",(event=>{
    let content1 = document.querySelector("#paragraph-intro");
    let content2 = document.querySelector("#img-intro");
    let content3 = document.querySelector("#card1");
    let content4 = document.querySelector("#card2");
    let content5 = document.querySelector("#card3");
    let content6 = document.querySelector("#content1");
    let content7 = document.querySelector("#content2");
    let content8 = document.querySelector("#content3");
    let content9 = document.querySelector("#content4");
    let content10 = document.querySelector("#btn-more");
    let content11 = document.querySelector("#locale-content");
    let content12 = document.querySelector("#record-content");

    let topico1animation = content1.getBoundingClientRect().top;
    let topico2animation = content2.getBoundingClientRect().top;
    let topico3animation = content3.getBoundingClientRect().top;
    let topico4animation = content4.getBoundingClientRect().top;
    let topico5animation = content5.getBoundingClientRect().top;
    let topico6animation = content6.getBoundingClientRect().top;
    let topico7animation = content7.getBoundingClientRect().top;
    let topico8animation = content8.getBoundingClientRect().top;
    let topico9animation = content9.getBoundingClientRect().top;
    let topico10animation = content10.getBoundingClientRect().top;
    let topico11animation = content11.getBoundingClientRect().top;
    let topico12animation = content12.getBoundingClientRect().top;

    if (topico1animation <= window.innerHeight) {
      content1.classList.add("slide-in-blurred-bottom")
    }
    if (topico2animation <= window.innerHeight) {
      content2.classList.add("slide-in-blurred-bottom")
    }
    if (topico3animation <= window.innerHeight) {
      content3.classList.add("slide-in-elliptic-bottom-fwd")
    }
    if (topico4animation <= window.innerHeight) {
      content4.classList.add("slide-in-elliptic-bottom-fwd-atraso")
    }
    if (topico5animation <= window.innerHeight) {
      content5.classList.add("slide-in-elliptic-bottom-fwd-atraso2")
    }
    if (topico6animation <= window.innerHeight) {
      content6.classList.add("slide-in-blurred-bottom")
    }
    if (topico7animation <= window.innerHeight) {
      content7.classList.add("slide-in-blurred-bottom")
    }
    if (topico8animation <= window.innerHeight) {
      content8.classList.add("slide-in-blurred-bottom")
    }
    if (topico9animation <= window.innerHeight) {
      content9.classList.add("slide-in-blurred-bottom")
    }
    if (topico10animation <= window.innerHeight) {
      content10.classList.add("slide-in-blurred-bottom")
    }
    if (topico11animation <= window.innerHeight) {
      content11.classList.add("slide-in-blurred-bottom")
    }
    if (topico12animation <= window.innerHeight) {
      content12.classList.add("slide-in-blurred-bottom")
    }

    return
}))

// abrir menu
document.querySelector(".menu").addEventListener("click", () => {
    let menu = document.querySelector(".sections");
    if(menu.classList.contains("slide-out-right")){
        menu.classList.remove("slide-out-right");
    }
    menu.style.display = menu.style.display == "flex" ? "none" : "flex";
    menu.classList.add("slide-in-right");
    
    return
});

// fechar menu 
document.querySelector("#exit").addEventListener("click", () => {
    let menu = document.querySelector(".sections");
    if(menu.classList.contains("slide-in-right")){
        menu.classList.remove("slide-in-right");
    }

    menu.classList.add("slide-out-right");
    let interval = setInterval(() =>{
        let view = document.querySelector(".sections").style.display == "flex" ? "none" : "flex";
        document.querySelector(".sections").style.display = view;
        clearInterval(interval);
    }, 600)

    return
});

// fechando o menu quando clicar nas seções
document.querySelector(".sections").childNodes.forEach(a => {
  a.addEventListener("click", () =>{
      if (a.classList != "" || window.innerWidth >= 1415)
          return

      let menu = document.querySelector(".sections");
      if(menu.classList.contains("slide-in-right")){
          menu.classList.remove("slide-in-right");
      }
    
      menu.classList.add("slide-out-right");
      let interval = setInterval(() =>{
          let view = document.querySelector(".sections").style.display == "flex" ? "none" : "flex";
          document.querySelector(".sections").style.display = view;
          clearInterval(interval);
      }, 600)
      
      return
  })
});

window.addEventListener("resize",()=>{
  if(window.innerWidth >= 1415){
    if (document.querySelector(".sections").style.display = "none") {
      document.querySelector(".sections").style.display = "flex"
    }
    if (document.querySelector(".sections").classList.contains("slide-in-right")) {
      document.querySelector(".sections").classList.remove("slide-in-right");
    }
    if (document.querySelector(".sections").classList.contains("slide-out-right")) {
      document.querySelector(".sections").classList.remove("slide-out-right")
    }
    return;
  }
  if(document.querySelector(".sections").style.display = "flex") {
    document.querySelector(".sections").style.display = "none"
  }
  if (!document.querySelector(".sections").classList.contains("slide-out-right")) {
    document.querySelector(".sections").classList.add("slide-out-right")
  }
  return;
})