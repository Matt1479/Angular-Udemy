# Angular Notes (Udemy)

<br>

<nav>

## Navigation <span id="nav"></span>

### <a href="#top01">**Section-01**</a>

### <a href="#top02">**Section-02**</a>

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
17. <a href="#a0216">.</a>
18. <a href="#a0217">.</a>
19. <a href="#a0218">.</a>
20. <a href="#a0219">.</a>
21. <a href="#a0220">.</a>
22. <a href="#a0221">.</a>
23. <a href="#a0222">.</a>

<br><br>

### **How an Angular App gets Loaded and Started** <span id="a0200"></span><a href="#top02">&#8593;</a>

<br>

`Index.html` file contains `script` files which are being executed, which starts the Angular app.

<br>

In the `app.module.ts` file, in the `bootstrap` array you tell Angular which components it should bootstrap.

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

Component is simply a TypeScript class, so that Angular is able to instantiate it to create objects based on the blueprint we set up.

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
      - `declarations`: (here you register new components, basides declaring, you also have to `import` a component)
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
    - component css file
    - component file for testing (`.spec.ts`)
- make sure the new component has been added to `app.module.ts` in the declarations array.
- you can nest components into each other, e.g. `servers` component having the `server` component (selector) inside of its template.
- you can replicate components by simply using them multiple times (using their selectors).

<br><br>

### **Working with Component Templates** <span id="a0205"></span><a href="#top02">&#8593;</a>

<br>

Instead of using external template (html file), you can also use inline template - you define html code in the TypeScript code.

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

- To define styling for a component, go to (any component, here root component) the app.`component.css` file
- Here you can point to external stylesheets:
  - `styleUrls: ['./servers.component.css', './another.css']`,
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

- Selecting by `id` or `pseudo-selectors` (`:hover`) won't work.

<br><br>

### **What is Databinding?** <span id="a0208"></span><a href="#top02">&#8593;</a>

<br>

Databinding = Communication

<br>

Databinding is communication between your TypeScript code of your component (business logic) and the template (what the uses sees).

<br>

There are different ways of communication, for example:

#### **Output Data (Typescript Code -> Template (HTML))**

We want to **Output Data** from our TypeScript code in the HTML code (template),
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

You can also output the current value of `allowNewServer` - a boolean:

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

With `$event` passed as an argument to the event we're calling, we can capture `(input)` data, or used anywhere between these quotation marks in the code we're executing.

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

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
```

<br>

With that we're using all four ways of `Databinding` together with each other:

- `Event Binding` ( `(click)="onCreateServer()"` ) to then listen to a click event,
- `String Interpolation` ( `<p>{{ serverCreationStatus }}</p>` ) to output the data here,
- `Property Binding` to enable the button ( `[disabled]="!allowNewServer"` ) after 2 seconds,
- and Two-Way-Binding ( `[(ngModel)]="serverName"` ) to fetch our data.

<br>

The assignment 2 code:

```html
<input type="text" [(ngModel)]="userName" />
<p>{{ userName }}</p>
<button [disabled]="!userName" (click)="onReset()">Reset</button>
<!-- <button [disabled]="userName === ''" (click)="userName = ''">Reset</button> -->
```

<br><br>
