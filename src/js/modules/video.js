const keyVideoControl = (event) => {
  const video = $("#video-intro");

  if (event.key.toLowerCase() === "m") {
    $("video")[0].play();

    if (video.prop("muted")) {
      $(".volume-muted").each((i, div) => $(div).addClass("display-none"));
      video.prop("muted", false);
    } else {
      $(".volume-muted").each((i, div) => $(div).removeClass("display-none"));
      video.prop("muted", true);
    }
  }
};

const clickVideoControl = () => {
  const video = $("#video-intro");

  if (video.prop("muted")) {
    $(".volume-muted").each((i, div) => $(div).addClass("display-none"));
    video.prop("muted", false);
  } else {
    $(".volume-muted").each((i, div) => $(div).removeClass("display-none"));
    video.prop("muted", true);
  }
};

export const videoControl = {
  key: keyVideoControl,
  click: clickVideoControl,
};
