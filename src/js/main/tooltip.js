export default class Tooltip {
  constructor() {
    this._tooltips = [];
  }

  showTooltip(element, title, text) {
    const tooltipElement = document.createElement("div");
    const id = performance.now();
    this._tooltips.push({
      id,
      element: tooltipElement,
    });
    tooltipElement.classList.add("tooltip-conteiner");
    tooltipElement.innerHTML = `<h3 class="popover-title">${title}</h3><div class="popover-content">${text}</div>`;
    document.body.appendChild(tooltipElement);
    const { right, top } = element.getBoundingClientRect();
    tooltipElement.style.left =
      right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top = top - tooltipElement.offsetHeight - 8.686 + "px";
    return id;
  }

  removeTooltip(id) {
    const tooltip = this._tooltips.find((t) => t.id == id);
    tooltip.element.remove();
    this._tooltips = this._tooltips.filter((t) => t.id !== id);
  }
}
