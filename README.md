# grunt-svginjector [![NPM version](https://badge.fury.io/js/grunt-svginjector.svg)](http://badge.fury.io/js/grunt-svginjector)

> Inject external SVG files into HTML

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-svginjector --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svginjector');
```

## The `svginjector` task

_Run this task with the `grunt svginjector` command._

### Options

#### Container

Type: `String`
Default: `svginjector`

The ID of the element into which to inject the SVGs.

