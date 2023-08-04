# Chapter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.misc.Chapter;
```


## Methods

:::group{name=getAlwaysInvisible}

Return Type: boolean

```zenscript
// Chapter.getAlwaysInvisible() as boolean

myChapter.getAlwaysInvisible();
```

:::

:::group{name=getDefaultHideDependencyLines}

Return Type: boolean

```zenscript
// Chapter.getDefaultHideDependencyLines() as boolean

myChapter.getDefaultHideDependencyLines();
```

:::

:::group{name=getFilename}

Return Type: string

```zenscript
// Chapter.getFilename() as string

myChapter.getFilename();
```

:::

:::group{name=getGroup}

Return Type: [ChapterGroup](/mods/sixikutils/ftbquest/quests/ChapterGroup)

```zenscript
// Chapter.getGroup() as ChapterGroup

myChapter.getGroup();
```

:::

:::group{name=getId}

Return Type: long

```zenscript
// Chapter.getId() as long

myChapter.getId();
```

:::

:::group{name=getQuestFile}

Return Type: [QuestFile](/mods/sixikutils/ftbquest/quests/QuestFile)

```zenscript
// Chapter.getQuestFile() as QuestFile

myChapter.getQuestFile();
```

:::

:::group{name=getQuests}

Return Type: stdlib.List&lt;[Quest](/mods/sixikutils/ftbquest/quests/Quest)&gt;

```zenscript
// Chapter.getQuests() as stdlib.List<Quest>

myChapter.getQuests();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
// Chapter.getString() as string

myChapter.getString();
```

:::

:::group{name=getSubtitle}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// Chapter.getSubtitle() as stdlib.List<string>

myChapter.getSubtitle();
```

:::

:::group{name=getTag}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// Chapter.getTag() as stdlib.List<string>

myChapter.getTag();
```

:::

:::group{name=getTitle}

Return Type: string

```zenscript
// Chapter.getTitle() as string

myChapter.getTitle();
```

:::

:::group{name=setAlwaysInvisible}

```zenscript
Chapter.setAlwaysInvisible(t as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| t         | boolean |


:::

:::group{name=setId}

```zenscript
Chapter.setId(id as long)
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::


## Properties

|            Name            |                                Type                                | Has Getter | Has Setter |
|----------------------------|--------------------------------------------------------------------|------------|------------|
| alwaysInvisible            | boolean                                                            | true       | true       |
| defaultHideDependencyLines | boolean                                                            | true       | false      |
| filename                   | string                                                             | true       | false      |
| group                      | [ChapterGroup](/mods/sixikutils/ftbquest/quests/ChapterGroup)      | true       | false      |
| id                         | long                                                               | true       | true       |
| quests                     | stdlib.List&lt;[Quest](/mods/sixikutils/ftbquest/quests/Quest)&gt; | true       | false      |
| subtitle                   | stdlib.List&lt;string&gt;                                          | true       | false      |
| title                      | string                                                             | true       | false      |

