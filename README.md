# Extendable Promise

Extendable ES6 Promise Implementation.  This is simply a workaround to allow for subclassing a promise until it is
actually supported. You can track whether or not that is yet done
[here](https://kangax.github.io/compat-table/es6/#Promise_is_subclassable).

This is particularly useful for creating promise language chains like this one:

```javascript
new NameCallingPromise()
  .with.name("George Washington")
  .and.greeting("G'day");
```

## Example

```javascript
import ExtendablePromise from 'extendable-promise';

class ExamplePromise extends ExtendablePromise {

  constructor() {
    super((resolve, reject) => {
      setTimeout(() => {
        this.done = true;
        resolve();
      }, 5)
    });

    this.done = false;
  }
}

let promise = new ExamplePromise();
console.log('Promise is Not Yet Done, Right? ' + (promise.done == false));

promise.then(() => {
   console.log('Promise is now Done, Right? ' + (promise.done == true));
 });
```

## Runnable Promise

This also supports a runnable promise which allows for the execution of the promise to occur as a function of the
sub-class instead of as an argument passed to the constructor. Here is an example:

```javascript
import { RunnablePromise } from 'extendable-promise';

class RunnableBuilderPromise extends RunnablePromise {

  name(name) {
    this._name = name;
    return this;
  }

  _run(resolve, reject) {
    resolve(this._name);
  }
}

new RunnableBuilderPromise()
   .name('George Washington')
   .then((name) => { console.log(`Name: ${name}`) } );
```


## Installation

```bash
$ npm install --save-dev extendable-promise
```

## Submitting Issues

Please file a github issue for any problems or feature requests.

## Contributing

See [Contributing](CONTRIBUTING.md)

## License

[Licensed under MIT](LICENSE)
