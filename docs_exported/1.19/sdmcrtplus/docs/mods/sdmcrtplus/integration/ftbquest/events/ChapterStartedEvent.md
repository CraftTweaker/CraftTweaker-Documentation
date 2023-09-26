# ChapterStartedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.events.ChapterStartedEvent;
```


## Extending Event

ChapterStartedEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in ChapterStartedEvent

## Methods

:::group{name=getChapter}

Return Type: [Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)

```zenscript
// ChapterStartedEvent.getChapter() as Chapter

myChapterStartedEvent.getChapter();
```

:::

:::group{name=getNotifyMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// ChapterStartedEvent.getNotifyMembers() as stdlib.List<ServerPlayer>

myChapterStartedEvent.getNotifyMembers();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// ChapterStartedEvent.getOnlineMembers() as stdlib.List<ServerPlayer>

myChapterStartedEvent.getOnlineMembers();
```

:::

:::group{name=getTeam}

Return Type: [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData)

```zenscript
// ChapterStartedEvent.getTeam() as TeamData

myChapterStartedEvent.getTeam();
```

:::

:::group{name=getTime}

Return Type: [Data](/mods/sdmcrtplus/utils/Data)

```zenscript
// ChapterStartedEvent.getTime() as Data

myChapterStartedEvent.getTime();
```

:::


## Properties

|     Name      |                                      Type                                       | Has Getter | Has Setter |
|---------------|---------------------------------------------------------------------------------|------------|------------|
| chapter       | [Chapter](/mods/sdmcrtplus/integration/ftbquest/Chapter)                        | true       | false      |
| notifyMembers | stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt; | true       | false      |
| onlineMembers | stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt; | true       | false      |
| team          | [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData)                      | true       | false      |

