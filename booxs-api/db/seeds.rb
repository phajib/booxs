# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([
     { title: "Tales of a Fourth Grade Nothing", author: "Judy Blume", body_matter: "Two is a crowd when Peter and his little brother, Fudge, are in the same room. Grown-ups think Fudge is absolutely adorable, but Peter and his pet turtle, Dribble, know the truth. From throwing temper tantrums to smearing mashed potatoes on the wall, Fudge causes mischief wherever he goes!",
      subject: "English", image: "images/books/Judy Blume - Tales of the 4th Grade.jpeg", grade_level: "3"},
     {title: "Dory Fantasmagory", author: "Abby Hanlon", body_matter: "It’s hard being the youngest sibling, especially when your brother and sister won’t play with you. Good thing Dory has an unbelievably wild imagination to keep her entertained. With its sharp-toothed robbers, bearded fairy godmothers, and a best friend who just happens to be a monster, this book is a real hoot.",
          subject: "English", image: "images/books/Dory Fantasmagory.jpeg", grade_level: "2"},
     {title: "Little Critter - All By Myself", author: "Mercer Mayer", body_matter: "Mercer Mayer’s Little Critter wants to show you all the things he can do for himself in this classic, funny, and heartwarming book. Whether he’s tying his shoes, coloring a picture, or riding his bike, both parents and children alike will relate to this beloved story. A perfect way to teach children about independence!",
          subject: "English", image: "images/books/Mercer Mayer - Critters all by myself.jpeg", grade_level: "1"},
     {title: "George Brown Class Clown - Super Burp", author: " Nancy Krulik", body_matter: "George Brown wants nothing more than to be a normal, responsible 10-year-old kid; but his efforts tend to land him in big trouble thanks to his super burps. Those magical and pesky belches promise disaster for George Brown and a whole lot of laughs for readers.",
          subject: "English", image: "images/books/George Brown Class Clown - Super Burp.jpeg", grade_level: "5"},
     {title: "Wonder Movie Tie-In Edition", author: "R. J. Palacio", body_matter: "Though he wants nothing more than to be an ordinary kid, August Pullman was born with a facial difference that his fellow 5th grade classmates can't seem to get past. Told from multiple viewpoints, these perspectives converge in a portrait of one community’s struggle with empathy, compassion, and acceptance.",
          subject: "English", image: "images/books/Wonder Movie Tie-In Edition.jpeg", grade_level: "6"},
     {title: "A Reaper at the Gates", author: "Sabaa Tahir", body_matter: "In the third installment in the series, Helene Aquilla is desperate to protect her sister’s life in the Empire, but Laia of Serra knows the fate of the world lies in stopping the Nightbringer. And in the land between the living and the dead, Elias Veturius has given up his freedom to serve as Soul Catcher — despite the cost.",
          subject: "English", image: "images/books/A Reaper at the Gates.jpeg", grade_level: "8"},
     {title: "Looking for Alaska", author: "John Green", body_matter: "Miles Halter is fascinated by famous last words — and tired of his safe life at home. He leaves for boarding school to seek what the dying poet François Rabelais called “The Great Perhaps.” Much awaits Miles at Culver Creek, including Alaska Young, who will pull Miles into her labyrinth and catapult him into the Great Perhaps.",
          subject: "English", image: "images/books/Looking for Alaska.jpeg", grade_level: "9"},
     {title: "Where's Spot", author: "Eric Hill", body_matter: "The bestselling puppy is better than ever. This board book edition has a brand new, more vibrant cover. Where's Spot? Is he in the piano? Is he under the stairs? Your little one will love looking for Spot!",
          subject: "English", image: "images/books/Where's Spot.jpeg", grade_level: "K"},
     {title: "Where Is Peter Rabbit?", author: "Beatrix Potter", body_matter: "Where is Peter Rabbit hiding? With easy-to-lift flaps, rhyming text, and charming illustrations, this story filled with characters from the world of Beatrix Potter is fun to share with little ones and is the perfect introduction to Peter Rabbit for very young readers.",
          subject: "English", image: "images/books/Where Is Peter Rabbit.jpeg", grade_level: "1"},
     {title: "Unbroken", author: "Laura Hillenbrand", body_matter: "In this lavishly illustrated young adult edition of her award-winning bestseller, Laura Hillenbrand tells the story of a former Olympian’s courage, cunning, and fortitude following his plane crash in enemy territory. This adaptation introduces a new generation to one of history’s most thrilling survival epics.",
          subject: "English", image: "images/books/Unbroken.jpeg", grade_level: "7"}
 ])
 
 User.create([
     {email: "phbflat@gmail.com"},
     {email: "test@test.com"},
     {email: "booxs@booxs.com"}
 ])