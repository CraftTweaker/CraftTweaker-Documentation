# ICitizen

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.ICitizen;
```


## Methods

:::group{name=calculateMaxCitizens}

```zenscript
// ICitizen.calculateMaxCitizens()

myICitizen.calculateMaxCitizens();
```

:::

:::group{name=checkCitizensForHappiness}

```zenscript
// ICitizen.checkCitizensForHappiness()

myICitizen.checkCitizensForHappiness();
```

:::

:::group{name=createAndRegisterCivilianData}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
// ICitizen.createAndRegisterCivilianData() as ICitizenData

myICitizen.createAndRegisterCivilianData();
```

:::

:::group{name=getCitizens}

Return Type: stdlib.List&lt;[ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)&gt;

```zenscript
// ICitizen.getCitizens() as stdlib.List<ICitizenData>

myICitizen.getCitizens();
```

:::

:::group{name=getCivilian}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
ICitizen.getCivilian(var1 as int) as ICitizenData
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getCurrentCitizenCount}

Return Type: int

```zenscript
// ICitizen.getCurrentCitizenCount() as int

myICitizen.getCurrentCitizenCount();
```

:::

:::group{name=getJoblessCitizen}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)?

```zenscript
// ICitizen.getJoblessCitizen() as ICitizenData?

myICitizen.getJoblessCitizen();
```

:::

:::group{name=getMaxCitizens}

Return Type: int

```zenscript
// ICitizen.getMaxCitizens() as int

myICitizen.getMaxCitizens();
```

:::

:::group{name=getPotentialMaxCitizens}

Return Type: int

```zenscript
// ICitizen.getPotentialMaxCitizens() as int

myICitizen.getPotentialMaxCitizens();
```

:::

:::group{name=getRandomCitizen}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
// ICitizen.getRandomCitizen() as ICitizenData

myICitizen.getRandomCitizen();
```

:::

:::group{name=injectModifier}

```zenscript
ICitizen.injectModifier(var1 as IHappinessModifier)
```

| Parameter |                                                  Type                                                   |
|-----------|---------------------------------------------------------------------------------------------------------|
| var1      | [IHappinessModifier](/mods/sdmcrtplus/integration/minecolonies/api/entity/happiness/IHappinessModifier) |


:::

:::group{name=maxCitizensFromResearch}

Return Type: double

```zenscript
// ICitizen.maxCitizensFromResearch() as double

myICitizen.maxCitizensFromResearch();
```

:::

:::group{name=onCitizenSleep}

```zenscript
// ICitizen.onCitizenSleep()

myICitizen.onCitizenSleep();
```

:::

:::group{name=onWakeUp}

```zenscript
// ICitizen.onWakeUp()

myICitizen.onWakeUp();
```

:::

:::group{name=resurrectCivilianData}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
ICitizen.resurrectCivilianData(var1 as CompoundTag, var2 as boolean, var3 as Level, var4 as BlockPos) as ICitizenData
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |
| var2      | boolean                                         |
| var3      | [Level](/vanilla/api/world/Level)               |
| var4      | [BlockPos](/vanilla/api/util/math/BlockPos)     |


:::

:::group{name=setMaxCitizens}

```zenscript
ICitizen.setMaxCitizens(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setPotentialMaxCitizens}

```zenscript
ICitizen.setPotentialMaxCitizens(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=spawnOrCreateCitizen}

```zenscript
// ICitizen.spawnOrCreateCitizen()

myICitizen.spawnOrCreateCitizen();
```

:::

:::group{name=spawnOrCreateCitizen}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
ICitizen.spawnOrCreateCitizen(data as ICitizenData, world as Level) as ICitizenData
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| data      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |
| world     | [Level](/vanilla/api/world/Level)                                                 |


:::

:::group{name=spawnOrCreateCitizen}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
ICitizen.spawnOrCreateCitizen(data as ICitizenData, world as Level, spawnPos as BlockPos) as ICitizenData
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| data      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |
| world     | [Level](/vanilla/api/world/Level)                                                 |
| spawnPos  | [BlockPos](/vanilla/api/util/math/BlockPos)                                       |


:::

:::group{name=tickCitizenData}

Return Type: boolean

```zenscript
// ICitizen.tickCitizenData() as boolean

myICitizen.tickCitizenData();
```

:::

:::group{name=updateCitizenMourn}

```zenscript
ICitizen.updateCitizenMourn(var1 as ICitizenData, var2 as boolean)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |
| var2      | boolean                                                                           |


:::

:::group{name=updateCitizenSleep}

```zenscript
ICitizen.updateCitizenSleep(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::


