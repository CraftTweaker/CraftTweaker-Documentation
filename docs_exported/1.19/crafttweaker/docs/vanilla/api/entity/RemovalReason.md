# RemovalReason

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.RemovalReason;
```


## Enum Constants

RemovalReason is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:entity/removalreason:killed>
<constant:minecraft:entity/removalreason:discarded>
<constant:minecraft:entity/removalreason:unloaded_to_chunk>
<constant:minecraft:entity/removalreason:unloaded_with_player>
<constant:minecraft:entity/removalreason:changed_dimension>
```
## Methods

:::group{name=shouldDestroy}

Return Type: boolean

```zenscript
// RemovalReason.shouldDestroy() as boolean

myRemovalReason.shouldDestroy();
```

:::


## Properties

|     Name      |  Type   | Has Getter | Has Setter |
|---------------|---------|------------|------------|
| shouldDestroy | boolean | true       | false      |

