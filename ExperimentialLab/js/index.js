//Jai Jai Siya Ram
//MyWebSiteCreator class
class MyWebSiteCreator{
  constructor(){
    this.author = "Harman Singh";
  }
  createNewElement(TagName,Content=[], Attributes,parentElem=null){
    let elem = document.createElement(TagName);
    if(Content!=null){
    for(let i of Content){
      elem.appendChild(i);
    }
    }
    for(let i in Attributes){
      elem.setAttribute(i,Attributes[i]);
    }
    if(parentElem!=null){
    parentElem.appendChild(elem);
    }
    return elem;
  }
  animateSomewhat(MainElement,MainEvent,ClassName,Duration){
MainElement.addEventListener(MainEvent,function(){
  MainElement.classList.add(ClassName);
  //alert("done1");
  setTimeout(function(){
    MainElement.classList.toggle(ClassName);
  },Duration);
});
  }
  createAnimatedButton(Content,MainEvent, Attributes,AnimatedClass,Duration,ButtonFunction,ParentElem=null){
//let TextNode = document.createTextNode(Text);
let Element= this.createNewElement("button",Content,Attributes, ParentElem)
this.animateSomewhat(Element,MainEvent,AnimatedClass,Duration)
  }
}


try{
  let bodyelem= document.body.innerHTML;
//  document.body.innerHTML="";
  let m = new MyWebSiteCreator();
  //Ludo Container
let ludocont=m.createNewElement("div",null,{"class":"ludo-container"},document.body);
let ludomainelems= [];
for(let i=0;i<9;i++){
  let elems = m.createNewElement("div",null,{"id":"ludo-element-"+i,"class":"ludo-main-elements"},ludocont);
}
//Some Random Info Element
let infoe=m.createNewElement("div",null,{"id":"info-element"},document.body);



//m.createAnimatedButton([document.createTextNode("J")],"click",{"id":"jjsr"},"jjsr",400,function(){},document.body)
//let el = m.createNewElement("h1",[m.createNewElement("div",[document.createTextNode("J")],{"id":"jjsr3","class":"jjsr3"})],{"id":"jjsr2","class":"jjsr2"});

let elem = m.createNewElement("div",[document.createTextNode("JJSR")],{"id":"jjsrin","class":"gradient-angle-change-ani display-none"},document.body)
// Range Element
let varinput = document.getElementById("var");


varinput.oninput=function(){
  elem.style.background = "linear-gradient("+varinput.value+"deg, lightgreen, green)";
  tex.value = varinput.value;
}
console.dir(window);
//Hidden Form
//let selectopt11 = document.getElementById("selectopt1");

  let header1= document.getElementById("header1");
  header1.classList.add("display-none")
  let copycodeform = m.createNewElement("form",null,{"id":"copycodef","class":"display-none"},header1);
let selectopt1 = m.createNewElement("select",null,{"id":"selectopt1"},copycodeform);
for(let i in document.body.children){
  let opts = m.createNewElement("option",[document.createTextNode(i)],{"value":i},selectopt1);
}
let elemcopybtn=m.createNewElement("button",[document.createTextNode("Copy Code")],{"id":"elemcopybtn","class":"display-non"},header1);
function FormDisplay(){

  elemcopybtn.classList.toggle("display-none");
  copycodeform.classList.toggle("display-none");
}
elemcopybtn.onclick=FormDisplay;
  // Decimal To Binary Convertor
let Format = document.getElementById("bit");
let Text = document.getElementById("dec");
let Out = document.getElementById("output");
function Convert(text,value){
  let b = "";
  let c="";
  let q = Math.floor(text/value);
  let r = text%value;
  b+=r+"";
  for(let i=0;i>-1;i++){
    if(q>1){
      text=q;
      q= Math.floor(text/value);
      r= text%value;
      b+=r+"";
    }else{
      if(q==1){
      b+=1+"";
      break;
      }else{
        break;
      }
    }
  }
 // alert(b.length)
  for(let i=(b.length-1);i>=0;i--){
    c+=b[i];
  }
  //alert(c);
  Out.innerText = c;
  return c;
  //alert(encodeURI("Abbbbbbvghh"))
}
//alert(Out)
Text.value=1+"";
Format.value=2+"";
Text.oninput = function(){
  //alert(Text.value)
  if(Text.value!=""){
    
  Convert(Text.value,Format.value)
  }
}
Format.oninput = function(){
if(Format.value!=""){
    
  Convert(Text.value,Format.value)
  }
//  alert(Format.value)

}
let tex= document.getElementById("tex");
let test= document.getElementById("test");
tex.oninput= function(){
  test.innerHTML = tex.value;
}
let co = document.getElementById("co");
document.body.ondblclick = function(){
tex.value = co.value;
}
/*navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{console.log(stream+"")}).catch((err)=>{console.log(err+"")})*/
selectopt1.oninput= function(){
  tex.value = document.body.children[selectopt1.value].outerHTML;
  navigator.clipboard.writeText(tex.value);
  FormDisplay();
  
}


function PlaceSwap(value1,desiredindex,arr){
  let elemtoreplace = arr[desiredindex];
   arr[desiredindex] = value1;
   for(let i in arr){
     if(arr[i]==value1 && i!=desiredindex){
       arr[i]=elemtoreplace;
     }
   }
      
 // alert(arr);
  return arr;
}
//PlaceSwap(header1,"0",document.body.children);
//document.body.innerHTML+=bodyelem;
for(let i in document.body.children){
//infoe.innerHTML += typeof(ludomainelems)+"<br>";
}
function CustomAnimation(){
  let i=0;
  function Hi(j){
    if(i<360){
    i+=j;
    }else{
      i=0;
    }
    //alert(i);
    return i;
  }
  setInterval(function(){
    elem.style.background="conic-gradient(lightgreen 160deg ,green)";
  },1)
 return Hi;
}
CustomAnimation();
/*CustomAnimation()();
CustomAnimation()();
CustomAnimation()();
CustomAnimation()();
CustomAnimation()();*/


setInterval(function(){
 // infoe.innerHTML=CustomAnimation()();
},1000);

}catch(err){
  alert(err)
}
