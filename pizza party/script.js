let sucuklupızza=["küçük boy","40","orta boy","65","büyük boy","80"];
let karısıkpızza=["küçük boy","50","orta boy","70","büyük boy","85"];
let sebzelıpızza=["küçük boy","60","orta boy","65","büyük boy","70"];
let vejeteryanlıpızza=["küçük boy","60","orta boy","65","büyük boy","70"];
let mantarlıpızza=["küçük boy","35","orta boy","40","büyük boy","45"];

let i;

let urunAciklama,urunSecenek;

let eklenecekler=[];
let fiyatlar=[];

let listeSepet=document.getElementById("sepetMarket");

let toplamTutar=0;

const kod="AAOOMBBY20";

for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("çeşit")[i].addEventListener("change",urunleriGetir);
}   

function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("urunPanel").appendChild(urunAciklama);
    document.getElementById("urunPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}

function urunleriGetir(){
    
    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }
    
    if(document.getElementById("cesitsucuklupızza").checked)
    {
        for(i=0;i<cesitsucuklupızza.length;i=i+2)
        {
        
            olustur();
            urunSecenek.value=cesitsucuklupızza[i+1];
            urunAciklama.innerHTML=cesitsucuklupızza[i]; 
        }
    }
    else if(document.getElementById("cesitkarısıklupızza").checked)
    {
        
        for(i=0;i<cesitkarısıklupızza.length;i=i+2)
        {
        olustur();
        urunSecenek.value=cesitkarısıklupızza[i+1];
        urunAciklama.innerHTML=cesitkarısıklupızza[i];
        }
    }
    else if(document.getElementById("cesitsebzelıpızza").checked)
    {
        for(i=0;i<cesitsebzelıpızza.length;i=i+2)
        {
        olustur();
        urunSecenek.value=cesitsebzelıpızza[i+1];
        urunAciklama.innerHTML=cesitsebzelıpızza[i];
        }
    }
    else if(document.getElementById("cesitvejeteryanlıpızza").checked)
    {
        for(i=0;i<cesitvejeteryanlıpızza.length;i=i+2)
        {
        olustur();
        urunSecenek.value=cesitvejeteryanlıpızza[i+1];
        urunAciklama.innerHTML=cesitvejeteryanlıpızza[i]; 
        }
    }
   else if (document.getElementById("cesitmantarlıpızza").checked)
    {
        for(i=0;i<cesitmantarlıpızza.length;i=i+2)
        {
        olustur();
        urunSecenek.value=cesitmantarlıpızza[i+1];
        urunAciklama.innerHTML=cesitmantarlıpızza[i];
        }
    }
        

function sepeteEkle(){
   
    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");

        eklenecekler=[];
        fiyatlar=[];

        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
                toplamTutar+=Number(listeUrunlerFiyat[i].value);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
                fiyatlar.push(listeUrunlerFiyat[i].value);
            }
        }

        console.log(eklenecekler);
        console.log(fiyatlar);

    let adet=document.getElementById("urunAdet").value;
    console.log(adet);

    for(i=0;i<adet;i++)
    {
        let sepeteEklenecekUrun;
    
            sepeteEklenecekUrun=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekUrun);
           
            sepeteEklenecekUrun.text=eklenecekler[i];
            sepeteEklenecekUrun.value=fiyatlar[i];
        }
        /*
        eklenecekler.forEach(element => {
            sepeteEklenecekUrun=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekUrun);
            sepeteEklenecekUrun.text=element;
            sepeteEklenecekUrun.value="Fiyat?";
        });
        */
    }

    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}

function sepettenCikar(){
    
    let seciliIndeks=listeSepet.selectedIndex;
    let silinecekUrununFiyati=listeSepet.options[seciliIndeks].value;
    listeSepet.options.remove(seciliIndeks);
   
    toplamTutar=toplamTutar-silinecekUrununFiyati;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}

function sepetiBosalt(){
    document.querySelectorAll('#sepetMarket option').forEach(eleman => eleman.remove());
    toplamTutar=0;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";

}

function koduEkle(){
    let girilenKod=document.getElementById("txtIndirim").value;
    if(girilenKod == kod)
    {
        if(toplamTutar>=60)
        {
            toplamTutar=toplamTutar-20;
            
            document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
            document.getElementById("sonuc").innerHTML="İndirim uygulandı.";
            document.getElementById("txtIndirim").disabled=true;
            document.getElementById("txtIndirim").value="";
        }
        else{
            document.getElementById("sonuc").innerHTML="Girdiğiniz kod için minimum sepet tutarı 60 TL olmalıdır!";
        }
    }
    else{
        document.getElementById("sonuc").innerHTML="Geçerli bir kod giriniz!";
    }
}ss