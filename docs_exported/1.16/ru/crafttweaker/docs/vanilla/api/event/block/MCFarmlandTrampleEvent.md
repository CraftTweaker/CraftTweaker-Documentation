# MCFarmlandTrampleEvent



The event is cancelable.

If the event is canceled, the farmland won't turn to dirt

The event does not have a result.



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCFarmlandTrampleEvent;
```


## Extending MCBlockEvent

MCFarmlandTrampleEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCFarmlandTrampleEvent

## Methods

### getEntity

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCFarmlandTrampleEvent.getEntity() as MCEntity
myMCFarmlandTrampleEvent.getEntity();
```

### getFallDistance

Return Type: float

```zenscript
MCFarmlandTrampleEvent.getFallDistance() as float
myMCFarmlandTrampleEvent.getFallDistance();
```


## Свойства

| Название     | Тип                                      | Имеет Getter | Имеет Setter |
| ------------ | ---------------------------------------- | ------------ | ------------ |
| entity       | [MCEntity](/vanilla/api/entity/MCEntity) | true         | false        |
| fallDistance | float                                    | true         | false        |

