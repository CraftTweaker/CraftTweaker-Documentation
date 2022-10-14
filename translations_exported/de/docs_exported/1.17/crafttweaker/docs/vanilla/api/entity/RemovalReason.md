# RemovalReason

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.RemovalReason;
```


## Enum Constants

RemovalReason is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
RemovalReason.KILLED
RemovalReason.DISCARDED
RemovalReason.UNLOADED_TO_CHUNK
RemovalReason.UNLOADED_WITH_PLAYER
RemovalReason.CHANGED_DIMENSION
```
## Methoden

:::group{name=shouldDestroy}

Return Type: boolean

```zenscript
// RemovalReason.shouldDestroy() as boolean

myRemovalReason.shouldDestroy();
```

:::


## Properties

| Name          | Type    | Has Getter | Has Setter | Beschreibung            |
| ------------- | ------- | ---------- | ---------- | ----------------------- |
| shouldDestroy | boolean | true       | false      | No Description Provided |

