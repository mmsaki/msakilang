# a programming language

1. Install language, clone this repo then:
   ```zsh
   npm link
   ```
1. Run this in terminal for REPL:

   ```js
   > (add pi 1)
   4.141592653589793
   > (add pi 0)
   NaN
   > (add pi 1 (subtract 1 2))
   3.141592653589793
   >
   ```

1. Run speficic files in a `.msaki` extension

   ```js
   // example.msaki
   (add pi (subtract 3 (multiply 3 (min 1 (max 1 2 3 (modulo 1000 3))))))
   ```

   ```zsh
   msaki run examples/example.msaki
   ```

## Getting Started

Make sure you have the testing framework [jest](https://jestjs.io/docs/getting-started)

```zsh
npm install --save-dev jest
```

## Inspirations

- Peter Norvig's [lispy](https://norvig.com/lispy.html) - a lisp written in python
- Eloquent javascript Chapter 12 - [Egg programming language](https://eloquentjavascript.net/12_language.html)
- Jamie Kyle's [Super tiny compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

## Stages of a compiler

1. **Parsing**: take source code and turn it to a representation of that code
1. **Transformation**: take source code ans turn it to whatever the compiler wants it to do
1. **Generation**: take transformation and turn it into a new string of code

### a) Parsing

```zsh
npm test parse.test
```

1. **Lexical analysis**: take a string of code and turn it into tokens
   ![lexical tokenization](./images/lexing-tokens.png)

   ```zsh
   npm test tokenize.test
   ```

1. Syntactic analysis
1. Psychoanalysis

> how might a lexer work?

1. Accept an input string of code.
1. Create a variable for tracking our position, like a cursor.
1. Make an array of tokens.
1. Write a while loop that iterates through the source code input.
1. Check each token. See if it matches one of your types.
1. Add it to the array of tokens.

Example resources

1. see [AST Explorer](https://astexplorer.net/#/gist/1819fd0f4c1e3690539a1257c054016a/bc5b7c792483456d5a48ba5c668acde715b9a6ab) example with babel
1. see [estree spec](https://github.com/estree/estree#the-estree-spec)

## repl

1. **R**ead
1. **E**valuate
   ```zsh
   npm test evaluate.test
   ```
1. **P**rint
1. **L**oop

## b) transformation

1. Manipuleate AST and do your thing
1. The visitor pattern form [Design Patterns](https://www.oreilly.com/library/view/design-patterns-elements/0201633612/)

   - we do a [depth-first search]() on the tree
   - we should be able travel to all the nodes in the ast tree

   ```zsh
   npm test traverse.test
   ```

## c) Code Generation options

1. Write your own low-level CPU-instruction compiler (terrible idea?)
1. Use a compiler framework like [LLM](https://llvm.org/) like other languages e.g rust, swift, obective c etc.
1. Target the JVM (Java Virtual Machine)
1. Transpile

you can alse rely on bable's generator `import generate from '@babel/generator'`
the `generate(ast, options, code)`

you can also use the reverse from babel but we create our own

we can create a `toJavascript` transformation using the babel parser and make our ast to somthing like this

Run:

```zsh
npm test to-javascript.test
```

![babel add ast](./images/babel-parser.png)

## d) Other features: Variable declaration

## Documnentation

You can follow along [here](http://static.frontendmasters.com/resources/2019-05-31-build-your-own-programming-language/programming-language.pdf)
