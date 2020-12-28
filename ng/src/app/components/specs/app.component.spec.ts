import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-backend' and version`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
     expect(app.title).toEqual('my-backend');
     expect(app.version).toEqual('0.0.3');

  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('my-backend');
  });
});


