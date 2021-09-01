let btn = document.querySelectorAll(".btn");
let input = document.querySelector('input');


btn.forEach((but) => {
    but.addEventListener("click", (e) => {
        function setCaretPosition(ctrl, pos) {
            // Modern browsers
            if (ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos, pos);

                // IE8 and below
            } else if (ctrl.createTextRange) {
                let range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        }

        // Set the cursor position of the "#test-input" element to the end when the page loads
        let length = input.value.length;
        let value = e.target.dataset.num;
        input.value += value; 
        setCaretPosition(input, length + 1);
    })
})

const del = () => {
    let length = input.value.length;
    input.value = input.value.slice(0, length - 1)
    if (input.value === '') {
        document.querySelector(".answer-sec").innerHTML = '';
    }
}

const performOperation = () => {
    return
}

const ans = () => {
    if (input.value === '') {
        input.value = 'Please Enter a Value';
    } else {
        let answer = eval(input.value);
        input.value = answer;
    }
    document.querySelector(".answer-sec").innerHTML = input.value;
}
