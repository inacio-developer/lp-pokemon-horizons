let acess = 0;

const saveDate = (date) => {
  localStorage.clear();
  localStorage.setItem("pokemon-type", date);
};

const attLabel = (type) => {
  $(".label-pokemon-type").each((i, label) => {
    $(label).prop("for").replaceAll("btn-", "") === type
      ? $(label).text("Selected")
      : $(label).text("Select");
  });
};

const attBackground = (color) => {
  if (acess > 0) $(".bg-color").addClass("transitionBg");
  acess++;

  $(".bg-color").css("background-color", `${color}`);
  $(".btn-pokeball").css("background-color", `${color}`);
};

const addClassBody = (className) => {
  $("body").addClass(className);
};

const attColor = (color) => {
  $(".ul-inherit-color").css("color", `${color}`);
};

const attGradient = (color) => {
  $(".gradient").css(
    "background-image",
    `linear-gradient(rgba(19, 147, 210, 0) 90%,  ${color} 100%)`
  );
};

const typeColor = (type) => {
  let color;

  if (type === "fire") color = "rgba(228, 5, 51, 1)";
  else if (type === "water") color = "rgba(19, 147, 210, 1)";
  else color = "rgba(118, 166, 46, 1)";

  return color;
};

const removeClassBody = () => {
  $("body").removeClass();
};

const attPokemonStyle = (clickOrType = "fire") => {
  const element = $(clickOrType.target).attr("value") || clickOrType;
  let color = typeColor(element);

  removeClassBody();
  attGradient(color);
  attBackground(color);
  attColor(color);
  addClassBody(element);
  attLabel(element);
  saveDate(element);
};

export { attPokemonStyle };
