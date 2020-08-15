# IItemUpdate

La función ItemUpdateFunction puede ser añadida a un [elemento](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) para permitir que el código se ejecute cada vez que se actualiza el elemento.

## Importando el paquete

Si alguna vez sientes la necesidad de importar la clase de esta función, aquí vas:

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## Síntesis

Tenemos una función vacía que toma los siguientes parámetros (en orden)

- Una [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) que representa la pila de artículos en sí.
- Un objeto [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) que representa el mundo en el que la acción tiene lugar.
- Un objeto [de Itidad](/Vanilla/Entities/IEntity/) degradación en la medida de lo posible, para que puedas instanciar hasta [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).
- Un mensaje que representa el espacio en el que el elemento está actualmente
- Un booleano que indica si el elemento está seleccionado o no.

```zenscript
item.onItemUpdate = function(itemStack, world, owner, slot, isSelected) {
    //CODE GOES HERE!!
    retorno;
}
```