# TeamData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.misc.TeamData;
```


## Methods

:::group{name=addProgress}

Allows you to add progress to the task. This is most often used for custom tasks, but it can be any other tasks.

Return Type: boolean

```zenscript
TeamData.addProgress(id as string, progress as long) as boolean
```

| Parameter |  Type  |                                                                   Description                                                                    |
|-----------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| id        | string | - id tasks or quest                                                                                                                              |
| progress  | long   | this is the amount by which the task will be completed. If it is a tick, then from 0 - 1. If everything else, then from 0 to the desired amount. |


:::

:::group{name=addProgress}

Allows you to add progress to the task. This is most often used for custom tasks, but it can be any other tasks.

```zenscript
TeamData.addProgress(task as Task, progress as long)
```

| Parameter |                     Type                      |                                                                   Description                                                                    |
|-----------|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| task      | [Task](/mods/sixikutils/ftbquest/quests/Task) |                                                                                                                                                  |
| progress  | long                                          | this is the amount by which the task will be completed. If it is a tick, then from 0 - 1. If everything else, then from 0 to the desired amount. |


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

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


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

| Parameter |   Type   |                                                                                                   Description                                                                                                   |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id        | string   | - id tasks or quest                                                                                                                                                                                             |
| consumer  | Consumer | - the type that participates in the task. If you have a condition in the task for fulfilling the number of things, then consumer will have the values long, if it is a tick, then true or false, or from 0 to 1 |


:::

:::group{name=complete}



```zenscript
TeamData.complete(id as string)
```

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


:::

:::group{name=getFile}

Allows you to get a file in which all the parameters of the FBT Quest mod are saved.

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

Allows you to get the name of the team

Return Type: string

```zenscript
// TeamData.getName() as string

myTeamData.getName();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[Player](/vanilla/api/entity/type/player/Player)&gt;

```zenscript
// TeamData.getOnlineMembers() as stdlib.List<Player>

myTeamData.getOnlineMembers();
```

:::

:::group{name=getProgress}



Return Type: long

```zenscript
TeamData.getProgress(id as long) as long
```

| Parameter | Type |     Description     |
|-----------|------|---------------------|
| id        | long | - id tasks or quest |


:::

:::group{name=getProgress}

Return Type: long

```zenscript
TeamData.getProgress(task as Task) as long
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| task      | [Task](/mods/sixikutils/ftbquest/quests/Task) |


:::

:::group{name=getRelativeProgress}



Return Type: int

```zenscript
TeamData.getRelativeProgress(id as string) as int
```

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


:::

:::group{name=getRelativeProgress}

Return Type: int

```zenscript
TeamData.getRelativeProgress(quest as Quest) as int
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| quest     | [Quest](/mods/sixikutils/ftbquest/quests/Quest) |


:::

:::group{name=getTaskProgress}



Return Type: long

```zenscript
TeamData.getTaskProgress(id as string) as long
```

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


:::

:::group{name=getUUID}

Allows you to get the team id

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

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


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

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


:::

:::group{name=reset}



```zenscript
TeamData.reset(id as string)
```

| Parameter |  Type  |     Description     |
|-----------|--------|---------------------|
| id        | string | - id tasks or quest |


:::

:::group{name=setLocked}

```zenscript
TeamData.setLocked(v as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| v         | boolean |


:::


