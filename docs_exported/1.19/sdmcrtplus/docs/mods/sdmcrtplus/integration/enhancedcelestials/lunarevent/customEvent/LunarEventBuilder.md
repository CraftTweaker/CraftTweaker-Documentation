# LunarEventBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.lunarevent.customEvent.LunarEventBuilder;
```


## Constructors


```zenscript
new LunarEventBuilder() as LunarEventBuilder
new LunarEventBuilder();
```

## Methods

:::group{name=build}

```zenscript
// LunarEventBuilder.build()

myLunarEventBuilder.build();
```

:::

:::group{name=setClientSettings}

Return Type: [LunarEventBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventBuilder)

```zenscript
LunarEventBuilder.setClientSettings(lunarEventClientSettingsBuilder as LunarEventClientSettingsBuilder) as LunarEventBuilder
```

|            Parameter            |                                                                   Type                                                                    |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| lunarEventClientSettingsBuilder | [LunarEventClientSettingsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventClientSettingsBuilder) |


:::

:::group{name=setDropSettings}

Return Type: [LunarEventBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventBuilder)

```zenscript
LunarEventBuilder.setDropSettings(lunarDropSettingsBuilder as LunarDropSettingsBuilder) as LunarEventBuilder
```

|        Parameter         |                                                            Type                                                             |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| lunarDropSettingsBuilder | [LunarDropSettingsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarDropSettingsBuilder) |


:::

:::group{name=setMobSettings}

Return Type: [LunarEventBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventBuilder)

```zenscript
LunarEventBuilder.setMobSettings(lunarMobSettingsBuilder as LunarMobSettingsBuilder) as LunarEventBuilder
```

|        Parameter        |                                                           Type                                                            |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| lunarMobSettingsBuilder | [LunarMobSettingsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarMobSettingsBuilder) |


:::

:::group{name=setName}

Return Type: [LunarEventBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventBuilder)

```zenscript
LunarEventBuilder.setName(name as string) as LunarEventBuilder
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=setSpawnRequirements}

Return Type: [LunarEventBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventBuilder)

```zenscript
LunarEventBuilder.setSpawnRequirements(levelName as ResourceLocation, lunarSpawnRequirements as LunarSpawnRequirementsBuilder) as LunarEventBuilder
```

|       Parameter        |                                                                 Type                                                                  |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| levelName              | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                                            |
| lunarSpawnRequirements | [LunarSpawnRequirementsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarSpawnRequirementsBuilder) |


:::

:::group{name=setTextComponents}

Return Type: [LunarEventBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarEventBuilder)

```zenscript
LunarEventBuilder.setTextComponents(lunarTextComponentsBuilder as LunarTextComponentsBuilder) as LunarEventBuilder
```

|         Parameter          |                                                              Type                                                               |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| lunarTextComponentsBuilder | [LunarTextComponentsBuilder](/mods/sdmcrtplus/integration/enhancedcelestials/lunarevent/customEvent/LunarTextComponentsBuilder) |


:::


