# CurioChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.events.CurioChangeEvent;
```


## Extending LivingEvent

CurioChangeEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioChangeEvent

## Methods

:::group{name=getEntity}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// CurioChangeEvent.getEntity() as LivingEntity

myCurioChangeEvent.getEntity();
```

:::

:::group{name=getFrom}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// CurioChangeEvent.getFrom() as ItemStack

myCurioChangeEvent.getFrom();
```

:::

:::group{name=getIdentifier}

Return Type: string

```zenscript
// CurioChangeEvent.getIdentifier() as string

myCurioChangeEvent.getIdentifier();
```

:::

:::group{name=getSlotIndex}

Return Type: int

```zenscript
// CurioChangeEvent.getSlotIndex() as int

myCurioChangeEvent.getSlotIndex();
```

:::

:::group{name=getTo}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// CurioChangeEvent.getTo() as ItemStack

myCurioChangeEvent.getTo();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// CurioChangeEvent.isCancelable() as boolean

myCurioChangeEvent.isCancelable();
```

:::


## Properties

|    Name    |                       Type                       | Has Getter | Has Setter |
|------------|--------------------------------------------------|------------|------------|
| entity     | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |
| from       | [ItemStack](/vanilla/api/item/ItemStack)         | true       | false      |
| identifier | string                                           | true       | false      |
| slot       | int                                              | true       | false      |
| to         | [ItemStack](/vanilla/api/item/ItemStack)         | true       | false      |

