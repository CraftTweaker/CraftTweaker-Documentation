# CurioEquipEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutilscurios.api.curios.events.CurioEquipEvent;
```


## Extending LivingEvent

CurioEquipEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioEquipEvent

## Methods

:::group{name=getEntity}

Return Type: [Entity](/mods/sixikutils/utils/entity/ExpandEntity)

```zenscript
// CurioEquipEvent.getEntity() as Entity

myCurioEquipEvent.getEntity();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// CurioEquipEvent.getItem() as IItemStack

myCurioEquipEvent.getItem();
```

:::

:::group{name=getLivingEntity}

Return Type: [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity)

```zenscript
// CurioEquipEvent.getLivingEntity() as LivingEntity

myCurioEquipEvent.getLivingEntity();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// CurioEquipEvent.getPlayer() as Player

myCurioEquipEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// CurioEquipEvent.getResult() as EventResult

myCurioEquipEvent.getResult();
```

:::

:::group{name=getSlotIndex}

Return Type: int

```zenscript
// CurioEquipEvent.getSlotIndex() as int

myCurioEquipEvent.getSlotIndex();
```

:::

:::group{name=getSlotString}

Return Type: string

```zenscript
// CurioEquipEvent.getSlotString() as string

myCurioEquipEvent.getSlotString();
```

:::

:::group{name=getSlotWearer}

Return Type: [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity)

```zenscript
// CurioEquipEvent.getSlotWearer() as LivingEntity

myCurioEquipEvent.getSlotWearer();
```

:::


## Properties

|     Name     |                               Type                               | Has Getter | Has Setter |
|--------------|------------------------------------------------------------------|------------|------------|
| entity       | [Entity](/mods/sixikutils/utils/entity/ExpandEntity)             | true       | false      |
| item         | [IItemStack](/vanilla/api/item/IItemStack)                       | true       | false      |
| livingEntity | [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity) | true       | false      |
| player       | [Player](/mods/sixikutils/curios/player/Player)                  | true       | false      |
| result       | [EventResult](/forge/api/event/EventResult)                      | true       | false      |
| slotIndex    | int                                                              | true       | false      |
| slotString   | string                                                           | true       | false      |
| slotWearer   | [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity) | true       | false      |

