const example1Span = document.querySelector('#example-1 span');
example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;
document.querySelector('#example-1 button').addEventListener('click', function() {
	example1Span.textContent++;
	localStorage.setItem('example-1-number', example1Span.textContent)
});

const example2Span = document.querySelector('#example-2 span');
example2Span.textContent = localStorage.getItem('example-2-number') ?? 10;
document.querySelector('#example-2 button').addEventListener('click', function() {
	example2Span.textContent--;
	localStorage.setItem('example-2-number', example1Span.textContent)
});

const darkTheme = document.querySelector('input[type=checkbox]');
darkTheme.checked = localStorage.getItem('dark-theme');
document.body.classList.toggle('dark-theme', darkTheme.checked);
darkTheme.addEventListener('change', function() {
	localStorage.setItem('dark-theme', +darkTheme.checked);
	document.body.classList.toggle('dark-theme');
});

document.querySelector('button').addEventListener('click', function(){
	document.querySelector('button').textContent = "generating...";
});
const timeoutExample1 = setTimeout(function() {
	document.querySelector('button').textContent =
	Math.random()*100;
}, 3000);



