	  //  headers: {
	  //      "Access-Control-Allow-Origin":"*",
	  //      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
	  //      "Access-Control-Allow-Credentials":"false",
	  //      "Access-Control-Allow-Methods":"GET, HEAD, OPTIONS, POST, PUT, DELETE",
	  //  },

//function getUser()
//{
// $.post('data.php',{nome: 'Joe', mail: 'joe@foo.com'},function(data){
 //mostrando o retorno do post
// alert(data)
// })
//}


function carregaItens(){
	
	var itens = "";
	//var url   = "http://smtfeiradesantanalocal.com/contatoPOST.php";
	var url   = "https://www.smtfeiradesantana.com.br/contatoPOST.php";
	//var url   = "https://www.smtfeiradesantana.com.br/contato3.php?txtword=ad0haigd%nai&txtnome=no";
	
	var resquisicao = $.post(
		url, 
		$('#pesquisarForm  *').serialize(),
		function(retorno){
		if(retorno[0].mensagemErro){
			$("h3").html(retorno[0].mensagemErro);
		}
		else{
			for(var i = 0;i<retorno.length;i++){
				//itens += retorno[i].matricula;
				//itens += retorno[i].nome;
				//itens += retorno[i].email;
				itens += "<tr>";
				itens += "<td>" + retorno[i].matricula + "</td>";
				itens += "<td>" + retorno[i].nome + "</td>";
				itens += "<td>" + retorno[i].email + "</td>";
				itens += "</tr>";
			}
		}
		
		//$(itens).appendTo("#minhaTabela");
		$("#minhaTabela tbody").html(itens);
		$("h3").html("carregado");						
	},
	"json");
	
	resquisicao.fail(
			function(){
				alert("ERRO: Não foi possível estabelecer a conexão. Tente mais tarde!");
			})
	
//	$.ajax({
//		url: 		url,
//		//data: {'rel': tmp},
//		//data: $('#pesquisarForm *').serialize(),
//		type:		"POST",
//		//contentType: 'application/json',
//		contentType: 'text/plain',
//		crossDomain: true,	    
//		cache: 		false,
//		async: true,
//		processData: true,
//		dataType: 	"json",
//		beforeSend: function(){
//			$("h3").html("carregando...");
//		},
//		error: 		function(retorno,status,erro){
//			$("h3").html("Falhou.. " + status + " > " + erro);
//		},
//		success: 	function(retorno){
//						if(retorno[0].mensagemErro){
//							$("h3").html(retorno[0].mensagemErro);
//						}
//						else{
//							for(var i = 0;i<retorno.length;i++){
//								//itens += retorno[i].matricula;
//								//itens += retorno[i].nome;
//								//itens += retorno[i].email;
//								itens += "<tr>";
//								itens += "<td>" + retorno[i].matricula + "</td>";
//								itens += "<td>" + retorno[i].nome + "</td>";
//								itens += "<td>" + retorno[i].email + "</td>";
//								itens += "</tr>";
//							}
//						}
//						
//						//$(itens).appendTo("#minhaTabela");
//						$("#minhaTabela tbody").html(itens);
//						$("h3").html("carregado");						
//					}
		
//	})
}