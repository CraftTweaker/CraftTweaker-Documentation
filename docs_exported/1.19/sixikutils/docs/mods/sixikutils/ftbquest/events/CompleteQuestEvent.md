# CompleteQuestEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.events.CompleteQuestEvent;
```


## Extending Event

CompleteQuestEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in CompleteQuestEvent

## Methods

:::group{name=getNotifyMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// CompleteQuestEvent.getNotifyMembers() as stdlib.List<ServerPlayer>

myCompleteQuestEvent.getNotifyMembers();
```

:::

:::group{name=getObject}

Return Type: [Quest](/mods/sixikutils/ftbquest/quests/Quest)

```zenscript
// CompleteQuestEvent.getObject() as Quest

myCompleteQuestEvent.getObject();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// CompleteQuestEvent.getOnlineMembers() as stdlib.List<ServerPlayer>

myCompleteQuestEvent.getOnlineMembers();
```

:::

:::group{name=getQuest}

Return Type: [Quest](/mods/sixikutils/ftbquest/quests/Quest)

```zenscript
// CompleteQuestEvent.getQuest() as Quest

myCompleteQuestEvent.getQuest();
```

:::

:::group{name=getTeam}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
// CompleteQuestEvent.getTeam() as TeamData

myCompleteQuestEvent.getTeam();
```

:::


