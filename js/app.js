$('#confirm').on('click', addCat);

function addCat() {

    var catName = $('#catName').val();
    var catAge = $('#catAge').val();
    var catImage = $('#catImg').val(); 

    $('#bef').before('<div style="float:left"><p>Имя: ' + catName + '</p>' + '<p>Возраст: ' + catAge + '</p>' + '<p><img src="' + catImage + '"></p></div>');
};