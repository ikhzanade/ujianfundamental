// if( !(5 > 8 || 8>5)){
//     console.log('True')
// }


// var i = 1

// while( i > 1){
//     console.log(i)
// }



// function Hello (){
//     return 'Hello'
// }

// var arr = [1,Hello]
// var fn = arr[1]

//  console.log(fn() + ' Hai')


// class Obj {
//     constructor(a,b){
//         this.nama = a;
//         this.umur= b;
//         this.desc = function(){
//             return 'Nama Saya ' + this.nama +' , usia ' + this.umur
//         }
//     }
// }

// var man1 = new Obj('Seto', 30)

// console.log(man1.desc())


function Harga(a,b){
    // var discount = a * b/100
    // var setDis = a - discount
    // return setDis
    console.log(a - (a*(b/100)))
}

Harga(2000000,20) // 50000




// ======================GanjilGenap===================
function GanjilGenap(plat,tanggal){
    var nomor = plat.split(' ')
    var plat = nomor[1]
    if(parseInt(plat) % 2 ==0 && tanggal % 2 ==0){
        return 'Boleh Masuk'
    }else if(parseInt(plat) % 2 !=0 && tanggal % 2 !=0){
        return 'Boleh Masuk'
    }else{
        return 'Tidak Boleh Masuk'
    }
}


console.log(GanjilGenap('B 77845 AR' , 1)) // Boleh Lewat
GanjilGenap('B 55821 YZ' , 24) // Tidak Boleh Lewat




// ==========================Check Password======================
function CheckPass(str){
    var hilangSpasi = str.replace(' ' , '')
    if(hilangSpasi.length > 5){
        var arrString = hilangSpasi.split('') 
        var angka = false
        var huruf = false
        for(var i = 0 ; i < arrString.length ; i++){
            if(arrString[i] >= 0){
                angka = true
            }else{
                huruf = true
            }
        }
        if(angka == true && huruf == true){
            return "Password Benar"
        }else if(angka == false && huruf == true){
            return 'Harus Ada Angkanya'
        }else{
            return 'Harus Ada Hurufnya'
        }
    }else{
        return 'Password Harus Lebih dari 6 Char'
    }
}

console.log(CheckPass('12s123')) // Password harus lebih dari 6 char
CheckPass('abcabc') // Password harus Kombinasi angka dan huruf
CheckPass('abc123') // Password Benar
CheckPass('ab 123') // Password harus lebih dari 6 char
