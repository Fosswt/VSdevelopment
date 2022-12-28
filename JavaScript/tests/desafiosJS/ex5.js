const frame = (row) => {
    var line = "+"
    if(row > 0){
        for(let i = 0; i < row; i++){
            line = line + '-'
        }
        console.log(line)
    }
}
frame(5)