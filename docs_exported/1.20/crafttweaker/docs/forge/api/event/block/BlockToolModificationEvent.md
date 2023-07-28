# BlockToolModificationEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.block.BlockToolModificationEvent;
```


## Extending BlockEvent

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

