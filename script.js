const form = document.getElementsByTagName("form")[0];
const output = document.getElementsByTagName("ul")[0];
const tasks = [];
function addTask(e) {
    e.preventDefault();
    const taskValue = form[0].value;
    tasks.push(taskValue);

    output.innerHTML = `<li>
    <p>${taskValue}</p>
    <div>
    <button class="done || undo"></button>
    <button class="delete" data-key="JS Variable">Delete</button>
  </div>
</li>`;
}
form.addEventListener("submit" , addTask);
console.log(tasks)

function addTask(a){
a.preventDefault();
const taskValue1 = form[1].value;
    tasks.push(taskValue1);

    output.innerHTML = `<li>
    <p>${taskValue1}</p>
    <div>
    <button class="done || undo"></button>
    <button class="delete" data-key="JS Variable">Delete</button>
  </div>
</li>`;
}
form.addEventListener("submit" , addTask);
console.log(tasks)