$(function(){
    let concatNbs = ""
    let inputNbs = []
    let currInput = ""
    let firstDec = true
    let operator = ""
    let computeFlag = false
    let result = 0
    let operand = ""
    let upperDisplay = $("#result")
    let lowerDisplay = $("#currentOp");

    $(".controlBtns").click(function(){
        currInput = $(this).text()

        if (!isNaN(parseInt(currInput)) || (currInput == ".")&&firstDec || currInput == "DEL"){
            if (currInput != "DEL"){
                inputNbs.push(currInput)
                concatNbs += inputNbs[inputNbs.length-1];
                lowerDisplay.text(concatNbs)
                if(currInput == "."){
                    firstDec = false;
                }
            }
            else{
                concatNbs = concatNbs.slice(0, concatNbs.length - 1);
                inputNbs.pop();
                lowerDisplay.text(concatNbs)
            }
        }
        else{
            if(currInput == "AC"){
                concatNbs = ""
                inputNbs = []
                currInput = ""
                firstDec = true
                operator = ""
                computeFlag = false
                result = 0
                operand = ""
                lowerDisplay.text("0")
                upperDisplay.text(" ")
            }

            if(computeFlag == true){
                switch(operator){
                    case "+":
                        result = parseFloat(operand) + parseFloat(concatNbs)
                        break;
                    case "-":
                        result = parseFloat(operand) - parseFloat(concatNbs)
                        break;
                    case "x":
                        result = parseFloat(operand) * parseFloat(concatNbs)
                        break;
                    case "/":
                        result = parseFloat(operand) / parseFloat(concatNbs)
                        break;
                }
                upperDisplay.text(operand +" "+ operator +" "+ concatNbs)
                lowerDisplay.text(result)
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

            if(currInput !== "." && currInput !== "DEL" && currInput !== "AC" && currInput !== "="){
                operator = $(this).text()
                computeFlag = true
                upperDisplay.text(operand +" "+ operator);
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