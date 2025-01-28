//Cursor
let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  outline.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%) )`
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});



a.forEach(item => {
  item.addEventListener('mouseover', () => {
    outline.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    outline.classList.remove('hover');
  });
})


