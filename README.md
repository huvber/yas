# YAS (Yet Another Slider)

__Yas__ is another - very simple, _dependecies-free_ - slider that allow you to create a easy
**responsive** slider.

## Install
just copy `yas.min.js` and `yas.min.css` in your project and add it to your page

```
  <!DOCTYPE html>
  <html>
    <head>
      ...
      <link href="<your css folder>/yas.min.css" rel="stylesheet" />
    </head>
    <body>
      ...
      <script src="<your js folder>/yas.min.js" type="text/javascript"></script>
    </body>
  </html>
```

## How to use it
After included the js and css library inside your page just call the main function
in a script snippet:

```
  <script type="text/javascript">
    yas('<css html selector>')
  </script>
```

the selector has to indicate an `<ul>..</ul>` element with a list of slides.
For example:

```
<!DOCTYPE html>
<html>
  <head>
    ...
    <link href="<your css folder>/yas.min.css" rel="stylesheet" />
  </head>
  <body>
    <ul id="my-slider">
      <li>Element 1</li>
      <li>Element 2</li>
      ...
    </ul>
    <script src="<your js folder>/yas.min.js" type="text/javascript"></script>
    <script type="text/javascript">
      yas('#my-slider')
    </script>
  </body>
</html>
```

## Customize
You can customize the style of the slider by override some of these css classes:
- `yas-control-left` is the previous button
- `yas-control-right` is the next button

for the others elements you can just give more classes to the `ul` and `li` elements as you wish

## Future
This is a possible future roadmap
- [ ] make it possible to use with __bower__, __grunt__ and __npm__
- [ ] allow to choose custom animations
- [ ] create a ReactJS version

## Collaboration

Thanks @ileniazappavigna for the style support
