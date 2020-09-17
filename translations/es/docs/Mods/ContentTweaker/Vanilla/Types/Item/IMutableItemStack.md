# MutableItemStack

Una pila de objetos mutables es un objeto [ItemStack](/Vanilla/Items/IItemStack/) especial que solo se puede obtener de [ICTJugadores](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
Eso significa todos los métodos de [ItemStack](/Vanilla/Items/IItemStack/)y los de [IIngredients](/Vanilla/Variable_Types/IIngredient/)!

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.MutableItemStack;`

## Métodos

### Cantidad

¡Un recuento de pilas es el número de elementos en esa pila!

| Método              | Tipo de parámetro | Descripción                                                   |
| ------------------- | ----------------- | ------------------------------------------------------------- |
| setCount(contador)  | int               | Establece el conteo de la pila en el `contador` proporcionado |
| crecimiento(cuenta) | int               | Aumenta el recuento de la pila en `número` proporcionado      |
| encogerse (contar)  | int               | Disminuye el recuento de pilas por el `número` proporcionado  |

### Daño

`daño (importe de int, jugador ICTPlayer)`

Parámetros:

- cantidad int → La cantidad de puntos de daño para dar el objeto
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) jugador → el jugador/entidad dañando el objeto