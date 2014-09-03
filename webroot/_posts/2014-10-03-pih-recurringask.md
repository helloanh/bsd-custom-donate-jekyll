---

##Configuration options REVIEW AND CHANGE THESE PER DONATION FORM

internal-title: PIH Recurring Ask

client: PIH

#Page Title, if used in your imported header
page-title: Give

tools-slug: please-donate
tools-recurring-slug: give-recurring-gift #leave blank for no recurring
default-source-codes: sequential-donate

##
layout: pih-minimal  #use form-only if you want jekyll to only print out the core markup
sequential: true
quick-donate: false



##top-section
header-section: true
title: Your Donation Will Save Lives
subtitle: Donate to Partners In Health
above-header-html: <h1>Make your lifesaving gift now</h1><div class="base"><p>&ldquo;The idea that some lives matter less is the root of all that&rsquo;s wrong with the world.&rdquo; - Dr. Paul Farmer</p></div>


#form customization
custom-amounts: [50, 100, 350, 1000, 1200, 3500, 7500] #an array of 7 values for the donation amount
min-donation: 5
max-donation: 100000
country-selection: true #whether to show a country selection dropdown
require-country: true #country selection must be true for this to work, of course
optional-phone: true #phone is required by default, this overrides that
require-cvv: true #this setting/field will not affect quick donate
show-cvv-help: false #help tooltip: not ready for prime-time

employer-and-occupation: false


##internationalization
default-country: US # set to either US or GB or leave blank for international. Controls starting state of state_cd labels/country dropdown
default-currency-symbol: "$"

#text sections
recurring-section-title: Recurring Contribution <small>(Optional)</small>
recurring-intro: Our patients need your help all year round. Become a recurring donor to make an automatic donation to PIH every month.
recurring-label: Please make this a monthly recurring contribution <small>(Optional)</small>

#in honor-of
in-honor-of-section: true
in-honor-of-section-title: Honor Someone with Your Contribution <small>(Optional)</small>
in-honor-of-section-intro: "If you would like to make your gift in honor or in memory of someone, please fill out the form below. To send a notification of your thoughtful gift, please enter the recipient's contact information."

#creditcards accepted
accept-visa: true
accept-mastercard: true
accept-amex: true
accept-discover: true
accept-maestro: false #shows up, but not tested
accept-pay-pal: false  #not yet working

#additional power options
id-prefix: cd_ #id used in order to reduce collision with other elements on a page
include-styles-inline: false #if true, will include the css link blocks above the form
include-login-inline: false #if true, will include the login section above the form
include-jquery: false #include a jquery, in case your wrapper hasn't called one yet. false if your wrapper already has one in the head
include-plugin-code: true #if false, you'll need to write the plugin code into your page yourself
top-node-is-outer: true #attach key handlers to outer element on bsdcd-outer-container instead of to the body element
extra-classes-on-outer-container: #just a string of extra classes to add, just in case you need to
content-after-button-html: '<div class="below-form clearfix"><hr style="margin-top:30px;"><br><div class="donate-stats clearfix"><span class="donate-stats-percent">93%</span> of your gift goes straight to those in need. Please help us.</div><br><div class="badge-section clearfix"><div class="donate-badges clearfix" style="text-align: center;"><img src="https://donate.pih.org/page/-/new_wrapper/comodo-ssl.gif" alt="" class="comodo"><img src="https://donate.pih.org/page/-/fundcampaigns/charitynav120x90.jpg" alt=""  class="navigator"></div><br><div class="badge-text">For ten consecutive years Partners In Health has received Charity Navigator&rsquo;s highest rating, an affirmation of our commitment to honesty, efficiency, and integrity.</div></div></div>'


##debug
no_minimum: false
debug: false

---