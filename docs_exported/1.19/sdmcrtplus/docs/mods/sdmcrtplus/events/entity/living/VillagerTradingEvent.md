# VillagerTradingEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.living.VillagerTradingEvent;
```


## Extending Event

VillagerTradingEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in VillagerTradingEvent

## Methods

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// VillagerTradingEvent.getItem() as IItemStack

myVillagerTradingEvent.getItem();
```

:::

:::group{name=getLastPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// VillagerTradingEvent.getLastPlayer() as Player

myVillagerTradingEvent.getLastPlayer();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// VillagerTradingEvent.getPlayer() as Player

myVillagerTradingEvent.getPlayer();
```

:::

:::group{name=getProfession}

Return Type: [VillagerProfession](/vanilla/api/villager/VillagerProfession)

```zenscript
// VillagerTradingEvent.getProfession() as VillagerProfession

myVillagerTradingEvent.getProfession();
```

:::

:::group{name=getType}

Return Type: [VillagerType](/vanilla/api/villager/VillagerType)

```zenscript
// VillagerTradingEvent.getType() as VillagerType

myVillagerTradingEvent.getType();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// VillagerTradingEvent.isCancelable() as boolean

myVillagerTradingEvent.isCancelable();
```

:::


## Properties

|    Name    |                              Type                              | Has Getter | Has Setter |
|------------|----------------------------------------------------------------|------------|------------|
| item       | [IItemStack](/vanilla/api/item/IItemStack)                     | true       | false      |
| lastPlayer | [Player](/vanilla/api/entity/type/player/Player)               | true       | false      |
| player     | [Player](/vanilla/api/entity/type/player/Player)               | true       | false      |
| profession | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | true       | false      |
| type       | [VillagerType](/vanilla/api/villager/VillagerType)             | true       | false      |

