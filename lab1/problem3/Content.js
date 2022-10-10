//array of quotes
let quotes = [
  "Thomas Edison - Genius is one percent inspiration and ninety-nine percent perspiration.",
  "Yogi Berra - You can observe a lot just by watching.",
  "Abraham Lincoln - A house divided against itself cannot stand.",
  "Johann Wolfgang von Goethe - Difficulties increase the nearer we get to the goal.",
  "Byron Pulsifer - Fate is in your hands and no one elses",
  "Lao Tzu - Be the chief but never the lord.",
  "Carl Sandburg - Nothing happens unless first we dream.",
  "Aristotle - Well begun is half done.",
  "Yogi Berra - Life is a learning experience, only if you learn.",
  "Margaret Sangster - Self-complacency is fatal to progress.",
  "Buddha - Peace comes from within. Do not seek it without.",
  "Byron Pulsifer - What you give is what you get.",
  "Iris Murdoch - We can only learn to love by loving.",
  "Karen Clark - Life is change. Growth is optional. Choose wisely.",
  "Wayne Dyer - You'll see it when you believe it.",
  "Today is the tomorrow we worried about yesterday.",
  "It's easier to see the mistakes on someone else's paper.",
  "Every man dies. Not every man really lives.",
  "Lao Tzu - To lead people walk behind them.",
  "William Shakespeare - Having nothing, nothing can he lose.",
  "Henry J. Kaiser - Trouble is only opportunity in work clothes.",
  "Publilius Syrus - A rolling stone gathers no moss.",
  "Napoleon Hill - Ideas are the beginning points of all fortunes.",
  "Donald Trump - Everything in life is luck.",
  "Lao Tzu - Doing nothing is better than being busy doing nothing.",
  "Benjamin Spock - Trust yourself. You know more than you think you do.",
  "Confucius - Study the past, if you would divine the future.",
  "The day is already blessed, find peace within it.",
  "Sigmund Freud - From error to error one discovers the entire truth.",
  "Benjamin Franklin - Well done is better than well said.",
  "Ella Williams - Bite off more than you can chew, then chew it.",
  "Buddha - Work out your own salvation. Do not depend on others.",
  "Benjamin Franklin - One today is worth two tomorrows.",
  "Christopher Reeve - Once you choose hope, anythings possible.",
  "Albert Einstein - God always takes the simplest way.",
  "Charles Kettering - One fails forward toward success.",
  "From small beginnings come great things.",
  "Chinese proverb - Learning is a treasure that will follow its owner everywhere",
  "Socrates - Be as you wish to seem.",
  "V. Naipaul - The world is always in movement.",
  "John Wooden - Never mistake activity for achievement.",
  "Haddon Robinson - What worries you masters you.",
  "Pearl Buck - One faces the future with ones past.",
  "Brian Tracy - Goals are the fuel in the furnace of achievement.",
  "Leonardo da Vinci - Who sows virtue reaps honour.",
  "Dalai Lama - Be kind whenever possible. It is always possible.",
  "Chinese proverb - Talk doesn't cook rice.",
  "Buddha - He is able who thinks he is able.",
  "Larry Elder - A goal without a plan is just a wish.",
  "Michael Korda - To succeed, we must first believe that we can.",
  "Albert Einstein - Learn from yesterday, live for today, hope for tomorrow.",
  "James Lowell - A weed is no more than a flower in disguise.",
  "Yoda - Do, or do not. There is no try.",
  "Harriet Beecher Stowe - All serious daring starts from within.",
  "Byron Pulsifer - The best teacher is experience learned from failures.",
  "Murray Gell-Mann - Think how hard physics would be if particles could think.",
  "John Lennon - Love is the flower you've got to let grow.",
  "Napoleon Hill - Don't wait. The time will never be just right.",
  "Pericles - Time is the wisest counsellor of all.",
  "Napoleon Hill - You give before you get.",
  "Socrates - Wisdom begins in wonder.",
  "Baltasar Gracian - Without courage, wisdom bears no fruit.",
  "Aristotle - Change in all things is sweet.",
  "Byron Pulsifer - What you fear is that which requires action to overcome.",
  "Cullen Hightower - When performance exceeds ambition, the overlap is called success.",
  "African proverb - When deeds speak, words are nothing.",
  "Wayne Dyer - Real magic in relationships means an absence of judgement of others.",
  "Albert Einstein - I never think of the future. It comes soon enough.",
  "Ralph Emerson - Skill to do comes of doing.",
  "Sophocles - Wisdom is the supreme part of happiness.",
  "Maya Angelou - I believe that every person is born with talent.",
  "Abraham Lincoln - Important principles may, and must, be inflexible.",
  "Richard Evans - The undertaking of a new action brings new strength.",
  "Ralph Emerson - The years teach much which the days never know.",
  "Ralph Emerson - Our distrust is very expensive.",
  "Bodhidharma - All know the way; few actually walk it.",
  "Johann Wolfgang von Goethe - Great talent finds happiness in execution.",
  "Michelangelo - Faith in oneself is the best and safest course.",
  "Winston Churchill - Courage is going from failure to failure without losing enthusiasm.",
  "Leo Tolstoy - The two most powerful warriors are patience and time.",
  "Lao Tzu - Anticipate the difficult by managing the easy.",
  "Buddha - Those who are free of resentful thoughts surely find peace.",
  "Sophocles - A short saying often contains much wisdom.",
];

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function setRandomQuote() {
  const quote = quotes[getRandomNum(quotes.length)];
  const quoteText = document.getElementById("quoteText");
  quoteText.innerHTML = quote;
}

// main container
const container = document.createElement("div");
container.setAttribute("id", "quoteContainer");

// quote text
const quoteText = document.createElement("p");
quoteText.setAttribute("id", "quoteText");

// Button
const changeQuoteBtn = document.createElement("button");
changeQuoteBtn.innerHTML = "New Quote";
changeQuoteBtn.addEventListener("click", () => {
  setRandomQuote();
});

container.style.cssText =
  "position:absolute;width:100vw;min-height:100px;top:0;opacity:96;z-index:100;background:#000;display:flex;padding:20px;color:white;justify-content:space-between;align-items:center;font-size:18px;overflow:hidden;";
changeQuoteBtn.style.cssText =
  "padding: 15px;background:#fbe6aa;color:black; border-radius:10px; min-height:50px;";

container.appendChild(quoteText);
container.appendChild(changeQuoteBtn);
document.body.appendChild(container);

setRandomQuote();
