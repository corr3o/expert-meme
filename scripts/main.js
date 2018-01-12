
var image = document.getElementById().src="IMG/bat.jpg";

function decompte() {
	setTimeout(function popup() {
		alert("Oh oui <3");
	}
	,10000);
}

function apparaitre_centre() {
 	document.getElementById("centre").style.display = "block"; 
 	document.getElementById("bouton_affichage").style.display = "none";
}

function url_recherche() {
	var recherche = document.getElementById("barre_recherche").value;
	//alert(recherche);
	var rech_plus = recherche.replace(" ", "+");
	//alert (rech_plus);
	var url = "https://www.google.fr/#q="+rech_plus;
	//alert (url);
	window.location.href = url;
}

let maRecherche = document.getElementById("bouton_recherche");

maRecherche.onclick = function() {
	url_recherche()
}


//dessiner un carré

	var c=document.getElementById("myCanvas");
	var ctx=c.getcontext("2d");

function dess_carre() {

	ctx.fillStyle = "gold";
	cxt.fillRect(0,0,50,80);

	ctx.beginPath();
	ctx.lineWidth="2";
	ctx.strokestyle="green";
	ctx.rect(20,20,100,100);
	ctx.stroke();
}

/*
	var carre=document.getElementById("myCanvas");
	var ctx=c.getcontext("2d");

function dess_carre() {

	ctex.beginPath();
	ctx.lineWidth="2";
	ctx.strokestyle="green":
	ctx.rect(20,20,100,100);
	ctx.stroke();
}
*/



//

/*

let boutonRecherche = document.getElementById("bouton_recherche");

	document.getElementById("bouton_recherche").href=url;


	var recherche_split = recherche.split(" ");
	var url = "https://www.google.fr/#q=" 
		for (var i = 0; i = recherche_split.length; i++) {
    		url = url+"+"+ arr[i];
    	}

    var recherche = document.getElementById("barre_recherche").value;
	var rech_plus = recherche.replace(" ", "+");
	var url = "https://www.google.fr/#q="+rech_plus
	document.getElementById("bouton_recherche").href;

	setTimeout(function popup () {
	alert("Clique pour des rencontres dont tu te souviendras");
	},200);

	alert("OnLoad image"+image );
*/
