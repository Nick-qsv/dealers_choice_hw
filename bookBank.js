const data = [
    {id: 1, title: "Billion Dollar Whale", author: "Bradley Hope and Tom Wright", content: "Named a Best Book of 2018 by the Financial Times and Fortune, this thrilling (Bill Gates) New York Times bestseller exposes how a modern Gatsby swindled over $5 billion with the aid of Goldman Sachs in the heist of the century", rating: `<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>`, image: `<img src="/bdw.jpg"/>`},
    {id: 2, title: "The Sovereign Individual", author:"James Dale Davidson and Lord William Rees-Moog", content: "Two renowned investment advisors and authors of the bestseller The Great Reckoning bring to light both currents of disaster and the potential for prosperity and renewal in the face of radical changes in human history as we move into the next century.", rating:`<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>`, image:`<img src="/tsi.jpg"/>` },
    {id: 3, title: "Mao: The Unknown Story", author: "Jon Halliday and Jung Chang", content: "Mao: The Unknown Story is a 2005 biography of Chinese Communist leader Mao Zedong written by the husband-and-wife team of writers Jung Chang and historian Jon Halliday, who depict Mao as being responsible for more deaths in peacetime than Adolf Hitler or Joseph Stalin.", rating: `<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>`, image: `<img src="/mao.jpg"/>`},
    {id: 4, title: "Debt: The First 5,000 Years", author: "David Graeber", content: "Debt: The First 5,000 Years is a book by anthropologist David Graeber published in 2011. It explores the historical relationship of debt with social institutions such as barter, marriage, friendship, slavery, law, religion, war and government.", rating: `<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>`, image: `<img src="/debt.jpg"/>`},
    {id: 5, title: "Stalingrad: The Fateful Siege: 1942-1943", author: "Anthony Beevor", content: "Stalingrad is a narrative history written by Antony Beevor of the battle fought in and around the city of Stalingrad during World War II, as well as the events leading up to it.", rating: `<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>`, image:`<img src="/stalingrad.jpg"/>`}
];

const list = () =>{
    return [...data];
};

const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post};
};

module.exports = {list: list, find: find};
