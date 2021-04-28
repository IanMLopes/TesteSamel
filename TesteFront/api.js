//conexão da API

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main (){
    data = fazGet("https://api-teste.samel.com.br/fotos")
    usuarios = JSON.parse(data);
  
    document.getElementById("imag_0").innerHTML = usuarios[0].photo;
    document.getElementById("imag_1").innerHTML = usuarios[1].photo;
    document.getElementById("imag_2").innerHTML = usuarios[2].photo;
    
    const baseStr64_0= usuarios[0].image64;
    image_0.setAttribute('src', "data:image/jpg;base64," + baseStr64_0);
    const baseStr64_1= usuarios[1].image64;
    image_1.setAttribute('src', "data:image/jpg;base64," + baseStr64_1);
    const baseStr64_2= usuarios[2].image64;
    image_2.setAttribute('src', "data:image/jpg;base64," + baseStr64_2);

}

main()