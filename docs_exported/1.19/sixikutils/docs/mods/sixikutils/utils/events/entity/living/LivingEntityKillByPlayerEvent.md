# LivingEntityKillByPlayerEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.entity.LivingEntityKillByPlayerEvent;
```


## Extending LivingEvent

LivingEntityKillByPlayerEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingEntityKillByPlayerEvent

## Methods

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// LivingEntityKillByPlayerEvent.getItem() as IItemStack

myLivingEntityKillByPlayerEvent.getItem();
```

:::

:::group{name=getLivingEntity}

Return Type: [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity)

```zenscript
// LivingEntityKillByPlayerEvent.getLivingEntity() as LivingEntity

myLivingEntityKillByPlayerEvent.getLivingEntity();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/mods/sixikutils/curios/player/Player)

```zenscript
// LivingEntityKillByPlayerEvent.getPlayer() as Player

myLivingEntityKillByPlayerEvent.getPlayer();
```

:::


## Properties

|     Name     |                               Type                               | Has Getter | Has Setter |
|--------------|------------------------------------------------------------------|------------|------------|
| entityLiving | [LivingEntity](/mods/sixikutils/utils/entity/ExpandLivingEntity) | true       | false      |
| item         | [IItemStack](/vanilla/api/item/IItemStack)                       | true       | false      |
| player       | [Player](/mods/sixikutils/curios/player/Player)                  | true       | false      |

