try{
class JJSREncryption{
    constructor(email,sitename){
        this.sitename = sitename;
        this.email = email;
        this.nums = "0123456789";
         this.lca = "abcdefghijklmnopqrstuvwxyz";
this.uca = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
this.signs = "[]{}<>&_%√|\\~`^@$()/':;#!?";
this.repla = {"a":"@","b":"|o",
"d":"o|","h":"|n","i":"!","j":"?",
"k":"|/-","l":"|","m":"nn","w":"vv","x":"*"};
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
            pass+=transruleObj[i];
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
    encrypt(){
        let pass="";
        pass = this.Transform(this.email,this.repla);
        for(let i =0;i<this.Random(0,this.email.length);i++){
            pass+=this.signs[this.Random(0,this.signs.length)];
            
            
        }
        pass+= this.shuffle(this.sitename,2);
        return pass;
        
    }
}




let e = new JJSREncryption("glohhhhhyyyyxxx@ghm","github");
alert(e.encrypt());

  
}catch(err){
  alert(err+" is the error");
}
