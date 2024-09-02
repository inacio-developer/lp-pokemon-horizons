import { videoControl } from "./modules/video.js";
import { attPokemonStyle } from "./modules/pokemon-select.js";
import { teste } from "./modules/bug-menu-modal.js";

$(document).ready(() => {
  $(window).on("load", () => {
    const params = localStorage.getItem("pokemon-type") || "fire";
    attPokemonStyle(params);
  });
  $(window).on("keydown", videoControl.key);
  $(".intro-site").on("click", videoControl.click);
  $(".pokemon-select").on("click", attPokemonStyle);
  $(".btn-pokeball").on("click", teste);
});
