function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('feed');
const url = '/feed';
fetch(url)
  .then((resp) => resp.json())
  .then(function (feed) {
    return feed.map(function (company) {
      let li = createNode('li');
      let span = createNode('span');
      span.innerHTML += `<H2>${company.name}</H2>`;

      let tickerCode = company.priceUnits === 'GBP:pence' ? 'p' : '';

      span.innerHTML += `<P>${company.tickerCode} ${company.latestPrice}${tickerCode}</P>`;
      company.feed.forEach(function (story) {
        let outlook;

        switch (story.outlook) {
          case 'positive':
            outlook = `&#x1F603`;
            break;
          case 'negative':
            outlook = `&#x1F61E`;
            break;
          case 'neutral':
            outlook = `&#x1F610`;
            break;
        }

        span.innerHTML += `<P><I>${story.headline}</I> ${outlook}</P>`;
      })

      append(li, span);
      append(ul, li);
    })
  })
  .catch(function (error) {
    console.log(error);
  });
