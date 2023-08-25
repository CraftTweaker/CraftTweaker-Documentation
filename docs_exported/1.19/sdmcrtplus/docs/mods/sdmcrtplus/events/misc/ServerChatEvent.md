# ServerChatEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.misc.ServerChatEvent;
```


## Extending Event

ServerChatEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in ServerChatEvent

## Methods

:::group{name=getComponent}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// ServerChatEvent.getComponent() as Component

myServerChatEvent.getComponent();
```

:::

:::group{name=getMessage}

Return Type: string

```zenscript
// ServerChatEvent.getMessage() as string

myServerChatEvent.getMessage();
```

:::

:::group{name=getPlayer}

Return Type: [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)

```zenscript
// ServerChatEvent.getPlayer() as ServerPlayer

myServerChatEvent.getPlayer();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// ServerChatEvent.getResult() as EventResult

myServerChatEvent.getResult();
```

:::

:::group{name=getUsername}

Return Type: string

```zenscript
// ServerChatEvent.getUsername() as string

myServerChatEvent.getUsername();
```

:::


