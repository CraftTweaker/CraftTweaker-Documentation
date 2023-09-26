# IJob

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.jobs.IJob;
```


## Methods

:::group{name=allowsAvoidance}

Return Type: boolean

```zenscript
// IJob.allowsAvoidance() as boolean

myIJob.allowsAvoidance();
```

:::

:::group{name=canAIBeInterrupted}

Return Type: boolean

```zenscript
// IJob.canAIBeInterrupted() as boolean

myIJob.canAIBeInterrupted();
```

:::

:::group{name=clearActionsDone}

```zenscript
// IJob.clearActionsDone()

myIJob.clearActionsDone();
```

:::

:::group{name=getActionsDone}

Return Type: int

```zenscript
// IJob.getActionsDone() as int

myIJob.getActionsDone();
```

:::

:::group{name=getCitizen}

Return Type: [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData)

```zenscript
// IJob.getCitizen() as ICitizenData

myIJob.getCitizen();
```

:::

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
// IJob.getColony() as IColony

myIJob.getColony();
```

:::

:::group{name=getDiseaseModifier}

Return Type: int

```zenscript
// IJob.getDiseaseModifier() as int

myIJob.getDiseaseModifier();
```

:::

:::group{name=getIdleSeverity}

Return Type: int

```zenscript
IJob.getIdleSeverity(isDemand as boolean) as int
```

| Parameter |  Type   |
|-----------|---------|
| isDemand  | boolean |


:::

:::group{name=getInactivityLimit}

Return Type: int

```zenscript
// IJob.getInactivityLimit() as int

myIJob.getInactivityLimit();
```

:::

:::group{name=getJobRegistryEntry}

Return Type: [JobEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/JobEntry)

```zenscript
// IJob.getJobRegistryEntry() as JobEntry

myIJob.getJobRegistryEntry();
```

:::

:::group{name=getModel}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// IJob.getModel() as ResourceLocation

myIJob.getModel();
```

:::

:::group{name=getNameTagDescription}

Return Type: string

```zenscript
// IJob.getNameTagDescription() as string

myIJob.getNameTagDescription();
```

:::

:::group{name=hasCheckedForFoodToday}

Return Type: boolean

```zenscript
// IJob.hasCheckedForFoodToday() as boolean

myIJob.hasCheckedForFoodToday();
```

:::

:::group{name=ignoresDamage}

Return Type: boolean

```zenscript
IJob.ignoresDamage(var1 as DamageSource) as boolean
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [DamageSource](/vanilla/api/world/DamageSource) |


:::

:::group{name=incrementActionsDone}

```zenscript
// IJob.incrementActionsDone()

myIJob.incrementActionsDone();
```

:::

:::group{name=incrementActionsDone}

```zenscript
IJob.incrementActionsDone(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=initEntityValues}

```zenscript
IJob.initEntityValues(citizen as AbstractEntityCitizen)
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| citizen   | [AbstractEntityCitizen](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractEntityCitizen) |


:::

:::group{name=isGuard}

Return Type: boolean

```zenscript
// IJob.isGuard() as boolean

myIJob.isGuard();
```

:::

:::group{name=isIdling}

Return Type: boolean

```zenscript
// IJob.isIdling() as boolean

myIJob.isIdling();
```

:::

:::group{name=onLevelUp}

```zenscript
// IJob.onLevelUp()

myIJob.onLevelUp();
```

:::

:::group{name=onRemoval}

```zenscript
// IJob.onRemoval()

myIJob.onRemoval();
```

:::

:::group{name=onStackPickUp}

Return Type: boolean

```zenscript
IJob.onStackPickUp(var1 as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=onWakeUp}

```zenscript
// IJob.onWakeUp()

myIJob.onWakeUp();
```

:::

:::group{name=pickupSuccess}

Return Type: boolean

```zenscript
IJob.pickupSuccess(var1 as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| var1      | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=processOfflineTime}

```zenscript
IJob.processOfflineTime(var1 as long)
```

| Parameter | Type |
|-----------|------|
| var1      | long |


:::

:::group{name=resetAI}

```zenscript
// IJob.resetAI()

myIJob.resetAI();
```

:::

:::group{name=setCheckedForFood}

```zenscript
// IJob.setCheckedForFood()

myIJob.setCheckedForFood();
```

:::

:::group{name=setNameTag}

```zenscript
IJob.setNameTag(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=setRegistryEntry}

```zenscript
IJob.setRegistryEntry(var1 as JobEntry)
```

| Parameter |                                      Type                                      |
|-----------|--------------------------------------------------------------------------------|
| var1      | [JobEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/jobs/JobEntry) |


:::

:::group{name=triggerActivityChangeAction}

```zenscript
IJob.triggerActivityChangeAction(newState as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| newState  | boolean |


:::

:::group{name=triggerDeathAchievement}

```zenscript
IJob.triggerDeathAchievement(var1 as DamageSource, var2 as AbstractEntityCitizen)
```

| Parameter |                                                    Type                                                     |
|-----------|-------------------------------------------------------------------------------------------------------------|
| var1      | [DamageSource](/vanilla/api/world/DamageSource)                                                             |
| var2      | [AbstractEntityCitizen](/mods/sdmcrtplus/integration/minecolonies/api/entity/citizen/AbstractEntityCitizen) |


:::


