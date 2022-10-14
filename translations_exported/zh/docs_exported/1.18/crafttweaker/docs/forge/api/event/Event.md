# Event

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.Event;
```


## 使用方式

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

| 参数     | 类型  |
| ------ | --- |
| cancel | 布尔值 |


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

| 参数     | 类型                                          |
| ------ | ------------------------------------------- |
| result | [EventResult](/forge/api/event/EventResult) |


:::


## 参数

| 名称         | 类型                                          | 可获得   | 可设置   |
| ---------- | ------------------------------------------- | ----- | ----- |
|            | [Event](/forge/api/event/Event)             | false | true  |
| cancelable | 布尔值                                         | true  | false |
| canceled   | 布尔值                                         | true  | true  |
| hasResult  | 布尔值                                         | true  | false |
| result     | [EventResult](/forge/api/event/EventResult) | true  | false |

