import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `<p appHighlight highlightColor="colorName">Test</p>`,
  standalone: true,
  imports: [HighlightDirective]

})
class TestHostComponent {
  colorName = 'blue';
}

fdescribe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  it('should create an instance of Host Component', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });

  it('should create background based on directive param', () => {
    const expectedColor = 'red'
    component.colorName = expectedColor;

    fixture.detectChanges();

    const elementDirective = fixture.debugElement.nativeElement.querySelector('span').nativeElement as HTMLSpanElement;
    expect(elementDirective.style.backgroundColor).toBe(expectedColor);
  })
});
