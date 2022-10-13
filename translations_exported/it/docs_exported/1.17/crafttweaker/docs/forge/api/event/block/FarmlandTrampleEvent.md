# FarmlandTrampleEvent



The event is cancelable.

If the event is canceled, the farmland won't turn to dirt

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.FarmlandTrampleEvent;
```


## Extending BlockEvent

FarmlandTrampleEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in FarmlandTrampleEvent

## Metodi

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// FarmlandTrampleEvent.getEntity() as Entity

myFarmlandTrampleEvent.getEntity();
```

:::

:::group{name=getFallDistance}

Return Type: float

```zenscript
// FarmlandTrampleEvent.getFallDistance() as float

myFarmlandTrampleEvent.getFallDistance();
```

:::


## Proprietà

| Nome         | Tipo                                 | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ------------------------------------ | --------- | --------- | ----------------------- |
| entity       | [Entity](/vanilla/api/entity/Entity) | sì        | no        | No Description Provided |
| fallDistance | float                                | sì        | no        | No Description Provided |

