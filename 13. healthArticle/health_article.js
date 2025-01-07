var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
let data;
xhr.onload = () => {
    data = xhr.response.articles;
    console.log(data)
    let articlesDiv = document.getElementById('articles');

    data.forEach(element => {
        let article = document.createElement('div');
        article.classList.add('article')

        let title = document.createElement('div');
        title.classList.add('title')
        title.textContent = element.title

        let description = document.createElement('div');
        description.classList.add('description')
        description.textContent = element.description

        let waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
        let waysList = document.createElement('ul')
        element.ways_to_achieve.forEach(el => {
            let listItem = document.createElement('li');
            listItem.textContent = el;
            waysList.appendChild(listItem)
        })
        let benefitsList = document.createElement('ul')
        element.benefits.forEach(el => {
            let listItem = document.createElement('li');
            listItem.textContent = el;
            benefitsList.appendChild(listItem)
        })

        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(waysHeader);
        article.appendChild(waysList);
        article.appendChild(benefitsList);
        articlesDiv.appendChild(article);
    });
}
console.log(xhr)
xhr.send();

const practiceRequest = new XMLHttpRequest();
practiceRequest.open('GET', './health.json', true);
practiceRequest.responseType = 'json';
practiceRequest.onload = () => {
    let data = practiceRequest.response
    console.log('данные получены')
    if (data){
        data.map((el) => {
            console.log(el)
            console.log(`el.id - ${el.id}`)
            console.log(el.name)
            console.log(el.id)
            console.log(el.health)
           
        })
    }
    console.log(practiceRequest.response)
}

practiceRequest.send()