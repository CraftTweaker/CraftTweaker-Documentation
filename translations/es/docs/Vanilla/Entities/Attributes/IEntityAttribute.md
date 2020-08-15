# IEntityAttribute

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter         | Método            | Tipo de devolución |
| ----------------- | ----------------- | ------------------ |
| nombre            | getName()         | cadena             |
| valor por defecto | getDefaultValue() | doble              |
| debería vigilar   | getShouldWatch()  | boolean            |
| padre             | getParent()       | IEntityAttribute   |

## Más ZenMethods

- doble clampValue(doble Valor) → Hace algo...