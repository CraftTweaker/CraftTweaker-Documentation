# MCEvent

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.MCEvent;
```


## Методы

:::group{name=cancel}

Cancels the event. Same as `setCanceled(true)`

Return Type: void

```zenscript
// MCEvent.cancel() as void

myMCEvent.cancel();
```

:::

:::group{name=hasResult}

Return Type: boolean

```zenscript
// MCEvent.hasResult() as boolean

myMCEvent.hasResult();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// MCEvent.isCancelable() as boolean

myMCEvent.isCancelable();
```

:::

:::group{name=isCanceled}

Return Type: boolean

```zenscript
// MCEvent.isCanceled() as boolean

myMCEvent.isCanceled();
```

:::

:::group{name=setAllow}

sets the event's result to `allow`

Return Type: void

```zenscript
// MCEvent.setAllow() as void

myMCEvent.setAllow();
```

:::

:::group{name=setCanceled}

Return Type: void

```zenscript
MCEvent.setCanceled(cancel as boolean) as void
```

| Параметр | Тип     | Описание                |
| -------- | ------- | ----------------------- |
| cancel   | boolean | No Description Provided |


:::

:::group{name=setDefault}

sets the event's result to `default`

Return Type: void

```zenscript
// MCEvent.setDefault() as void

myMCEvent.setDefault();
```

:::

:::group{name=setDeny}

sets the event's result to `deny`

Return Type: void

```zenscript
// MCEvent.setDeny() as void

myMCEvent.setDeny();
```

:::


## Свойства

| Название   | Тип     | Имеет Getter | Имеет Setter | Описание                |
| ---------- | ------- | ------------ | ------------ | ----------------------- |
| cancelable | boolean | true         | false        | No Description Provided |
| canceled   | boolean | true         | true         | No Description Provided |
| hasResult  | boolean | true         | false        | No Description Provided |

