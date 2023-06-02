# msakilang: building a programming language

## Getting Started

Make sure you have the testing framework [jest](https://jestjs.io/docs/getting-started)

```zsh
npm install --save-dev jest
```

## Inspirations

- Peter Norvig's [lispy](https://norvig.com/lispy.html) - a lisp written in python
- Eloquent javascript Chapter 12 - [Egg programming language](https://eloquentjavascript.net/12_language.html)
- Jamie Kyle's [Super tiny compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

## 1. Stages of a compiler

1. **Parsing**: take source code and turn it to a representation of that code
1. **Trasnformation**: take source code ans turn it to whatever the compiler wants it to do
1. **Generation**: take transformation and turn it into a new string of code

### a) Parsing

1. **Lexical analysis**: take a string of code and turn it into tokens
   ![lexical tokenization](./images/lexing-tokens.png)
1. Syntactic analysis
1. Psychoanalysis

> how might a lexer work

1. Accept an input string of code.
1. Create a variable for tracking our position, like a cursor.
1. Make an array of tokens.
1. Write a while loop that iterates through the source code input.
1. Check each token. See if it matches one of your types.
1. Add it to the array of tokens.

## resources

You can follow along [here](http://static.frontendmasters.com/resources/2019-05-31-build-your-own-programming-language/programming-language.pdf)
