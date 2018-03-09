# Job API

Want to find an engineering job in San Francisco? Use my app! It is connected to Muse's job database, so jobs are consistently updated daily. 

## How It's Made:
Tech used: HTML, CSS, jQuery 

In this application, I used a JQuery AJAX call to pull the content , job name, and job link to append to the DOM.This operation happens after the user aubmits the values 'Engineering' , '1' (for page), and 'San Francisco,CA.  

## Optimizations
I think design would be nice on this, but I purposely made it plain--similar to Indeed. I do need to only show the top ten results per page. One long page is not ideal. 

Lessons Learned:
During this app build, I learned about encodedURI. encodedURI allows you to put %20word%20 and make up for certain characters like spaces or commas that wouldn't be translated well in a URL address. 

Below is a picture of the website:

![fireshot capture 4 - blank template - file____home_resilient_documents_apijobs_jobapi html](https://user-images.githubusercontent.com/22990146/37187969-d6f2e16e-231a-11e8-9f02-7e91438dc5c9.png)
