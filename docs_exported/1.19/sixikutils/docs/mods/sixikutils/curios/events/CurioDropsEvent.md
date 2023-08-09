# CurioDropsEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.curios.api.curios.events.CurioDropsEvent;
```


## Extending LivingEvent

CurioDropsEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in CurioDropsEvent

## Methods

:::group{name=getCuriosString}

Return Type: string

```zenscript
// CurioDropsEvent.getCuriosString() as string

myCurioDropsEvent.getCuriosString();
```

:::

:::group{name=getDamageSource}

Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// CurioDropsEvent.getDamageSource() as DamageSource

myCurioDropsEvent.getDamageSource();
```

:::

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// CurioDropsEvent.getEntity() as Entity

myCurioDropsEvent.getEntity();
```

:::

:::group{name=getFortuneBonus}

Return Type: int

```zenscript
// CurioDropsEvent.getFortuneBonus() as int

myCurioDropsEvent.getFortuneBonus();
```

:::

:::group{name=getItemEntity}

Return Type: [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)[]

```zenscript
// CurioDropsEvent.getItemEntity() as ItemEntity[]

myCurioDropsEvent.getItemEntity();
```

:::

:::group{name=getLivingEntity}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// CurioDropsEvent.getLivingEntity() as LivingEntity

myCurioDropsEvent.getLivingEntity();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// CurioDropsEvent.getPlayer() as Player

myCurioDropsEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// CurioDropsEvent.getResult() as EventResult

myCurioDropsEvent.getResult();
```

:::

:::group{name=getSlotWearer}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// CurioDropsEvent.getSlotWearer() as LivingEntity

myCurioDropsEvent.getSlotWearer();
```

:::

:::group{name=getSlots}

Return Type: int

```zenscript
// CurioDropsEvent.getSlots() as int

myCurioDropsEvent.getSlots();
```

:::

:::group{name=getVisibleSlots}

Return Type: int

```zenscript
// CurioDropsEvent.getVisibleSlots() as int

myCurioDropsEvent.getVisibleSlots();
```

:::


## Properties

|     Name     |                           Type                           | Has Getter | Has Setter |
|--------------|----------------------------------------------------------|------------|------------|
| curiosString | string                                                   | true       | false      |
| damageSource | [DamageSource](/vanilla/api/world/DamageSource)          | true       | false      |
| entity       | [Entity](/vanilla/api/entity/Entity)                     | true       | false      |
| fortuneBonus | int                                                      | true       | false      |
| itemEntity   | [ItemEntity](/vanilla/api/entity/type/item/ItemEntity)[] | true       | false      |
| livingEntity | [LivingEntity](/vanilla/api/entity/LivingEntity)         | true       | false      |
| player       | [Player](/vanilla/api/entity/type/player/Player)         | true       | false      |
| result       | [EventResult](/forge/api/event/EventResult)              | true       | false      |
| slotWearer   | [LivingEntity](/vanilla/api/entity/LivingEntity)         | true       | false      |
| slots        | int                                                      | true       | false      |
| visibleSlots | int                                                      | true       | false      |

