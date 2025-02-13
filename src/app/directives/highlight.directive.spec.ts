import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p appHighlight [highlightColor]="colorName">Test</p>`,
  standalone: true,
  imports: [HighlightDirective]

})
class TestHostComponent {
  colorName = 'blue';
}

describe('HighlightDirective', () => {
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
    expect(component).toBeTruthy();
  });

  it('should create background based on directive param', () => {
    const expectedColor = 'red'
    component.colorName = expectedColor;

    fixture.detectChanges();

    const elementDirective = fixture.debugElement.query(By.css('p')).nativeElement as HTMLElement;
    expect(elementDirective.style.backgroundColor).toBe(expectedColor);
  })
});
