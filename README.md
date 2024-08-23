Investigación:
         Investiga qué son los pipes en Angular y cuál es su propósito principal.

    Define qué son los pipes y para qué se utilizan en Angular.
    Identifica los tipos de pipes que existen en Angular: (como DatePipe, CurrencyPipe, DecimalPipe, etc.), , y .

Revisa la documentación oficial de Angular sobre pipes. 
Examina ejemplos de código donde se utilicen diferentes tipos de pipes y analiza cómo afectan la presentación de datos en plantillas de Angular.
Escribe un resumen de tu investigación, asegurándote de incluir:

    Definición de pipes.
    Ejemplos de pipes integrados.
    Proceso para crear un pipe personalizado.
    Descripción de cuándo y por qué se usaría un pipe asíncrono.

Desarrollo:

    Implementación de pipes integrados: Crea un pequeño componente Angular que muestre una lista de productos con precios, descripciones y fechas de lanzamiento. Utiliza al menos tres pipes integrados para formatear la fecha, el precio y capitalizar la descripción.
    Creación de un pipe personalizado: Desarrolla un pipe personalizado llamado MomentPipe que maneje diversas operaciones de manipulación y formateo de fechas utilizando la librería moment.js. El pipe deberá soportar las siguientes operaciones:

Formatear una fecha: {{'2023-07-31' | Moment:'Format': 'DD/MM/YYYY'}} // Resultado: "31/07/2023"
Obtener el día de la semana: {{'2023-07-31' | Moment:'Format': 'dddd'}} // Resultado: "domingo"
Restar días a una fecha: {{'2023-07-31' | Moment:'Subtract': 7}} // Resultado: "2023-07-24"
Sumar horas a una fecha:{{'2023-07-31 12:00:00' | Moment:'Add': 3}} // Resultado: "2023-07-31 15:00:00"
Diferencia entre dos fechas en días: {{'2023-07-25' | Moment:'Diff': 'days': 3: '2023-07-31'}} // Resultado: "6"
Verificar si una fecha está antes de otra: {{'2023-07-25' | Moment:'Before':'2023-07-31'}} // Resultado: "true"
Verificar si una fecha está después de otra: {{'2023-07-25' | Moment:'After': '2023-07-31'}} // Resultado: "false"
Este pipe debe manejar todas estas operaciones en un solo archivo y ser flexible para diferentes formatos y cálculos según los ejemplos proporcionados.
Entrega:

    Adjunta el documento donde recopilaste la información
    Adjunta el proyecto donde hiciste las pruebas
    Adjunta 1 captura de pantalla de cada desarrollo