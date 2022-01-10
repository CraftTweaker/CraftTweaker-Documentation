# TickEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.TickEvent;
```


## Extending Event

TickEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in TickEvent

## Metodi

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


## Proprietà

| Nome   | Tipo                                 | Ha Getter | Ha Setter | Descrizione             |
| ------ | ------------------------------------ | --------- | --------- | ----------------------- |
| client | boolean                              | sì        | no        | No Description Provided |
| fine   | boolean                              | sì        | no        | No Description Provided |
| phase  | [Phase](/forge/api/event/tick/Phase) | sì        | no        | No Description Provided |
| server | boolean                              | sì        | no        | No Description Provided |
| side   | string                               | sì        | no        | No Description Provided |
| inizio | boolean                              | sì        | no        | No Description Provided |
| type   | [Tipo](/forge/api/event/tick/Type)   | sì        | no        | No Description Provided |

