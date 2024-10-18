
    $(document).ready(function () {

        $('form').on('submit', function (e) { 
            e.preventDefault();

            const inputTarefa = $('#inputTarefa').val();
            const novoItem = $('<li style="display: none" ></li>');
        
            novoItem.text(inputTarefa);
            $(novoItem).appendTo("ul");
            $(novoItem).slideDown();
            $('#inputTarefa').val('');

        });

        $('ul').on('click', 'li', function (e) { 
            e.preventDefault();
            $(this).css('text-decoration', 'line-through');
        });

    });

