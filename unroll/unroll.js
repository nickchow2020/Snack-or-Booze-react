function unroll(squareArray) {

    //initial value
    let unroll = []

        while (squareArray.length > 0){
            // get top row
            if(squareArray.length !== 0)
                unroll = [...unroll,...squareArray.shift()]

            // get left column
            if(squareArray.length !== 0)
                unroll = [...unroll,...squareArray.map(row => row.pop())]

            //get bottom row
            if(squareArray.length !== 0)
                unroll = [...unroll,...squareArray.pop().reverse()]

            //get right column
            if(squareArray.length !== 0)
                unroll = [...unroll,...squareArray.map(column => column.shift()).reverse()]
            
        }
    return unroll
}

module.exports = unroll;
