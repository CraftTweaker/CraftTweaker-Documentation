# LivingEntityKillByPlayerEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.living.LivingEntityKillByPlayerEvent;
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

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// LivingEntityKillByPlayerEvent.getLivingEntity() as LivingEntity

myLivingEntityKillByPlayerEvent.getLivingEntity();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// LivingEntityKillByPlayerEvent.getPlayer() as Player

myLivingEntityKillByPlayerEvent.getPlayer();
```

:::


## Properties

|     Name     |                       Type                       | Has Getter | Has Setter |
|--------------|--------------------------------------------------|------------|------------|
| entityLiving | [LivingEntity](/vanilla/api/entity/LivingEntity) | true       | false      |
| item         | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |
| player       | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

