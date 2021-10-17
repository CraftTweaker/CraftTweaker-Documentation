# MCBlockPlaceEvent



The event is cancelable.

If the event is canceled, the block will not be placed

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockPlaceEvent;
```


## Extending MCBlockEvent

MCBlockPlaceEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCBlockPlaceEvent

## Methoden

:::group{name=getEntity}

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
// MCBlockPlaceEvent.getEntity() as MCEntity

myMCBlockPlaceEvent.getEntity();
```

:::

:::group{name=getPlacedAgainst}

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCBlockPlaceEvent.getPlacedAgainst() as MCBlockState

myMCBlockPlaceEvent.getPlacedAgainst();
```

:::

:::group{name=getPlacedBlock}

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCBlockPlaceEvent.getPlacedBlock() as MCBlockState

myMCBlockPlaceEvent.getPlacedBlock();
```

:::

:::group{name=getReplacedBlock}

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCBlockPlaceEvent.getReplacedBlock() as MCBlockState

myMCBlockPlaceEvent.getReplacedBlock();
```

:::


## Properties

| Name          | Type                                            | Has Getter | Has Setter | Beschreibung            |
| ------------- | ----------------------------------------------- | ---------- | ---------- | ----------------------- |
| entity        | [MCEntity](/vanilla/api/entity/MCEntity)        | true       | false      | No Description Provided |
| placedAgainst | [MCBlockState](/vanilla/api/block/MCBlockState) | true       | false      | No Description Provided |
| placedBlock   | [MCBlockState](/vanilla/api/block/MCBlockState) | true       | false      | No Description Provided |
| replacedBlock | [MCBlockState](/vanilla/api/block/MCBlockState) | true       | false      | No Description Provided |

