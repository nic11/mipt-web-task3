$('#root').append('<ul id="root_list">');

function addTask(text) {
    let li = $('<li>');
    li.append($('<span>').text(text));
    let deleteButton = $('<button>').text('Удалить');
    li.append(deleteButton);
    deleteButton.click(function() {
        $(this).parent().remove();
    });

    $('#root_list').append(li);
}

addTask('Сделать задание #3 по web-программированию');

let input = $('<input id="add_task_input">');
let addButton = $('<button id="add_task">').text('Добавить');

function kek() {
    let text = input.val();
    addTask(text);
    input.val('');
}

input.keyup(function(e) {
    if (e.key == 'Enter') {
        kek();
    }
});
addButton.click(kek);
$('#root').append(input).append(addButton);
