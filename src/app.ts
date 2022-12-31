import { Task, Category } from "./types/types";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  { name: "Wyrzucić śmieci", done: false },
  { name: "Pójść na siłownię", done: true, category: "gym" },
  { name: "Nakarmić koty", done: false },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
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
