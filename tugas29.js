function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
   
    let y = new RegExp("bersama");

    console.log(y.exec(data));
}

regex()