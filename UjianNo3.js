  function accum(str) {
        var hasil=''
     var arr=str.split('')
         for(i=0;i<arr.length;i++){
           for(j=0;j<=i;j++){
                if(j==0){
                    hasil+=arr[i].toUpperCase()
                }
                 else {
                     hasil+=arr[i].toLowerCase()
                }
             }
            hasil+='-'
         }
         hasil= hasil.slice(0,(hasil.length-1))
         return hasil
    }
    console.log(accum("abcd"))
    console.log(accum("RqaEzty"))
    console.log(accum("cwAt"))
