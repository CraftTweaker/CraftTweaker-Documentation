# TeamData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.misc.TeamData;
```


## Methods

:::group{name=addProgress}

Return Type: boolean

```zenscript
TeamData.addProgress(id as string, progress as long) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |
| progress  | long   |


:::

:::group{name=addProgress}

```zenscript
TeamData.addProgress(task as Task, p as long)
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| task      | [Task](/mods/sixikutils/ftbquest/quests/Task) |
| p         | long                                          |


:::

:::group{name=areDependenciesComplete}

Return Type: boolean

```zenscript
TeamData.areDependenciesComplete(quest as Quest) as boolean
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| quest     | [Quest](/mods/sixikutils/ftbquest/quests/Quest) |


:::

:::group{name=canStartQuest}

Return Type: boolean

```zenscript
TeamData.canStartQuest(id as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=canStartTasks}

Return Type: boolean

```zenscript
TeamData.canStartTasks(quest as Quest) as boolean
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| quest     | [Quest](/mods/sixikutils/ftbquest/quests/Quest) |


:::

:::group{name=changeProgress}

```zenscript
TeamData.changeProgress(id as string, consumer as Consumer)
```

| Parameter |   Type   |
|-----------|----------|
| id        | string   |
| consumer  | Consumer |


:::

:::group{name=complete}

```zenscript
TeamData.complete(id as string)
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=getFile}

Return Type: [QuestFile](/mods/sixikutils/ftbquest/quests/QuestFile)

```zenscript
// TeamData.getFile() as QuestFile

myTeamData.getFile();
```

:::

:::group{name=getLocked}

Return Type: boolean

```zenscript
// TeamData.getLocked() as boolean

myTeamData.getLocked();
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

Return Type: stdlib.List&lt;[Player](/mods/sixikutils/curios/player/Player)&gt;

```zenscript
// TeamData.getOnlineMembers() as stdlib.List<Player>

myTeamData.getOnlineMembers();
```

:::

:::group{name=getProgress}

Return Type: long

```zenscript
TeamData.getProgress(p as long) as long
```

| Parameter | Type |
|-----------|------|
| p         | long |


:::

:::group{name=getProgress}

Return Type: long

```zenscript
TeamData.getProgress(p as Task) as long
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| p         | [Task](/mods/sixikutils/ftbquest/quests/Task) |


:::

:::group{name=getRelativeProgress}

Return Type: int

```zenscript
TeamData.getRelativeProgress(id as string) as int
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=getRelativeProgress}

Return Type: int

```zenscript
TeamData.getRelativeProgress(q as Quest) as int
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| q         | [Quest](/mods/sixikutils/ftbquest/quests/Quest) |


:::

:::group{name=getTaskProgress}

Return Type: long

```zenscript
TeamData.getTaskProgress(id as string) as long
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=getUUID}

Return Type: string

```zenscript
// TeamData.getUUID() as string

myTeamData.getUUID();
```

:::

:::group{name=isCompleted}

Return Type: boolean

```zenscript
TeamData.isCompleted(id as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=isCompleted}

Return Type: boolean

```zenscript
TeamData.isCompleted(quest as Quest) as boolean
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| quest     | [Quest](/mods/sixikutils/ftbquest/quests/Quest) |


:::

:::group{name=isStarted}

Return Type: boolean

```zenscript
TeamData.isStarted(id as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=reset}

```zenscript
TeamData.reset(id as string)
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=setLocked}

```zenscript
TeamData.setLocked(v as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| v         | boolean |


:::


