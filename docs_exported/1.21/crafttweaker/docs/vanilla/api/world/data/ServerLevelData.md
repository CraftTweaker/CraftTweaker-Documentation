# ServerLevelData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.data.ServerLevelData;
```


## Implemented Interfaces
ServerLevelData implements the following interfaces. That means all methods defined in these interfaces are also available in ServerLevelData

- [WritableLevelData](/vanilla/api/world/data/WritableLevelData)

## Properties

|            Name            |                            Type                            | Has Getter | Has Setter |
|----------------------------|------------------------------------------------------------|------------|------------|
| allowCommands              | boolean                                                    | true       | false      |
| clearWeatherTime           | int                                                        | true       | true       |
| dayTime                    | [ServerLevelData](/vanilla/api/world/data/ServerLevelData) | false      | true       |
| gameTime                   | [ServerLevelData](/vanilla/api/world/data/ServerLevelData) | false      | true       |
| gameType                   | [GameType](/vanilla/api/world/GameType)                    | true       | true       |
| initialized                | boolean                                                    | true       | false      |
| levelName                  | string                                                     | true       | false      |
| rainTime                   | int                                                        | true       | true       |
| thunderTime                | [ServerLevelData](/vanilla/api/world/data/ServerLevelData) | true       | true       |
| thundering                 | [ServerLevelData](/vanilla/api/world/data/ServerLevelData) | false      | true       |
| wanderingTraderSpawnChance | int                                                        | true       | true       |
| wanderingTraderSpawnDelay  | int                                                        | true       | true       |
| worldBorder                | [ServerLevelData](/vanilla/api/world/data/ServerLevelData) | true       | true       |

