let input = prompt("What would you like to do?");
const todos = ['Collect Eggs', 'Clean The House'];

while (input !== 'quit' && input !== 'q'){

    if(input=== 'list') {

        console.log('***************')
        for( let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
            }
        console.log('***************')
    } else if (input === 'new'){
        const newTodo = prompt('Okay, what would u like to add');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if(input === 'delete'){
        const index = prompt('Ok, enter an index to delete:');
        const deleted = todos.splice(index, 1);
        console.log(`OK, deleted ${deleted[0]}`)
      
    }

    input = prompt("What would you like to do? ")
}
console.log("Bye Honey!")





