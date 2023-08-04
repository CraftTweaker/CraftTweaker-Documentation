# CurioChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.curios.api.curios.events.CurioChangeEvent;
```


## Extending LivingEvent

CurioChangeEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioChangeEvent

## Methods

:::group{name=getFrom}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// CurioChangeEvent.getFrom() as IItemStack

myCurioChangeEvent.getFrom();
```

:::

:::group{name=getLivingEntity}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// CurioChangeEvent.getLivingEntity() as LivingEntity

myCurioChangeEvent.getLivingEntity();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// CurioChangeEvent.getPlayer() as Player

myCurioChangeEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// CurioChangeEvent.getResult() as EventResult

myCurioChangeEvent.getResult();
```

:::

:::group{name=getSlotIndex}

Return Type: int

```zenscript
// CurioChangeEvent.getSlotIndex() as int

myCurioChangeEvent.getSlotIndex();
```

:::

:::group{name=getSlotString}

Return Type: string

```zenscript
// CurioChangeEvent.getSlotString() as string

myCurioChangeEvent.getSlotString();
```

:::

:::group{name=getTo}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// CurioChangeEvent.getTo() as IItemStack

myCurioChangeEvent.getTo();
```

:::


## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| from         | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |
| livingEntity | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |
| player       | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |
| result       | [EventResult](/forge/api/event/EventResult)      | true       | false      |
| slotIndex    | int                                              | true       | false      |
| slotString   | string                                           | true       | false      |
| to           | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |

