import Tooltip from "../main/tooltip";

test("проверяем создание элемента класса Tooltip", () => {
  const tooltip = new Tooltip();
  expect(tooltip).toBeInstanceOf(Tooltip);
});
