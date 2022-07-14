import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    // Arrange
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    // inject the UserService
    let userService = fixture.debugElement.injector.get(UserService);

    // Act
    // detect changes - update the component state
    fixture.detectChanges();

    // Assert
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display user name if user is logged in', () => {
    // Arrange
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    app.isLoggedIn = true;

    // Act
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    // Assert
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should not display user name if user is logged in', () => {
    // Arrange
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;

    // Act
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    // Assert
    expect(compiled.querySelector('p').textContent).not.toContain(
      app.user.name
    );
  });

  it('should not fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    // 2nd arg has to match the method name you want to spy on
    // spyOn - we get informed (listen) whenever getDetails gets executed
    // when running a test we will return a value on our own
    // So it means it will eventually execute, but it will give us back our own data
    // and not what this asynchronous task would have given us
    // it will still run asynchronously though
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );

    fixture.detectChanges();

    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async () => {
    // label async to be able to call .whenStable()
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );

    fixture.detectChanges();

    // whenStable() - when all async tasks are finished, run this code
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  });

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );

    fixture.detectChanges();

    // tick() - in a fakeAsync environment, finish all tasks now
    tick();

    expect(app.data).toBe('Data');
  }));
});
