import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';
import { By } from '@angular/platform-browser';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  //Antes de cada teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render text from param', () => {
    //Arrange / Given
    const expectedText = "Text-example";
    component.text = expectedText;

    //Act / When
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(By.css('[data-test-id="paragraph"]'))
      .nativeElement as HTMLParagraphElement;

    //Assert / Then
    expect(paragraph.textContent).toContain(expectedText);
    // expect(component).toBeTruthy();
  });
});
