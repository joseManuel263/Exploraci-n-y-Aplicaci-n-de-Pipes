// product-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      nombre: 'Pizza Suprema',
      descripccion: 'Pizza con ingredientes frescos, pepperoni, champiñones y pimientos',
      precio: 899.00,
      releaseDate: new Date('2024-01-10')
    },
    {
      nombre: 'Hamburguesa Deluxe',
      descripccion: 'Hamburguesa con queso cheddar, bacon, cebolla caramelizada y lechuga',
      precio: 650.00,
      releaseDate: new Date('2024-02-05')
    },
    {
      nombre: 'Ensalada Mediterránea',
      descripccion: 'Ensalada fresca con tomate, pepino, aceitunas, feta y aderezo de oliva',
      precio: 450.00,
      releaseDate: new Date('2024-03-15')
    },
    {
      nombre: 'Sushi Roll Especial',
      descripccion: 'Sushi roll con salmón fresco, aguacate y queso crema',
      precio: 1200.00,
      releaseDate: new Date('2024-04-20')
    },
    {
      nombre: 'Tacos al Pastor',
      descripccion: 'Tacos con carne de cerdo marinada, piña y salsa verde',
      precio: 350.00,
      releaseDate: new Date('2024-05-10')
    },
    {
      nombre: 'Paella Valenciana',
      descripccion: 'Paella con mariscos, pollo, conejo y verduras frescas',
      precio: 2200.00,
      releaseDate: new Date('2024-06-25')
    },
    {
      nombre: 'Pastel de Chocolate',
      descripccion: 'Pastel de chocolate con glaseado de ganache y decoración de frutas',
      precio: 750.00,
      releaseDate: new Date('2024-07-15')
    },
    {
      nombre: 'Croissant de Almendra',
      descripccion: 'Croissant relleno de crema de almendra y espolvoreado con azúcar glas',
      precio: 220.00,
      releaseDate: new Date('2024-08-01')
    },
    {
      nombre: 'Smoothie Tropical',
      descripccion: 'Smoothie de mango, piña y plátano con un toque de coco',
      precio: 300.00,
      releaseDate: new Date('2024-09-10')
    },
    {
      nombre: 'Spaghetti Carbonara',
      descripccion: 'Espaguetis en salsa cremosa de huevo, queso parmesano y panceta',
      precio: 850.00,
      releaseDate: new Date('2024-10-20')
    }
  ];
  

  testDate = '2023-07-31';
  testDateTime = '2023-07-31 12:00:00';
}