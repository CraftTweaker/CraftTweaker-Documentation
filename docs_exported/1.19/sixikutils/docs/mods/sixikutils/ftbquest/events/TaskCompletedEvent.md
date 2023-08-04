# TaskCompletedEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.ftbquest.api.events.TaskCompletedEvent;
```


## Extending Event

TaskCompletedEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in TaskCompletedEvent

## Methods

:::group{name=getNotifiedPlayers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// TaskCompletedEvent.getNotifiedPlayers() as stdlib.List<ServerPlayer>

myTaskCompletedEvent.getNotifiedPlayers();
```

:::

:::group{name=getOnlineMembers}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// TaskCompletedEvent.getOnlineMembers() as stdlib.List<ServerPlayer>

myTaskCompletedEvent.getOnlineMembers();
```

:::

:::group{name=getTask}

Return Type: [Task](/mods/sixikutils/ftbquest/quests/Task)

```zenscript
// TaskCompletedEvent.getTask() as Task

myTaskCompletedEvent.getTask();
```

:::

:::group{name=getTeam}

Return Type: [TeamData](/mods/sixikutils/ftbquest/quests/TeamData)

```zenscript
// TaskCompletedEvent.getTeam() as TeamData

myTaskCompletedEvent.getTeam();
```

:::

:::group{name=getTime}

Return Type: long

```zenscript
// TaskCompletedEvent.getTime() as long

myTaskCompletedEvent.getTime();
```

:::


