function A(){
	document.getElementById('endereco').disabled = true;
	document.getElementById('bairro').disabled = true;
	document.getElementById('cidade').disabled = true;
}


function validarFormulario()
{
	var preenchido = true;

	// Validação do campo nome;

	if(document.getElementById('nome').value == "")
	{
		alert("Digite seu nome corretamente");
		preenchido = false;
		return;
	}

	// Validação do campo e-mail;

	if(document.getElementById('email').value == "")
	{
		alert("Informe seu email");
		preenchido = false;
		return;
	}

	// Validação do campo endereço;

	if(document.getElementById('endereco').value == "")
	{
		alert("Informe seu endereço");
		preenchido = false;
		return;
	}

	// Validação do campo bairro

	if(document.getElementById('bairro').selectedIndex == 0)
	{
		alert("Informe seu bairro");
		preenchido = false;
		return;
	}

	// Validação do campo cidade

	if(document.getElementById('cidade').selectedIndex == 0)
	{
		alert("Informe sua cidade!");
		preenchido = false;
		return;
	}

	if(preenchido == true)
	{
		document.forms['formCadastro'].submit();
	}
}

function camposInativos()
{
	document.getElementById('nome').disabled = true;
	document.getElementById('email').disabled = true;
	document.getElementById('endereco').disabled = false;
	document.getElementById('bairro').disabled = false;
	document.getElementById('cidade').disabled = false;
}
