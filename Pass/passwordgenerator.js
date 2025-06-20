try{
class JJSREncryption{
    constructor(email,sitename){
        this.sitename = sitename;
        this.email = email;
        this.nums = "0123456789";
         this.lca = "abcdefghijklmnopqrstuvwxyz";
this.uca = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
this.signs = "[]{}<>&_%√|\\~`^@$()/':;#!?";
this.all = this.uca+this.lca+this.nums+this.signs;
this.repla = {"a":["@","a","/-\\","/4","4","A","Æ"],
              "b":["|o","b","6","13","B"],
              "c":["C","c","Č","Ć"],
              "d":["o|","d","D"],
              "e":["E","e","É","Ê"],
              "f":["|=","f","F","7"],
              "g":["8","g","G","|*_,-,"],
              "h":["|n","h","H","|-|","|=|","#",],
              "i":["!","i","I","1","Í","Î"],
              "j":["?","J","j"],
              "k":["|/-","k","|<","1<","K"],
              "l":["|","1","|_","1_","L","l"],
              "m":["nn","m","/\\/\\","M","|\\/|","1\\/1","AA"],
              "n":["n",",-,","N","/\\/","|\\|","1\\1","A1"],
              "o":["o","O","Ó","0"],
              "p":["p","P","9","1-*","|-*","|=*","1=*"],
              "q":["q","Q"],
              "r":["|**","1**","1''","r","R"],
              "s":["_/**","$","&","5","s","S"],
              "t":["-|-","-1-","+","t","*1*","*|*","T"],
              "u":["u",",_,","Ú","Û","U","1_1","|_|"],
              "v":["v","V","\\/"],
              "w":["vv","w","\\/\\/","|/\\|","1/\\1","VV","W"],
              "x":["*","x","X"],
              "y":["y","Y"],
              "z":["**/_","z","Z","''/_"]};
    }
    contains(big,small){
        let contains = false;
    let nums=0;
    for(let i in big){
        if(i==small){
            contains=true;
            nums+=1
        }
    }
    return [contains,nums];
}
Random(Min,Max){
    return Math.floor(Math.random()*Max);
}
Transform(text1,transruleObj){
    let pass = "";
for(let i of text1){
   // for(let j in repla){
      //  console.log(i,j
      
        if(this.contains(transruleObj,i)[0]){
            pass+=transruleObj[i][this.Random(0,i.length)];
        }else{
            pass+=i;
          continue
        }
        
   // }
}
    
    return pass;  
}
    shuffle(text,num){
        let text1 = "";
        let text2 = "";
        for(let i=0;i<text.length;i++){
            if(i%num==0){
                text1+=text[i];
            }else{
                text2+=text[i];
            }
        }
        text = text1+text2;
        return text;
    }
    AddSomethingRandom(reff=this.all){
        let pass ="";
        for(let i =0;i<this.Random(0,this.email.length);i++){
            pass+=this.all[this.Random(0,this.all.length)];      
        }
        return pass;
    }
    encrypt(){
        let pass="";
        pass = this.Transform(this.email,this.repla);
        pass+= this.AddSomethingRandom();
        pass+= this.shuffle(this.sitename,this.Random(0,(this.sitename.length-1)));
        return pass;
        
    }
}
const email = document.getElementById("email");
const sitename = document.getElementById("sitename");
const output = document.getElementById("output");
const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");

function Generate(){
    
let enc = new JJSREncryption(email.value, sitename.value);
output.innerHTML = enc.encrypt();
   
}
Generate();
copyBtn.onclick = function(){
    navigator.clipboard.writeText(output.innerHTML);
    alert("Copied! The password is "+output.innerHTML);
}
  
btn.onclick = Generate;


}catch(err){
  alert(err+" is the error");
}
