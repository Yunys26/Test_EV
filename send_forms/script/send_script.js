$(document).ready(function()
{
    $('#form-submit').click(function()
    {
        $.ajax
        ({
            url:"/send_forms/php/send.php",
            type:"POST",
            cashe:false,
            async:true,
            data:{ name:$('#name').val(), email:$('#email').val(), message:$('#message').val() }
        })
    });
});