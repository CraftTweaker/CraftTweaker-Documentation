# QuestStartedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.events.QuestStartedEvent;
```


## Extending Event

QuestStartedEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in QuestStartedEvent

## Methods

:::group{name=getNotifyMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// QuestStartedEvent.getNotifyMembers() as stdlib.List<ServerPlayer>

myQuestStartedEvent.getNotifyMembers();
```

:::

:::group{name=getObject}

Return Type: [Quest](/mods/sixikutils/ftbquest/quests/Quest)

```zenscript
// QuestStartedEvent.getObject() as Quest

myQuestStartedEvent.getObject();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// QuestStartedEvent.getOnlineMembers() as stdlib.List<ServerPlayer>

myQuestStartedEvent.getOnlineMembers();
```

:::

:::group{name=getQuest}

Return Type: [Quest](/mods/sixikutils/ftbquest/quests/Quest)

```zenscript
// QuestStartedEvent.getQuest() as Quest

myQuestStartedEvent.getQuest();
```

:::

:::group{name=getTeam}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
// QuestStartedEvent.getTeam() as TeamData

myQuestStartedEvent.getTeam();
```

:::


