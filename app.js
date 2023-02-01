let background = document.getElementById('background');
let header = document.getElementById('header');
let toggleTheme = document.getElementById('toggle-theme');
let toggleBall = document.getElementById("toggle-ball");
let ball = document.getElementById('ball');
let screen = document.getElementById('screen');
let output = document.getElementById('output');
let keypad = document.getElementById('keypadBackground');
let btn0 = document.getElementById("btn-0");
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let btn7 = document.getElementById("btn-7");
let btn8 = document.getElementById("btn-8");
let btn9 = document.getElementById("btn-9");
let btnIsEqual = document.getElementById("btn-is-equal");
let btnMulti = document.getElementById("btn-multi");
let btnDiv= document.getElementById("btn-div");
let btnPoint = document.getElementById("btn-point");
let btnPlus = document.getElementById("btn-plus");
let btnReset = document.getElementById("btn-reset");
let btnMinus = document.getElementById("btn-minus");
let btnDel = document.getElementById("btn-del");


var theme = 1;


toggleBall.addEventListener('click', () => { 
    theme++;
    switch (theme) {
        case 2:
            toggleBall.classList.add('justify-center');
            background.classList.add('bg-[#E6E6E6]');
            ball.classList.add('bg-[#CA5502]')
            toggleBall.classList.add('bg-[#D1CCCC]');
            toggleTheme.classList.add('text-black');
            header.classList.add('text-black');
            screen.classList.add('bg-[#EDEDED]');
            output.classList.add('text-"black');
            keypad.classList.add('bg-[#D1CCCC]');
            btn1, btn0, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btnDiv, btnMinus, btnMulti, btnPoint, btnPlus.classList.add('bg-[#E5E4E1]');
            btnReset.classList.add('bg-[#377F86]');
            btnReset.classList.add( 'shadow-[0px_3px_0px_#1B5F65]');
            btnDel.classList.add('bg-[#377F86]');
            btnDel.classList.add("shadow-[0px_3px_0px_#1B5F65]");
            btnIsEqual.classList.add('bg-[#CA5502]');
            btnIsEqual.classList.add("shadow-[0px_3px_0px_#893901]");
            


            break;
        case 3:
            toggleBall.classList.add('justify-end');
            toggleBall.classList.remove('justify-center');
            background.classList.add('bg-[#160628]');
            ball.classList.add('bg-[#00E0D1]');
            toggleBall.classList.add('bg-[#1D0934]');
            toggleTheme.classList.add('text-[#FFE53D]');
            header.classList.add('text-[#FFE53D]');
            screen.classList.add('bg-[#1D0934]');
            output.classList.add('text-[#FFE53D]');
            keypad.classList.add('bg-[#1D0934]');
            btn0.classList.add('bg-[#341C4F]');
            btn1.classList.add('bg-[#341C4F]');
            btn2.classList.add('bg-[#341C4F]');
            btn3.classList.add('bg-[#341C4F]');
            btn4.classList.add('bg-[#341C4F]');
            btn5.classList.add('bg-[#341C4F]');
            btn6.classList.add('bg-[#341C4F]');
            btn7.classList.add('bg-[#341C4F]');
            btn8.classList.add('bg-[#341C4F]');
            btn9.classList.add('bg-[#341C4F]');
            btnPlus.classList.add('bg-[#341C4F]');
            btnMinus.classList.add('bg-[#341C4F]');
            btnDiv.classList.add('bg-[#341C4F]');
            btnPoint.classList.add('bg-[#341C4F]');
            btnMulti.classList.add('bg-[#341C4F]');

            
            btn0.classList.add('text-[#FFE53D]');
            btn1.classList.add('text-[#FFE53D]');
            btn2.classList.add('text-[#FFE53D]');
            btn3.classList.add('text-[#FFE53D]');
            btn4.classList.add('text-[#FFE53D]');
            btn5.classList.add('text-[#FFE53D]');
            btn6.classList.add('text-[#FFE53D]');
            btn7.classList.add('text-[#FFE53D]');
            btn8.classList.add('text-[#FFE53D]');
            btn9.classList.add('text-[#FFE53D]');
            btnPlus.classList.add('text-[#FFE53D]');
            btnMinus.classList.add('text-[#FFE53D]');
            btnDiv.classList.add('text-[#FFE53D]');
            btnPoint.classList.add('text-[#FFE53D]');
            btnMulti.classList.add('text-[#FFE53D]');
             
            
            btn0.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn1.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn2.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn3.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn4.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn5.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn6.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn7.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn8.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn9.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btnPlus.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btnPoint.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btnMulti.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btnMinus.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btnDiv.classList.add('shadow-[0px_3px_0px_#871C9C]');
            btn0.classList.add('shadow-[0px_3px_0px_#871C9C]');

             btnReset.classList.add('bg-[#58077D]');
             btnReset.classList.add('shadow-[0px_3px_0px_#BC15F4]');
             btnDel.classList.add('bg-[#58077D]');
             btnDel.classList.add('shadow-[0px_3px_0px_#BC15F4]');
             btnIsEqual.classList.add('bg-[#00E0D1]');
             btnIsEqual.classList.add( 'shadow-[0px_3px_0px_#6CF9F2]');
            

         break;
        case 4:
            // toggleBall.classList.remove('justify-end');
            // // toggleBall.classList.add('jutify-start');
            toggleBall.classList.remove("justify-end");
            // toggleBall.classList.remove("justify-center");
            background.classList.remove("bg-[#160628]");
            ball.classList.remove("bg-[#00E0D1]");
            toggleBall.classList.remove("bg-[#1D0934]");
            toggleTheme.classList.remove("text-[#FFE53D]");
            header.classList.remove("text-[#FFE53D]");
            screen.classList.remove("bg-[#1D0934]");
            output.classList.remove("text-[#FFE53D]");
            keypad.classList.remove("bg-[#1D0934]");
            btn0.classList.remove("bg-[#341C4F]");
            btn1.classList.remove("bg-[#341C4F]");
            btn2.classList.remove("bg-[#341C4F]");
            btn3.classList.remove("bg-[#341C4F]");
            btn4.classList.remove("bg-[#341C4F]");
            btn5.classList.remove("bg-[#341C4F]");
            btn6.classList.remove("bg-[#341C4F]");
            btn7.classList.remove("bg-[#341C4F]");
            btn8.classList.remove("bg-[#341C4F]");
            btn9.classList.remove("bg-[#341C4F]");
            btnPlus.classList.remove("bg-[#341C4F]");
            btnMinus.classList.remove("bg-[#341C4F]");
            btnDiv.classList.remove("bg-[#341C4F]");
            btnPoint.classList.remove("bg-[#341C4F]");
            btnMulti.classList.remove("bg-[#341C4F]");

            btn0.classList.remove("text-[#FFE53D]");
            btn1.classList.remove("text-[#FFE53D]");
            btn2.classList.remove("text-[#FFE53D]");
            btn3.classList.remove("text-[#FFE53D]");
            btn4.classList.remove("text-[#FFE53D]");
            btn5.classList.remove("text-[#FFE53D]");
            btn6.classList.remove("text-[#FFE53D]");
            btn7.classList.remove("text-[#FFE53D]");
            btn8.classList.remove("text-[#FFE53D]");
            btn9.classList.remove("text-[#FFE53D]");
            btnPlus.classList.remove("text-[#FFE53D]");
            btnMinus.classList.remove("text-[#FFE53D]");
            btnDiv.classList.remove("text-[#FFE53D]");
            btnPoint.classList.remove("text-[#FFE53D]");
            btnMulti.classList.remove("text-[#FFE53D]");

            btn0.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn1.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn2.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn3.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn4.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn5.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn6.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn7.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn8.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn9.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btnPlus.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btnPoint.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btnMulti.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btnMinus.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btnDiv.classList.remove("shadow-[0px_3px_0px_#871C9C]");
            btn0.classList.remove("shadow-[0px_3px_0px_#871C9C]");

            btnReset.classList.remove("bg-[#58077D]");
            btnReset.classList.remove("shadow-[0px_3px_0px_#BC15F4]");
            btnDel.classList.remove("bg-[#58077D]");
            btnDel.classList.remove("shadow-[0px_3px_0px_#BC15F4]");
            btnIsEqual.classList.remove("bg-[#00E0D1]");
            btnIsEqual.classList.remove("shadow-[0px_3px_0px_#6CF9F2]");

            // removing theme 2
            
            // removing 
             toggleBall.classList.remove("justify-center");
             background.classList.remove("bg-[#E6E6E6]");
             ball.classList.remove("bg-[#CA5502]");
             toggleBall.classList.remove("bg-[#D1CCCC]");
             toggleTheme.classList.remove("text-black");
             header.classList.remove("text-black");
             screen.classList.remove("bg-[#EDEDED]");
             output.classList.remove('text-"black');
             keypad.classList.remove("bg-[#D1CCCC]");
             btn1,
               btn0,
               btn2,
               btn3,
               btn4,
               btn5,
               btn6,
               btn7,
               btn8,
               btn9,
               btnDiv,
               btnMinus,
               btnMulti,
               btnPoint,
               btnPlus.classList.remove("bg-[#E5E4E1]");
             btnReset.classList.remove("bg-[#377F86]");
             btnReset.classList.remove("shadow-[0px_3px_0px_#1B5F65]");
             btnDel.classList.remove("bg-[#377F86]");
             btnDel.classList.remove("shadow-[0px_3px_0px_#1B5F65]");
             btnIsEqual.classList.remove("bg-[#CA5502]");
             btnIsEqual.classList.remove("shadow-[0px_3px_0px_#893901]");

            theme = 1;
        break;
    
    }
})