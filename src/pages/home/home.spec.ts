import {HomePage} from "./home";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


describe("Home page: ", () => {
  let component: HomePage;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    let fixture: ComponentFixture<HomePage> = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  }));
  it("Should set the myHome variable", () => {
    expect(component).toBeDefined();
  });
  it("Should set the myHome variable", () => {
    expect(component.myHome).toEqual("my Home");
    component.ngOnInit();
    expect(component.myHome).toEqual("my Page");
  });


});
