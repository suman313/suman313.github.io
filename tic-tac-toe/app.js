let flag = true;
const gameboard = (()=>{
    let data = Array(9).fill(null)
    let player = ""
    const addStatus = (flag)=>{
        let statusTag = document.getElementById("status")
        if(flag == true)
        statusTag.innerHTML = "X"
        else
        statusTag.innerHTML = "O"
    }
    const selWin = (data)=>{
        let winner = null
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
        let dataLen = data.length
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
            let removeEleData = document.getElementsByClassName("col")
            let len = removeEleData.length
            for(let i=0;i<len;i++){
                removeEleData[i].innerHTML = ""
            }
            data.fill(null)
        }
        //checking if every element of data array meet a certain criteria
        if(winner == null){
            let checkDataEle = true
            for(let i=0;i<9;i++){
                if(data[i]==null || data[i]=='undefined'){
                    checkDataEle = true
                    break;
                }
                else
                    checkDataEle = false
            }
            console.log(checkDataEle)
            if( checkDataEle == false ){
                let theWinner = document.getElementById("winner")
                theWinner.innerHTML = "The Match is Drawn" 
                data.fill(null)
                let removeEleData = document.getElementsByClassName("col")
                let len = removeEleData.length
                for(let i=0;i<len;i++){
                    removeEleData[i].innerHTML = ""
                }
            }
        }
        
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
        addStatus(flag)
        selWin(data)

        console.log(data)
    }
    return{addToData}
})()
