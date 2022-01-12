# BlockPlaceEvent



The event is cancelable.

If the event is canceled, the block will not be placed

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockPlaceEvent;
```


## Extending BlockEvent

BlockPlaceEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockPlaceEvent

## Metodi

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// BlockPlaceEvent.getEntity() as Entity

myBlockPlaceEvent.getEntity();
```

:::

:::group{name=getPlacedAgainst}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockPlaceEvent.getPlacedAgainst() as BlockState

myBlockPlaceEvent.getPlacedAgainst();
```

:::

:::group{name=getPlacedBlock}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockPlaceEvent.getPlacedBlock() as BlockState

myBlockPlaceEvent.getPlacedBlock();
```

:::

:::group{name=getReplacedBlock}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockPlaceEvent.getReplacedBlock() as BlockState

myBlockPlaceEvent.getReplacedBlock();
```

:::


## Proprietà

| Nome          | Tipo                                        | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------------------------------------------- | --------- | --------- | ----------------------- |
| entity        | [Entity](/vanilla/api/entity/Entity)        | sì        | no        | No Description Provided |
| placedAgainst | [BlockState](/vanilla/api/block/BlockState) | sì        | no        | No Description Provided |
| placedBlock   | [BlockState](/vanilla/api/block/BlockState) | sì        | no        | No Description Provided |
| replacedBlock | [BlockState](/vanilla/api/block/BlockState) | sì        | no        | No Description Provided |

