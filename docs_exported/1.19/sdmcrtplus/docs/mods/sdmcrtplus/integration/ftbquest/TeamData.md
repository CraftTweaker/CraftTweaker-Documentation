# TeamData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.TeamData;
```


## Methods

:::group{name=addProgress}

```zenscript
TeamData.addProgress(task as QuestObject)
```

| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| task      | [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject) |


:::

:::group{name=addProgress}

```zenscript
TeamData.addProgress(task as Task, progress as long)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| task      | [Task](/mods/sdmcrtplus/integration/ftbquest/Task) |
| progress  | long                                               |


:::

:::group{name=areDependenciesComplete}

Return Type: boolean

```zenscript
TeamData.areDependenciesComplete(quest as Quest) as boolean
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| quest     | [Quest](/mods/sdmcrtplus/integration/ftbquest/Quest) |


:::

:::group{name=canStartTasks}

Return Type: boolean

```zenscript
TeamData.canStartTasks(quest as Quest) as boolean
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| quest     | [Quest](/mods/sdmcrtplus/integration/ftbquest/Quest) |


:::

:::group{name=canStartTasks}

Return Type: boolean

```zenscript
TeamData.canStartTasks(quest as QuestObject) as boolean
```

| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| quest     | [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject) |


:::

:::group{name=getCompletedTime}

Return Type: [Data](/mods/sdmcrtplus/utils/Data)

```zenscript
TeamData.getCompletedTime(task as long) as Data
```

| Parameter | Type |
|-----------|------|
| task      | long |


:::

:::group{name=getFile}

Return Type: [QuestFile](/mods/sdmcrtplus/integration/ftbquest/QuestFile)

```zenscript
// TeamData.getFile() as QuestFile

myTeamData.getFile();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// TeamData.getName() as string

myTeamData.getName();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// TeamData.getOnlineMembers() as stdlib.List<ServerPlayer>

myTeamData.getOnlineMembers();
```

:::

:::group{name=getProgress}

Return Type: long

```zenscript
TeamData.getProgress(quest as long) as long
```

| Parameter | Type |
|-----------|------|
| quest     | long |


:::

:::group{name=getProgress}

Return Type: long

```zenscript
TeamData.getProgress(quest as Task) as long
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| quest     | [Task](/mods/sdmcrtplus/integration/ftbquest/Task) |


:::

:::group{name=getUUID}

Return Type: string

```zenscript
// TeamData.getUUID() as string

myTeamData.getUUID();
```

:::


