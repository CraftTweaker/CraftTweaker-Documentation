# InteractionResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.InteractionResult;
```


## Enum Constants

InteractionResult is an enum. It has 6 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/interactionresult:success>
<constant:minecraft:world/interactionresult:success_no_item_used>
<constant:minecraft:world/interactionresult:consume>
<constant:minecraft:world/interactionresult:consume_partial>
<constant:minecraft:world/interactionresult:pass>
<constant:minecraft:world/interactionresult:fail>
```
## Static Methods

:::group{name=sidedSuccess}

Returns true if `successSide` is true, this can be used to return `SUCCESS` on the client, but `CONSUME` on the server.

Returns: <constant:minecraft:world/interactionresult:success> if `successSide` is true, otherwise <constant:minecraft:world/interactionresult:consume>.  
Return Type: [InteractionResult](/vanilla/api/world/InteractionResult)

```zenscript
// InteractionResult.sidedSuccess(successSide as boolean) as InteractionResult

InteractionResult.sidedSuccess(true);
```

|  Parameter  |  Type   |              Description              |
|-------------|---------|---------------------------------------|
| successSide | boolean | Is the current side the success side. |


:::

## Properties

|      Name       |  Type   | Has Getter | Has Setter |
|-----------------|---------|------------|------------|
| consumesAction  | boolean | true       | false      |
| indicateItemUse | boolean | true       | false      |
| shouldSwing     | boolean | true       | false      |

