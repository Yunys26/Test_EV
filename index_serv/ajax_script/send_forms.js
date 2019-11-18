function regSend () 
{
    /*Скрипт для отправкы данных regModalForm*/
/*Берется объект с id="regPush + обработчик события .on() + "click"- принажатии"
будет срабатывать функция */
    $("#regPush").on("click", function() {
        /* объявление перменных внутри функций, ,берем id из нужнынх input
        .val()*/ 
        let nickname = $("#nameReg").val().trim();
        let email = $("#emailReg").val().trim();
        let password = $("#passReg").val().trim();
        /*Обработка ошибок для ввода*/
        if(nickname == "") {
            $("#errorMess").text("Enter nickname");
            return false;
        } else if (email == "") {
            $("#errorMess").text("Enter email");
            return false;
        } else if (password.lenght < 5) {
            $("#errorMess").text("Enter password");
            return false;
        }
    /*Удаляем текст из ошибки*/
    $("#errorMess").text("")
    /*Ajax jQeury */
    $.ajax({
        url: '/index_serv/sql_query/reg_send.php',
        type: 'POST',
        cache: false,
        data: {'nickname': nickname, 'email': email, 'password': password },
        dataType: 'html',
        beforeSend: function() {
            $("#regPush").prop("disabled", true);
        },
        success: function(data) {
            console.log(data);
            $("#regPush").prop("disabled", false);
        }  
    });

    $("#nameReg").val('');
    $("#emailReg").val('');
    $("#passReg").val('');
});
/*
Обработка с очисткой формы после отправки чере trigger
success: function(data) {
            if(!data)
                alert("Error")
            else
                $("$sendMail").trigger("resset");
            $("#regPush").prop("disabled", true);
        }        
        Обычная обработка с залипанием формы 
        success: function(data) {
            console.log(data);
            $("#regPush").prop("disabled", false);
        }  

$("#____").on("click", function getInfo(){
    let info = $("#infoGuest").val();

    $.ajax({
        url: './',
        type: 'GET',
        cache: false,
        data: {'info': info},
        dataType: 'html',

    })
})
*/
}
function messageSend () 
{
    $('#submit').on("click", function() {
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
    
        $.ajax({
            url: '/index_serv/sql_query/mes_send.php',
            type: 'POST',
            cache: false,
            data: {'name': name, 'email': email, 'message': message},
            dataType: 'html',
            beforeSend: function() {
                $("#submit").prop("disabled", true);
            },
            success: function(data) {
                console.log(data);
                $("#submit").prop("disabled", false);
            }  
        })
    
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    });
}
/*
$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});
function submitForm() {
    let name = $("name").val();
    let email = $("email").val();
    let message = $("message").val();

    $.ajax({
        type: "POST",
        url: "./send.php",
        data: "name=" + name + "&email" + email + "&message" + message,
        success : function(text) {
            if (text == "success") {
                formSuccess();
            }
        }
    })
};

function formSuccess() {
    $("#msgSubmit").removeClass("hidden");
};

function submitMSG(valid, msg){
    var msgClasses;
if(valid){
    msgClasses = "h3 text-center tada animated text-success";
} else {
    msgClasses = "h3 text-center text-danger";
}
$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
};
/*
// Функция которая выполняет скрипт когда функция будет щагруженаа (body)
$(document).ready(function()
{
    $('#contactForm').click(function()
    {
        $.ajax()
        ({
            url:'send.php',
            type:'POST',
            cashe:false,
            async:false,
            data:{ 
                name:$('#name').val(), 
                email:$('#email').val(),
                message:$('#message').val(),
            },
        }).done(function() {
            alert('Спасибо за заявку!');
        });
    });
});
            data:{ 
                name:$('#name').val(), 
                email:$('#email').val(),
                message:$('#message').val(),
            },
            /*
            success: function(data) {
                $('#').html(data);
            }
const xhr = new XMLHttpRequest();


xhr.open("POST", "./send.php");
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");*/
function allInfo () 
{
    $(document).ready(function() {
        $('#table_look').on('click', function() {
            $.ajax({
                type: "GET",
                url: "/index_serv/sql_query/look_table.php",
                dataType: "html",
                success: function(response) {
                    if (!($('#look_table_info').html(response))) console.log("Error 404")
                    else 
                    {
                        console.log("Данные получены");
                        return response;
                    }   
                }
            })
        })
    })
}