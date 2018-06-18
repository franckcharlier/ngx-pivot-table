# Ngx-pivot-table
Pivottable.JS Angular 5 Wrapper

# Install

```
npm i ngx-pivot-table
```

You have to install required software before you're able to use this library:

* Install JQuery
* Install JQuery

## Load with webpack

Add theses lignes in your .angluar-cli.son file :

```
    "styles": [
      "../node_modules/pivottable/dist/pivot.min.css",
      "../node_modules/subtotal/dist/subtotal.min.css"
    ],
    "scripts": [
      "../node_modules/pivottable/dist/pivot.min.js",
      "../node_modules/pivottable/dist/pivot.fr.min.js",
      "../node_modules/subtotal/dist/subtotal.min.js"
    ]
```


# How to use it

```
    <ngx-pivot-table [data]="mydata"></ngx-pivot-table>
```
