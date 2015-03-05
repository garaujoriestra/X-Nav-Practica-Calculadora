$(function(){
	$("#calculadora tr td").click(function(){
		if ($(this).text() != "C" && $(this).text() != "=")
			{
				$("#resultado_calculadora").append($(this).text());
			}
		if ($(this).text() == "=")
			{
				operacion = $("#resultado_calculadora").text().split("");
				total = "";
				for ( var index in operacion)
				{
					total = total + operacion[index];
				}
			$("#resultado_calculadora").text(eval(total));
		}
		if($(this).text() == "C")
			{
				$("#resultado_calculadora").text("");
			}
	});

	$(this).keydown(function(e){
		if ((e.keyCode >47) && (e.keyCode < 58)){
			var numero;
			switch (e.keyCode) {
		    case 48:
		        numero = 0;
		        break;
		    case 49:
		        numero = 1;
		        break;
		    case 50:
		        numero = 2;
		        break;
		    case 51:
		        numero = 3;
		        break;
		    case 52:
		        numero = 4;
		        break;
		    case 53:
		        numero = 5;
		        break;
		    case 54:
		        numero = 6;
		        break;
	        case 55:
		        numero = 7;
		        break;
	        case 56:
		        numero = 8;
		        break;
	        case 57:
		        numero = 9;
		        break;
		    }
		    $("#resultado_calculadora").append(numero);
		// }else if((e.keyCode == 106) || (e.keyCode == 107) || (e.keyCode == 13) || (e.keyCode == 109) || (e.keyCode == 110) || (e.keyCode == 111)){
		// 	var numero;
		// 	switch (e.keyCode) {
		//     case 106:
		//         numero = "*";
		//         break;
		//     case 107:
		//         numero = "+";
		//         break;
		//     case 13:
		//         numero = "=";
		//         break;
		//     case 109:
		//         numero = "-";
		//         break;
		//     case 110:
		//         numero = ".";
		//         break;
		//     case 111:
		//         numero = "/";
		//         break;
		//     }
		// 	$("#resultado_calculadora").append(numero.text());
		}
	});

});