function funcionControles() {
    let varCadena = "Detalle de los controles:";
    let varForm = document.forms["frmControles"];

    let varRadio = varForm.elements["groupRadio"];
    varCadena += "\n - Radio: " + (varRadio ? varRadio.value : "No seleccionado");
    
    let varCheck = varForm.elements["groupCheck"];
    varCadena += "\n - Check: " + (varCheck.checked ? varCheck.value : "No marcado");
    
    let varBasic = varForm.elements["selectBasic"];
    varCadena += "\n - Basic: " + varBasic.value;
    
    let varMultiple = varForm.elements["selectMultiple"];
    let valoresMultiple = Array.from(varMultiple.selectedOptions).map(option => option.value);
    varCadena += "\n - Multiple: " + valoresMultiple.join(", ");

    let varFile = varForm.elements["varFile"];
    varCadena += "\n - Archivo: " + varFile.value;
    
    let varColor = varForm.elements["varColor"];
    varCadena += "\n - Color: " + varColor.value;
    
    let varDate = varForm.elements["varDate"];
    varCadena += "\n - Fecha: " + varDate.value;
    
    let varTime = varForm.elements["varTime"];
    varCadena += "\n - Tiempo: " + varTime.value;
    
    let varWeek = varForm.elements["varWeek"];
    varCadena += "\n - Semana: " + varWeek.value;
    
    let varMonth = varForm.elements["varMonth"];
    varCadena += "\n - Mes: " + varMonth.value;
    
    let varNumber = varForm.elements["varNumber"];
    varCadena += "\n - Número: " + varNumber.value;
    
    let varRange = varForm.elements["varRange"];
    varCadena += "\n - Rango: " + varRange.value;

    alert(varCadena);
}