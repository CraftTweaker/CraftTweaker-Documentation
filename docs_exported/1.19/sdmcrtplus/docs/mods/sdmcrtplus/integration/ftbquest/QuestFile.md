# QuestFile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.QuestFile;
```


## Extending QuestObject

QuestFile extends [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject). That means all methods available in [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject) are also available in QuestFile

## Methods

:::group{name=getAllChapters}

Return Type: stdlib.List&lt;[Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)&gt;

```zenscript
// QuestFile.getAllChapters() as stdlib.List<Chapter>

myQuestFile.getAllChapters();
```

:::

:::group{name=getAllData}

Return Type: Collection&lt;[TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData)&gt;

```zenscript
// QuestFile.getAllData() as Collection<TeamData>

myQuestFile.getAllData();
```

:::

:::group{name=getAllObjects}

Return Type: Collection&lt;[QuestObjectBase](/mods/sdmcrtplus/integration/ftbquest/QuestObjectBase)&gt;

```zenscript
// QuestFile.getAllObjects() as Collection<QuestObjectBase>

myQuestFile.getAllObjects();
```

:::

:::group{name=getAllTasks}

Return Type: stdlib.List&lt;[Task](/mods/sdmcrtplus/integration/ftbquest/Task)&gt;

```zenscript
// QuestFile.getAllTasks() as stdlib.List<Task>

myQuestFile.getAllTasks();
```

:::

:::group{name=getBase}

Return Type: [QuestObjectBase](/mods/sdmcrtplus/integration/ftbquest/QuestObjectBase)

```zenscript
QuestFile.getBase(id as long) as QuestObjectBase
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=getChapter}

Return Type: [Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)

```zenscript
QuestFile.getChapter(id as long) as Chapter
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=getChapterGroup}

Return Type: [ChapterGroup](/mods/sdmcrtplus/integration/ftbquest/ChapterGroup)

```zenscript
QuestFile.getChapterGroup(id as long) as ChapterGroup
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=getObject}

Return Type: [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject)

```zenscript
QuestFile.getObject(id as long) as QuestObject
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=getQuest}

Return Type: [Quest](/mods/sdmcrtplus/integration/ftbquest/Quest)

```zenscript
QuestFile.getQuest(id as long) as Quest
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=getReward}

Return Type: [Reward](/mods/sdmcrtplus/integration/ftbquest/Reward)

```zenscript
QuestFile.getReward(id as long) as Reward
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=isServerSide}

Return Type: boolean

```zenscript
// QuestFile.isServerSide() as boolean

myQuestFile.isServerSide();
```

:::


