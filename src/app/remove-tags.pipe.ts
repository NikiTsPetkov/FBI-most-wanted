import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTags'
})
export class RemoveTagsPipe implements PipeTransform {

  transform(content:string): string {
    return content.replace(/<[^>]*>/g, '');
  }

}
