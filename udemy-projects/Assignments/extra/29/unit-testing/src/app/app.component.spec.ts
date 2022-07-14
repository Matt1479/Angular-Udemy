import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // run this code before running each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // each it block is a test
  it('should create the app', () => {
    // during each tests we create component and store it in fixture
    const fixture = TestBed.createComponent(AppComponent);
    // we get our app, and we get the instance of the component
    const app = fixture.componentInstance;

    // we end our it block by using the expect method
    // it means we expect: our app toBeTruthy (we expect that it exists)
    expect(app).toBeTruthy();
  });

  // another test
  it(`should have as title 'unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // we expect app to have title property which equals 'unit-testing'
    expect(app.title).toEqual('unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // we trigger change detection manually (template gets rendered)
    fixture.detectChanges();

    // get access to our template (native element)
    const compiled = fixture.nativeElement as HTMLElement;

    // we expect h1 to contain 'unit-testing app is running!'
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'unit-testing app is running!'
    );
  });
});
