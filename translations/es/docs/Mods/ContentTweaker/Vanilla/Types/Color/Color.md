# Color

Si no está seguro de cómo crear el objeto int de color, puede usar el objeto Color en su lugar.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Color;`

## Métodos estáticos

Los métodos estáticos se llaman en el nombre del paquete y no en el propio objeto.  
Todos estos métodos devuelven un objeto de color.

| Método         | Tipo de parámetro |
| -------------- | ----------------- |
| de Int(color)  | int               |
| fromHex(color) | cadena            |

## Métodos no estáticos

Los métodos no estáticos no se llaman en el nombre del paquete, sino en el propio objeto.

| Método        | Tipo de devolución |
| ------------- | ------------------ |
| getIntColor() | int                |