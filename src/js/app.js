import Tooltip from "./main/tooltip";

const tooltip = new Tooltip();
let tooltipList = [];

const showTooltip = (element, title, text) => {
  tooltipList.push(tooltip.showTooltip(element, title, text));
};

const textPopover =
  "And here is some amazing content. It is very engaging. Right?";
const titlePopover = "Popover title";
const button = document.querySelector(".button");

button.addEventListener("mouseover", (e) => {
  e.preventDefault();
  tooltipList.forEach((id) => {
    tooltip.removeTooltip(id);
  });
  tooltipList = [];
  showTooltip(button, titlePopover, textPopover);
});

window.addEventListener("click", () => {
  tooltipList.forEach((id) => {
    tooltip.removeTooltip(id);
  });
  tooltipList = [];
});
