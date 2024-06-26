# BlockToolModificationEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.block.BlockToolModificationEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.block.BlockToolModificationEvent>(event => {
    println("BlockToolModificationEvent ran!");
});
```


## Supertype

BlockToolModificationEvent extends [BlockEvent](/neoforge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/neoforge/api/event/block/BlockEvent) are also available in BlockToolModificationEvent

## Implemented Interfaces
BlockToolModificationEvent implements the following interfaces. That means all methods defined in these interfaces are also available in BlockToolModificationEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|     Name      |                                        Type                                        | Has Getter | Has Setter |                                                                            Description                                                                            |
|---------------|------------------------------------------------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| context       | [UseOnContext](/vanilla/api/item/UseOnContext)                                     | true       | false      |                                                                                                                                                                   |
| finalState    | [BlockToolModificationEvent](/neoforge/api/event/block/BlockToolModificationEvent) | true       | true       | Sets the transformed state after tool use. <br />  If not set, will return the original state. <br />  This will be bypassed if canceled, returning null instead. |
| heldItemStack | [IItemStack](/vanilla/api/item/IItemStack)                                         | true       | false      |                                                                                                                                                                   |
| isSimulated   | boolean                                                                            | true       | false      |                                                                                                                                                                   |
| itemAbility   | [ItemAbility](/neoforge/api/item/ItemAbility)                                      | true       | false      |                                                                                                                                                                   |
| player        | [Player](/vanilla/api/entity/type/player/Player)                                   | true       | false      |                                                                                                                                                                   |

