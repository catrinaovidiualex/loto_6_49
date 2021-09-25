
//functie ce imi returneaza un vector cu 6 numerer distincte genrate random


function generare (){
    let x =[];


    while(x.length<6){

        let number=Math.floor(Math.random()*49+1);


        if(x.includes(number)==false){
            x.push(number);
        }

    }

    return x;
   
}

function alese(){

    let x=[];
    

    while (x.length<6){
          let numar=prompt(`Introduceti un numar( mai aveti ${6-x.length} numere de introdus):`);

          numar=+numar;
          //conditii
          if(numar>0 && numar<50 && x.includes(numar)==false){
              x.push(numar);
          }else if(numar<=0||numar>=50){


             alert("Numarul introdus nu este corect");
          }else{

            alert("Numarul a mai fost introdus odata");
          }
         
    }
   

    return x;

}


function compare(vec1,vec2){
    let contor=0;

       for(let i=0;i<vec1.length;i++){
        

          if(vec2.includes(vec1[i])){
             contor ++;
          }
    }
    return contor;
  


}




let btn=document.querySelector(".generare_btn");


let numere=document.querySelector(".numere");

let citite=document.querySelector(".alese");

let ghicite=document.querySelector(".nr_ghicite");

     

     

btn.addEventListener('click' ,()=>{

    let gen=generare();

    let al=alese();

    numere.innerHTML=`
    <p>
    ${gen[0]}
    </p>
    
    <p>
    ${gen[1]}
    </p>
    
    <p>
    ${gen[2]}
    </p>
    
    <p>
    ${gen[3]}
    </p>
    
    <p>
    ${gen[4]}
    </p>
    
    <p>
    ${gen[5]}
    </p>
    
    `

    citite.innerHTML=`
    <p>
    ${al[0]}
    </p>

    <p>
    ${al[1]}
    </p>

    <p>
    ${al[2]}
    </p>

    <p>
    ${al[3]}
    </p>

    <p>
    ${al[4]}
    </p>

    <p>
    ${al[5]}
    </p>
    
    `


    ghicite.innerHTML=`
    <p>


    ${compare(al,gen)}



    </p>
    
    `
   




     

       
})

