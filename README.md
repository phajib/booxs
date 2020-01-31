# booxs

---

**_Booxs_** is at the beginning stages of becoming the IMDB for books on a Single Page Application format utilizing a *Rails* backend and a *JavaScript* frontend.

---

## Motivation
To create a IMDB for books with a simple and catchy name and with a minimalistic foreground and easy browsing.

---

### Features
Current features:
- User can Login or Signup
- User can enter a New Book
- Books are displayed in more details through a modal.

Future features:
- Edit and Delete a User account.
- Edit books created by the user.
- Search for books.

---

## Setup for Booxs

#### Backend/API
_The API needs to be operational in order for the CLIENT to take into effect. Refer to the **README.md** in the **booxs-api** folder to run the API._

#### Frontend/CLIENT
1. The API should be running on the Rails development server  (```http://localhost:3000```).

2. Locate *_index.html_* (```/booxs-client/index.html```) and open it with your browser.

---

### Usage
Once you have setup Booxs and is running in your browser, begin by creating an account.

After creating an account the user can now view some of the books currently stored. Clicking on a book will bring up a description of the book.

The user can also add a book by entering Title, Author and description of the book. An image is also needed, by entering the url of an image, to complete the entry.

---

## Contributing

Bug reports and pull requests are welcome on GitHub at [Booxs](https://github.com/phajib/booxs).

---

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).