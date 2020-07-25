$('#burger-submit').on('click', (event) => {
    event.preventDefault();
    let burgerName = $('#burger').val().trim();
    let routeName = burgerName.replace(/\s+/g, '').toLowerCase();

    let newBurger = {
        routeName: routeName,
        burgerName: burgerName,
        devoured: false
    };

    $.post('/api/new', newBurger).then(() => {
        let row = $('<div>');
        row.addClass('burger');
        row.append(`<p>${newBurger.burgerName}
        <button class: 'btn devourBtn' id: newBurger.burgerName value:'Devour'>
        </button>
        </p>`);
        // let devourBtn = $('<button>').attr(
        //     { class: 'btn devourBtn', id: newBurger.burgerName, value:'Devour'});
        // row.append(devourBtn);

        $('#burger-area').prepend(row);
    });
    $('#burger').val('');
    location.assign("/");
});


$('#burger-area').on('click', (event) => {
    event.preventDefault();
    if(event.target.type === 'submit'){
        let routeName = event.target.id.replace(/\s+/g, '').toLowerCase();
        console.log(routeName);

        $.ajax({
            url: `/api/${routeName}`,
            type:'PUT',
            data: {name: routeName},
            success: (data) => {
                location.assign('/');
            }
        });
    }
});

//data should be an array
$.get('/api/all', (data) => {
    if (data.length !== 0) {
        data.map(burger => {
            let row = $('<div>').attr('display', 'flex');
            row.addClass('burger');
            row.append(`<span class='burgerName'>${burger.burgerName}</span>`);
            if (burger.devoured === false) {
                let devourBtn = $('<button>').attr({ class: 'btn devourBtn', id: burger.burgerName });
                devourBtn.text('Devour');
                row.append(devourBtn);
                $('#burger-area').prepend(row);
            }
            else {
                $('#devoured-area').prepend(row);
            }
        });
    }
});