# Quest

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.misc.Quest;
```


## Methods

:::group{name=getChapter}

Return Type: [Chapter](/mods/sixikutils/ftbquest/quests/Chapter)

```zenscript
// Quest.getChapter() as Chapter

myQuest.getChapter();
```

:::

:::group{name=getId}

Return Type: long

```zenscript
// Quest.getId() as long

myQuest.getId();
```

:::

:::group{name=getQuestFile}

Return Type: [QuestFile](/mods/sixikutils/ftbquest/quests/QuestFile)

```zenscript
// Quest.getQuestFile() as QuestFile

myQuest.getQuestFile();
```

:::

:::group{name=getRewards}

Return Type: stdlib.List&lt;[Reward](/mods/sixikutils/ftbquest/quests/Reward)&gt;

```zenscript
// Quest.getRewards() as stdlib.List<Reward>

myQuest.getRewards();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
// Quest.getString() as string

myQuest.getString();
```

:::

:::group{name=getTag}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// Quest.getTag() as stdlib.List<string>

myQuest.getTag();
```

:::


