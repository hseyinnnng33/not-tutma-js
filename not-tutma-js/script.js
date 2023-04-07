const notEkleBtn = document.querySelector(".ekle-not");
const metinGir = document.querySelector(".metin-gir");
const metinCik = document.querySelector(".metin-cik");
// metin ekleme aç kapa
const metinGirBaslik = document.querySelector(".input-baslik");
const metinGirİnput = document.querySelector(".metin-input");
const NotEkleBtn = document.querySelector(".ekle-btn");
// metin ekleme işlemeleri
const yaratYeri = document.querySelector(".icerik");


notEkleBtn.addEventListener("click", function(){
    metinGir.classList.add("active");
})

metinCik.addEventListener("click", function(){
    metinGir.classList.toggle("active");
})


NotEkleBtn.addEventListener("click", function(){
    let inputBaslik = metinGirBaslik.value;
    let inputİcerik = metinGirİnput.value;
    if(inputBaslik == "" || inputİcerik == ""){
        alert("Boş Bırakılmaz");
    }
    else{
    metinGirBaslik.value = "";
    metinGirİnput.value = "";
    metinGir.classList.toggle("active");

    let NotDiv = document.createElement("div");
    NotDiv.classList.add("NotDiv");
    yaratYeri.appendChild(NotDiv);
    let baslik = inputBaslik;
    let NotBaslik = document.createElement("h2");
    NotDiv.appendChild(NotBaslik);
    NotBaslik.innerHTML = `- ${baslik.toUpperCase()}`;

    let pDiv = document.createElement("div");
    NotDiv.appendChild(pDiv);
    pDiv.classList.add("pDiv");

    let trash = document.createElement("a");
    trash.classList.add("trash");
    NotDiv.appendChild(trash);
    trash.innerHTML = `-`;

    trash.addEventListener("click", function(){
        NotDiv.remove();
    })


    let icerik = document.createElement("p");
    icerik.classList.add("Noticerik");
    pDiv.appendChild(icerik);
    icerik.innerHTML = inputİcerik;

    }
    
})