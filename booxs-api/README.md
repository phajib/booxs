# Booxs

_This README is for the API/Backend for Booxs_


### Setup
1. Clone the repo [Booxs](https://github.com/phajib/booxs).
2. Go to ```/booxs-api``` and run ```bunlde install```.
3. ```rails db:migrate```
4. ```rails db:seed```
5. ```rails s```
6. Rails development server should now be running at ```http://localhost:3000```.
7. Go to ```/booxs-client``` and open ```index.html```

### Usage
Once the server is running, you can enter in to ```rails c``` to experiment on Booxs.

To view JSON response: (_view in you browser_)
*Books JSON*: ```http://localhost:3000/api/v1/books```
*Users JSON*: ```http://localhost:3000/api/v1/users```

---

## Contributing

Bug reports and pull requests are welcome on GitHub at [Booxs](https://github.com/phajib/booxs).

---

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
