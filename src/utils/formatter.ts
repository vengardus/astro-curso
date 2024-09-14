export class Formatter {

    static formatDate(value: Date): string {
       const date = new Date(value);

       return new Intl.DateTimeFormat('es-ES', {
           day: 'numeric',
           month: 'long',
           year: 'numeric',
         }).format(date);
     }
}
  