# Event

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.Event;
```


## Metodi

:::group{name=cancel}

Cancels the event. Same as `setCanceled(true)`

Return Type: void

```zenscript
// Event.cancel() as void

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

Return Type: void

```zenscript
// Event.setAllow() as void

myEvent.setAllow();
```

:::

:::group{name=setCanceled}

Return Type: void

```zenscript
Event.setCanceled(cancel as boolean) as void
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No Description Provided |


:::

:::group{name=setDefault}

sets the event's result to `default`

Return Type: void

```zenscript
// Event.setDefault() as void

myEvent.setDefault();
```

:::

:::group{name=setDeny}

sets the event's result to `deny`

Return Type: void

```zenscript
// Event.setDeny() as void

myEvent.setDeny();
```

:::

:::group{name=setResult}

Return Type: void

```zenscript
Event.setResult(result as EventResult) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| result    | [EventResult](/forge/api/event/EventResult) | No Description Provided |


:::


## Proprietà

| Nome       | Tipo                                        | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------------------------------------------- | --------- | --------- | ----------------------- |
|            | [Event](/forge/api/event/Event)             | no        | sì        | No Description Provided |
| cancelable | boolean                                     | sì        | no        | No Description Provided |
| canceled   | boolean                                     | sì        | sì        | No Description Provided |
| hasResult  | boolean                                     | sì        | no        | No Description Provided |
| result     | [EventResult](/forge/api/event/EventResult) | sì        | no        | No Description Provided |

