# Evento de la cerveza

Este evento se amplía por todos los eventos relacionados con el stand de cerveza, aunque no la función basada en el jugador para la extracción de elementos del stand de cerveza.

## Importar la clase
Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.IPotionBrewEvent;`

## ¿Qué se puede hacer con ellos?

| ZenGetter | Ajuste | tipo |
| --------- | ------ | ---- |
| `largo`   |        | int  |

## Métodos

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Devuelve el ItemStack contenido en la lista de elementos de la matriz especificada. Devuelve un ItemStack vacío si el índice especificado es mayor que `longitud`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Reemplaza la pila de elementos en el índice especificado con el elemento especificado. Si el índice es mayor que la longitud de la matriz de elementos, no pasará nada.
