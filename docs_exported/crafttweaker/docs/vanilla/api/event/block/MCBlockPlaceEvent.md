# MCBlockPlaceEvent



The event is cancelable.

If the event is canceled, the block will not be placed

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockPlaceEvent;
```


## Extending MCBlockEvent

MCBlockPlaceEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCBlockPlaceEvent

## Methods

:::group{name=getEntity}

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCBlockPlaceEvent.getEntity() as MCEntity
myMCBlockPlaceEvent.getEntity();
```

:::

:::group{name=getPlacedAgainst}

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockPlaceEvent.getPlacedAgainst() as MCBlockState
myMCBlockPlaceEvent.getPlacedAgainst();
```

:::

:::group{name=getPlacedBlock}

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockPlaceEvent.getPlacedBlock() as MCBlockState
myMCBlockPlaceEvent.getPlacedBlock();
```

:::

:::group{name=getReplacedBlock}

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
MCBlockPlaceEvent.getReplacedBlock() as MCBlockState
myMCBlockPlaceEvent.getReplacedBlock();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| entity | [MCEntity](/vanilla/api/entity/MCEntity) | true | false |
| placedAgainst | [MCBlockState](/vanilla/api/blocks/MCBlockState) | true | false |
| placedBlock | [MCBlockState](/vanilla/api/blocks/MCBlockState) | true | false |
| replacedBlock | [MCBlockState](/vanilla/api/blocks/MCBlockState) | true | false |

