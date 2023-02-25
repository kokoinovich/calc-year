function salary() {
    let date1 = document.getElementById('date1').value
    let date2 = document.getElementById('date2').value
    let date3 = document.getElementById('date3').value
    let date4 = document.getElementById('date4').value
    if (date2 < date3 && date1 > date4 ) {
        document.getElementById('sum').innerText = 'Они вместе не жили!';
    } else {
     if (date1 < date4) {
        document.getElementById('sum').innerText = `Они одновременно жили ${date4 - date1} лет`;
     } 
     if (date2 === date4 && date3 > date1) {
            document.getElementById('sum').innerText = `Они одновременно жили ${date4 - date3} лет`;
        }
     
    }
}