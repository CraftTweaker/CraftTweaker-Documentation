# QuestFile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.misc.QuestFile;
```


## Methods

:::group{name=getAllChapters}

Return Type: stdlib.List&lt;[Chapter](/mods/sixikutils/ftbquest/quests/Chapter)&gt;

```zenscript
// QuestFile.getAllChapters() as stdlib.List<Chapter>

myQuestFile.getAllChapters();
```

:::

:::group{name=getAllData}

Return Type: stdlib.List&lt;[TeamData](/mods/sixikutils/ftbquest/quests/TeamData)&gt;

```zenscript
// QuestFile.getAllData() as stdlib.List<TeamData>

myQuestFile.getAllData();
```

:::

:::group{name=getAllQuest}

Return Type: stdlib.List&lt;[Quest](/mods/sixikutils/ftbquest/quests/Quest)&gt;

```zenscript
// QuestFile.getAllQuest() as stdlib.List<Quest>

myQuestFile.getAllQuest();
```

:::

:::group{name=getAllQuestId}

Return Type: stdlib.List&lt;long?&gt;

```zenscript
// QuestFile.getAllQuestId() as stdlib.List<long?>

myQuestFile.getAllQuestId();
```

:::

:::group{name=getAllQuestString}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// QuestFile.getAllQuestString() as stdlib.List<string>

myQuestFile.getAllQuestString();
```

:::

:::group{name=getAllTasks}

Return Type: stdlib.List&lt;[Task](/mods/sixikutils/ftbquest/quests/Task)&gt;

```zenscript
// QuestFile.getAllTasks() as stdlib.List<Task>

myQuestFile.getAllTasks();
```

:::

:::group{name=getChapter}

Return Type: [Chapter](/mods/sixikutils/ftbquest/quests/Chapter)

```zenscript
QuestFile.getChapter(l as long) as Chapter
```

| Parameter | Type |
|-----------|------|
| l         | long |


:::

:::group{name=getData}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
QuestFile.getData(uuid as invalid) as TeamData
```

| Parameter |    Type     |
|-----------|-------------|
| uuid      | **invalid** |


:::

:::group{name=getData}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
QuestFile.getData(uuid as Player) as TeamData
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| uuid      | [Player](/mods/sixikutils/curios/player/Player) |


:::

:::group{name=getData}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
QuestFile.getData(uuid as string) as TeamData
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=getQuest}

Return Type: [Quest](/mods/sixikutils/ftbquest/quests/Quest)

```zenscript
QuestFile.getQuest(l as long) as Quest
```

| Parameter | Type |
|-----------|------|
| l         | long |


:::

:::group{name=getQuestsData}

Return Type: string[long?][string]

```zenscript
// QuestFile.getQuestsData() as string[long?][string]

myQuestFile.getQuestsData();
```

:::

:::group{name=getReward}

Return Type: [Reward](/mods/sixikutils/ftbquest/quests/Reward)

```zenscript
QuestFile.getReward(l as long) as Reward
```

| Parameter | Type |
|-----------|------|
| l         | long |


:::

:::group{name=getTask}

Return Type: [Task](/mods/sixikutils/ftbquest/quests/Task)

```zenscript
QuestFile.getTask(l as long) as Task
```

| Parameter | Type |
|-----------|------|
| l         | long |


:::


