function krediHesapla(){
    let girilenTutar = document.getElementById("tutarInput");
    let cekilecekTutar = Number(girilenTutar.value);

    let vadeSayisi = document.getElementById("vadeSec").value;
    let odenecekTutar;
    if(vadeSayisi == 12){
        odenecekTutar = cekilecekTutar + (cekilecekTutar*0.10*1);
    }
    else if(vadeSayisi == 24){
        odenecekTutar = cekilecekTutar + (cekilecekTutar*0.10*2);
    }
    else if(vadeSayisi == 36){
        odenecekTutar = cekilecekTutar + (cekilecekTutar*0.10*3);
    }
    else if(vadeSayisi == 48){
        odenecekTutar = cekilecekTutar + (cekilecekTutar*0.10*4);
    }

    document.getElementById("hesapSonucu").innerHTML=`Ödenecek tutar: ${odenecekTutar}<br>Taksit tutarı: ${(odenecekTutar/vadeSayisi).toFixed(2)}`

}
