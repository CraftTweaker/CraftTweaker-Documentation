# ItemPickupEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.ItemPickupEvent;
```


## Extending PlayerEvent

ItemPickupEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in ItemPickupEvent

## Metodi

:::group{name=getOriginalEntity}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)

```zenscript
// ItemPickupEvent.getOriginalEntity() as ItemEntity

myItemPickupEvent.getOriginalEntity();
```

:::

:::group{name=getStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemPickupEvent.getStack() as IItemStack

myItemPickupEvent.getStack();
```

:::


## Proprietà

| Nome           | Tipo                                                   | Ha Getter | Ha Setter | Descrizione             |
| -------------- | ------------------------------------------------------ | --------- | --------- | ----------------------- |
| originalEntity | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity) | sì        | no        | No Description Provided |
| stack          | [IItemStack](/vanilla/api/item/IItemStack)             | sì        | no        | No Description Provided |

