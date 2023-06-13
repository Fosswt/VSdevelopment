function aperte(){
    alert('parabens por ter apertado o botao seu inutil')
    let table = document.getElementById('tabela')
    for(let i = 0; i < 4; i++){
        table.deleteRow(0)
    }
}
