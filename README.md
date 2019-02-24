# RT Mobile Menu
<p align="center">
<a href="https://packagist.org/packages/woocommerce/woocommerce"><img src="https://poser.pugx.org/woocommerce/woocommerce/license" alt="license"></a> 
<a href="https://packagist.org/packages/woocommerce/woocommerce"><img src="https://poser.pugx.org/woocommerce/woocommerce/v/stable" alt="Latest Stable Version"></a>
<img src="https://img.shields.io/wordpress/plugin/dt/woocommerce.svg" alt="WordPress.org downloads">
<img src="https://img.shields.io/wordpress/plugin/r/woocommerce.svg" alt="WordPress.org rating">
<a href="https://travis-ci.org/woocommerce/woocommerce"><img src="https://travis-ci.org/woocommerce/woocommerce.svg?branch=master" alt="Build Status"></a>
<a href="https://scrutinizer-ci.com/g/woocommerce/woocommerce/?branch=master"><img src="https://scrutinizer-ci.com/g/woocommerce/woocommerce/badges/quality-score.png?b=master" alt="Scrutinizer Code Quality"></a>
<a href="https://codecov.io/gh/woocommerce/woocommerce"><img src="https://codecov.io/gh/woocommerce/woocommerce/branch/master/graph/badge.svg" alt="codecov"></a>
</p>
Simple Mobile jQuery plugin which takes argument and create mobile menu. It is so much flexible to use.

## Quick start

#### Static HTML

Put the required stylesheet at the top of your markup:
```html
<link rel="stylesheet" href="dist/assets/mobilemenu.min.css" />
```
Put the script at the bottom of your markup right after jQuery:
```html
<script src="dist/mobilemenu.min.js"></script>
```

### Usage

Here is the given a menu example for your desktop menu:

```html
<nav class="navigation" id="header-menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <a href="#">Services</a>
      <ul>
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
        <li><a href="#">Service 4</a></li>
      </ul>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Faq</a></li>
  </ul>
</nav>
```

Call the [plugin](https://learn.jquery.com/plugins/) function and your mobile menu is ready.

```javascript
(function ($) {
    $("#header-menu").RtMobileMenu();
})(jQuery)
```

## Documentation


## License

The code and the documentation are released under the [MIT License](http://zenorocha.mit-license.org/).
