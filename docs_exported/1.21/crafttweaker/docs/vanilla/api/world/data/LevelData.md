# LevelData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.data.LevelData;
```


## Properties

|        Name        |                    Type                     | Has Getter | Has Setter |
|--------------------|---------------------------------------------|------------|------------|
| dayTime            | long                                        | true       | false      |
| difficulty         | [Difficulty](/vanilla/api/world/Difficulty) | true       | false      |
| gameTime           | long                                        | true       | false      |
| hardcore           | boolean                                     | true       | false      |
| isDifficultyLocked | boolean                                     | true       | false      |
| raining            | boolean                                     | true       | true       |
| spawnAngle         | float                                       | true       | false      |
| thundering         | boolean                                     | true       | false      |

