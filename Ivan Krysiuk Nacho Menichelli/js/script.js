// codigo post


$('#enviar').on('click', function (event) {
    event.preventDefault();
    var toSave = {
        gender: $('#gender').val(),
        title: $('#title').val(),
        description: $('#description').val(),
        cast: $('#cast').val(),
        poster: $('#poster').val(),
        score: $('#score').val(),
    }

    submitForm(toSave);
})

function submitForm(data) {
    $.ajax({
        url: 'http://192.168.10.218:3000/peliculas',
        method: 'POST',
        data: data
    })
}

function getMovies() {
    $.ajax({
        url: 'http://192.168.10.218:3000/peliculas',
        method: 'GET',
    }).then(success, error)
}

function success(peliculas) {
    pagina.setMovies(peliculas);
    pagina.listHome();
}

function error(err) {
    console.log(err)
}

//armar pagina


var pagina = {

    peliculas: [],


    assambleRow: function (peliculas) {
        var row = '<div class="row">';
        for (var i = 0; i < peliculas.length; i++) {
            row += this.assambleMovie(peliculas[i]);
        }
        return row + '</div>';
    },

    assambleScore: function (score) {
        var stars = '';
        for (var i = 0; i < score; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        return stars;
    },

    assambleMovie: function (obj) {
        return '<div class="col-md-4">'
            + '<img src="' + obj.poster + '"alt="" style="width: 90%; height: 450px;">'
            + '<h2>' + obj.titulo + '</h2>'
            + '<span>' + '<button type="text" data-id="' + obj.id + '" class="btn btn-danger show">Mostrar Más</button>' + '</span>'
            + '<div class="row">'
            + '<div class="descripcionPeli">'
            + '<p>' + obj.descripcion + '</p>'
            + '<p>' + pagina.assambleScore(obj.score) + '</p>'
            + '<button type="text" data-id="' + obj.id + '" class="btn btn-danger borrar">Ocultar</button>' + '</p>'
            + '</div>'
            + '</div>'
            + '</div>'
    },





    filterByName: function (name) {
        for (var i = 0; i < pagina.peliculas.length; i++) {
            if (pagina.peliculas[i].name.toLowerCase().indexOf(name.toLowerCase()) >= 0) {
                $('#busqueda').append(
                    assambleMovie.assamble(pagina.peliculas)
                )
            }
        }
    },

    listHome: function () {
        var buffer = [];
        for (var i = 0; i < pagina.peliculas.length; i++) {
            buffer.push(pagina.peliculas[i]);

            if (buffer.length === 3 || i === pagina.peliculas.length - 1) {
                $('#mostrarpeliculas').append(pagina.assambleRow(buffer));
                buffer = [];
            }
        }



        $('#action1').on('click', function () {
            console.log('onclick')
            var input = $('#name').val();
            peliculas.filterByName(input);
        });


        $('.show').on('click', function () {
            $(this).parents('.col-md-4')
                .find('.descripcionPeli')
                .show('');
        })

        $('.borrar').on('click', function () {
            $(this).parents('.col-md-4')
                .find('.descripcionPeli')
                .hide('s');
        })

    },




    setMovies: function (peliculas) {

        pagina.peliculas = peliculas;
    }

};



$(document).ready(function () {

    pagina.setMovies(peliculas);
    pagina.listHome();
    $('.descripcionPeli').hide()

})
