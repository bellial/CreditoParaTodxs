window.onscroll = function()
{
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
{
document.getElementById("scroll-btn").style.display = "block";
}
else
{
document.getElementById("scroll-btn").style.display = "none";
}
};
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };
  scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
  }
