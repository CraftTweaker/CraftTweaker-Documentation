# CurioUnequipEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.events.CurioUnequipEvent;
```


## Extending LivingEvent

CurioUnequipEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioUnequipEvent

## Methods

:::group{name=getSlotContext}

Return Type: [SlotContext](/mods/sdmcrtplus/integration/curios/SlotContext)

```zenscript
// CurioUnequipEvent.getSlotContext() as SlotContext

myCurioUnequipEvent.getSlotContext();
```

:::

:::group{name=getStack}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// CurioUnequipEvent.getStack() as ItemStack

myCurioUnequipEvent.getStack();
```

:::


## Properties

|  Name   |                              Type                              | Has Getter | Has Setter |
|---------|----------------------------------------------------------------|------------|------------|
| context | [SlotContext](/mods/sdmcrtplus/integration/curios/SlotContext) | true       | false      |
| item    | [ItemStack](/vanilla/api/item/ItemStack)                       | true       | false      |

