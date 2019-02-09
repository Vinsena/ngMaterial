# Eagle6TestApp

Test application for the company Eagle6 for the Angular front-end position.

## Build with

* Angular 7

* AngularCLI

* Angular Material

* SCSS

* HTML5

* rxJS

## Description

* There are two pages. The first one `/main` displays the list of lists (connections).

* This lists could be edited on the second page `/entities/:id`.

* On the entities page there is search field for entities searching by title and subtitle fields.Selected items remain even they are hidden by search filter.

* There is stub service which immulates asynchronous requests to data source using rxjs. It implements interface, that's why it could be easily replaced by real service.
