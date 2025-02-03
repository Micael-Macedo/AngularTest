import { Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  public highlightColor = input('')

  private elementRef = inject(ElementRef)

  //Utilizado para manipular o estilo no angular
  private render = inject(Renderer2)


  ngOnInit():void {
    console.log(this.highlightColor())
    this.render.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightColor())
  }
  constructor() { }

}
