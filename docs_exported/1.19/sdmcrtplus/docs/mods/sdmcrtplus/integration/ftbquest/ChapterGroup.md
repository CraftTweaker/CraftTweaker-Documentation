# ChapterGroup

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.ChapterGroup;
```


## Extending QuestObject

ChapterGroup extends [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject). That means all methods available in [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject) are also available in ChapterGroup

## Methods

:::group{name=getChapters}

Return Type: stdlib.List&lt;[Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)&gt;

```zenscript
// ChapterGroup.getChapters() as stdlib.List<Chapter>

myChapterGroup.getChapters();
```

:::

:::group{name=getChapters}

Return Type: stdlib.List&lt;[Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)&gt;

```zenscript
ChapterGroup.getChapters(teamData as TeamData) as stdlib.List<Chapter>
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| teamData  | [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData) |


:::

:::group{name=getIndex}

Return Type: int

```zenscript
ChapterGroup.getIndex(teamData as TeamData) as int
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| teamData  | [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData) |


:::


