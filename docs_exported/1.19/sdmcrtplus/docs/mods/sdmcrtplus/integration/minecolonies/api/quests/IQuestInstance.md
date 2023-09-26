# IQuestInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.quests.IQuestInstance;
```


## Methods

:::group{name=advanceObjective}

```zenscript
IQuestInstance.advanceObjective(var1 as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=advanceObjective}

Return Type: **invalid**

```zenscript
IQuestInstance.advanceObjective(var1 as Player, var2 as int) as invalid
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |
| var2      | int                                              |


:::

:::group{name=getAssignedPlayer}

Return Type: string

```zenscript
// IQuestInstance.getAssignedPlayer() as string

myIQuestInstance.getAssignedPlayer();
```

:::

:::group{name=getColony}

Return Type: [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)

```zenscript
// IQuestInstance.getColony() as IColony

myIQuestInstance.getColony();
```

:::

:::group{name=getCurrentObjectiveInstance}

Return Type: **invalid**?

```zenscript
// IQuestInstance.getCurrentObjectiveInstance() as invalid?

myIQuestInstance.getCurrentObjectiveInstance();
```

:::

:::group{name=getId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// IQuestInstance.getId() as ResourceLocation

myIQuestInstance.getId();
```

:::

:::group{name=getIndex}

Return Type: int

```zenscript
// IQuestInstance.getIndex() as int

myIQuestInstance.getIndex();
```

:::

:::group{name=getParticipant}

Return Type: **invalid**

```zenscript
IQuestInstance.getParticipant(var1 as int) as invalid
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getParticipants}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// IQuestInstance.getParticipants() as stdlib.List<int?>

myIQuestInstance.getParticipants();
```

:::

:::group{name=getQuestGiver}

Return Type: **invalid**

```zenscript
// IQuestInstance.getQuestGiver() as invalid

myIQuestInstance.getQuestGiver();
```

:::

:::group{name=getQuestGiverId}

Return Type: int

```zenscript
// IQuestInstance.getQuestGiverId() as int

myIQuestInstance.getQuestGiverId();
```

:::

:::group{name=isValid}

Return Type: boolean

```zenscript
IQuestInstance.isValid(var1 as IColony) as boolean
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=onCompletion}

```zenscript
// IQuestInstance.onCompletion()

myIQuestInstance.onCompletion();
```

:::

:::group{name=onDeletion}

```zenscript
// IQuestInstance.onDeletion()

myIQuestInstance.onDeletion();
```

:::

:::group{name=onStart}

```zenscript
IQuestInstance.onStart(var1 as Player, var2 as IColony)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player)                        |
| var2      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=onWorldLoad}

```zenscript
// IQuestInstance.onWorldLoad()

myIQuestInstance.onWorldLoad();
```

:::


