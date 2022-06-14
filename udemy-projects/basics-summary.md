Databinding = Communication (TS -> Template)

<br>

Output Data (Typescript Code -> Template (HTML))

- String Interpolation ( `{{ data }}` )
- Property Binding ( `[property]="data"` )

<br>

Event Binding ( `(event)="TSExpression"` )
(input)="onInputUpdate($event)", (click)="onDelete(index)"

<br>

Two-Way-Binding ( `[(ngModel)]="data"` )
we are able to react to events and output something at the same time

<br><br>

Directives

<br>

Structural Directives (changing the DOM itself):

`*ngIf="TSExpression"`

<br>

`*ngIf="TSExpression; else ..."`

<br>

> `#localReference` ("marker" in the DOM)

<br>

`*ngFor="let key of list"` (for..of)

<br>

`*ngFor="let key of list; let i = index"` (for..of w/index)

<br>

Attribute Directives (change the element, not the DOM):

- `ngStyle`:
  - property binding w/ngStyle: `[ngStyle]="{ keyName: 'value' }"`
    - key: style name
    - value: style's value OR a method call/TS Expression
- `ngClass`:
  - property binding w/ngClass: `[ngClass]="{ keyName: 'value' }"`
    - key: CSS Class
    - value: conditions (to attach class or not)

<br><br>

Ternary Operators:

```ts
let number = 5;
let result;

// if/else:
if (number >= 50) {
  result = "Greater than 50";
} else {
  result = "Less than 50";
}

// ternary operator

number >= 50 ? "Greater than 50" : "Less than 50";
result = number >= 50 ? "Greater than 50" : "Less than 50";

// ternary operator:

condition ? ifCondition : elseCondition;

result = condition ? ifCondition : elseCondition;
```
