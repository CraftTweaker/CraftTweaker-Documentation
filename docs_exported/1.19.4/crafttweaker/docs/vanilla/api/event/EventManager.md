::since{version=11.0.0}
# EventManager

Manages the registration and handling of custom handlers for the various events of the game.

 You can register event handlers for pretty much everything, but make sure that the class you are referencing is
 documented as an event, otherwise you're in for a nasty surprise.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.EventManager;
```


## Methods

:::group{name=register since="11.0.0"}

Registers a new event listener.

```zenscript
EventManager.register<T : Object>(consumer as Consumer<T>)
```

| Parameter |       Type        |      Description       |
|-----------|-------------------|------------------------|
| consumer  | Consumer&lt;T&gt; | The event handler.     |
| T         | Object            | The type of the event. |


:::

:::group{name=register since="11.0.0"}

Registers a new event listener that can listen to cancelled events.

```zenscript
EventManager.register<T : Object>(listenToCanceled as boolean, consumer as Consumer<T>)
```

|    Parameter     |       Type        |                         Description                         |
|------------------|-------------------|-------------------------------------------------------------|
| listenToCanceled | boolean           | Whether cancelled events should also be listened to or not. |
| consumer         | Consumer&lt;T&gt; | The event handler.                                          |
| T                | Object            | The type of the event.                                      |


:::

:::group{name=register since="11.0.0"}

Registers a new event listener for the specified [EventPhase](/vanilla/api/event/EventPhase).

```zenscript
EventManager.register<T : Object>(phase as EventPhase, consumer as Consumer<T>)
```

| Parameter |                    Type                     |                    Description                     |
|-----------|---------------------------------------------|----------------------------------------------------|
| phase     | [EventPhase](/vanilla/api/event/EventPhase) | The phase on which the event should be registered. |
| consumer  | Consumer&lt;T&gt;                           | The event handler.                                 |
| T         | Object                                      | The type of the event.                             |


:::

:::group{name=register since="11.0.0"}

Registers a new event listener for the specified [EventPhase](/vanilla/api/event/EventPhase) that can listen to cancelled events.

```zenscript
EventManager.register<T : Object>(phase as EventPhase, listenToCanceled as boolean, consumer as Consumer<T>)
```

|    Parameter     |                    Type                     |                         Description                         |
|------------------|---------------------------------------------|-------------------------------------------------------------|
| phase            | [EventPhase](/vanilla/api/event/EventPhase) | The phase on which the event should be registered.          |
| listenToCanceled | boolean                                     | Whether cancelled events should also be listened to or not. |
| consumer         | Consumer&lt;T&gt;                           | The event handler.                                          |
| T                | Object                                      | The type of the event.                                      |


:::


