# CompleteChapterEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.events.CompleteChapterEvent;
```


## Extending Event

CompleteChapterEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in CompleteChapterEvent

## Methods

:::group{name=getChapter}

Return Type: [Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)

```zenscript
// CompleteChapterEvent.getChapter() as Chapter

myCompleteChapterEvent.getChapter();
```

:::

:::group{name=getNotifyMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// CompleteChapterEvent.getNotifyMembers() as stdlib.List<ServerPlayer>

myCompleteChapterEvent.getNotifyMembers();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// CompleteChapterEvent.getOnlineMembers() as stdlib.List<ServerPlayer>

myCompleteChapterEvent.getOnlineMembers();
```

:::

:::group{name=getTeam}

Return Type: [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData)

```zenscript
// CompleteChapterEvent.getTeam() as TeamData

myCompleteChapterEvent.getTeam();
```

:::

:::group{name=getTime}

Return Type: [Data](/mods/sdmcrtplus/utils/Data)

```zenscript
// CompleteChapterEvent.getTime() as Data

myCompleteChapterEvent.getTime();
```

:::


