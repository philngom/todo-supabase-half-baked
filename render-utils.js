export function renderTodo(todo) {
    // create a div and a p tag
    const p = document.createElement('p');
    const div = document.createElement('div');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    // add the 'todo' css class no matter what
    p.classList.add('todo');
    if (todo.complete) {
        p.classList.toggle('completed-todo');
    }
    // put the todo's text into the p tag
    p.textContent = todo.todo;
    // append stuff
    div.append(p);
    // return the div
    return div;
}