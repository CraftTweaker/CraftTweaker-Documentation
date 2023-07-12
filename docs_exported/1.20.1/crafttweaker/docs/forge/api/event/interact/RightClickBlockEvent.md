# RightClickBlockEvent

This event is fired on both sides whenever the player right clicks while targeting a block.
 This event controls which of Item.onItemUseFirst, Block.onBlockActivated, and Item.onItemUse will be called.

The event is cancelable.

If the event is canceled, will cause none of the above three to be called.

The event does not have a result.



## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.interact.RightClickBlockEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.interact.RightClickBlockEvent>(event => {
    println("RightClickBlockEvent ran!");
});
```


## Supertype

RightClickBlockEvent extends [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent). That means all methods available in [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent) are also available in RightClickBlockEvent

## Properties

|   Name   |                        Type                        | Has Getter | Has Setter |                                                                        Description                                                                         |
|----------|----------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| face     | [Direction](/vanilla/api/util/direction/Direction) | true       | false      | The face of the block that was clicked <br />  Unlike in [PlayerInteractEvent](/forge/api/event/interact/PlayerInteractEvent) this is known not to be null |
| hitVec   | [BlockHitResult](/vanilla/api/util/BlockHitResult) | true       | false      |                                                                                                                                                            |
| useBlock | [EventResult](/forge/api/event/EventResult)        | true       | true       |                                                                                                                                                            |
| useItem  | [EventResult](/forge/api/event/EventResult)        | true       | true       |                                                                                                                                                            |

