# Devblog theme for Hugo

A port of the DevBlog bootstrap theme created by xriley (https://github.com/xriley/DevBlog-Theme). Currently it only supports the same layout and features as original theme, but additional layouts will be added.

## Screenshot

![Devblog screenshot](https://github.com/2ttech/hugo-devblog-theme/raw/master/images/screenshot.png)

## Features

### Original

- Fully Responsive
- HTML5 + CSS3
- Built on Bootstrap 4
- 8 Color schemes
- 1000+ FontAwesome icons
- SCSS source files included
- Compatible with all modern browsers

### Added

- Google Analytics

## Demo

You can see it in action on [Hugo Themes site](http://themes.gohugo.io/theme/hugo-devresume-theme/). 


## Customization

### Javascript

Add a file `custom.js` to path `assets/js/custom.js` in project. This file is empty in theme, but included in compilation and can be used for any custom javascript changes.

### Theme

There are 8 themes included by default, all located in `assets/scss` and called `_theme-#.scss`. To use one of the existing themes just set parameter `theme` in `params.yaml` config file to selected theme, for instance `theme-3`.

```yaml
theme: theme-3
```

Similar to create a new theme just copy one of the theme files and add it to your projects `assets/scss` folder, make sure its called `_something.scss`. Change colors and other options and then set theme parameter to same as name of file:

```yaml
theme: something
```

## Development

When developing on the theme use the `exampleSite` for testing. Start local hosting by running following command in theme root folder.

```bash
hugo server -s exampleSite --themesDir=../.. --disableFastRender
```

## Contributing

Post bugs and contributions to the [issue tracker](//github.com/2ttech/hugo-devblog-theme/issues). 
Or make a [pull request](//github.com/2ttech/hugo-devblog-theme/pulls).

## License

This template is 100% FREE as long as you **keep the footer attribution link**. You do not have the rights to resell, sublicense or redistribute (even for free) the template on its own or as a separate attachment from any of your work.

If you’d like to **use this template without the footer attribution link**, you can buy the 
[commercial license](https://themes.3rdwavemedia.com/bootstrap-templates/popular/devblog-free-bootstrap-4-blog-template-for-developers/)

You may change the "Ported for..." line by adding the following to the end of `params.yaml` config file
    
```yaml
footer:
  copyright: "Your text"
```