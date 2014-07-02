# Do Not Use
### This is an archive of the original Jekyll app
It contains outdated scripts and lacks Grunt.




bsd-custom-donate-jekyll
========================

A Jekyll framework for locally developing/testing/listing custom donate pages using the donate API.  When run locally, it can simulate API calls and logins so that you can test the actual functional js code as well as the look and feel process without actually donating any money or dealing with the tools.  All the relative paths are set up such that they locally emulate being a page in our actual EE/tools sites.

##Local Dev Requirements:

* Ruby, latest version of Jekyll (~v1.4.2 is current), etc.
* Something to compile SASS with (Codekit, sass watch, etc.)

##Wrapper/Site Requirements
* a jQuery version of at least 1.8.2
* Your site MUST implement the .js .no-js html class method in some fashion. Otherwise, there's no easy way to toggle the sequential js off when javascript is disabled.  If you're not using modernizr, the code is just this:

```JavaScript
    <script>(function(dc){ dc.className = dc.className.replace("no-js","js"); }(document.documentElement));</script>
```
* for IE9 and below, you'll want to make sure your site implements the placeholder polyfill in some fashion.  Input (like .text) css classes are already applied in the markup, so you shouldn't need to worry about adding them via javascript.  If you're not using our standard main.js code, upload /js/jquery.placeholder.js to the tools and use this:

```HTML
<!--[if lte IE 9]><script src="/page/-/donate/jquery.placeholder.js"></script><script>jQuery('input, textarea').placeholder();</script><![endif]-->
```

I'd also highly advise making sure the includes and uses Modernizr & in particular, the box-sizing custom detect.

##Using this repo

There are two main ways...

1. Either you can simply nab some plug-and-play custom donate form markup based on config variables and use that code in EE or the tools with the custom donate javascript and the basic css code...

2. or you can create complete wrappers/styled themes here in the jekyll tool and then compile/preview/test all the css/js on your local jekyll server until you're ready to install it on EE/the tools. I HIGHLY RECOMMEND THIS SECOND METHOD

##Setup:

1. Clone the reponsitory and cd into it, then cd into /webroot
2. run "jekyll serve --w" from the command line (--port XXXX if you want to use a different port)
3. navigate to http://localhost:4000 and you should see a list of the pages built so far

# Repo Guide

- /js - minified js libraries to use in production
- /webroot - jekyll site for testing the code, markup, and styles
-    /webroot/scss - individual site styles are in named folders, along with the core css.
-    /webroot/_posts - create a new entry by cloning the default config here and giving it a new filename based on the date
-    /webroot/page/-/donate/ - basically a local mirror of the file structure that will be in the tools. scss styles should compile to named directories here

##SASS
While there's a codekit.json config file in the /webroot/scss folder, the basic way to compile your css is
- /webroot/scss/STYLENAME/bsdcd-styles.scss - > /webroot/page/-/donate/STYLENAME/bsdcd-styles.scss
- /webroot/scss/STYLENAME/bsdcd-styles-desktop.scss - > /webroot/page/-/donate/STYLENAME/bsdcd-styles-desktop.scss

It's set up this way because you're most likely going to be hosting your custom donate styles at /page/-/donate/STYLENAME/ in the tools.

##Creating new pages in jekyll

Simply create a markdown file in _posts with the YYYY-MM-DD-unique-name format.  Copy over the default config file, then go through and customize all the options.  In the future, we'll automate this for you.  If you've created a valid config file, your jekyll server should list your page and you should see it in the _sites directory as well as in the list on http://localhost:4000

If you've not changed any of the default options, it won't have any styles of course (but all the simulated js should work!).  Pulling core styles from a client site and getting them into the test jekyll environment isn't hard (usually takes me about 10-20 minutes max: you're basically just going to be copying over the wrapper into a new layout in /webroot/_layouts/ and then making sure the paths point at absolute, rather than relative, resources). You'll then simply be creating a new custom donate styleset that works with those.  Check the "Creating new layouts" section for more.

##Implementing a new page in practice

First question: does your client have an EE install that can run on a secure domain?  i.e. https://donate.pih.org/pages/ is a real EE page (even though not all of its assets are secure)

Yes: then you can host a custom donate page on EE, as a template, maybe even using the standard wrappers (as long as you're not calling any non-secure assets in the wrapper or the main css).

No: then you probably have to host the custom form in the Simple Pages module on the tools, so that it can all run on the client's secure domain. Again, whatever wrapper you use should be https:// friendly

(Caveat: in either case, you're going to want to make sure that there is no way to access the non-secure version of the page, ideally by using a server side method to forward people to the secure domain when they request your page.)

At this point, you should have basically two steps to get things working (this will change, as we'll want to separate core stuff from client custom stuff)

1. Upload items from the /donate/ folder in /page/-/ from jekyll to a folder /donate on your client's server.
    * you actually only need these files to be present in the tools:
        - /page/-/donate/sequential-donate.js or /page/-/donate/donate-api-only.js (depending on whether or not you're using sequential donation)
        - /page/-/donate/[-your-custom-style]/bsdcd-styles.css
        - /page/-/donate/[-your-custom-style]/bsdcd-styles-desktop.css
        - /page/-/donate/Credit_Card_Icons_m.png
        - /page/-/donate/Credit_Card_Icons_m.svg
        - /page/-/donate/ajax-loader.gif
2. Put the form markup on EE or Simple Pages, inside some appropriate wrapper.  If you want jekyll to just output the inner markup, instead of any test wrapper you used locally, set the layout option to form-only and copy the source of the result.  Make sure to figure out whether you want it to simply print out the CSS links and/or login markup above the form, or whether you are going to put those elsewhere in your real, production wrapper. You can turn both off in the config (you can also turn them off to stick them elsewhere in your test layout wrapper if you have one, to more closely match production, where you'll definitely want the css loaded in the head section).
3. If your site is not responsive, just link to the desktop stylesheet and ignore the main one.  Or, leave everything in place and set the sequential/form breakpoints to like 2px or something to basically disable responsive styles

Now test!

##Things you'll WANT to test

1. Overriden styles: there's a trade-off in making bsdcd styles simpler/faster: existing client styles may override the core, breaking the plug-n-play nature of structure/look. However, there are a couple of very common culprits if things look wrong:
    * special padding and margins on ul/ol/li elements (often caused by over-specific rules).
    * .base or #framework classes in the wrapper triggering a bunch of complex tools styles (just remove those from the wrapper in most cases)
2. Do you have some means of getting the CSS in the <head>?  If not, the styles may flash on first load. A custom tools wrapper may be in order, or an includes/header.html conditinal that can call the styles as needed.
3. Does the background image work at all browser sizes above tablet?  This can take some serious playing around with the code in bsdcd-backgrounds, as it really depends on what the image is, and what part of it you want to keep in view as the page scales, all without exposing the edges of the image.

##Wrapper Tips

It's best to use a minimal wrapper (no nav, clutter) and it's also best to avoid wrappers like #framework that might just add tools styles and clutter that you don't want to have to undo.  It's also worth noting that h1-h6/p/ul/li styles used within the form markup may have to be tweaked or extended if you're using classes like .base to set font styles and sizes.

##Creating new layouts

At this point, you should basically have Drew explain this or set this up for you.  It's quick, but not yet automated or intuitive.

The basics though, involve creating...

1. a page layout template /webroot/_layouts/[layoutname].html (can be broken up into more files with jekyll includes if you understand how to use them) that pulls in...
2. any necessary headers and footer wrappers, with their external assets (like images) tweaked to point at the client's production site (but don't go crazy: this is all just so that you can quickly test the styles/layout)
3. Including the core form markup in your layout in the appropriate place (check other layouts for examples)
```
{% include default-form.html %}
```
3. a new folder [layoutname] in /webroot/scss for the project with the same sorts of files all the others
4. Compiling your SASS from /webroot/scss/[layoutname] into /webroot/page/-/donate/[layoutname]



##Latest Updates

Some things of note here:
- amounts/default_amt/skip url parameters are available to change page amounts, select an amount by default, and skip to step 2
- source/subsource is handled properly
- css is now all SASSified
- handles quick donate logins/logouts natively
- handles in-honor of fields
- handles cvv, but note that this field has to be removed when Quick Donate is active
- handles recurring checkboxes
- handles prefill of data from spud if quick donte isn't available
- credit card type auto-detection. (Currently Visa, Mastercard, Amex, Discover, Maestro)
- nomin=1 for testing extremely low dollar amounts
- works with javascript disabled (and js-only things like sequential/recurring will simply be disabled/hidden)
- sequential donate behavior is separated from the core (remove the .sequential class and you have a normal donate form)
- core styles are about haflway separated from client styles
- built with box-sizing: content-box so that it can work with older sites.  Better(i.e., simpler) border-box support in progress if you don't need to support IE7
- But... core layout should support IE7 without extra work

There's a lot more to be done to make the core more flexible and customizable, but you shouldn't need more than a couple of client-specific tweaks to get a nice looking, fully functional form.

## Todo

* allow quick donate to be turned completely off/removed from the markup and code
* better default layout for extended name fields, if the donate api can use them
* support for employer address fields, if the donate api can use them
* separate structure from functionality even more, and split off style choices like (box-sizing/button styles/step styles) into discrete modules
* make the lack of a next button on the amounts step in sequential an option rather than a mandatory feature (done already?)
* arbitrary custom fields (done already? see moma config file)
* additional stock layouts (more conventional text on the left/form on the right, layout for sidebar iframes, etc.)

### Minor things these scripts do that you might not notice at first, but are critical behavior

* If users can ever select a country different from the US, then the zip field CANNOT be type="tel"  This would bring up the numbers only keypad on mobile phones, preventing users from entering any international postal codes that include letters. We can't switch types dynamically because this breaks/throws security warnings in the IEs.
* Likewise, if users can select different countries than the US, then state_cd needs to switch from a dropdown to a text field and back again.  The main form handles this already, and the in honor section simply leaves honoree_state_cd as a text field regardless because it always allows international addresses.


