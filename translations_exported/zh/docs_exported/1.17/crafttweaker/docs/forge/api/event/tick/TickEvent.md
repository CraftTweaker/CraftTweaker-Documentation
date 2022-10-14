# TickEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.TickEvent;
```


## Extending Event

TickEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in TickEvent

## 使用方式

:::group{name=getPhase}

Return Type: [Phase](/forge/api/event/tick/Phase)

```zenscript
// TickEvent.getPhase() as Phase

myTickEvent.getPhase();
```

:::

:::group{name=getSide}

Return Type: string

```zenscript
// TickEvent.getSide() as string

myTickEvent.getSide();
```

:::

:::group{name=getType}

Return Type: [Type](/forge/api/event/tick/Type)

```zenscript
// TickEvent.getType() as Type

myTickEvent.getType();
```

:::

:::group{name=isClient}

Return Type: boolean

```zenscript
// TickEvent.isClient() as boolean

myTickEvent.isClient();
```

:::

:::group{name=isEnd}

Return Type: boolean

```zenscript
// TickEvent.isEnd() as boolean

myTickEvent.isEnd();
```

:::

:::group{name=isServer}

Return Type: boolean

```zenscript
// TickEvent.isServer() as boolean

myTickEvent.isServer();
```

:::

:::group{name=isStart}

Return Type: boolean

```zenscript
// TickEvent.isStart() as boolean

myTickEvent.isStart();
```

:::


## 参数

| 名称     | 类型                                   | 可获得  | 可设置   | 描述                      |
| ------ | ------------------------------------ | ---- | ----- | ----------------------- |
| client | 布尔值                                  | true | false | No Description Provided |
| 结束     | 布尔值                                  | true | false | No Description Provided |
| phase  | [Phase](/forge/api/event/tick/Phase) | true | false | No Description Provided |
| server | 布尔值                                  | true | false | No Description Provided |
| side   | string                               | true | false | No Description Provided |
| 开始     | 布尔值                                  | true | false | No Description Provided |
| 类型     | [类型](/forge/api/event/tick/Type)     | true | false | No Description Provided |

