const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown",
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen",
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino",
  },
  {
    text: "We generate fears while we sit. We overcome them by action.",
    author: "Dr. Henry Link",
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the assignment, and I told them they didn't understand life.",
    author: "John Lennon",
  },
  {
    text: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    text: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    text: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    text: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    text: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    text: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
  {
    text: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren",
  },
  {
    text: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
  {
    text: "The battles that count aren't the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that's where it's at.",
    author: "Jesse Owens",
  },
  {
    text: "Education costs money. But then so does ignorance.",
    author: "Sir Claus Moser",
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    text: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    text: "If you do what you've always done, you'll get what you've always gotten.",
    author: "Tony Robbins",
  },
  {
    text: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
  },
  {
    text: "It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison",
  },
  {
    text: "You may be disappointed if you fail, but you are doomed if you don't try.",
    author: "Beverly Sills",
  },
  {
    text: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    text: "Nothing is impossible, the word itself says, 'I'm possible!'",
    author: "Audrey Hepburn",
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
  },
  {
    text: "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
    author: "Mae Jemison",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "I'm not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    text: "Every child is an artist. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    text: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.",
    author: "Zig Ziglar",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anais Nin",
  },
  {
    text: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the assignment, and I told them they didn't understand life.",
    author: "John Lennon",
  },
  {
    text: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    text: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    text: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    text: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    text: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    text: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
  {
    text: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren",
  },
  {
    text: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
  {
    text: "The battles that count aren't the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that's where it's at.",
    author: "Jesse Owens",
  },
  {
    text: "Education costs money. But then so does ignorance.",
    author: "Sir Claus Moser",
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    text: "You can't use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    text: "If you do what you've always done, you'll get what you've always gotten.",
    author: "Tony Robbins",
  },
  {
    text: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
  },
  {
    text: "It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison",
  },
  {
    text: "You may be disappointed if you fail, but you are doomed if you don't try.",
    author: "Beverly Sills",
  },
  {
    text: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    text: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    text: "Nothing is impossible, the word itself says, 'I'm possible!'",
    author: "Audrey Hepburn",
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
  },
]

function showRandomQuote() {
  if (quotes.length > 0) {
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    quoteEl.textContent = `"${random.text}"`
    authorEl.textContent = `– ${random.author}`
  }
}

// Button event
newQuoteBtn.addEventListener("click", showRandomQuote)

showRandomQuote()
