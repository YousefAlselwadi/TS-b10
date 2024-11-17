
const btn: HTMLElement | null = document.getElementById('btn');

const spanEl: HTMLSpanElement | null = document.querySelector('span');


btn?.addEventListener('click', (e: MouseEvent) => {
  console.log('Button clicked');
})

