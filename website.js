$(document).ready(function() {
    $(".accordion-item").accordion({
        collapsible: true,
        icons:{ header:'ui-icon-caret-1-s',activeHeader:'ui-caret-1-s'},animate:2000,
        event:'mouseover'
    });
    $('.btn-dark').click(function(){
        var email = $('.news-input input').val(); // Get the email input value
        
        if(email === "") {
            alert("Please enter your email address.");
        } else {
            // Handle the email submission logic here, such as sending it to the server
            alert("Thank you for subscribing to our newsletter we will get back to you!");
            
            // Optionally clear the input field
            $('.news-input input').val('');
        }
    });

    
})