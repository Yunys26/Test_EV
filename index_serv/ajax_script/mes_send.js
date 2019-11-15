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