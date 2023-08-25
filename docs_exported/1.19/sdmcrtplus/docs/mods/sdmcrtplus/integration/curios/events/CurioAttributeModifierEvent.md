# CurioAttributeModifierEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.curios.events.CurioAttributeModifierEvent;
```


## Extending Event

CurioAttributeModifierEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in CurioAttributeModifierEvent

## Methods

:::group{name=getItemStack}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// CurioAttributeModifierEvent.getItemStack() as ItemStack

myCurioAttributeModifierEvent.getItemStack();
```

:::

:::group{name=getSlotContext}

Return Type: [SlotContext](/mods/sdmcrtplus/integration/curios/SlotContext)

```zenscript
// CurioAttributeModifierEvent.getSlotContext() as SlotContext

myCurioAttributeModifierEvent.getSlotContext();
```

:::

:::group{name=getUuid}

Return Type: string

```zenscript
// CurioAttributeModifierEvent.getUuid() as string

myCurioAttributeModifierEvent.getUuid();
```

:::


## Properties

|  Name   |                              Type                              | Has Getter | Has Setter |
|---------|----------------------------------------------------------------|------------|------------|
| context | [SlotContext](/mods/sdmcrtplus/integration/curios/SlotContext) | true       | false      |
| item    | [ItemStack](/vanilla/api/item/ItemStack)                       | true       | false      |
| uuid    | string                                                         | true       | false      |

