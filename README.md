# JS-Mobile-Store

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Add mobile data is working properly - 1 mark
 ✅ Add mobile data is working properly in local storage-2 - 2 mark
 ✅ Show mobile data is working properly on DOM - 1 marks
 ✅ remove mobile data is working properly on local storage - 1 marks
 ✅ remove mobile data is working properly on DOM - 2 mark
 ✅ High to Low sort mobiles by price  is working properly on DOM - 1 mark
 ✅ Low to High sort mobiles by price  is working properly on DOM - 1 mark
```

## Folder structure

 - index.html
 - store.html
 - src
   - `scripts`
     - index.js
     - store.js
 - cypress (overlook the files inside this folder)
 - README.md
 - package.json

### You haven't taught cypress to run the testcases locally , you can see the passed/ failed test cases and test errors on CP itself.

## Description

 Create a virtual mobile store system where a user can add products on one page, maintain the data in local storage and and see list of products on a different page. The user should also be able to delete any product, and sort on the basis of price from the list

 - index.html

    - A navbar needs to be present at the top to navigate among index page and store page
    - index link should have href as index.html and id = home
    - store link should have href store.html and id = store
    - Create a form and it should have an id `mobile_form` 
     - it should have the following input fields and corresponding ids
       -  name - `mobile_name` , type should text
       - brand - `mobile_brand` , type should be text
       - price - `mobile_price` type should be a number
       - image - `mobile_image` type should be text
    - input for button should have type as `submit` (make sure you are using event.preventDefault() to prevent the default behaviour of the form)
    - Also, the input tags values should become null as soon as form is submitted. (reset the form)
    - Take the form data and store the data in local storage as array of items with key `mobile_data`
    - follow the below schema to store the data in local storage
      ```
      {
       name
       brand
       price
       image
      }
      ```
    ### This is how the Home page looks like
    <img width="1728" alt="Screenshot 2022-10-08 at 10 34 15 AM" src="https://user-images.githubusercontent.com/39851506/194689923-9da6f258-7cb6-4c43-8c00-42d5e8a9e11e.png">

 - store.html

    - This page should show all the products present from the local storage.
    - The products should appended to the div with id = `mobile_list`
    - Each product itself should have a container div with class = `mobile` 
    - Each mobile div should have the following information
     - image
     - brand
     - name
     - price
     - a button with `classname = remove` and Remove as button text
    - The user should be able to remove products. (use index of the product added to identify which product needs to be deleted)
    - There are two buttons given
     - Sort Price Low to High with id `sort_lth`
     - Sort Price High to Low with id `sort_htl`

    - The user should be able to sort the data displayed on DOM by clicking on `Sort Price Low to High` , and `Sort Price High to Low` buttons respectively

    ### This is how the Store page looks like

    <img width="1726" alt="Screenshot 2022-10-08 at 10 35 33 AM" src="https://user-images.githubusercontent.com/39851506/194689932-a4317863-4688-4887-81fe-2c00e923a7ff.png">

  **Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- store.html
- You can find JS code under src/scripts folder in a filename store.js & index.js
- you can find the testcases under cypress/e2e folder

**Note:- Do not use any other names for the methods other than mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
