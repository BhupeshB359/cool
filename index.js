const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


const btns = document.querySelectorAll("[data-target-tab]");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));

    const items = document.querySelectorAll(".item");

    items.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});
/*
717a1-9fe07fedd0-8f20f8cc1f-7711f32a0e-18150eb89e-3eda946516-ee48cb6e7c-523d085819-cbfe3a9cac-7324fec4c7-e9de8a549d-1d6fa8cf82-cc672b268e-416ae29a59-95ae659ffd-0b564fc02a-82df5
*/
