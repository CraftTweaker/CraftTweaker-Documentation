# TradeWithVillagerEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.player.TradeWithVillagerEvent;
```


## Extending PlayerEvent

TradeWithVillagerEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in TradeWithVillagerEvent

## Properties

|       Name       |                                  Type                                  | Has Getter | Has Setter |
|------------------|------------------------------------------------------------------------|------------|------------|
| abstractVillager | [AbstractVillager](/vanilla/api/entity/type/villager/AbstractVillager) | true       | false      |
| merchantOffer    | [MerchantOffer](/vanilla/api/villager/MerchantOffer)                   | true       | false      |

