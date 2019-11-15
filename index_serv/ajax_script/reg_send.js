/*Скрипт для отправкы данных regModalForm*/
/*Берется объект с id="sendPush + обработчик события .on() + "click"- принажатии"
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
    })

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

