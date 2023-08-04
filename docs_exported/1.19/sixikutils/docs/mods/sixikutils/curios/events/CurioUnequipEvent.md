# CurioUnequipEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.curios.api.curios.events.CurioUnequipEvent;
```


## Extending LivingEvent

CurioUnequipEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioUnequipEvent

## Methods

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// CurioUnequipEvent.getEntity() as Entity

myCurioUnequipEvent.getEntity();
```

:::

:::group{name=getLivingEntity}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// CurioUnequipEvent.getLivingEntity() as LivingEntity

myCurioUnequipEvent.getLivingEntity();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// CurioUnequipEvent.getPlayer() as Player

myCurioUnequipEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// CurioUnequipEvent.getResult() as EventResult

myCurioUnequipEvent.getResult();
```

:::

:::group{name=getSlotIndex}

Return Type: int

```zenscript
// CurioUnequipEvent.getSlotIndex() as int

myCurioUnequipEvent.getSlotIndex();
```

:::

:::group{name=getSlotString}

Return Type: string

```zenscript
// CurioUnequipEvent.getSlotString() as string

myCurioUnequipEvent.getSlotString();
```

:::

:::group{name=getSlotWearer}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// CurioUnequipEvent.getSlotWearer() as LivingEntity

myCurioUnequipEvent.getSlotWearer();
```

:::

:::group{name=getStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// CurioUnequipEvent.getStack() as IItemStack

myCurioUnequipEvent.getStack();
```

:::


## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| entity       | [Entity](/vanilla/api/entity/Entity)             | true       | false      |
| item         | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |
| livingEntity | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |
| player       | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |
| result       | [EventResult](/forge/api/event/EventResult)      | true       | false      |
| slotIndex    | int                                              | true       | false      |
| slotString   | string                                           | true       | false      |
| slotWearer   | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |

