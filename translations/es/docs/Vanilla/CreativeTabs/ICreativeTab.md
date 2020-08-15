# Pestaña ICreativa

Un objeto ICreativeTabObject representa una pestaña de inventario creativo.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.creativetabs.ICreativeTab;`

## Obteniendo tal objeto

Puedes recuperar una pestaña creativa de la pestaña [Creative tab Bracket Handler](/Vanilla/Brackets/Bracket_CreativeTab/).

## ZenGetters y ZenMethods sin parámetros

| ZenGetter/ZenMethod | Tipo de devolución |
| ------------------- | ------------------ |
| searchBarWidth      | int                |
| etiqueta            | cadena             |
| setNoScrollBar()    | vacío (nada)       |
| setNoTitle()        | vacío (nada)       |

## Método

#### Establecer nombre de imagen de fondo

Utiliza una cadena (por ejemplo, `"item_search.png"`).  
Devuelve vacío (nada).

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```