# marked-engine

[![Version](https://img.shields.io/npm/v/marked-engine.svg?label=version)](https://www.npmjs.com/package/marked-engine)
[![Build](https://img.shields.io/travis/jaredhanson/marked-engine.svg)](https://travis-ci.org/jaredhanson/marked-engine)
[![Quality](https://img.shields.io/codeclimate/github/jaredhanson/marked-engine.svg?label=quality)](https://codeclimate.com/github/jaredhanson/marked-engine)
[![Coverage](https://img.shields.io/coveralls/jaredhanson/marked-engine.svg)](https://coveralls.io/r/jaredhanson/marked-engine)
[![Dependencies](https://img.shields.io/david/jaredhanson/marked-engine.svg)](https://david-dm.org/jaredhanson/marked-engine)


[Markdown](http://daringfireball.net/projects/markdown/) rendering, powered by
[marked](https://github.com/chjj/marked).

marked-engine is an [Express](http://expressjs.com/)-compatible template engine
for rendering Markdown.

## Install

```bash
$ npm install marked-engine
```

## Usage

Register `marked-engine` as the template engine for files ending with a ".md"
extension.

```js
app.engine('md', require('marked-engine').renderFile);
```

Render a response using Markdown.

```js
res.render('hello.md');
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/marked-engine'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/marked-engine.svg' /></a>
