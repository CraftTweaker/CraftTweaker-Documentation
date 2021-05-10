# MCTickEvent

The event is not cancelable.

The event does not have a result.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.MCTickEvent;
```


## Extending MCEvent

MCTickEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCTickEvent

## 方法

:::group{name=getPhase}

Return Type: string

```zenscript
// MCTickEvent.getPhase() as string

myMCTickEvent.getPhase();
```

:::

:::group{name=getSide}

Return Type: string

```zenscript
// MCTickEvent.getSide() as string

myMCTickEvent.getSide();
```

:::

:::group{name=getType}

Return Type: string

```zenscript
// MCTickEvent.getType() as string

myMCTickEvent.getType();
```

:::

:::group{name=isClient}

Return Type: boolean

```zenscript
// MCTickEvent.isClient() as boolean

myMCTickEvent.isClient();
```

:::

:::group{name=isEnd}

Return Type: boolean

```zenscript
// MCTickEvent.isEnd() as boolean

myMCTickEvent.isEnd();
```

:::

:::group{name=isServer}

Return Type: boolean

```zenscript
// MCTickEvent.isServer() as boolean

myMCTickEvent.isServer();
```

:::

:::group{name=isStart}

Return Type: boolean

```zenscript
// MCTickEvent.isStart() as boolean

myMCTickEvent.isStart();
```

:::


## 参数

| 名称     | 类型      | 可获得  | 可设置   | 描述                      |
| ------ | ------- | ---- | ----- | ----------------------- |
| client | boolean | true | false | No Description Provided |
| 结束     | boolean | true | false | No Description Provided |
| phase  | string  | true | false | No Description Provided |
| server | boolean | true | false | No Description Provided |
| side   | string  | true | false | No Description Provided |
| 开始     | boolean | true | false | No Description Provided |
| 类型     | string  | true | false | No Description Provided |

