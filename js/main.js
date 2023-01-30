$(document).ready(function(){
    let RegisterUser = document.getElementById('register-user');
    console.log(registerUser);
    let RegisterUserChart = new Chart(RegisterUser , {
        type : 'line',
        data : {
            label : ['1' , '2' , '3' , '4' , '5' , '6'],
            dataset : [{
                data : [15333,21555,18496,24200,10600,15600],
            }]
        }
    })
});