
window.onload = function () {
    document.getElementById("txtnum").focus();
};


function enviar(){

    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var re = Number(num.value)


        if(re > 100 || re < 0)
    {

            alert('Os dados apresentados não podem ser analisados. Tente novamente!')

    } 
        else if (num.value.length == 0)
    {
            alert('Insira um número!')
    }
        else
    {

            res.innerHTML = `Seu número é: ${re}`

    }
    
    


}


const chk = document.getElementById('chk')

chk.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
})



