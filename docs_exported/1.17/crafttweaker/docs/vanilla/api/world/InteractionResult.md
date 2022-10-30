# InteractionResult

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.InteractionResult;
```


## Enum Constants

InteractionResult is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
InteractionResult.SUCCESS
InteractionResult.CONSUME
InteractionResult.CONSUME_PARTIAL
InteractionResult.PASS
InteractionResult.FAIL
```
## Methods

:::group{name=consumesAction}

Return Type: boolean

```zenscript
// InteractionResult.consumesAction() as boolean

myInteractionResult.consumesAction();
```

:::

:::group{name=shouldAwardStats}

Return Type: boolean

```zenscript
// InteractionResult.shouldAwardStats() as boolean

myInteractionResult.shouldAwardStats();
```

:::

:::group{name=shouldSwing}

Return Type: boolean

```zenscript
// InteractionResult.shouldSwing() as boolean

myInteractionResult.shouldSwing();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| consumesAction | boolean | true | false | No Description Provided |
| shouldAwardStats | boolean | true | false | No Description Provided |
| shouldSwing | boolean | true | false | No Description Provided |

