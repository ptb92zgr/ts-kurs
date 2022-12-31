import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    { name: "Wyrzucić śmieci", done: false },
    { name: "Pójść na siłownię", done: true, category: "gym" },
    { name: "Nakarmić koty", done: false },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainerElement);
});
addTask({ name: "zrobić coś", category: "gym", done: false });
renderCategories(categories, categoriesContainerElement, selectedCategory);
renderTasks(tasks, tasksContainerElement);
