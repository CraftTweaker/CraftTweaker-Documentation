# EntityMobGriefingEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.EntityMobGriefingEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.EntityMobGriefingEvent>(event => {
    println("EntityMobGriefingEvent ran!");
});
```


## Supertype

EntityMobGriefingEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in EntityMobGriefingEvent

