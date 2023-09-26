# Chapter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.Chapter;
```


## Extending QuestObject

Chapter extends [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject). That means all methods available in [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject) are also available in Chapter

## Methods

:::group{name=getFile}

Return Type: [QuestFile](/mods/sdmcrtplus/integration/ftbquest/QuestFile)

```zenscript
// Chapter.getFile() as QuestFile

myChapter.getFile();
```

:::

:::group{name=getGroup}

Return Type: [ChapterGroup](/mods/sdmcrtplus/integration/ftbquest/ChapterGroup)

```zenscript
// Chapter.getGroup() as ChapterGroup

myChapter.getGroup();
```

:::

:::group{name=getQuests}

Return Type: stdlib.List&lt;[Quest](/mods/sdmcrtplus/integration/ftbquest/Quest)&gt;

```zenscript
// Chapter.getQuests() as stdlib.List<Quest>

myChapter.getQuests();
```

:::


