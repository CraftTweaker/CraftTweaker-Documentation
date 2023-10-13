# CTEventManager

The event Manager is your go-to point if you want to register custom event handlers.

 You can register EventHandlers for everything that derives from [Event](/forge/api/event/Event).
 Make sure to tell ZC of the type you are using, so that you can access the event's properties.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.CTEventManager;
```


## Static Methods

:::group{name=register}

Registers a new Event listener.

```zenscript
// CTEventManager.register<T : Event>(consumer as Consumer<T>)

CTEventManager.register<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>((event) => {
 var player = event.player;
 var result = event.itemResult;
 println("Player '" + player.name + "' crafted " + result.commandString);
 });
CTEventManager.register<crafttweaker.api.event.MCEvent>((event) => {
 //Don't actually register a consumer for every event
 println("Some Event was captured");
 });
```

| Parameter |              Type               |          Description          |
|-----------|---------------------------------|-------------------------------|
| consumer  | Consumer&lt;T&gt;               | The event handler as consumer |
| T         | [Event](/forge/api/event/Event) | The type of the event         |


:::

:::group{name=register}

Registers a new Event listener.

```zenscript
// CTEventManager.register<T : Event>(listenToCancelled as boolean, consumer as Consumer<T>)

CTEventManager.register<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>(true, (event) => {
 var player = event.player;
 var result = event.itemResult;
 println("Player '" + player.name + "' crafted " + result.commandString);
 });
```

|     Parameter     |              Type               |                 Description                 |
|-------------------|---------------------------------|---------------------------------------------|
| listenToCancelled | boolean                         | should the event listen to cancelled events |
| consumer          | Consumer&lt;T&gt;               | The event handler as consumer               |
| T                 | [Event](/forge/api/event/Event) | The type of the event                       |


:::

:::group{name=register}

Registers a new Event listener with a specific priority.

```zenscript
// CTEventManager.register<T : Event>(priority as EventPriority, consumer as Consumer<T>)

CTEventManager.register<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>(EventPriority.HIGHEST, (event) => {
 var player = event.player;
 var result = event.itemResult;
 println("Player '" + player.name + "' crafted " + result.commandString);
 });
```

| Parameter |                      Type                       |          Description          |
|-----------|-------------------------------------------------|-------------------------------|
| priority  | [EventPriority](/forge/api/event/EventPriority) | priority for this listener    |
| consumer  | Consumer&lt;T&gt;                               | The event handler as consumer |
| T         | [Event](/forge/api/event/Event)                 | The type of the event         |


:::

:::group{name=register}

Registers a new Event listener with a specific priority.

```zenscript
// CTEventManager.register<T : Event>(listenToCancelled as boolean, priority as EventPriority, consumer as Consumer<T>)

CTEventManager.register<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>(true, EventPriority.HIGHEST, (event) => {
 var player = event.player;
 var result = event.itemResult;
 println("Player '" + player.name + "' crafted " + result.commandString);
 });
```

|     Parameter     |                      Type                       |                 Description                 |
|-------------------|-------------------------------------------------|---------------------------------------------|
| listenToCancelled | boolean                                         | should the event listen to cancelled events |
| priority          | [EventPriority](/forge/api/event/EventPriority) | priority for this listener                  |
| consumer          | Consumer&lt;T&gt;                               | The event handler as consumer               |
| T                 | [Event](/forge/api/event/Event)                 | The type of the event                       |


:::

