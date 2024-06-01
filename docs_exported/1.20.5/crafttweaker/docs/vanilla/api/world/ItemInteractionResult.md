# ItemInteractionResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.ItemInteractionResult;
```


## Enum Constants

ItemInteractionResult is an enum. It has 6 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/iteminteractionresult:success>
<constant:minecraft:world/iteminteractionresult:consume>
<constant:minecraft:world/iteminteractionresult:consume_partial>
<constant:minecraft:world/iteminteractionresult:pass_to_default_block_interaction>
<constant:minecraft:world/iteminteractionresult:skip_default_block_interaction>
<constant:minecraft:world/iteminteractionresult:fail>
```
## Static Methods

:::group{name=sidedSuccess}

Returns true if `successSide` is true, this can be used to return `SUCCESS` on the client, but `CONSUME` on the server.

Returns: <constant:minecraft:world/iteminteractionresult:success> if `successSide` is true, otherwise <constant:minecraft:world/iteminteractionresult:consume>.  
Return Type: [ItemInteractionResult](/vanilla/api/world/ItemInteractionResult)

```zenscript
// ItemInteractionResult.sidedSuccess(successSide as boolean) as ItemInteractionResult

ItemInteractionResult.sidedSuccess(true);
```

|  Parameter  |  Type   |              Description              |
|-------------|---------|---------------------------------------|
| successSide | boolean | Is the current side the success side. |


:::

## Properties

|      Name      |                           Type                            | Has Getter | Has Setter |
|----------------|-----------------------------------------------------------|------------|------------|
| consumesAction | boolean                                                   | true       | false      |
| result         | [InteractionResult](/vanilla/api/world/InteractionResult) | true       | false      |

