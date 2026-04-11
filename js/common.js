window.addEventListener("load", () => {
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");
  const loading = document.getElementById("loading");
  const wrap = document.getElementById("wrap");

  // ① logo1 フェードイン
  logo1.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 800, easing: "ease-out", fill: "forwards" }
  );

  // ② logo2 に切り替え
  setTimeout(() => {
    logo1.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: "forwards" });
    logo2.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 600, fill: "forwards" });
  }, 1800);

  // ③ ローディングをふわっと消す
  setTimeout(() => {
    loading.classList.add("is-hide");
    wrap.classList.add("is-show");
  }, 3200);

  // ④ 完全にDOMから削除
  setTimeout(() => {
    loading.remove();
  }, 4000);
});

// ===== 右下オーディオボタン =====
const audio = document.getElementById("audioPlayer");
const btn = document.getElementById("playBtn");
const icon = btn.querySelector(".icon");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("play");
    icon.classList.add("pause");
  } else {
    audio.pause();
    icon.classList.remove("pause");
    icon.classList.add("play");
  }
});
const video = document.querySelector('video');

video.play().catch(() => {
  // 再生できない環境用フォールバック
});
if (
  navigator.userAgent.includes("Instagram") ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  document.documentElement.classList.add("no-video");
}



