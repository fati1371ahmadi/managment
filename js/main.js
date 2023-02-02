$(document).ready(function(){
    let RegisterUser = document.getElementById('register-user');
    console.log(RegisterUser);
    let RegisterUserChart = new Chart(RegisterUser , {
        type : 'line',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : 'transparent',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
             scales : {
                yAxes : [{
                  display : false  
                }],
                XAxes : [{
                    display : false  
                  }],
             },
             legend : {
                display : false
             }
        }
    })

    let Comment = document.getElementById('comment');
    console.log(Comment);
    let CommentChart = new Chart(Comment , {
        type : 'bar',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : '#fff',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
             scales : {
                yAxes : [{
                  display : false  
                }],
                XAxes : [{
                    display : false  
                  }],
             },
             legend : {
                display : false
             }
        }
    })

    let ShopUser = document.getElementById('shop-user');
    console.log(ShopUser);
    let ShopUserChart = new Chart(ShopUser , {
        type : 'line',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : 'transparent',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
             scales : {
                yAxes : [{
                  display : false  
                }],
                XAxes : [{
                    display : false  
                  }],
             },
             legend : {
                display : false
             }
        }
    })

    let ApproveComment = document.getElementById('approve-comment');
    console.log(ApproveComment);
    let ApproveCommentChart = new Chart(ApproveComment , {
        type : 'bar',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [15333,21555,18496,24200,10600,15600],
                backgroundColor : '#fff',
                borderColor : '#fff',
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
             scales : {
                yAxes : [{
                  display : false  
                }],
                XAxes : [{
                    display : false  
                  }],
             },
             legend : {
                display : false
             }
        }
    })
});