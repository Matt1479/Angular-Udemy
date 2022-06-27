# Angular Notes (Udemy)

<br>

<nav>

## Navigation <span id="nav"></span>

### <a href="#top01">**Section-01**</a>

### <a href="#top02">**Section-02**</a>

### <a href="#top03">**Section-03**</a>

### <a href="#top04">**Section-04**</a>

### <a href="#top05">**Section-05**</a>

### <a href="#top06">**Section-06**</a>

### <a href="#top07">**Section-07**</a>

</nav>

<br><br>

<hr>

<br><br>

## **Section 01: Getting Started** <a href="#nav">&#8593;</a> <span id="top01"></span>

<br><br>

1. <a href="#a0100">What is Angular?</a>
2. <a href="#a0101">Project Setup and First App</a>
3. <a href="#a0102">The Course Structure</a>
4. <a href="#a0103">A Basic Project Setup using Bootstrap for Styling</a>

<br><br>

### **What is Angular?** <span id="a0100"></span><a href="#top01">&#8593;</a>

<br>

Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications (SPAs).

<br><br>

### **Project Setup and First App** <span id="a0101"></span><a href="#top01">&#8593;</a>

<br>

Angular CLI <a href="https://github.com/angular/angular-cli">Documentation</a>

<br>

Angular Dependencies - dependencies are things like the Angular framework itself, but also some other libraries that framework uses.

<br>

- Install NodeJS: https://nodejs.org/en/
- Install Angular CLI:
  - `npm install -g @angular/cli@latest`

<br>

In the app.module.ts you specify which "pieces" belong to our app. Import FormsModule:

```ts
import { FormsModule } from "@angular/forms";

// ...

imports: [BrowserModule, FormsModule];
```

<br><br>

<hr>

<br><br>

## **Section 02: The basics** <a href="#nav">&#8593;</a> <span id="top02"></span>

<br><br>

1. <a href="#a0200">How an Angular App gets Loaded and Started</a>
2. <a href="#a0201">Components are Important!</a>
3. <a href="#a0202">Creating a New Component</a>
4. <a href="#a0203">Understanding the Role of AppModule and Component Declaration</a>
5. <a href="#a0204">Creating Components with the CLI & Nesting Components</a>
6. <a href="#a0205">Working with Component Templates</a>
7. <a href="#a0206">Working with Component Styles</a>
8. <a href="#a0207">Fully Understanding the Component Selector</a>
9. <a href="#a0208">What is Databinding?</a>
10. <a href="#a0209">String Interpolation</a>
11. <a href="#a0210">Property Binding</a>
12. <a href="#a0211">Property Binding vs String Interpolation</a>
13. <a href="#a0212">Event Binding</a>
14. <a href="#a0213">Passing and Using Data with Event Binding</a>
15. <a href="#a0214">Two-Way-Databinding</a>
16. <a href="#a0215">Combining all Forms of Databinding</a>
17. <a href="#a0216">Understanding Directives</a>
18. <a href="#a0217">Using ngIf to Output Data Conditionally & Enhancing ngIf with an Else Condition</a>
19. <a href="#a0218">Styling Elements Dynamically with ngStyle & Applying CSS Classes Dynamically with ngClass</a>
20. <a href="#a0219">Outputting Lists with ngFor</a>
21. <a href="#a0220">Getting the Index when using ngFor</a>

<br><br>

### **How an Angular App gets Loaded and Started** <span id="a0200"></span><a href="#top02">&#8593;</a>

<br>

`Index.html` file contains `script` files which are being executed, which starts the Angular app.

<br>

In the `app.module.ts` file, in the `bootstrap` array you specify the bootstrapping (root) component.

<br><br>

### **The Course Structure** <span id="a0102"></span><a href="#top01">&#8593;</a>

- Getting Started
- The Basics
- Components & Data binding
- Directives
- Services & Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- Http
- Authentication
- Optimizations & NgModules
- Deployment of an App
- Animations & Testing

<br><br>

### **A Basic Project Setup using Bootstrap for Styling** <span id="a0103"></span><a href="#top01">&#8593;</a>

<br>

install Bootstrap: `npm install --save bootstrap@3`

<br>

add Bootstrap css styles (`angular.json`):

```json
{
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ]
}
```

<br><br>

### **Components are Important!** <span id="a0201"></span><a href="#top02">&#8593;</a>

<br>

Keep in mind that Angular is a JS framework, which changes the DOM at runtime.

<br>

Components are a key feature in Angular. You build your whole application by composing it from a couple of components.

<br>

We start with the app.component - the root component which holds our entire application in the end. This root component will be the component where we later nest or add our other components to the template (html file).

<br><br>

### **Creating a New Component** <span id="a0202"></span><a href="#top02">&#8593;</a>

<br>

Component is simply a TypeScript class, so then Angular is able to instantiate it to create objects based on the blueprint we set up.

<br>

Create a new Component:

- Create a new directory in app directory
- in the server directory (or any other), create class component:
  - `server.component.ts`

```ts
import { Component } from "@angular/core";

@Component({
  // selector - html selector ( <app-server></app-server> )
  selector: "app-server",
  // template url - component's html file
  templateUrl: "./server.component.html",
})
export class ServerComponent {}
```

<br><br>

### **Understanding the Role of AppModule and Component Declaration** <span id="a0203"></span><a href="#top02">&#8593;</a>

<br>

Now to use our new component, we need to add something in the `app.module.ts`.

- Angular uses components to build web pages and uses `modules` to basically bundle different pieces, for example components of your app into package list
- Angular Module is a bundle of funcionality of our app, and it basically gives Angular the information which features does my app have and use.
- Angular Module file (`app.module.ts`) is decorated by a `@NgModule` decorator which is imported from `'@angular/core'`
  - When you create a new component, you have to register it in app.module.ts, in the `@NgModule`.
    - In Angular Module we have 4 properties:
      - `declarations`: (here you register new components, besides declaring, you also have to `import` a component)
      - `imports`: (allows us to add other modules to this module)
      - `providers`: (services)
      - `bootstrap`: (declare the bootstrapping component (root component))

<br>

Add custom component to app.component.html template: `<app-server></app-server>`

<br><br>

### **Creating Components with the CLI & Nesting Components** <span id="a0204"></span><a href="#top02">&#8593;</a>

<br>

Creating a new component which is nested into another component:

- `ng generate component servers`
- or `ng g c servers`
  - it will generate 4 files:
    - component class file
    - component template file
    - component styling (CSS/SCSS/SASS etc.) file
    - component testing file (`.spec.ts`)
- make sure the new component has been added to `app.module.ts` in the declarations array.
- you can nest components into each other, e.g. `servers` component having the `server` component (selector) inside of its template.
- you can replicate components by simply using them multiple times (using their selectors).

<br><br>

### **Working with Component Templates** <span id="a0205"></span><a href="#top02">&#8593;</a>

<br>

Instead of using external template (html file), you can also use inline template - you define html code in the TypeScript code (as a value of `template` property).

<br>

You use it like this:

```ts
@Component({
  selector: 'app-servers',
  // template prop instead of templateUrl
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css'],
})
```

<br>

It is okay to use this approach when you have not so much code in your template, but if you have more than let's say 3 lines of code, using an external template file is easier to follow/understand. You just should know that it is possible.

<br><br>

### **Working with Component Styles** <span id="a0206"></span><a href="#top02">&#8593;</a>

<br>

- To define styling for a component, go to (any component, here root component) the app.`component.ts`
- Here you can point to external stylesheets:
  - `styleUrls: ['./app.component.css', './another.css']`,
- You can also use inline styling - in the class file - app.`component.ts`:

```ts
styles: [`
    h3 {
      color: dodgerBlue;
    }
  `],
```

It's good to use if you have a small component with little styling. Otherwise use external css file.

<br><br>

### **Fully Understanding the Component Selector** <span id="a0207"></span><a href="#top02">&#8593;</a>

<br>

- The `selector`'s value has to be unique
- The `selector` works like the CSS selector, and therefore you're not limited to selecting by element

<br>

#### Select by attribute:

<br>

```ts
// servers.component.ts
// changing it into an attribute, not a tag:
selector: "[app-servers]";
```

```html
<!-- servers.component.html -->
<!-- instead of <app-servers></app-servers> -->
<div app-servers></div>
```

<br>

#### Select by class:

<br>

```ts
// servers.component.ts
selector: ".app-servers";
```

```html
<!-- servers.component.html -->
<div class="app-servers"></div>
```

- Selecting by `id` or `pseudo-selectors` (e.g. `:hover`) won't work.

<br><br>

```
Business Logic - In computer software, business logic or domain logic is the part of the program that encodes the real-world business rules that determine how data can be created, stored, and changed.
```

<br><br>

### **What is Databinding?** <span id="a0208"></span><a href="#top02">&#8593;</a>

<br>

Databinding = Communication

<br>

Databinding is communication between your TypeScript code of your component (business logic) and the template (what the uses sees).

<br>

There are different ways of communication, for example:

#### **Output Data (Typescript Code -> Template (HTML))**

We want to **Output Data** from our TypeScript code to the HTML code (template),
we then can use:

- **String Interpolation** ( `{{ data }}` )
- **Property Binding** ( `[property]="data"` )

<br>

#### **React to (User) Events**

- **Event Binding** ( `(event)="expression"` )
  - e.g. a `(click)` event

<br>

#### **Combination of Both**

- **Two-Way-Binding** ( `[(ngModel)]="data"` )
  - we are able to react to events and output something at the same time

<br><br>

### **String Interpolation** <span id="a0209"></span><a href="#top02">&#8593;</a>

<br>

**String Interpolation** ( `{{ data }}` ) must return a string OR something that can be converted into a string

<br>

```html
<p>{{ "Server" }} with ID {{ serverId }} is {{ getServerStatus() }}</p>
```

<br><br>

### **Property Binding** <span id="a0210"></span><a href="#top02">&#8593;</a>

<br>

```html
<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>
```

```ts
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
```

Besides pointing to HTML element properties, you can also bind to other properties, for example of `directives` and your own `components`.

<br><br>

### **Property Binding vs String Interpolation** <span id="a0211"></span><a href="#top02">&#8593;</a>

<br>

You can output the current value of `allowNewServer` - a boolean:

```html
<p>{{ allowNewServer }}</p>
```

You could also bind the property of `<p>` element to `innerText` property:

```html
<p [innerText]="allowNewServer"></p>
```

<br>

So in this case we could easily replace `String Interpolation` with `Property Binding`.

<br>

When should you use which of the two?

- Use `String Interpolation` ( `{{ data }}` ) when...
  - you want to output something in your template, print some text to it
- Use `Property Binding` ( `[property]="data"` ) when...
  - you want to change some property be it of `HTML Element`, of a `Directive`, or a `Component`

**Note**: Don't mix `Property Binding` and `String Interpolation`.

<br>

Between the quotation marks of property binding, you write TypeScript code/expression, which will return the value this property expects.

<br>

The `Property Binding` expression ( `[property]="data"` ) is not a HTML attribute, but an Angular expression.

<br><br>

### **Event Binding** <span id="a0212"></span><a href="#top02">&#8593;</a>

<br>

Event Binding ( `(event)="expression"` ):

<br>

```html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
  (click)="onCreateServer()"
>
  Add Server
</button>
```

<br>

You can bind any event, for example `(keydown)="TypeScriptExpression"`, it works the same as JavaScript's `onkeydown="..."`.

<br><br>

### **Passing and Using Data with Event Binding** <span id="a0213"></span><a href="#top02">&#8593;</a>

<br>

`$event` - A reserved variable name you can use in a template when using `Event Binding`. Only inside of particular element, the `$event` will be the data emitted by that event (e.g. `(click)` event).

<br>

Passing `$event` as an argument:

```html
<input type="text" class="form-control" (input)="onUpdateServerName($event)" />
```

<br>

With `$event` passed as an argument to the event we're calling, we can capture `(input)` data, or use it anywhere between these quotation marks in the code we're executing.

<br>

`$event` - reserved variable which gives us access to event data.

<br>

```ts
onUpdateServerName(event: Event) {
  // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}
```

```html
<input type="text" class="form-control" (input)="onUpdateServerName($event)" />
<p>{{ serverName }}</p>
```

<br><br>

### **Two-Way-Databinding** <span id="a0214"></span><a href="#top02">&#8593;</a>

<br>

**Note**: FormsModule is Required for Two-Way-Binding (add it into `imports[]` array).

<br>

Two-Way-Databinding - a nice and easy way of reacting to events in both directions

<br>

Another way of getting event data - Two-Way-Databinding:

```html
<input type="text" class="form-control" [(ngModel)]="serverName" />
```

<br>

This setup will do the following:

- It will trigger on the `(input)` event and update the value of `serverName` in our component automatically
- On the other hand, it will also update the value of input element if we change `serverName` somewhere else

<br><br>

### **Combining all Forms of Databinding** <span id="a0215"></span><a href="#top02">&#8593;</a>

<br>

```html
<label>Server Name</label>
<input type="text" class="form-control" [(ngModel)]="serverName" />
<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
  (click)="onCreateServer()"
>
  Add Server
</button>
<p>{{ serverCreationStatus }}</p>
```

```ts
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
```

<br>

With that we're using all four ways of `Databinding` together with each other:

- `Event Binding` ( `(click)="onCreateServer()"` ) to listen to a click event,
- `String Interpolation` ( `<p>{{ serverCreationStatus }}</p>` ) to output the data here,
- `Property Binding` to enable the button ( `[disabled]="!allowNewServer"` ) after 2 seconds,
- and Two-Way-Binding ( `[(ngModel)]="serverName"` ) to fetch our data.

<br><br>

Assignment 2 code:

```html
<input type="text" [(ngModel)]="userName" />
<p>{{ userName }}</p>
<button [disabled]="!userName" (click)="onReset()">Reset</button>
<!-- <button [disabled]="userName === ''" (click)="userName = ''">Reset</button> -->
```

<br><br>

### **Understanding Directives** <span id="a0216"></span><a href="#top02">&#8593;</a>

<br>

Directives are Instructions in the DOM. Components are kind of such instructions in the DOM, when we place the selector of our component, at this point of time we're instructing Angular to add the content of our component template and ts code (business logic) in this place where we use the selector.

<br>

Components are directives with a template. There are also directives without a template:

<br>

An example would be the `appTurnGreen` directive: `<p appTurnGreen>Receives a green background!</p>`, which would be a custom directive we could build. We typically add directives with attribute selector, but technically the selector of the directive can be configured just like the selector of a component (e.g. tag, class, attribute).

<br>

So then Angular would find this instruction, and apply it to the element that has this selector:

```ts
@Directive({
  selector: "[appTurnGreen]",
})
export class TurnGreenDirective {
  // ...logic
}
```

<br><br><br>

### **Using ngIf to Output Data Conditionally & Enhancing ngIf with an Else Condition** <span id="a0217"></span><a href="#top02">&#8593;</a>

<br>

> #### **Using ngIf to Output Data Conditionally**

<br>

The `*ngIf` directive is displaying an element conditionally.

<br>

The `*ngIf` directive is a structural directive - it changes the structure of our DOM, it either adds an element or it doesn't add it.

<br>

The `*ngIf` directive:

```html
<p *ngIf="serverCreated">Server was created, server name is {{ serverName }}</p>
```

```ts
// ...
serverCreated = false;

// ...

onCreateServer() {
    this.serverCreated = true;
}
```

Keep in mind that between the quotation marks you could also do a method call or place a TypeScript expression, anything which returns `true` or `false`.

<br>

Note: Remember that `*ngIf` directive is either adding or removing elements conditionally in the DOM, it doesn't hide them or something, the element is just not there.

<br><br>

> #### **Enhancing ngIf with an Else Condition**

<br>

```html
<p *ngIf="serverCreated; else noServer">
  Server was created, server name is {{ serverName }}
</p>
<ng-template #noServer>
  <p>No server was created!</p>
</ng-template>
```

`<ng-template>` is a component/directive shipped with Angular which you can use to mark places in the DOM.

<br>

`#noServer` - a local reference, a "marker" - with which you mark a certain spot in the template which we want to show conditionally

<br>

`*ngIf="serverCreated; else noServer"` - a `*ngIf` directive with else statement.

<br><br><br>

### **Styling Elements Dynamically with ngStyle & Applying CSS Classes Dynamically with ngClass** <span id="a0218"></span><a href="#top02">&#8593;</a>

<br><br>

> #### **Styling Elements Dynamically with ngStyle**

<br>

A different kind of directives - the `attribute directives`. Attribute directives don't add or remove elements, they only change the element they were placed on.

<br>

Here we are using `attribute directives` with `property binding`:

<br>

```html
<p [ngStyle]="{}">{{ data }}</p>
```

Note: The square brackets are not part of the directive name, the directive name is just `ngStyle`. The square brackets indicate that we want to bind to some property on this directive and this property name happens to also be `ngStyle`.

<br>

The `ngStyle` property expects to get a JavaScript Object, and here you can find the key/value pairs of the `style`. The `style` key is the name of a `style` and the value is the value of a `style` (e.g. `{ 'background-color': 'white' }`)

<br>

There are two notations:

- `'string-dashed-key': 'value'`:

```html
<p [ngStyle]="{ 'background-color': 'red' }">{{ data }}</p>
```

- `camelCasedKey: 'value'`:

```html
<p [ngStyle]="{ backgroundColor: 'red' }">{{ data }}</p>
```

<br>

You could also call a method in the place of `value`:

```html
<p [ngStyle]="{ backgroundColor: getColor() }">{{ data }}</p>
```

```ts
getColor() {
  return this.serverStatus === 'online' ? 'green' : 'red';
}
```

<br>

Note: Remember that between the quotation marks you can write TypeScript code/expression (e.g. `[ngStyle]="{ backgroundColor: x > 5 ? 'blue' : 'white' }"`)

<br><br>

> #### **Applying CSS Classes Dynamically with ngClass**

<br>

`ngClass` directive allows us to dynamically add or remove `CSS classes`

<br>

In this case the `directive` also accepts a JavaScript Object, and we also have `key`/`value` pairs. Here the key is the `CSS class` name and the `value` is the conditions determining whether this class should be attached or not.

<br>

As with `ngStyle`, there are two ways of notation: a `'dashed-string'` or a `camelCased` key with `'string'` value.

<br>

```html
<p
  [ngStyle]="{ backgroundColor: getColor() }"
  [ngClass]="{ online: serverStatus === 'online' }"
>
  {{ "Server" }} with ID {{ serverId }} is {{ getServerStatus() }}
</p>
```

<br><br>

### **Outputting Lists with ngFor** <span id="a0219"></span><a href="#top02">&#8593;</a>

<br>

`*ngFor` is a structural directive (changing the DOM itself)

<br>

```ts
// ...
// Create an Array of servers
servers = ['TestServer', 'TestServer 2'];

// ...

onCreateServer() {
  this.serverCreated = true;
  // push a new server on event call (click)
  this.servers.push(this.serverName);
}
// ...
```

<br>

```html
<app-server *ngFor="let server of servers"></app-server>
```

The syntax: a temporary variable (`let variableName`), then `of` `property` - property we defined in the TypeScript file.

<br>

This will now loop through all the elements of this array and assign individual value to this dynamic (`server`) variable. Just like JavaScript for..of loop.

<br><br>

#### Assignment-3 Code:

```html
<div>
  <!--<button class="btn btn-primary" (click)="showSecret = !showSecret">Display Details</button>-->
  <button (click)="toggle()">Display Details</button>
  <p *ngIf="showSecret">Secret Password = thunderStorm</p>
  <div
    *ngFor="let logItem of log"
    [ngStyle]="{ backgroundColor: logItem >= 5 ? 'blue' : 'transparent' }"
    [ngClass]="{ whiteColor: logItem >= 5 }"
  >
    {{ logItem }}
  </div>
</div>
```

```ts
export class DisplayComponent implements OnInit {
  showSecret: boolean = false;

  log: Array<number> = [];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showSecret = !this.showSecret;

    this.log.push(this.log.length + 1);
  }
}
```

<br><br>

### **Getting the Index when using ngFor** <span id="a0220"></span><a href="#top02">&#8593;</a>

<br>

To get the index inside of `ngFor` directive, create a new variable after let..of: `let variableName = index`, e.g.:

```html
<div *ngFor="let logItem of log; let i = index">{{ logItem }}</div>
```

<br>

More code:

```html
<div>
  <button (click)="toggle()">Display Details</button>
  <p *ngIf="showSecret">Secret Password = thunderStorm</p>
  <div
    *ngFor="let logItem of log; let i = index"
    [ngStyle]="{ backgroundColor: i >= 4 ? 'blue' : 'transparent' }"
    [ngClass]="{ whiteColor: i >= 4 }"
  >
    {{ logItem }}
  </div>
</div>
```

<br>

```ts
// ternary operator:
condition ? ifCondition : elseCondition;
```

<br><br>

<hr>

<br><br>

## **Section 03: The Course Project - The Basics** <a href="#nav">&#8593;</a> <span id="top03"></span>

<br><br>

1. <a href="#a0300">Planning the App</a>
2. <a href="#a0301">Setting up the Application</a>
3. <a href="#a0302">Next steps</a>

<br><br>

### **Planning the App** <span id="a0300"></span><a href="#top03">&#8593;</a>

<br>

The first step in creating an Angular application is to lay out the structure of this app and plan which components you're probably going to need (which can be changed later), how to nest them, which models you're going to need (`interfaces`).

- Structure:
  - Components
  - Nesting
  - Models (`interfaces`)

<br><br>

### **Setting up the Application** <span id="a0301"></span><a href="#top03">&#8593;</a>

<br>

`ng new appName --no-strict`

<br>

`npm install bootstrap@3` (or a newer version)

<br>

Add bootstrap to `angular.json`, in the build {styles[]}:

```json
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
    "styles": [
      "./node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
    ]
  }
}
```

<br><br>

### **Next steps** <span id="a0302"></span><a href="#top03">&#8593;</a>

<br><br>

#### **Creating the Components**

<br>

Generate components without testing files:

<br>

`ng generate component --skip-tests=true component-name`

<br>

`ng generate component --skip-tests=true parent-component/child-component`

<br><br>

#### **Creating a "Recipe Model**

<br>

A Model is simply a TypeScript file with a class inside of it - a blueprint describing how an object should look.

<br>

Create a recipe model: `recipe.model.ts`:

```ts
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
```

```ts
export class RecipeListComponent implements OnInit {
  // ...
  recipes: Recipe[] = [];
  // ...
}
```

<br><br>

#### **Adding Content to the Recipes Components**

<br>

Using a Class:

```ts
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
```

```ts
  recipes: RecipeTest[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];
```

<br>

Using an Interface:

```ts
export interface RecipeTest {
  name: string;
  description: string;
  imagePath: string;
}
```

```ts
  recipes: Array<RecipeTest> = [
    {
      name: 'A Test Recipe',
      description: 'This is a test description',
      imagePath:
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    },
  ];
```

<br><br>

#### **Creating an "Ingredient" Model**

<br>

```ts
// the "normal" way
export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

// the shorter way:
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
```

<br><br>

<hr>

<br><br>

## **Section 04: Debugging** <a href="#nav">&#8593;</a> <span id="top04"></span>

<br><br>

1. <a href="#a0400">Understanding Angular Error Messages</a>
2. <a href="#a0401">Debugging Code in Browser Using Sourcemaps</a>

<br><br>

### **Understanding Angular Error Messages** <span id="a0400"></span><a href="#top04">&#8593;</a>

<br>

Don't panic, look at the message, read which file it points to, read the exact message.

<br><br>

### **Debugging Code in Browser Using Sourcemaps** <span id="a0401"></span><a href="#top04">&#8593;</a>

<br>

Debugging Code at runtime: go to Sources, there you'll see bundles, click on the `main.bundle.js`, then click on a line you want to debug.

<br>

JavaScript supports sourcemaps. Sourcemaps are a little addition the CLI kind of adds to our bundles which allow the browser to translate JS code to TS, or just simply map the JS code to our TS files.

<br>

Then after you're redirected to a TS file, you can for example click an element to be redirected again to the code that does something with an element.

<br>

But scanning the whole `main.bundle.js` gets harder as the project grows, instead you can directly access your TypeScript files:

- Sources: webpack/./src/app/TS-Files

<br><br>

<hr>

<br><br>

## **Section 05: Components & Databinding Deep Dive** <a href="#nav">&#8593;</a> <span id="top05"></span>

<br><br>

1. <a href="#a0500">Property & Event Binding Overview</a>
2. <a href="#a0501">Binding to Custom Properties</a>
3. <a href="#a0502">Assigning an Alias to Custom Properties</a>
4. <a href="#a0503">Binding to Custom Events</a>
5. <a href="#a0504">Assigning an Alias to Custom Events</a>
6. <a href="#a0505">Custom Property and Event Binding Summary</a>
7. <a href="#a0506">Understanding View Encapsulation</a>
8. <a href="#a0507">Using Local References in Templates</a>
9. <a href="#a0508">@ViewChild() in Angular 8+</a>
10. <a href="#a0509">Getting Access to the Template & DOM with @ViewChild</a>
11. <a href="#a0510">Projecting Content into Components with ng-content</a>
12. <a href="#a0511">Understanding the Component Lifecycle</a>
13. <a href="#a0512">Seeing Lifecycle Hooks in Action</a>
14. <a href="#a0513">Lifecycle Hooks and Template Access</a>
15. <a href="#a0514">Getting Access to ng-content with @ContentChild</a>
16. <a href="#a0515">Summary</a>

<br><br>

### **Property & Event Binding Overview** <span id="a0500"></span><a href="#top05">&#8593;</a>

<br>

E.g. we used `[disabled]="expression"` to send data to an element.

<br>

Property & Event Binding:

- HTML Elements
  - Native Properties & Events
- Directives
  - Custom Properties & Events
- Components
  - Custom Properties & Events

<br><br>

### **Binding to Custom Properties** <span id="a0501"></span><a href="#top05">&#8593;</a>

<br>

```html
<!-- the contents of component that uses this element (e.g. parent component) -->
<app-some-component
  *ngFor="let item of items"
  [element]="item"
></app-some-component>
<!-- [element]="item" -->
<!-- element - property name from another component -->
<!-- item - the element we store for each iteration -->
```

For now we can't access the `[element]`, since by default all properties of components are only accessible inside this components, not from outside.

<br>

To allow other components to be able to bind (use) to the `[element]` property, you need add something to that `[element]` property, which is a decorator.

<br>

#### Binding to Custom Properties - Sharing data between components

Which simply means you 'expose' data from a component that's sharing that data, so that other components will be able to use it.

<br>

Add `@Input()` before a property/data you want to share between components:

```ts
import { Input } from "@angular/core";

// ...

export class dataSharingComponent {
  // exposing data from a component using @Input() decorator:
  @Input() property!: someType;
}
```

<br><br>

### **Assigning an Alias to Custom Properties** <span id="a0502"></span><a href="#top05">&#8593;</a>

<br>

Assigning an Alias for the property (an argument for the @Input decorator). You can use that alias only OUTSIDE of the component that is exposing the data.

```ts
// export class SomeComponent ...
@Input('prop') property: type;
// prop - custom property name (alias)
```

```html
<app-some-component
  *ngFor="let item of items"
  [prop]="item"
></app-some-component>
```

<br><br>

### **Binding to Custom Events** <span id="a0503"></span><a href="#top05">&#8593;</a>

<br>

Sharing data through events.

<br>

Now the other way around - we want to 'inform' the parent component that something changed within the child component. E.g. a new server was created.

<br>

Create methods that receive data after an event occurred within the child component:

- Parent Component

```ts
export class ParentComponent {
  objArr: Array<any> = [];

  // onObjectAdded - after an event occurred within a child component
  onObjectAdded(eventData: { objName: string; objContent: string }) {
    this.objArr.push({
      objName: eventData.objName,
      objContent: eventData.objContent,
    });
  }
}
```

Binding a custom event to a component:

```html
<app-child (objectCreated)="onObjectAdded($event)"></app-child>
```

- Child Component (event data sharing component)

<br>

`EventEmitter` - object in Angular Framework which allows you to emit your own events.

<br>

```ts
import { EventEmitter, Output } from "@angular/core";

// ...

export class childComponent {
  // creating a custom event object with EventEmitter:
  // Add Output() decorator to make this event 'listenable' from the outside
  // We're passing the (objectCreated) event out of this component
  @Output() objectCreated = new EventEmitter<{
    objName: string;
    objContent: string;
  }>();
  newObjName = "";
  newObjContent = "";

  // ...

  onAddObject() {
    // emitting a new event of type objectCreated
    this.objectCreated.emit({
      objName: this.newObjName,
      objContent: this.newObjContent,
    });
  }
}
```

<br>

With that we're emitting our own event, we're passing the data, and making it listenable from the outside.

<br><br>

### **Assigning an Alias to Custom Events** <span id="a0504"></span><a href="#top05">&#8593;</a>

<br>

```ts
export class childComponent {
  // adding an alias to a custom event
  // now you can listen to this custom event by its alias OUTSIDE of this component
  @Output("objCreated") objectCreated = new EventEmitter<{
    objName: string;
    objContent: string;
  }>();
}
```

Listen to a custom event by its alias in another component:

```html
<app-child (objCreated)="onObjectAdded($event)"></app-child->
<!-- now it's "objCreated" instead of "objectCreated" -->
```

<br><br>

### **Custom Property and Event Binding Summary** <span id="a0505"></span><a href="#top05">&#8593;</a>

<br>

Component communication:

- `@Input()` gives you the ability to make your properties bindable from outside
  - e.g. the (parent) component is using the (child) component's data
- `@Output()` gives you the ability to listen to your own events which you create with `new EventEmitter`
  - e.g. the (parent) component is using the (child) component's event data

<br><br>

### **Understanding View Encapsulation** <span id="a0506"></span><a href="#top05">&#8593;</a>

<br>

#### View Encapsulation - ShadowDom

View Encapsulation - Angular forced behaviour: A component's styles are only applied to this component (to its elements).

<br><br>

#### More on View Encapsulation

<br>

You can overwrite Angular's CSS behaviour by adding encapsulation property:

```ts
@Component({
  // ...
  encapsulation: ViewEncapsulation.None, // Emulated, ShadowDom
  // Emulated(default) - ShadowDom in older browsers
  // ...
})
```

This will overwrite `ShadowDom` and apply (this component's) styling globally.

<br>

```ts
@Component({
  encapsulation: ViewEncapsulation.Emulated, // default
  encapsulation: ViewEncapsulation.None,
  encapsulation: ViewEncapsulation.ShadowDom,
})
```

<br><br>

### **Using Local References in Templates** <span id="a0507"></span><a href="#top05">&#8593;</a>

<br>

Getting the current Input (value) data (e.g. during an event) using `local reference`:

```html
<!-- <input type="text" class="form-control" [(ngModel)]="objName" /> -->
<input type="text" class="form-control" #inputReference />

<!-- passing local reference (data) to a method during a click event -->
<button class="btn btn-primary" (click)="onAddObject(inputReference)">
  Add Object
</button>
```

`Local reference` is a reference to an element which holds all its properties. You can use `local references` everywhere in your template, only there.

<br>

You can access the data like this:

```ts
onAddObject(inputRef: HTMLInputElement) {
  this.objectCreated.emit({
    objName: inputRef.value,
    objContent: inputRef.value,
  })
}
```

or directly in the template:

```html
{{ serverNameInput.value }}
```

<br><br>

### **@ViewChild() in Angular 8+** <span id="a0508"></span><a href="#top05">&#8593;</a>

<br>

In **Angular 8+**, the `@ViewChild()` syntax which you'll see in the next lecture needs to be changed slightly:

Instead of:

```ts
@ViewChild('serverContentInput') serverContentInput: ElementRef;
```

use

```ts
@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
```

The same change (add `{ static: true } `as a second argument) needs to be applied to ALL usages of `@ViewChild()` (and also `@ContentChild()` which you'll learn about later) IF you plan on accessing the selected element inside of `ngOnInit()`.

If you DON'T access the selected element in `ngOnInit` (but anywhere else in your component), set `static: false` instead!

If you're using **Angular 9+**, you only need to add `{ static: true }` (if needed) but not `{ static: false }`.

<br><br>

### **Getting Access to the Template & DOM with @ViewChild** <span id="a0509"></span><a href="#top05">&#8593;</a>

<br>

There is another way of getting access to `local reference` or any element directly from TypeScript code.

<br>

Getting access (to DOM element) data with `@ViewChild()` decorator.

<br>

First assign a `local reference`:

```html
<input type="text" class="form-control" #inputRef />
```

```ts
@ViewChild('inputRef') inputContent!: ElementRef;
// of type ElementRef, you need to import it from @angular/core

onAddObject(inputRef: HTMLInputElement) {
  this.objectCreated.emit({
    objName: inputRef.value,
    // accessing the value of an element
    objContent: this.inputContent.nativeElement.value,
  })
}
```

<br>

`@Viewchild()` decorator accepts two arguments:

1: Element Selector (string) or component type, e.g. @Viewchild(AppComponent)

2: `{ static: true }` IF you plan on accessing the element inside of ngOnInit(), otherwise use `{ static: false }` (which is default, so you don't have to set it).

<br>

With this we passed data using `local reference` passed to methods OR `local references` fetched through `Viewchild()`, without using two-way-binding.

<br>

**Note**: it is not a good practice to set the DOM's element value, e.g. `this.inputContent.nativeElement.value = 'something';`.

You shouldn't access DOM elements like this, Angular has better ways of doing that.

<br><br>

### **Projecting Content into Components with ng-content** <span id="a0510"></span><a href="#top05">&#8593;</a>

<br>

Another way to pass data around - using ng-content.

<br>

Normally if you place content between opening-and-closing tags of your component, Angular will ignore that. You can change it with `ng-content` directive:

<br>

Child Component:

```html
<div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <!-- ng-content instead of <p>...</p> -->
    <ng-content></ng-content>
  </div>
</div>
```

Parent Component:

```html
<!-- ... -->
<div>
  <app-child-component *ngFor="let item of items" [ele]="item">
    <!-- the content that was formerly inside of the ChildComponent -->
    <p>
      <strong *ngIf="item.type === 'server'" style="color: red"
        >{{ serverElement.content }}</strong
      >
      <em *ngIf="item.type === 'blueprint'">{{ serverElement.content }}</em>
    </p>
    <!-- / -->
  </app-child-component>
</div>
```

<br>

What happens is we add the content using ng-content hook, the content between opening and closing tags of app-child-component will be projected into ChildComponent's template (in the place where you added the ng-content directive).

<br><br>

#### Sharing data through components - summary:

<br>

> Binding to custom properties - @Input() decorating a property

> Binding to custom events - @Output() + EventEmitter (creating custom events)

> Local reference:

- local reference passed through method call
- local reference + @ViewChild

> ng-content directive

<br><br>

### **Understanding the Component Lifecycle** <span id="a0511"></span><a href="#top05">&#8593;</a>

<br>

If a new component is instantiated (created), Angular goes through a couple of different phases in this creation process, and will give us the possibility to hook into these phases and execute some code. We can hook into this phases by implementing some methods Angular will call if they are present.

<br>

#### Lifecycle of a component - lifecycle hooks

|                                                                                                                                                      |                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ngOnChanges                                                                                                                                          | called on component creation, but also after a bound input (`@Input()`) property changes (properties decorated by @Input(), primitives only) |
| ngOnChanges would be good to use if you want to react to any changes and then do something with the old values, store it before it gets dumped, etc. |                                                                                                                                              |
| ngOnInit                                                                                                                                             | Called once the component is initialized, it runs after the `constructor()`                                                                  |
| ngDoCheck                                                                                                                                            | Called during every change detection run (e.g. during an event, value change, etc.)                                                          |
| ngAfterContentInit                                                                                                                                   | Called after content (ng-content) has been projected into a view                                                                             |
| ngAfterContentChecked                                                                                                                                | Called every time the projected content has been checked (finished projecting all content)                                                   |
| ngAfterViewInit                                                                                                                                      | Called after the component's view (and child views) has been initialized                                                                     |
| ngAfterViewChecked                                                                                                                                   | Called every time the view (and child views) has been checked                                                                                |
| ngOnDestroy                                                                                                                                          | Called once the component is about to be destroyed                                                                                           |

<br><br>

### **Seeing Lifecycle Hooks in Action** <span id="a0512"></span><a href="#top05">&#8593;</a>

<br>

ngOnChanges is the only lifecycle hook that accepts arguments:

```ts
ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges called!');
  console.log(changes);
}
```

<br><br>

### **Lifecycle Hooks and Template Access** <span id="a0513"></span><a href="#top05">&#8593;</a>

<br>

ngAfterViewInit gives you access to template (DOM) elements, you can then access them and use their values and so on. You can't access template (DOM) elements before ngAfterViewInit, (e.g within ngOnInit) because those hasn't been rendered yet.

<br><br>

For **@ContentChild()**, the same adjustments as for <a href="#a0508">**@ViewChild()**</a> apply.

<br><br>

### **Getting Access to ng-content with @ContentChild** <span id="a0514"></span><a href="#top05">&#8593;</a>

<br>

Getting access to content with ngAfterContentInit (using @ContentChild() and local reference) which is stored in another component, then passed on via ng-content.

```html
<p #paragraphElement>{{ object.name }}</p>
```

```ts
@ContentChild('paragraphElement', { static: true }) paragraph!: ElementRef;

// ...

ngAfterContentInit() {
  console.log(this.paragraph.nativeElement.textContent);
}
```

<br><br>

### **Summary (not only Section-05)** <span id="a0515"></span><a href="#top05">&#8593;</a>

<br>

#### **Databinding**

<br>

#### **Output Data (Typescript Code -> Template (HTML))**

- **String Interpolation** ( `{{ data }}` )
- **Property Binding** ( `[property]="data"` )

<br>

#### **React to (User) Events**

- **Event Binding** ( `(event)="expression"` )

<br>

#### **Combination of Both**

- **Two-Way-Binding** ( `[(ngModel)]="data"` )
  - we are able to react to events and output something at the same time

<br><br>

#### **Built-in Directives**

- **ngIf, ngIf (w/else)** (structural)
- **ngFor, ngFor (w/index)** (structural)
- **ngClass & ngStyle**

<br>

#### **Local reference - add # (hash) to mark/access an element**

<br>

#### **Databinding - custom**

- **@Input()** - make your properties bindable/accessible from outside
- **@Output()** - make your custom events listenable from the outside, (create (and listen to) your custom events with new EventEmitter)

<br>

#### **View Encapsulation & ShadowDom**

```ts
@Component({
  encapsulation: ViewEncapsulation.Emulated, // default
  encapsulation: ViewEncapsulation.None,
  encapsulation: ViewEncapsulation.ShadowDom,
})
```

<br>

#### **<a href="#a0509">Getting access (to DOM element) template data with `@ViewChild()` decorator and local reference**

<br>

#### **<a href="#a0514">Getting Access to ng-content with @ContentChild decorator and local reference</a>**

<br>

#### **<a href="#a0511">Lifecycle Hooks - tapping into component lifecycle</a>**

<br><br>

<hr>

<br><br>

## **Section 06: Course Project - Components & Databinding** <a href="#nav">&#8593;</a> <span id="top06"></span>

<br><br>

1. <a href="#a0600">Adding Navigation with Event Binding and ngIf</a>
2. <a href="#a0601">Passing Recipe Data with Property Binding</a>
3. <a href="#a0602">Allowing the User to Add Ingredients to the Shopping List</a>

<br><br>

### **Adding Navigation with Event Binding and ngIf** <span id="a0600"></span><a href="#top06">&#8593;</a>

<br>

Passing custom arguments to a event:

```html
<ul class="nav navbar-nav">
  <li><a href="#" (click)="onSelect('recipe')">Recipes</a></li>
  <li><a href="#" (click)="onSelect('shopping-list')">Shopping List</a></li>
</ul>
```

You could even pass `$event` as a second argument i.e. `(click)="onSelect('recipe', $event)"`.

<br><br>

### **Passing Data with Event and Property Binding (Combined)** <span id="a0601"></span><a href="#top06">&#8593;</a>

**Note**: You can't listen to "nested" events, meaning you can't listen to an even of a child of a child.

<br><br>

### **Allowing the User to Add Ingredients to the Shopping List** <span id="a0602"></span><a href="#top06">&#8593;</a>

<br>

2 ways to get data from the template to TypeScript code:

- #1: **local reference** on input element, then **passed as an argument** during a `(click)` event, then logged:

#1:

```html
<input type="text" id="name" class="form-control" #nameInput />

<button class="btn btn-success" type="button" (click)="onAddItem(nameInput)">
  Add
</button>
```

```ts
onAddItem(nameInp: HTMLInputElement) {
  console.log(this.nameInp.value);
}
```

<br>

- #2: **local reference** on input element, then local reference selected in ts code with **@ViewChild()** decorator ( `@ViewChild('localRef') name: ElementRef;` ), then logged during `(click)` event:

#2:

```html
<input type="text" id="name" class="form-control" #nameInput />

<button class="btn btn-success" type="button" (click)="onAddItem()">Add</button>
```

```ts
@ViewChild('nameInput', { static: false }) name: ElementRef;

onAddItem() {
  console.log(this.name.nativeElement.value);
}
```

<br><br>

<hr>

<br><br>

## **Section 07: Directives Deep Dive** <a href="#nav">&#8593;</a> <span id="top07"></span>

<br><br>

1. <a href="#a0700">Introduction</a>
2. <a href="#a0701">ngFor and ngIf Recap</a>
3. <a href="#a0702">ngClass and ngStyle Recap</a>
4. <a href="#a0703">Creating a Basic Attribute Directive</a>
5. <a href="#a0704">Using the Renderer to build a Better Attribute Directive</a>
6. <a href="#a0705">Using HostListener to Listen to Host Events</a>
7. <a href="#a0706">Using HostBinding to Bind to Host Properties</a>
8. <a href="#a0707">Binding to Directive Properties</a>
9. <a href="#a0708">What Happens behind the Scenes on Structural Directives</a>
10. <a href="#a0709">Building a Structural Directive</a>
11. <a href="#a0710">Understanding ngSwitch</a>

<br><br>

### **Introduction** <span id="a0700"></span><a href="#top07">&#8593;</a>

<br>

Attribute vs Structural

- Attribute Directives are called like this because they're set on elements just like attributes (does not change the DOM)

  - looks like a normal HTML Attribute (possibly with databinding or event binding)
  - only affect/change the element they are added to

- Structural Directives basically do the same, but they also change the structure of the DOM around this element (e.g. \*ngIf on paragraph can either remove of add this element).
  - look like a normal HTML Attribute, but have a leading asterisk (\*)
  - Affect a whole area in the DOM (elements get added or removed).

<br><br>

### **ngFor and ngIf Recap** <span id="a0701"></span><a href="#top07">&#8593;</a>

<br>

**Note**: You can't stack/use two structural directives on one element.

<br><br>

### **ngClass and ngStyle Recap** <span id="a0702"></span><a href="#top07">&#8593;</a>

<br>

```html
<div
  [ngClass]="{ class: conditions(applyOrNot) }"
  [ngStyle]="{ styleName: styleValue(conditionsStyleAOrStyleB) }"
></div>
```

<br><br>

### **Creating a Basic Attribute Directive** <span id="a0703"></span><a href="#top07">&#8593;</a>

<br>

```ts
import { Directive, ElementRef, OnInit } from "@angular/core";

// Directive() decorator needs at least one argument - selector
@Directive({
  // square brackets are NOT part of the name, it's part of the selector's style
  // meaning we can apply it without square brackets inside of a template
  // naving convention: camelCasedSelectorName
  selector: "[appCustomDirective]",
})
export class CustomDirective implements OnInit {
  // getting access to element the directive was placed o
  // injecting element's reference in constructor
  constructor(private elementReference: ElementRef) {}

  // overwriting the style of that element
  ngOnInit(): void {
    this.elementReference.nativeElement.style.backgroundColor = "green";
  }
}
```

To apply the custom directive, we have to inform Angular that this Directive exists - we have to add it to appModule in the declarations array:

```ts
// ...
import { CustomDirective } from "./path";

@NgModule({
  declarations: [CustomDirective],
  // ...
})
export class AppModule {}
```

<br>

Now let's add our custom directive to an element:

```html
<p appCustomDirective>Style me with custom directive!</p>
```

<br>

Though applying styling like that isn't a good practice, let's improve it...

<br><br>

### **Using the Renderer to build a Better Attribute Directive** <span id="a0704"></span><a href="#top07">&#8593;</a>

<br>

Create a custom directive with CLI:

```
ng g directive directiveName

or

ng g d directiveName
```

<br>

Use the `renderer` property to do actions on DOM elements, e.g. change the style:

```ts
this.renderer.setStyle(
  this.eleRef.nativeElement,
  "style-name",
  "style-value",
  flags
);
// flags - !important flag, etc.
```

<br>

Building the 'better' directive:

```ts
// ...
export class BetterHighlightDirective implements OnInit {
  // injecting element's reference in constructor & getting the renderer to change DOM elements
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "blue"
    );
  }
}
```

```html
<p appBetterHighlight>Style me with a better directive!</p>
```

<br>

It's a better way of doing it because... you simply could get error if you'd try to access DOM elements like this:

```ts
this.elementReference.nativeElement.style.backgroundColor = "green";
```

<br><br>

More about Renderer Methods <a href="https://angular.io/api/core/Renderer2#methods">here</a>

<br><br>

### **Using HostListener to Listen to Host Events** <span id="a0705"></span><a href="#top07">&#8593;</a>

<br>

Upgrading our directive to listen to Host Events:

```ts
// ...
export class BetterHighlightDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  // @HostListener('event') methodName(eventData: Event - optional, pass in those if you need event data)
  @HostListener("mouseenter") mouseover() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "blue"
    );
  }

  @HostListener("mouseleave") mouseleave() {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
```

<br><br>

### **Using HostBinding to Bind to Host Properties** <span id="a0706"></span><a href="#top07">&#8593;</a>

<br>

```ts
export class customDirective {
  // binding a style.styleName to (any DOM) element with @HostBinding()
  @HostBinding("style.styleName") propName: string = "transparent";

  // e.g.
  @HostBinding("style.backgroundColor") backgroundColor!: string;

  // @HostListener('DOMEventSelector') methodName(eventData: Event)
  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = "blue";
  }

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = "transparent";
  }
}
```

<br><br>

### **Binding to Directive Properties** <span id="a0707"></span><a href="#top07">&#8593;</a>

<br>

```html
<p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">
  Style me with a better directive!
</p>

<!-- @Input('appBetterHighlight') highlightColor: string = 'blue';
<p [appBetterHighlight]="'red'" [defaultColor]="'yellow'">
        Style me with a better directive!
</p>
-->

<!-- if you remove square brackets (no prop binding), you don't have to use single quotes
<p appBetterHighlight defaultColor="yellow" [highlightColor]="'red'">
        Style me with a better directive!
</p>
-->
```

```ts
// finished directive
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  // creating properties that are accessible from the outside,
  // so we can set the values using property binding and a custom directive
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  // adding an alias, so we can bind it like this: [appBetterHighlight]="'red'"
  // @Input('appBetterHighlight') highlightColor: string = 'blue';

  // binding a style.styleName to (any DOM) element with @HostBinding()
  @HostBinding("style.backgroundColor") backgroundColor: string =
    this.defaultColor;

  // injecting element's reference in constructor & getting the renderer to change DOM elements
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // set it initially so it won't be white at the start
    this.backgroundColor = this.defaultColor;
  }

  // @HostListener('DOMEventSelector') methodName(eventData: Event)
  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "blue"
    );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      "background-color",
      "transparent"
    );
    this.backgroundColor = this.defaultColor;
  }
}
```

<br><br>

### **What Happens behind the Scenes on Structural Directives** <span id="a0708"></span><a href="#top07">&#8593;</a>

<br>

The asterisk (`*`) means that this is a structural directive. Behind the scenes Angular will transform them (structural directives) into something else, since there's no such thing as `*` operator in Angular.

<br>

For example this *ngIf (`*ngIf="!onlyOdd"`) check could be written like this:

```html
<ng-template [ngIf]="!onlyOdd">
  <!-- content we conditionally want to render -->
  <div>
    <li
      class="list-group-item"
      *ngFor="let even of evenNumbers"
      [ngClass]="{ even: even % 2 === 0 }"
      [ngStyle]="{
        backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent'
      }"
    >
      {{ even }}
    </li>
  </div>
</ng-template>
```

<br><br>

### **Building a Structural Directive** <span id="a0709"></span><a href="#top07">&#8593;</a>

<br>

Note: You can access custom structural directives with ng-template, just like with ngIf, or just use the `*appDirectiveName`.

<br>

`UnlessDirective` - the opposite of `*ngIf`:

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  // setter of a property
  // the setter gets executed whenever the property changes
  // it changes whenever it changes outside of this directive,
  // so whenever the condition changes or some parameter of this condition
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // createEmbeddedView creates a view in this viewContainer and the view is our templateRef
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // if the condition is true, then we're removing the element from the DOM
      // so it is reversed *ngIf
      this.vcRef.clear();
    }
  }

  // specifying the place in the DOM where it should be rendered:

  // first argument - templateRef - what should we render - gives us access to the template

  // second argument - viewContainerRef - where should we render it
  // vcRef marks the place where we should render this directive in the document
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  // remember to add this directive to appModule
}
```

```html
<div *appUnless="onlyOdd">
  <li
    class="list-group-item"
    *ngFor="let even of evenNumbers"
    [ngClass]="{ even: even % 2 === 0 }"
    [ngStyle]="{ backgroundColor: even % 2 !== 0 ? 'yellow' : 'transparent' }"
  >
    {{ even }}
  </li>
</div>
```

<br><br>

### **Understanding ngSwitch** <span id="a0710"></span><a href="#top07">&#8593;</a>

<br>

ngSwitch directive - displaying different options conditionally:

```ts
value = 10;
```

<br>

```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="5">Value is 5</p>
  <p *ngSwitchCase="10">Value is 10</p>
  <p *ngSwitchCase="100">Value is 100</p>
  <p *ngSwitchDefault>Value is Default</p>
</div>
```

So in this case only paragraph with `*ngSwitchCase="10"` will be displayed. In case if it's a number other than 5, 10 or 100, it will use the `*ngSwitchDefault` fallback.

<br>

It would be good to use instead of many `*ngIf`s.

<br><br>

<hr>

<br><br>

## **Section 08: Course Project - Directives** <a href="#nav">&#8593;</a> <span id="top08"></span>

<br><br>

1. <a href="#a0800">Building and Using a Dropdown Directive</a>
2. <a href="#a0801">Closing the Dropdown From Anywhere</a>

<br><br>

### **Building and Using a Dropdown Directive** <span id="a0800"></span><a href="#top08">&#8593;</a>

<br>

Attach a class on click, and remove it on another click:

```ts
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  // bind to class property of an element, an array of classes
  // it won't be attached initially since it's false
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") toggleOpen() {
    // on click (method call) true changes to false, false to true
    // this.isOpen equals to what it's NOT
    this.isOpen = !this.isOpen;
  }
}
```

Remember to add it to appModule

<br><br>

### **Closing the Dropdown From Anywhere** <span id="a0801"></span><a href="#top08">&#8593;</a>

<br>

If you want that a dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.), replace the code of `dropdown.directive.ts` by this one (placing the listener not on the dropdown, but on the document):

<br>

```ts
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen = false;
  @HostListener("document:click", ["$event"]) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
```

<br><br>

<hr>

<br><br>

## **Section 09: Using Services & Dependency Injection** <a href="#nav">&#8593;</a> <span id="top09"></span>

<br><br>

1. <a href="#a0900">Introduction</a>
2. <a href="#a0901">Creating a Logging Service</a>
3. <a href="#a0902">Injecting the Logging Service into Components</a>
4. <a href="#a0903">Creating a Data Service</a>
5. <a href="#a0904">Understanding the Hierarchical Injector</a>
6. <a href="#a0905">How many Instances of Service Should It Be?</a>
7. <a href="#a0906">Injecting Services into Services</a>
8. <a href="#a0907">Using Services for Cross-Component Communication</a>
9. <a href="#a0908">A Different Way Of Injecting Services</a>

<br><br>

### **Introduction** <span id="a0900"></span><a href="#top09">&#8593;</a>

<br>

A service is another piece of your Angular app, another class you can add which acts as a central repository as a central business unit, something what you can store, what you can centralize your code in.

<br>

(Avoiding) Duplication of code, and data storage (providing data) are typical use cases for a service.

<br>

An example of using services would be creating a `LogService` to centralize our log data, and `UserService` to use it as a Data Storage.

<br>

<img src="./img/services.png">

<br><br>

### **Creating a Logging Service** <span id="a0901"></span><a href="#top09">&#8593;</a>

<br>

`logging.service.ts`:

```ts
export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
```

You could also create a service using CLI:

```
ng generate service serviceName
```

or

```
ng g s serviceName
```

**Note**: Do not instantiate services on your own!! (e.g. `const s = new ServiceName`), Angular has much better ways to do it.

<br><br>

### **Injecting the Logging Service into Components** <span id="a0902"></span><a href="#top09">&#8593;</a>

<br>

> #### **Hierarchical Injector**

<br>

Injecting Services - Angular's `Dependency Injector`.

<br>

Dependency is something a class of ours will depend on. For example the `NewAccountComponent` depends on that `LoggingService`, because we want to call method in that service.

<br>

The `Dependency Injector` simply injects this dependency, injects an instance of this class into our Component automatically.

<br>

All we need to do is we need to inform Angular that we require such a instance.

<br><br>

Reminder about how the TypeScript shortcut parameter/property assignment

<br>

This is the same

```ts
constructor(private loggingService: LoggingService) {  }
```

as this

```ts
private loggingService: LoggingService;

constructor(loggingService: LoggingService) {
  this.loggingService = loggingService;
}
```

<br><br>

Informing Angular that we require a Service's instance:

```ts
// bind it to a property by using TS shortcut of adding an accessor in from of the name of an argument
// to instantly create a property with the same name and bind a value to it
// the type has to be the class you want to get injected
constructor(private loggingService: LoggingService) {}
```

This simple task will inform Angular that we will need an instance of this `LoggingService`.

<br>

There's one step left - we need to provide a service. It means we need to tell Angular how to create it.

To do that we simply have to add `providers` property to `@Component({ ..., providers: [LoggingService] })`.

After that we can access (instantiate) our service: `this.loggingService.logStatusChange(accountStatus);`.

<br><br>

```ts
import { Component, EventEmitter, Output } from "@angular/core";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // #2 add it to providers - inform Angular how to create this service
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // #1 inject a service
  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    // #3 instantiate it using Angular
    this.loggingService.logStatusChange(accountStatus);
  }
}
```

<br>

Services are a great tool to DRY (Don't Repeat Yourself), especially in bigger projects.

<br><br>

### **Creating a Data Service** <span id="a0903"></span><a href="#top09">&#8593;</a>

<br>

Note: Don't forget about the difference between Reference-Types (obj, arr) and Primitives.

```ts
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status,
    });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
```

<br><br>

### **Understanding the Hierarchical Injector** <span id="a0904"></span><a href="#top09">&#8593;</a>

<br>

Angular Dependency Injector is a Hierarchical Injector.

That means that if we provide a service in some place of our app, let's say in one component.

The Angular framework knows how to create an instance of that service for this component and all its child components, and actually this component and all its child components and the child components of the child components will receive the same instance of that service.

<br>

There are other places where we can provide a service too:

- The highest possible level is the `AppModule` - **The Same Instance** of Service is available **Application-wide** - in the whole app, in all components, directives, services, etc.

- The next level would be the `AppComponent`- **The Same Instance** of Service is available for **all Components** (but **not for other services**) - all the child components of `AppComponent` will have the same instance of that service

  - this works the same for other components - if we provide a service to a child component, all the children of that child component will have the same instance
  - The instances don't propagate up, they only go down that tree of components

- The lowest level: A single component with NO child components
  - if we provide a service to that component, this component will have its own instance of that service, and this instance will be available only for this component, and **this will overwrite the same service if we were to provide the same service on a higher level**

<br>

In summary:

<img src="./img/hierarchical-injector.png">

<br><br>

### **How many Instances of Service Should It Be?** <span id="a0905"></span><a href="#top09">&#8593;</a>

<br>

Changing the default service behaviour - we want different instances for different components.

How can we do that? Simple - remove it from the providers array in the **child component**. Don't remove it from the constructor, because it tells Angular that we want that instance, the providers array basically which instance.

```ts
// remove that from child components,
// it only belongs to the parent component
providers: [AccountsService],
```

So this is the difference - a difference in Instances (parent instantiates and uses it, children only use that instance).

<br><br>

### **Injecting Services into Services** <span id="a0906"></span><a href="#top09">&#8593;</a>

<br>

Adding an Instance of a Service into the root - `appModule`

```ts
// ...
import { AccountComponent } from './account/account.component';
// ...

@NgModule({
  declarations: [AppComponent, ...],
  imports: [...],
  providers: [AccountsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

With that we're making sure that our whole application receives the same instance of that service **unless** it overwrites it.

With that we can inject a service into another service.

<br>

Let's inject a service into another service:

```ts
import { LoggingService } from "./logging.service";

export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  // #1 Inject the service
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status,
    });
    // #2 call the methods / use the service
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
```

If you inject a service into something, this something needs to have some metadata attached to it. A component has some metadata because we have `@Component()`. A directive have some metadata because we have `@Directive()`. A service doesn't have metadata, we need to attach it:

```ts
import { Injectable } from "@angular/core";

@Injectable()
export class AccountsService {
  //...
}
```

This tells Angular that now this service is injectable, or that something can be injected in there.

You add `@Injectable()` to the service where you want to inject something, so the receiving service.

<br>

You don't need it to any other Service, if you don't want to inject anything in a Service, you don't need to add `@Injectable()`, only add it if you expect to get something injected.

<br>

**Note**: In newer versions of Angular it is recommended to always add `@Injectable()`.

<br><br>

### **Using Services for Cross-Component Communication** <span id="a0907"></span><a href="#top09">&#8593;</a>

<br>

Create this custom event inside of a service:

```ts
statusUpdated = new EventEmitter<string>();
```

Emit inside of a component:

```ts
  onSetTo(status: string) {
    // ...
    this.accountsService.statusUpdated.emit(status);
  }
```

Then subscribe to that emitted event:

```ts
ngOnInit(): void {
  // subscribing to an observable is equivalent to adding an event listener
  // EventEmitter wraps an observable
  // So we're catching the new status and displaying it
  this.accountsService.statusUpdated.subscribe((status: string) =>
    alert('New Status: ' + status)
  );
}
```

Note: Later in the Observables section you will learn about another construct you can use to emit events and subscribe to it instead of using EventEmitter.

<br>

Note: Make sure to use the right amount of instances, and if you inject services into services, make sure to provide the service on `AppModule` level, and to add `@Injectable()` to the service where you want to inject that in.

<br><br>

### **A Different Way Of Injecting Services** <span id="a0908"></span><a href="#top09">&#8593;</a>

<br>

If you're using Angular 6+ (check your `package.json` to find out), you can provide application-wide services in a different way.

<br>

Instead of adding a service class to the `providers[]` array in `AppModule`, you can set the following config in `@Injectable()`:

```ts
@Injectable({
  providedIn: 'root'
})
export class MyService { ... }
```

This is exactly the same as:

```ts
export class MyService { ... }
```

and

```ts
import { MyService } from './path/to/my.service';

@NgModule({
    ...
    providers: [MyService]
})
export class AppModule { ... }
```

<br>

Using this syntax is completely optional, the traditional syntax (using `providers[]` ) will also work.

<br>

The "new syntax" does offer one advantage though: Services can be **loaded lazily** by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.

<br>
