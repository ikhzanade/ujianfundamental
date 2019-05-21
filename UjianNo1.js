 function Karakter(){
     var kalimat = 'kalkulator sederhana'
     var cari = 'a'
     var arrHasilSplit = kalimat.split('')
     var Karakter = 0
     for(var i = 0 ; i < arrHasilSplit.length; i++){
         if (arrHasilSplit [i] == cari){
         Karakter += 1
         }
     }
     return Karakter

 }
 console.log(Karakter())

 