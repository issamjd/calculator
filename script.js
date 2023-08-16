$(function(){
    let concatNbs = ""
    let inputNbs = []
    let currInput = ""
    let firstDec = true
    let operator = ""
    let computeFlag = false
    let result = 0
    let operand = ""

    $(".controlBtns").click(function(){
        currInput = $(this).text()

        if (!isNaN(parseInt(currInput)) || (currInput == ".")&&firstDec){
            inputNbs.push(currInput)
            concatNbs += inputNbs[inputNbs.length-1];
            console.log(concatNbs)
            if(currInput == "."){
                firstDec = false;
            }
        }
        else{
            if(computeFlag == true){
                switch(operator){
                    case "+":
                        result = parseFloat(operand) + parseFloat(concatNbs)
                        console.log(result)
                        break;
                    case "-":
                        result = parseFloat(operand) - parseFloat(concatNbs)
                        console.log(result)
                        break;
                    case "x":
                        result = parseFloat(operand) * parseFloat(concatNbs)
                        console.log(result)
                        break;
                    case "/":
                        result = parseFloat(operand) / parseFloat(concatNbs)
                        console.log(result)
                        break;
                }
                computeFlag = false
                operand = result;
            }
            
            inputNbs = []
            operand = concatNbs
            if (result != ""){
                operand = result
            }
            
            concatNbs = ""
            firstDec = true

            if(currInput != "."){
                operator = $(this).text()
                computeFlag = true
            }
        }
        
        

    })
    $(".controlBtns").mousedown(function(){
        $(this).css("background-color","rgb(190, 190, 190)")

    })
    $(".controlBtns").mouseup(function(){
        $(this).css("background-color","rgb(245, 245, 245)")
    })


})