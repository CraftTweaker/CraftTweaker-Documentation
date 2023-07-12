# TradeWithVillagerEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.player.TradeWithVillagerEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.player.TradeWithVillagerEvent>(event => {
    println("TradeWithVillagerEvent ran!");
});
```


## Supertype

TradeWithVillagerEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in TradeWithVillagerEvent

## Properties

|       Name       |                                  Type                                  | Has Getter | Has Setter |
|------------------|------------------------------------------------------------------------|------------|------------|
| abstractVillager | [AbstractVillager](/vanilla/api/entity/type/villager/AbstractVillager) | true       | false      |
| merchantOffer    | [MerchantOffer](/vanilla/api/villager/MerchantOffer)                   | true       | false      |

