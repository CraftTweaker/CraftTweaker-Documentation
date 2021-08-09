# CTEventManager

The event Manager is your go-to point if you want to register custom event handlers.

 You can register EventHandlers for everything that derives from [MCEvent](/vanilla/api/event/MCEvent). Make sure to tell ZC of the type you are using, so that you can access the event's properties.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.events.CTEventManager;
```


## Static Methods

:::group{name=register}

Registers a new Event listener.

Return Type: void

```zenscript
// CTEventManager.register<T : MCEvent>(consumer as Consumer<T>) as void

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

| 参数  | 类型                                    | 描述                            |
| --- | ------------------------------------- | ----------------------------- |
| 消费者 | Consumer&lt;T&gt;         | The event handler as consumer |
| T   | [MCEvent](/vanilla/api/event/MCEvent) | The type of the event         |


:::

:::group{name=register}

Registers a new Event listener with a specific priority.

Return Type: void

```zenscript
// CTEventManager.register<T : MCEvent>(priority as EventPriority, consumer as Consumer<T>) as void

CTEventManager.register<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>(EventPriority.HIGHEST, (event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 });
```

| 参数       | 类型                                                | 描述                            |
| -------- | ------------------------------------------------- | ----------------------------- |
| priority | [EventPriority](/vanilla/api/event/EventPriority) | priority for this listener    |
| 消费者      | Consumer&lt;T&gt;                     | The event handler as consumer |
| T        | [MCEvent](/vanilla/api/event/MCEvent)             | The type of the event         |


:::

