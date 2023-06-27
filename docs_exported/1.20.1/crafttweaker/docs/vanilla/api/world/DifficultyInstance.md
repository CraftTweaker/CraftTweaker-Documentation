# DifficultyInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.DifficultyInstance;
```


## Methods

:::group{name=isHarderThan}

Return Type: boolean

```zenscript
DifficultyInstance.isHarderThan(difficulty as float) as boolean
```

| Parameter  | Type  |
|------------|-------|
| difficulty | float |


:::


## Properties

|        Name         |                    Type                     | Has Getter | Has Setter |
|---------------------|---------------------------------------------|------------|------------|
| difficulty          | [Difficulty](/vanilla/api/world/Difficulty) | true       | false      |
| effectiveDifficulty | float                                       | true       | false      |
| isHard              | boolean                                     | true       | false      |
| specialMultiplier   | float                                       | true       | false      |

