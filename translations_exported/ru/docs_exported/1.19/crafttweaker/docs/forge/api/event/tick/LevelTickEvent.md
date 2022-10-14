# LevelTickEvent

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.LevelTickEvent;
```


## Extending TickEvent

LevelTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in LevelTickEvent

## Методы

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// LevelTickEvent.getLevel() as Level

myLevelTickEvent.getLevel();
```

:::


## Свойства

| Название | Тип                               | Имеет Getter | Имеет Setter |
| -------- | --------------------------------- | ------------ | ------------ |
| level    | [Level](/vanilla/api/world/Level) | true         | false        |

