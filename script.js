$(document).ready(function () {
    $('.expand-button').on('click', function () {
        var $button = $(this);
        var $textBox = $button.closest('.text-box-closed').next('.text-box-opened');
        
        $textBox.slideToggle();
        
        // Toggle plus and minus symbols
        if ($button.text() === '+') {
            $button.text('-');
        } else {
            $button.text('+');
        }
    });
});