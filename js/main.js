
$(document).ready(function(){
    let RegisterUser = document.getElementById('register-user');
    console.log(RegisterUser);
    let RegisterUserChart = new Chart(RegisterUser , {
        type : 'line',
        data : {
            labels : ['1' , '2' , '3' , '4' , '5' , '6'],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
            }]
        }
    })
});
