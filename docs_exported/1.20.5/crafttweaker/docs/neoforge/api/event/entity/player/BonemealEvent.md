# BonemealEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.player.BonemealEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.player.BonemealEvent>(event => {
    println("BonemealEvent ran!");
});
```


## Supertype

BonemealEvent extends [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/neoforge/api/event/entity/player/PlayerEvent) are also available in BonemealEvent

## Implemented Interfaces
BonemealEvent implements the following interfaces. That means all methods defined in these interfaces are also available in BonemealEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

| Name  |                    Type                     | Has Getter | Has Setter |
|-------|---------------------------------------------|------------|------------|
| block | [BlockState](/vanilla/api/block/BlockState) | true       | false      |
| level | [Level](/vanilla/api/world/Level)           | true       | false      |
| pos   | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      |
| stack | [IItemStack](/vanilla/api/item/IItemStack)  | true       | false      |

