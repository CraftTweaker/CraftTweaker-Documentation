# InitialInventory

## Descripción

Este mod añade soporte para que el jugador reciba un objeto cuando se unan a un mundo, y luego nunca más similar a cómo algunas mods dan a los jugadores libros cuando se unen a un mundo por primera vez.

## Paquete
`mods.initialinventory.InvHandler`

## Añadiendo elementos iniciales

Esto añadirá un objeto al inventario de los jugadores cuando se unan al mundo.

Los parámetros son:


Param: `key`

Tipo: `Cadena`

Descripción:

Utilizado para determinar si un elemento debe ser dado. Una clave puede ser cualquier cadena de caracteres, el punto de ella es determinar si un jugador ha recibido un conjunto de objetos antes.

Es útil para paquetes de mods que más tarde añadan más elementos de inicio, usando una clave diferente, Los jugadores que ya han empezado a jugar al paquete, todavía pueden recibir esos objetos. Un ejemplo sería:

Añade un diamante como elemento inicial con la clave "1", únete al mundo, el jugador obtendrá el diamante.

Añade una manzana como elemento inicial con la tecla "2", únete al mundo, el jugador recibirá la manzana, pero no el diamante de nuevo.

Haz un nuevo mundo, el jugador recibirá tanto una manzana como un diamante.

param: `item`

Type `IItemStack`

Descripción:

El objeto a dar al jugador cuando se une.

Parámetro: `índice`

Tipo: `int`

Descripción:

Entero opcional para definir dónde se entregará el objeto, se puede utilizar para poner un objeto en una ranura de inventario como una ranura de armadura.

Si se deja fuera, se establecerá por defecto a -1, lo que significa que se pondrá en la primera ranura disponible, o combinarlo con otros elementos que pueden estar ya en el inventario.


## Ejemplo

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, ItemStack item, Optional int index);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);
```


