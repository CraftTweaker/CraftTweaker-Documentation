# Material

Un material es de lo que está hecho un objeto, por ejemplo el platino.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Material;`

## Recuperando tal objeto

Puedes recuperar un Material existente usando el [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) o crear uno completamente nuevo usando el [Constructor de Material](/Mods/ContentTweaker/Materials/Materials/Material_Builder/)

## Campos

Puedes recuperar la siguiente información de un material:

| Método               | Tipo de devolución | Descripción                                       |
| -------------------- | ------------------ | ------------------------------------------------- |
| getName()            | cadena             | Devuelve el nombre del material                   |
| getColor()           | int                | Devuelve el color del material                    |
| isHasEffect()        | boolean            | Devuelve si el material tiene el efecto brillante |
| getUnlocalizedName() | cadena             | Devuelve el nombre no localizado del Materium     |

## Registrar [Material Parts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

Puede registrar partes usando el objeto de la pieza [](/Mods/ContentTweaker/Materials/Parts/Part/) o su cadena de nombre.  
También puedes registrar una sola parte o múltiples a la vez.  
Así que tienes 4 opciones en total:

```zenscript
registerParts(String[] partNames);
registerParts(IPart[] parts);


registerPart(String partName);
registerPart(IPart part);
```

Los métodos registerPart devuelven un solo objeto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) .  
Los métodos registerParts devuelven una lista [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).