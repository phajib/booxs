# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "PHB Flat", email: "phbflat@gmail.com", password: "password")
User.create(name: "Test", email: "test@test.com", password: "password")
User.create(name: "Booxs", email: "booxs@booxs.com", password: "password")

# User.create([
#     { name: "PHB Flat", email: "phbflat@gmail.com", password: "password"},
#     { name: "Test", email: "test@test.com", password: "password"},
#     { name: "Booxs", email: "booxs@booxs.com", password: "password"}
# ])

Book.create(title: "Tales of a Fourth Grade Nothing", author: "Judy Blume", description: "Two is a crowd when Peter and his little brother, Fudge, are in the same room. Grown-ups think Fudge is absolutely adorable, but Peter and his pet turtle, Dribble, know the truth. From throwing temper tantrums to smearing mashed potatoes on the wall, Fudge causes mischief wherever he goes!", image: "images/books/Judy%20Blume%20-%20Tales%20of%20the%204th%20Grade.jpeg", user_id: 1)
Book.create(title: "Dory Fantasmagory", author: "Abby Hanlon", description: "It’s hard being the youngest sibling, especially when your brother and sister won’t play with you. Good thing Dory has an unbelievably wild imagination to keep her entertained. With its sharp-toothed robbers, bearded fairy godmothers, and a best friend who just happens to be a monster, this book is a real hoot.", image: "images/books/Dory%20Fantasmagory.jpeg", user_id: 1)
Book.create(title: "Little Critter - All By Myself", author: "Mercer Mayer", description: "Mercer Mayer’s Little Critter wants to show you all the things he can do for himself in this classic, funny, and heartwarming book. Whether he’s tying his shoes, coloring a picture, or riding his bike, both parents and children alike will relate to this beloved story. A perfect way to teach children about independence!", image: "images/books/Critters.jpeg", user_id: 1)
Book.create(title: "George Brown Class Clown - Super Burp", author: " Nancy Krulik", description: "George Brown wants nothing more than to be a normal, responsible 10-year-old kid; but his efforts tend to land him in big trouble thanks to his super burps. Those magical and pesky belches promise disaster for George Brown and a whole lot of laughs for readers.", image: "images/books/Super%20Burp.jpeg", user_id: 1)
Book.create(title: "Wonder Movie Tie-In Edition", author: "R. J. Palacio", description: "Though he wants nothing more than to be an ordinary kid, August Pullman was born with a facial difference that his fellow 5th grade classmates can't seem to get past. Told from multiple viewpoints, these perspectives converge in a portrait of one community’s struggle with empathy, compassion, and acceptance.", image: "images/books/Wonder%20Movie.jpeg", user_id: 1)
Book.create(title: "A Reaper at the Gates", author: "Sabaa Tahir", description: "In the third installment in the series, Helene Aquilla is desperate to protect her sister’s life in the Empire, but Laia of Serra knows the fate of the world lies in stopping the Nightbringer. And in the land between the living and the dead, Elias Veturius has given up his freedom to serve as Soul Catcher — despite the cost.", image: "images/books/A%20Reaper%20at%20the%20Gates.jpeg", user_id: 3)
Book.create(title: "Looking for Alaska", author: "John Green", description: "Miles Halter is fascinated by famous last words — and tired of his safe life at home. He leaves for boarding school to seek what the dying poet François Rabelais called “The Great Perhaps.” Much awaits Miles at Culver Creek, including Alaska Young, who will pull Miles into her labyrinth and catapult him into the Great Perhaps.", image: "images/books/Looking%20for%20Alaska.jpeg", user_id: 3)
Book.create(title: "Starsight", author: "Brandon Sanders", description: "In this sequel to Skyward, readers get more of aspiring pilot Spensa, who has her hands full with her infamous father's fall from grace, the introduction of an alien race, and the not insignificant task of saving humankind. Unexpected and thrilling, Starsight promises another high-flying plot helmed by a fearl...", image: "images/books/Starsight.jpeg", user_id: 3)
Book.create(title: "Where's Spot", author: "Eric Hill", description: "The bestselling puppy is better than ever. This board book edition has a brand new, more vibrant cover. Where's Spot? Is he in the piano? Is he under the stairs? Your little one will love looking for Spot!", image: "images/books/Where's%20Spot.jpeg", user_id: 2)
Book.create(title: "Where Is Peter Rabbit?", author: "Beatrix Potter", description: "Where is Peter Rabbit hiding? With easy-to-lift flaps, rhyming text, and charming illustrations, this story filled with characters from the world of Beatrix Potter is fun to share with little ones and is the perfect introduction to Peter Rabbit for very young readers.", image: "images/books/Where%20Is%20Peter%20Rabbit.jpeg", user_id: 2)
Book.create(title: "Unbroken", author: "Laura Hillenbrand", description: "In this lavishly illustrated young adult edition of her award-winning bestseller, Laura Hillenbrand tells the story of a former Olympian’s courage, cunning, and fortitude following his plane crash in enemy territory. This adaptation introduces a new generation to one of history’s most thrilling survival epics.", image: "images/books/Unbroken.jpeg", user_id: 3)
Book.create(title: "Llama Llama Hide & Seek", author: "Anna Dewdney", description: "Llama Llama can't find his Fuzzy Llama anywhere. Where could he be? Children will love following along and lifting the flaps as LLama looks for his beloved Fuzzy. This casebound book includes flaps on every spread and a mirror at the end in a story that kids will want to read over and over again!",
     image: "images/books/Llama%20Llama%20Hide%20&%20Seek.jpeg", user_id: 2)

# Book.create([
#      { title: "Tales of a Fourth Grade Nothing", author: "Judy Blume", description: "Two is a crowd when Peter and his little brother, Fudge, are in the same room. Grown-ups think Fudge is absolutely adorable, but Peter and his pet turtle, Dribble, know the truth. From throwing temper tantrums to smearing mashed potatoes on the wall, Fudge causes mischief wherever he goes!",
#           image: "images/books/Judy%20Blume%20-%20Tales%20of%20the%204th%20Grade.jpeg", user_id: 1},
#      { title: "Dory Fantasmagory", author: "Abby Hanlon", description: "It’s hard being the youngest sibling, especially when your brother and sister won’t play with you. Good thing Dory has an unbelievably wild imagination to keep her entertained. With its sharp-toothed robbers, bearded fairy godmothers, and a best friend who just happens to be a monster, this book is a real hoot.",
#           image: "images/books/Dory%20Fantasmagory.jpeg", user_id: 1},
#      { title: "Little Critter - All By Myself", author: "Mercer Mayer", description: "Mercer Mayer’s Little Critter wants to show you all the things he can do for himself in this classic, funny, and heartwarming book. Whether he’s tying his shoes, coloring a picture, or riding his bike, both parents and children alike will relate to this beloved story. A perfect way to teach children about independence!",
#           image: "images/books/Critters.jpeg", user_id: 1},
#      { title: "George Brown Class Clown - Super Burp", author: " Nancy Krulik", description: "George Brown wants nothing more than to be a normal, responsible 10-year-old kid; but his efforts tend to land him in big trouble thanks to his super burps. Those magical and pesky belches promise disaster for George Brown and a whole lot of laughs for readers.",
#           image: "images/books/Super%20Burp.jpeg", user_id: 1},
#      { title: "Wonder Movie Tie-In Edition", author: "R. J. Palacio", description: "Though he wants nothing more than to be an ordinary kid, August Pullman was born with a facial difference that his fellow 5th grade classmates can't seem to get past. Told from multiple viewpoints, these perspectives converge in a portrait of one community’s struggle with empathy, compassion, and acceptance.",
#           image: "images/books/Wonder%20Movie.jpeg", user_id: 1},
#      { title: "A Reaper at the Gates", author: "Sabaa Tahir", description: "In the third installment in the series, Helene Aquilla is desperate to protect her sister’s life in the Empire, but Laia of Serra knows the fate of the world lies in stopping the Nightbringer. And in the land between the living and the dead, Elias Veturius has given up his freedom to serve as Soul Catcher — despite the cost.",
#           image: "images/books/A%20Reaper%20at%20the%20Gates.jpeg", user_id: 3},
#      { title: "Looking for Alaska", author: "John Green", description: "Miles Halter is fascinated by famous last words — and tired of his safe life at home. He leaves for boarding school to seek what the dying poet François Rabelais called “The Great Perhaps.” Much awaits Miles at Culver Creek, including Alaska Young, who will pull Miles into her labyrinth and catapult him into the Great Perhaps.",
#           image: "images/books/Looking%20for%20Alaska.jpeg", user_id: 3},
#      { title: "Starsight", author: "Brandon Sanders", description: "In this sequel to Skyward, readers get more of aspiring pilot Spensa, who has her hands full with her infamous father's fall from grace, the introduction of an alien race, and the not insignificant task of saving humankind. Unexpected and thrilling, Starsight promises another high-flying plot helmed by a fearl...",
#           image: "images/books/Starsight.jpeg", user_id: 3},
#      { title: "Where's Spot", author: "Eric Hill", description: "The bestselling puppy is better than ever. This board book edition has a brand new, more vibrant cover. Where's Spot? Is he in the piano? Is he under the stairs? Your little one will love looking for Spot!",
#           image: "images/books/Where's%20Spot.jpeg", user_id: 2},
#      { title: "Where Is Peter Rabbit?", author: "Beatrix Potter", description: "Where is Peter Rabbit hiding? With easy-to-lift flaps, rhyming text, and charming illustrations, this story filled with characters from the world of Beatrix Potter is fun to share with little ones and is the perfect introduction to Peter Rabbit for very young readers.",
#           image: "images/books/Where%20Is%20Peter%20Rabbit.jpeg", user_id: 2},
#      { title: "Unbroken", author: "Laura Hillenbrand", description: "In this lavishly illustrated young adult edition of her award-winning bestseller, Laura Hillenbrand tells the story of a former Olympian’s courage, cunning, and fortitude following his plane crash in enemy territory. This adaptation introduces a new generation to one of history’s most thrilling survival epics.",
#           image: "images/books/Unbroken.jpeg", user_id: 3},
#      { title: "Llama Llama Hide & Seek", author: "Anna Dewdney", description: "Llama Llama can't find his Fuzzy Llama anywhere. Where could he be? Children will love following along and lifting the flaps as LLama looks for his beloved Fuzzy. This casebound book includes flaps on every spread and a mirror at the end in a story that kids will want to read over and over again!",
#           image: "images/books/Llama%20Llama%20Hide%20&%20Seek.jpeg", user_id: 2}
#  ])
