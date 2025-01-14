let database = [];
const dataRequest = fetch('./data.json')
	.then((res) => res.json())
	.then((data) => {
		database = data;
		console.log('Data loaded:', database);
	})
	.catch((e) => console.log(`error: ${e.message}`));

let input = document
	.getElementById('input')
	.addEventListener('keypress', (e) => search(e.currentTarget.value));

function search(string) {
	console.log(`got string: ${string}`);
	if (database.length > 0) {
		const results = database.filter((item) => item.name.toLowerCase().includes(string.toLowerCase()));
		console.log('Search results:', results);
		if (results) {
			const cardsContainer = document.querySelector('.cards');
			cardsContainer.innerHTML = '';

			results.forEach((card) => {
				const cardElement = createCard(card);
				cardsContainer.appendChild(cardElement);
			});
		}
	} else {
		console.log('Database is not loaded yet.');
	}
}

function createCard(card) {
	// return () => (
	// 	<div class="card">
	// 		<div>
	// 			<img src={card.img} alt="city" />
	// 		</div>
	// 		<div class="card-text">
	// 			<h2>{card.name}</h2>
	// 			<p class="text-justify">{card.description}</p>
	// 			<button>visit</button>
	// 		</div>
	// 	</div>
	// );
	const mainDiv = document.createElement('div');
	mainDiv.className = 'card';

	const imgDiv = document.createElement('div');
	const img = document.createElement('img');
	img.setAttribute('src', card.img);
	img.setAttribute('alt', card.name);

	const cardTextDiv = document.createElement('div');
	cardTextDiv.className = 'card-text';
	const h2 = document.createElement('h2');
	h2.textContent = card.name;
	const p = document.createElement('p');
	p.classList.add('text-justify');
	p.textContent = card.description;

	const btn = document.createElement('button');
	btn.textContent = 'visit';

	mainDiv.appendChild(imgDiv);
	imgDiv.appendChild(img);

	mainDiv.appendChild(cardTextDiv);
	cardTextDiv.appendChild(h2);
	cardTextDiv.appendChild(p);
	cardTextDiv.appendChild(btn);

	return mainDiv;
}

const searchButton = document.getElementById('search').addEventListener('click', search(input));

const clearButton = document.getElementById('clear').addEventListener('click', () => {
	const input = (document.getElementById('input').value = '');
});
