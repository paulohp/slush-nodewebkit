# slush-nodewebkit
![image](http://media.giphy.com/media/oQyCNNtVfQrrq/giphy.gif =64x)
#### A simple scaffolding to build a node-webkit app

##### based on [Beto Muniz projetct](https://github.com/obetomuniz/slush-nodewebkit-express-nedb). Thanks you! ♥♥♥


## Dependencies

You need install [gulp](http://gulpjs.com/) and [slush](http://slushjs.github.io/#/) previously to run this generator.

## Preparation

1) Tell nodejs that your global `node_modules` are in your home folder ( a place you have write access without sudo )

```
echo "prefix = /home/USERNAME/.npm/" >> ~/.npmrc
```

2) Update `$PATH` in your `~/.bash_profile` to reflect this new situation

```
NPM_PACKAGES="~/.npm/"
NODE_PATH="$NPM_PACKAGES/lib/node_modules:$NODE_PATH"
PATH="$NPM_PACKAGES/bin:$PATH"
unset MANPATH
MANPATH="$NPM_PACKAGES/share/man:$(manpath)"
```

## Installation

1) To install gulp globally, use:

```
$ npm install -g gulp
```

2) To install slush globally, use:

```
$ npm install -g slush
```

3) Finally, install the generator:

```
$ npm install -g slush-nodewebkit
```

## Usage

To run the generator, use:

```
$ slush nodewebkit
```

## Extra
This generator have any tasks running with gulp:

To run application in currenty platform, use:

```
$ gulp run
```

To zip application, use: (Working in Linux and OSX)

```
$ gulp zip
```

To compile application for Windows:

```
$ gulp win
```

To compile application for OSX:

```
$ gulp osx
```

To compile application for Linux:

```
$ gulp linux
```








==============================================================================
#License
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
