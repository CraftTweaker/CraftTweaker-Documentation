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

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| cancel | 布尔值 | No Description Provided |


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

| 参数     | 类型                                          | 描述                      |
| ------ | ------------------------------------------- | ----------------------- |
| result | [EventResult](/forge/api/event/EventResult) | No Description Provided |


:::


## 参数

| 名称         | 类型                                          | 可获得   | 可设置   | 描述                      |
| ---------- | ------------------------------------------- | ----- | ----- | ----------------------- |
|            | [Event](/forge/api/event/Event)             | false | true  | No Description Provided |
| cancelable | 布尔值                                         | true  | false | No Description Provided |
| canceled   | 布尔值                                         | true  | true  | No Description Provided |
| hasResult  | 布尔值                                         | true  | false | No Description Provided |
| result     | [EventResult](/forge/api/event/EventResult) | true  | false | No Description Provided |

