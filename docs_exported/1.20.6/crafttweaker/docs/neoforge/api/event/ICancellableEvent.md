# ICancellableEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.event.ICancellableEvent;
```


## Methods

:::group{name=cancel}

Cancels the event. Same as `setCanceled(true)`

```zenscript
// ICancellableEvent.cancel()

myICancellableEvent.cancel();
```

:::

:::group{name=isCanceled}

Return Type: boolean

```zenscript
// ICancellableEvent.isCanceled() as boolean

myICancellableEvent.isCanceled();
```

:::

:::group{name=setCanceled}

```zenscript
ICancellableEvent.setCanceled(cancel as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| cancel    | boolean |


:::


## Properties

|   Name   |  Type   | Has Getter | Has Setter |
|----------|---------|------------|------------|
| canceled | boolean | true       | true       |

