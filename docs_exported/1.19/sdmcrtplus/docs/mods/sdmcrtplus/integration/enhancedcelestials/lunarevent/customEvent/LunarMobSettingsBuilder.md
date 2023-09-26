# LunarMobSettingsBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.lunarevent.customEvent.LunarMobSettingsBuilder;
```


## Static Properties

|  Name   |    Type     | Has Getter | Has Setter |
|---------|-------------|------------|------------|
| DEFAULT | **invalid** | true       | false      |

## Constructors


```zenscript
new LunarMobSettingsBuilder() as LunarMobSettingsBuilder
new LunarMobSettingsBuilder();
```

## Methods

:::group{name=build}

Return Type: [LunarMobSettingsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarMobSettingsBuilder)

```zenscript
LunarMobSettingsBuilder.build(spawnCategoryMultiplier as double?[MobCategory], lunarMobSpawnInfoBuilder as LunarMobSpawnInfoBuilder) as LunarMobSettingsBuilder
```

|        Parameter         |                                                            Type                                                             |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| spawnCategoryMultiplier  | double?[[MobCategory](/vanilla/api/entity/MobCategory)]                                                                     |
| lunarMobSpawnInfoBuilder | [LunarMobSpawnInfoBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarMobSpawnInfoBuilder) |


:::


