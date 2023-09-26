# IQuestManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.quests.IQuestManager;
```


## Methods

:::group{name=alterReputation}

```zenscript
IQuestManager.alterReputation(var1 as double)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | double |


:::

:::group{name=attemptAcceptQuest}

Return Type: boolean

```zenscript
IQuestManager.attemptAcceptQuest(var1 as ResourceLocation, var2 as Player) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| var2      | [Player](/vanilla/api/entity/type/player/Player)           |


:::

:::group{name=completeQuest}

```zenscript
IQuestManager.completeQuest(var1 as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=deleteQuest}

```zenscript
IQuestManager.deleteQuest(var1 as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getAvailableOrInProgressQuest}

Return Type: [IQuestInstance](/mods/sdmcrtplus/integration/minecolonies/api/quests/IQuestInstance)?

```zenscript
IQuestManager.getAvailableOrInProgressQuest(var1 as ResourceLocation) as IQuestInstance?
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getGlobalServerQuest}

Return Type: **invalid**

```zenscript
// IQuestManager.getGlobalServerQuest() as invalid

myIQuestManager.getGlobalServerQuest();
```

:::

:::group{name=getReputation}

Return Type: double

```zenscript
// IQuestManager.getReputation() as double

myIQuestManager.getReputation();
```

:::

:::group{name=isUnlocked}

Return Type: boolean

```zenscript
IQuestManager.isUnlocked(var1 as ResourceLocation) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=onColonyTick}

```zenscript
// IQuestManager.onColonyTick()

myIQuestManager.onColonyTick();
```

:::

:::group{name=onWorldLoad}

```zenscript
// IQuestManager.onWorldLoad()

myIQuestManager.onWorldLoad();
```

:::

:::group{name=unlockQuest}

```zenscript
IQuestManager.unlockQuest(var1 as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


