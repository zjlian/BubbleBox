let userInfo = {
	'avatar': 'd.png',
	'title' : '【话痨】',
	'id' : '心态爆炸的邪恶小法师',
	'comment' : '叫我棒棒鸭 嘎嘎嘎'
};

const setText = function(topic,string) {
	topic.appendChild(document.createTextNode(string));
};
const $$ = function(str) {
	return document.querySelector(str);
};
const createGUI = function(info) {
	/*let avatar = document.querySelector('.avatar');*/
	let avatar = $$('.avatar');
	let title = $$('.title');
	let id = $$('.id');
	let comment = $$('.comment');

	avatar.style.backgroundImage = `url(images/${info.avatar})`;
	/*title.appendChild(document.createTextNode(info.title));*/
	setText(title,info.title);
	setText(id,info.id);

	const w = ((info.comment.length) * 14) < 700 ? ((info.comment.length) * 14) : 700;
	comment.style.width = `${w}px`;
	setText(comment,info.comment);

	console.log(w);
};

const main = function() {
	createGUI(userInfo);
};

window.onload = main;

