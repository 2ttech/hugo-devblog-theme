# Devblog theme for Hugo

A port of the DevBlog bootstrap theme created by xriley (https://github.com/xriley/DevBlog-Theme).

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