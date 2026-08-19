
function voltar(){

	//alert("Botão de concluído dos cursos Clicado!")


	let div1 = document.getElementById("divAddCurso")
	div1.style.display = "None"

	let div2 = document.getElementById("outer")
    div2.style.display = "None"	

    let lista = document.getElementById("lista-cursos")


    let li  = document.createElement("li")
    li.innerHTML = "Ciências Sociais - 314348"

    lista.appendChild(li)
}


function mostrarCursos(){

	//alert("botão de pesquisar curso clicado!!")

	//<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    //<label for="vehicle1"> I have a bike</label><br>
    //<input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    //<label for="vehicle2"> I have a car</label><br>
   //<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
   //<label for="vehicle3"> I have a boat</label><br>


   //<label><input type="checkbox"> <span>Label text x</span></label>


   let divAddCurso = document.getElementById("divAddCurso")

   let divCheck = document.createElement("div")
   divCheck.setAttribute("class", "check-curso")

   divAddCurso.appendChild(divCheck)

   let label1 = document.createElement("label")
	//label1.setAttribute("for", "check1")
	label1.setAttribute("class", "dif-label")
	//label1.innerHTML = "Dança - Licenciatura - 1107284"

	divCheck.appendChild(label1)

    

	let check1 = document.createElement("input")
	check1.setAttribute("class", "check")
	check1.setAttribute("type", "checkbox")
	check1.setAttribute("id", "check1")
	check1.setAttribute("name", "check1")
	check1.setAttribute("value", "dancalic")

	
	label1.appendChild(check1)

	let span1 = document.createElement("span")
	span1.setAttribute("class", "check-span")
	span1.innerHTML = "Ciências Sociais - Licenciatura - 14348"


	label1.appendChild(span1)


	
	let br = document.createElement("br")
    divCheck.appendChild(br)


    let label2 = document.createElement("label")
	label2.setAttribute("for", "check2")
	label2.setAttribute("class", "dif-label")


	divCheck.appendChild(label2)


    let check2 = document.createElement("input")
    check2.setAttribute("class", "check")
	check2.setAttribute("type", "checkbox")
	check2.setAttribute("id", "check2")
	check2.setAttribute("name", "check2")
	check2.setAttribute("value", "dancabac")

	label2.appendChild(check2)


	let span2 = document.createElement("span")
	span2.setAttribute("class", "check-span")
	span2.innerHTML = "Ciências Sociais - 314348"

    
	label2.appendChild(span2)

	
	//label2.innerHTML = "Dança - 14372"


	let br2 = document.createElement("br")
    divCheck.appendChild(br2)


	let botao = document.createElement("button")
    botao.setAttribute("onclick", "voltar()")
    botao.setAttribute("class","btn")
    botao.innerHTML = "Concluído"
    divCheck.appendChild(botao)    




}



function divCursos(){

	//alert("botão clicado!!")

	let divAddCurso = document.createElement("div");
	divAddCurso.setAttribute('class', "add-curso")
	divAddCurso.setAttribute('id', "divAddCurso")

	//divAddCurso.innerHTML = "<p> testando div dos cursos </p>"

	let h2 = document.createElement("h2");
	h2.innerHTML = "Pesquisar curso"


    let corpo = document.body;


    let overlay = document.createElement("div");
    overlay.setAttribute('class', "fullscreen-overlay")
    overlay.setAttribute('id', "outer")

    corpo.appendChild(overlay)



    overlay.appendChild(divAddCurso)
    divAddCurso.appendChild(h2)

    let br = document.createElement("br")
    divAddCurso.appendChild(br)

    let texto = document.createElement("input")
    texto.setAttribute("type", "text")
    texto.setAttribute("class", "general-input")
    texto.setAttribute("id","pesqCurso")
    divAddCurso.appendChild(texto) 

    let br2 = document.createElement("br")
    divAddCurso.appendChild(br2)   


    let botao = document.createElement("button")
    botao.setAttribute("onclick", "mostrarCursos()")
    botao.setAttribute("class","btn")
    botao.innerHTML = "Pesquisar"
    divAddCurso.appendChild(botao)    


}


function divSubmit(){

	//alert("botão clicado!!")

	let divFim = document.createElement("div");
	divFim.setAttribute('class', "add-curso")
	divFim.setAttribute('id', "divFim")

	//divAddCurso.innerHTML = "<p> testando div dos cursos </p>"

	let h2 = document.createElement("h2");
	h2.innerHTML = "Laboratório atualizado"


    let corpo = document.body;


    let overlay = document.createElement("div");
    overlay.setAttribute('class', "fullscreen-overlay")
    overlay.setAttribute('id', "outer")

    corpo.appendChild(overlay)



    overlay.appendChild(divFim)
    divFim.appendChild(h2)

    let br = document.createElement("br")
    divFim.appendChild(br)


    let botao = document.createElement("button")
    botao.setAttribute("onclick", "mostrarCursos()")
    botao.setAttribute("class","btn")
    botao.innerHTML = "Ok"
    divFim.appendChild(botao)    




}