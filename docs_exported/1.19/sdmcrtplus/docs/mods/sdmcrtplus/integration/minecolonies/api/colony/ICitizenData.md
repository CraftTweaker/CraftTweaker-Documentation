# ICitizenData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.ICitizenData;
```


## Implemented Interfaces
ICitizenData implements the following interfaces. That means all methods defined in these interfaces are also available in ICitizenData

- [ICivilianData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICivilianData)

## Methods

:::group{name=addChildren}

```zenscript
ICitizenData.addChildren(var1 as int?[])
```

| Parameter |  Type  |
|-----------|--------|
| var1      | int?[] |


:::

:::group{name=addSiblings}

```zenscript
ICitizenData.addSiblings(var1 as int?[])
```

| Parameter |  Type  |
|-----------|--------|
| var1      | int?[] |


:::

:::group{name=applyResearchEffects}

```zenscript
// ICitizenData.applyResearchEffects()

myICitizenData.applyResearchEffects();
```

:::

:::group{name=doesLiveWith}

Return Type: boolean

```zenscript
ICitizenData.doesLiveWith(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=generateName}

```zenscript
ICitizenData.generateName(var1 as Random, var2 as string, var3 as string, var4 as CitizenNameFile)
```

| Parameter |                                          Type                                           |
|-----------|-----------------------------------------------------------------------------------------|
| var1      | [Random](/vanilla/api/util/math/Random)                                                 |
| var2      | string                                                                                  |
| var3      | string                                                                                  |
| var4      | [CitizenNameFile](/mods/sdmcrtplus/integration/minecolonies/api/colony/CitizenNameFile) |


:::

:::group{name=getBedPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ICitizenData.getBedPos() as BlockPos

myICitizenData.getBedPos();
```

:::

:::group{name=getChildren}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// ICitizenData.getChildren() as stdlib.List<int?>

myICitizenData.getChildren();
```

:::

:::group{name=getCitizenHappinessHandler}

Return Type: [ICitizenHappinessHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenHappinessHandler)

```zenscript
// ICitizenData.getCitizenHappinessHandler() as ICitizenHappinessHandler

myICitizenData.getCitizenHappinessHandler();
```

:::

:::group{name=getCitizenMournHandler}

Return Type: [ICitizenMournHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenMournHandler)

```zenscript
// ICitizenData.getCitizenMournHandler() as ICitizenMournHandler

myICitizenData.getCitizenMournHandler();
```

:::

:::group{name=getCitizenSkillHandler}

Return Type: [ICitizenSkillHandler](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/citizenhandlers/ICitizenSkillHandler)

```zenscript
// ICitizenData.getCitizenSkillHandler() as ICitizenSkillHandler

myICitizenData.getCitizenSkillHandler();
```

:::

:::group{name=getEntity}

Return Type: [Optional](/mods/sdmcrtplus/utils/core/Optional)&lt;[AbstractEntityCitizen](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractEntityCitizen)&gt;

```zenscript
// ICitizenData.getEntity() as Optional<AbstractEntityCitizen>

myICitizenData.getEntity();
```

:::

:::group{name=getHomeBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)?

```zenscript
// ICitizenData.getHomeBuilding() as IBuilding?

myICitizenData.getHomeBuilding();
```

:::

:::group{name=getJob}

Return Type: [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob)

```zenscript
// ICitizenData.getJob() as IJob

myICitizenData.getJob();
```

:::

:::group{name=getLastPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ICitizenData.getLastPosition() as BlockPos

myICitizenData.getLastPosition();
```

:::

:::group{name=getParents}

Return Type: [Tuple](/mods/sdmcrtplus/integration/minecolonies/api/utils/Tuple)&lt;string,string&gt;

```zenscript
// ICitizenData.getParents() as Tuple<string,string>

myICitizenData.getParents();
```

:::

:::group{name=getPartner}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)?

```zenscript
// ICitizenData.getPartner() as ICitizenData?

myICitizenData.getPartner();
```

:::

:::group{name=getRandom}

Return Type: [Random](/vanilla/api/util/math/Random)

```zenscript
// ICitizenData.getRandom() as Random

myICitizenData.getRandom();
```

:::

:::group{name=getSiblings}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// ICitizenData.getSiblings() as stdlib.List<int?>

myICitizenData.getSiblings();
```

:::

:::group{name=getStatus}

Return Type: **invalid**

```zenscript
// ICitizenData.getStatus() as invalid

myICitizenData.getStatus();
```

:::

:::group{name=getWorkBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)?

```zenscript
// ICitizenData.getWorkBuilding() as IBuilding?

myICitizenData.getWorkBuilding();
```

:::

:::group{name=hasCustomTexture}

Return Type: boolean

```zenscript
// ICitizenData.hasCustomTexture() as boolean

myICitizenData.hasCustomTexture();
```

:::

:::group{name=isAsleep}

Return Type: boolean

```zenscript
// ICitizenData.isAsleep() as boolean

myICitizenData.isAsleep();
```

:::

:::group{name=isIdleAtJob}

Return Type: boolean

```zenscript
// ICitizenData.isIdleAtJob() as boolean

myICitizenData.isIdleAtJob();
```

:::

:::group{name=isRelatedTo}

Return Type: boolean

```zenscript
ICitizenData.isRelatedTo(var1 as ICitizenData) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=isWorking}

Return Type: boolean

```zenscript
// ICitizenData.isWorking() as boolean

myICitizenData.isWorking();
```

:::

:::group{name=justAte}

Return Type: boolean

```zenscript
// ICitizenData.justAte() as boolean

myICitizenData.justAte();
```

:::

:::group{name=needsBetterFood}

Return Type: boolean

```zenscript
// ICitizenData.needsBetterFood() as boolean

myICitizenData.needsBetterFood();
```

:::

:::group{name=onDeath}

```zenscript
ICitizenData.onDeath(var1 as int?)
```

| Parameter | Type |
|-----------|------|
| var1      | int? |


:::

:::group{name=onGoSleep}

```zenscript
// ICitizenData.onGoSleep()

myICitizenData.onGoSleep();
```

:::

:::group{name=onInteractionClosed}

```zenscript
ICitizenData.onInteractionClosed(var1 as Component, var2 as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| var1      | [Component](/vanilla/api/text/Component)                     |
| var2      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=onQuestCompletion}

```zenscript
ICitizenData.onQuestCompletion(var1 as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=onRemoveBuilding}

```zenscript
ICitizenData.onRemoveBuilding(var1 as IBuilding)
```

| Parameter |                                         Type                                          |
|-----------|---------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding) |


:::

:::group{name=onResurrect}

```zenscript
// ICitizenData.onResurrect()

myICitizenData.onResurrect();
```

:::

:::group{name=restartDone}

```zenscript
// ICitizenData.restartDone()

myICitizenData.restartDone();
```

:::

:::group{name=scheduleRestart}

```zenscript
ICitizenData.scheduleRestart(var1 as ServerPlayer)
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| var1      | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer) |


:::

:::group{name=setAsleep}

```zenscript
ICitizenData.setAsleep(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setBedPos}

```zenscript
ICitizenData.setBedPos(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setHomeBuilding}

```zenscript
ICitizenData.setHomeBuilding(var1 as IBuilding?)
```

| Parameter |                                          Type                                          |
|-----------|----------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)? |


:::

:::group{name=setIdleAtJob}

```zenscript
ICitizenData.setIdleAtJob(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setIdleDays}

```zenscript
ICitizenData.setIdleDays(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setIsChild}

```zenscript
ICitizenData.setIsChild(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setJob}

```zenscript
ICitizenData.setJob(var1 as IJob)
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| var1      | [IJob](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/IJob) |


:::

:::group{name=setJustAte}

```zenscript
ICitizenData.setJustAte(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setLastPosition}

```zenscript
ICitizenData.setLastPosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setNextRespawnPosition}

```zenscript
ICitizenData.setNextRespawnPosition(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=setParents}

```zenscript
ICitizenData.setParents(var1 as string, var2 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | string |


:::

:::group{name=setPartner}

```zenscript
ICitizenData.setPartner(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setSaturation}

```zenscript
ICitizenData.setSaturation(var1 as double)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | double |


:::

:::group{name=setVisibleStatus}

```zenscript
ICitizenData.setVisibleStatus(var1 as invalid)
```

| Parameter |    Type     |
|-----------|-------------|
| var1      | **invalid** |


:::

:::group{name=setWorkBuilding}

```zenscript
ICitizenData.setWorkBuilding(var1 as IBuilding?)
```

| Parameter |                                          Type                                          |
|-----------|----------------------------------------------------------------------------------------|
| var1      | [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)? |


:::

:::group{name=setWorking}

```zenscript
ICitizenData.setWorking(b as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| b         | boolean |


:::

:::group{name=shouldRestart}

Return Type: boolean

```zenscript
// ICitizenData.shouldRestart() as boolean

myICitizenData.shouldRestart();
```

:::


