# BlockToolModificationEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.block.BlockToolModificationEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.block.BlockToolModificationEvent>(event => {
    println("BlockToolModificationEvent ran!");
});
```


## Supertype

BlockToolModificationEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockToolModificationEvent

## Properties

|     Name      |                                      Type                                       | Has Getter | Has Setter |                                                                            Description                                                                            |
|---------------|---------------------------------------------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| context       | [UseOnContext](/vanilla/api/item/UseOnContext)                                  | true       | false      |                                                                                                                                                                   |
| finalState    | [BlockToolModificationEvent](/forge/api/event/block/BlockToolModificationEvent) | true       | true       | Sets the transformed state after tool use. <br />  If not set, will return the original state. <br />  This will be bypassed if canceled, returning null instead. |
| heldItemStack | [IItemStack](/vanilla/api/item/IItemStack)                                      | true       | false      |                                                                                                                                                                   |
| isSimulated   | boolean                                                                         | true       | false      |                                                                                                                                                                   |
| player        | [Player](/vanilla/api/entity/type/player/Player)                                | true       | false      |                                                                                                                                                                   |
| toolAction    | [ToolAction](/forge/api/tool/ToolAction)                                        | true       | false      |                                                                                                                                                                   |

