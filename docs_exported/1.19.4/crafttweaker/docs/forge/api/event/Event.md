# Event

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.Event;
```


## Methods

:::group{name=cancel}

Cancels the event. Same as `setCanceled(true)`

```zenscript
// Event.cancel()

myEvent.cancel();
```

:::

:::group{name=getResult}

Return Type: [EventResult](/forge/api/event/EventResult)

```zenscript
// Event.getResult() as EventResult

myEvent.getResult();
```

:::

:::group{name=hasResult}

Return Type: boolean

```zenscript
// Event.hasResult() as boolean

myEvent.hasResult();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// Event.isCancelable() as boolean

myEvent.isCancelable();
```

:::

:::group{name=isCanceled}

Return Type: boolean

```zenscript
// Event.isCanceled() as boolean

myEvent.isCanceled();
```

:::

:::group{name=setAllow}

sets the event's result to `allow`

```zenscript
// Event.setAllow()

myEvent.setAllow();
```

:::

:::group{name=setCanceled}

```zenscript
Event.setCanceled(cancel as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| cancel    | boolean |


:::

:::group{name=setDefault}

sets the event's result to `default`

```zenscript
// Event.setDefault()

myEvent.setDefault();
```

:::

:::group{name=setDeny}

sets the event's result to `deny`

```zenscript
// Event.setDeny()

myEvent.setDeny();
```

:::

:::group{name=setResult}

```zenscript
Event.setResult(result as EventResult)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| result    | [EventResult](/forge/api/event/EventResult) |


:::


## Properties

|    Name    |                    Type                     | Has Getter | Has Setter |
|------------|---------------------------------------------|------------|------------|
|            | [Event](/forge/api/event/Event)             | false      | true       |
| cancelable | boolean                                     | true       | false      |
| canceled   | boolean                                     | true       | true       |
| hasResult  | boolean                                     | true       | false      |
| result     | [EventResult](/forge/api/event/EventResult) | true       | false      |

