import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponible'
})
export class DisponiblePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "disponible" : "pas disponible"
  }

}
