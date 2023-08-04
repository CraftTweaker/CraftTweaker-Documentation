# TaskStartedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.events.TaskStartedEvent;
```


## Extending Event

TaskStartedEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in TaskStartedEvent

## Methods

:::group{name=getNotifiedPlayers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// TaskStartedEvent.getNotifiedPlayers() as stdlib.List<ServerPlayer>

myTaskStartedEvent.getNotifiedPlayers();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// TaskStartedEvent.getOnlineMembers() as stdlib.List<ServerPlayer>

myTaskStartedEvent.getOnlineMembers();
```

:::

:::group{name=getTask}

Return Type: [Task](/mods/sixikutils/ftbquest/quests/Task)

```zenscript
// TaskStartedEvent.getTask() as Task

myTaskStartedEvent.getTask();
```

:::

:::group{name=getTeamData}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
// TaskStartedEvent.getTeamData() as TeamData

myTaskStartedEvent.getTeamData();
```

:::

:::group{name=getTime}

Return Type: long

```zenscript
// TaskStartedEvent.getTime() as long

myTaskStartedEvent.getTime();
```

:::


