# MCFarmlandTrampleEvent



The event is cancelable.

If the event is canceled, the farmland won't turn to dirt

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCFarmlandTrampleEvent;
```


## Extending MCBlockEvent

MCFarmlandTrampleEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCFarmlandTrampleEvent

## Metodi

:::group{name=getEntity}

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
// MCFarmlandTrampleEvent.getEntity() as MCEntity

myMCFarmlandTrampleEvent.getEntity();
```

:::

:::group{name=getFallDistance}

Return Type: float

```zenscript
// MCFarmlandTrampleEvent.getFallDistance() as float

myMCFarmlandTrampleEvent.getFallDistance();
```

:::


## Proprietà

| Nome         | Tipo                                     | Ha Getter | Ha Setter | Descrizione             |
| ------------ | ---------------------------------------- | --------- | --------- | ----------------------- |
| entity       | [MCEntity](/vanilla/api/entity/MCEntity) | sì        | no        | No Description Provided |
| fallDistance | float                                    | sì        | no        | No Description Provided |

