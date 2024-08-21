# Angular Elements with Ngx-Dynamic-Hooks

This is a minimal example project to show how you can combine [Angular Elements](https://angular.io/guide/elements) with the [ngx-dynamic-hooks](https://github.com/angular-dynamic-hooks/ngx-dynamic-hooks) library.

Run `ng serve` and open your browser under the indicated url (usually [http://localhost:4200/](http://localhost:4200/)) to see the project in action.

For demonstration purposes, the `TestComponent` has been setup to internally use the `<ngx-dynamic-hooks>`-component in its template, which renders a single dynamic component `FishComponent`. 

We will then render the `TestComponent` twice in the browser - once as part of a normal Angular project and once as a web component registered with [Angular Elements](https://angular.io/guide/elements) to show that both work.

**Note**

The most interesting parts of the code can be found in the files `/src/main.ts` and `/src/index.html`, which registers `TestComponent` to also run as a web component via [Angular Elements](https://angular.io/guide/elements).