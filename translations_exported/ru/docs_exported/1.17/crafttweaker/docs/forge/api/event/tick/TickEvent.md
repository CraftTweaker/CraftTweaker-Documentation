# TickEvent

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.TickEvent;
```


## Extending Event

TickEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in TickEvent

## Методы

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


## Свойства

| Название | Тип                                  | Имеет Getter | Имеет Setter | Описание                |
| -------- | ------------------------------------ | ------------ | ------------ | ----------------------- |
| client   | boolean                              | true         | false        | No Description Provided |
| конец    | boolean                              | true         | false        | No Description Provided |
| phase    | [Phase](/forge/api/event/tick/Phase) | true         | false        | No Description Provided |
| server   | boolean                              | true         | false        | No Description Provided |
| side     | string                               | true         | false        | No Description Provided |
| старт    | boolean                              | true         | false        | No Description Provided |
| type     | [Тип](/forge/api/event/tick/Type)    | true         | false        | No Description Provided |

