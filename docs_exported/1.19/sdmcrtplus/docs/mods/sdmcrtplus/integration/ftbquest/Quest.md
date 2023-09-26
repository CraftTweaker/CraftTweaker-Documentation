# Quest

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.Quest;
```


## Extending QuestObject

Quest extends [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject). That means all methods available in [QuestObject](/mods/sdmcrtplus/integration/ftbquest/QuestObject) are also available in Quest

## Methods

:::group{name=getRewards}

Return Type: stdlib.List&lt;[Reward](/mods/sdmcrtplus/integration/ftbquest/Reward)&gt;

```zenscript
// Quest.getRewards() as stdlib.List<Reward>

myQuest.getRewards();
```

:::

:::group{name=getTasks}

Return Type: stdlib.List&lt;[Task](/mods/sdmcrtplus/integration/ftbquest/Task)&gt;

```zenscript
// Quest.getTasks() as stdlib.List<Task>

myQuest.getTasks();
```

:::


