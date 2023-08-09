# DifficultyChangeEvent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.events.world.DifficultyChangeEvent;
```


## Extending Event

DifficultyChangeEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in DifficultyChangeEvent

## Methods

:::group{name=getNewDifficultyIndex}

Return Type: int

```zenscript
// DifficultyChangeEvent.getNewDifficultyIndex() as int

myDifficultyChangeEvent.getNewDifficultyIndex();
```

:::

:::group{name=getNewDifficultyKey}

Return Type: string

```zenscript
// DifficultyChangeEvent.getNewDifficultyKey() as string

myDifficultyChangeEvent.getNewDifficultyKey();
```

:::

:::group{name=getOldDifficultyIndex}

Return Type: int

```zenscript
// DifficultyChangeEvent.getOldDifficultyIndex() as int

myDifficultyChangeEvent.getOldDifficultyIndex();
```

:::

:::group{name=getOldDifficultyKey}

Return Type: string

```zenscript
// DifficultyChangeEvent.getOldDifficultyKey() as string

myDifficultyChangeEvent.getOldDifficultyKey();
```

:::


## Properties

|        Name        |  Type  | Has Getter | Has Setter |
|--------------------|--------|------------|------------|
| NewDifficultyIndex | int    | true       | false      |
| NewDifficultyKey   | string | true       | false      |
| OldDifficultyIndex | string | true       | false      |
| OldDifficultyKey   | int    | true       | false      |

