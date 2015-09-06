# look-up-cli [![Build Status](https://travis-ci.org/lydell/look-up-cli.svg?branch=master)](https://travis-ci.org/lydell/look-up-cli)

> Find a file matching a pattern by walking up parent directories


## Install

```
$ npm install --global look-up-cli
```


## Usage

```
$ look-up --help

  Usage
    $ look-up '<pattern>'

  Options
    --cwd=<dir>  Working directory
```


## Example

```
/
└── Users
    └── lydell
        ├── unicorn.png
        └── foo
            └── bar
                ├── baz
                └── faz
```

```
$ echo $PWD
/Users/lydell/foo/bar/faz
$ look-up 'unicorn.{png,jpg}'
/Users/lydell/unicorn.png
```

Don't forget to quote your pattern so it isn't expanded by your shell.


## Related

- [find-up-cli](https://github.com/sindresorhus/find-up-cli) - Same thing
  without patterns
- [look-up](https://github.com/jonschlinkert/look-up) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com) and Simon Lydell
