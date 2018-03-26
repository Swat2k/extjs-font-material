# Material icons for ExtJS

ExtJS package to use [Material Design Iconic Font](https://material.io/icons/) in a ExtJS application or workspace by Dmitry Kazarin.

Current version of Material Design Icons: 3.0.1

## Adding package to workspace or app
Download [font-material.pkg](https://github.com/Swat2k/extjs-material-icons/releases) from releases [1.0.0]

copy: .pkg file to workspace of your project

run: ```sencha package add font-material.pkg```

add 'font-material' to your app.json

```
   "requires": [
      "font-awesome",
      "font-material"
   ],
```
run: ```sencha app refresh```

## Usage

Just like using font awesome you must use the css ```x-mi``` class before the material icon class you wish to use.


#### Example 

```
iconCls: "x-mi mi-rss"
```

## Licences
* All Code for ExtJS package release under MIT

## About
This package was created to allow additional fonts to be used, just like font-awesome.