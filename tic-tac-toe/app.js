let flag = true;
const gameboard = (()=>{
    let data = []
    data.fill(null)
    let player = ""
    const selWin = (data)=>{
        let winner = ""
        let mathIndex = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        mathIndex.map((item)=>{
            let index1 = item[0] 
            let index2 = item[1]  
            let  index3 = item[2]  
            if(data[index1] == data[index2] && data[index1] == data[index3]){
                winner = data[index1]
            }
        })
        if(winner){
            let theWinner = document.getElementById("winner")
            theWinner.innerHTML = "The Winner is: " + winner
            data.fill(null)
            let removeEleData = document.getElementsByClassName("col")
            let len = removeEleData.length
            for(let i=0;i<len;i++){
                removeEleData[i].innerHTML = ""
            }
        }
    }
    const addStatus = (flag)=>{
        let statusTag = document.getElementById("status")
        if(flag == true)
        statusTag.innerHTML = "X"
        else
        statusTag.innerHTML = "O"
    }
    const addToData = (id)=>{
        let getButton = document.getElementById(id);
        if(flag == true){
            player = "X" 
            flag = !flag;
        }
        else{
            player = "O"
            flag = !flag;
        }
        data[id] = player
        getButton.innerHTML = player
        selWin(data)
        addStatus(flag)

        console.log(data)
    }
    return{addToData}
})()
