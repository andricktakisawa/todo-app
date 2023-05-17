import correctHeight from "./correct-height.js";
import darkTheme from "./dark-theme.js";
import decoration from "./decoration.js";
import fullscreen from "./fullscreen.js";
import handleAddingTasks from "./handle-adding-tasks.js";
import multipleChoice from "./multiple-choice.js";
import searchBar from "./search-bar.js";
import SWinstaller from "./sw-installer.js";

const d = document;

correctHeight();

d.addEventListener("DOMContentLoaded", () => {
  handleAddingTasks(
    ".add-btn",
    ".delete-btn",
    ".tasks",
    ".spacer",
    ".container"
  );
  multipleChoice(
    ".task",
    ".add-btn",
    ".delete-btn",
    ".select-btn",
    ".discard-btn"
  );
  searchBar(".search-btn", ".search-box", "2.625rem");
  decoration("deco");
  fullscreen(".fullscreen");
  darkTheme();
  SWinstaller();
});
