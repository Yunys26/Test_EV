$(document).ready(function()
{
    $('').click(function()
    {
        $.ajax
        ({
            url:"/send_forms/php/send.php",
            type:"GET",
            cashe:false,
            async:true, 
            data:{ name:$('#name').val(), email:$('#email').val(), message:$('#message').val() }
        })
    });
});