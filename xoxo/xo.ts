let but = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>
let sm = document.getElementsByClassName("sm") as HTMLCollectionOf<HTMLElement>
let smm: HTMLElement = sm[0]
let rest :HTMLElement =sm[1]
var i: number
var l:number
var x: number
var o: number
var g:string[]=[]
x = 0
o = 0
l=0
var a :(string)[] = []
for (i = 0; i < but.length; i++) { 
    but[i].classList.add(`inp${i}`)
    but[i].setAttribute("id", `${i}`)
    a[i]=`${i}`
 }
i = 0

but.forEach(
    bu => bu.addEventListener("click", () => { 

    if (bu.value != "Reset") {       
        xo(bu)
        i = i + 1

        
        bu.disabled=true

}
    })
)
let xo = (n:HTMLInputElement) => { 
    if (i % 2 == 0 && n.value=="") {
        n.value = "X";
        n.classList.add("clicked")
        smm.innerHTML="O"
        
    }
    else if (i % 2 == 1 && n.value=="") {
        n.value = "O"
        n.classList.add("clicked")
        smm.innerHTML="X"
    }
    a[n.id]=n.value



        if ((((a[0] == a[1] && a[2] == a[1] ) || (a[0] == a[3] && a[3] == a[6]) || (a[0] == a[4] && a[4] == a[8])))
            || (  a[1] == a[4] && a[4] == a[7]) || ( a[3] == a[4] && a[4] == a[5]) || ( a[6] == a[7] && a[7] == a[8]) ||
            (((a[2] == a[4] && a[4] == a[6]) || (a[2] == a[5] && a[5] == a[8])))){ 
            brxo(n.value)
            but[9].classList.add("win")
           
    }
}
    



let rxo = () => { 
    for (i = 0; i < 9; i++) {
        but[i].disabled=false
        but[i].value = ""
        but[i].classList.remove("clicked","win")
        a[i] = `${i}`

    }
    i = 0;
    but[9].classList.remove("win")
    smm.innerHTML = "..."
    smm.style.setProperty("color","red")
}
let brxo = (m:string) => { 
    for (i = 0; i < 9; i++) {
        if (m==but[i].value) { 
        but[i].classList.add("win")
        }
        but[i].disabled = true }
        if (m == "X") {
            x=x+1
            localStorage.setItem("X", `${x}`)
            
         }
        else if (m == "O") {
            o=o+1
            localStorage.setItem("O",`${o}`)
         }
   rest.innerHTML  =` X : ${localStorage.getItem("X")} || O : ${localStorage.getItem("O")} `
    i = 0
    smm.innerHTML = `${m}`
    smm.style.color = "blue"
}
addEventListener("keydown", e => { 
    g[l] = e.key
    console.log(g)

    l = l + 1
    if (l > 4) { 
        l = 0;
    }
    if(g[0]=="c"&&g[1]=="l"&&g[2]=="e"&&g[3]=="a"&&g[4]=="r"){
    o = 0
    x = 0
    localStorage.setItem("X", `${x}`)
    localStorage.setItem("O", `${o}`)
    rest.innerHTML = ` X : ${localStorage.getItem("X")} || O : ${localStorage.getItem("O")} `}
    else if (g[0] == "h" && g[1] == "a" && g[2] == "c" && g[3] == "k") {
        if (g[4] == "o") {
            o = o + 99999999999999
            localStorage.setItem("O", `${o}`)
            rest.innerHTML = ` X : ${localStorage.getItem("X")} || O : ${localStorage.getItem("O")} `
        }
        else if (g[4] == "x") {
            x = x + 99999999999999
            localStorage.setItem("X", `${x}`)
            rest.innerHTML = ` X : ${localStorage.getItem("X")} || O : ${localStorage.getItem("O")} `
        }
        
    }
    else if (g[0] == "b" && g[1] == "o" && g[2] == "o" && g[3] == "m" && g[4] == "o") { 
        

        //     for (i = 0; i < 999; i++) {
        //         let bo = (n:string) => {
        //             brxo(n)
        //             but[0].value = n
        //             but[1].value = n
        //             but[2].value = n
                    
        //         }
                
        //         bo("O")
        // }
        // i=0
             }

})