import { Directive, ElementRef, inject, input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges{
  public highlightColor = input('')

  private elementRef = inject(ElementRef)

  //Utilizado para manipular o estilo no angular
  private render = inject(Renderer2)


  ngOnChanges():void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightColor()
    )
  }
  constructor() { }

}
