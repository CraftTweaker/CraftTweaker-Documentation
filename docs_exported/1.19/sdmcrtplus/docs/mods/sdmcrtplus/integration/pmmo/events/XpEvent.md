# XpEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.pmmo.events.XpEvent;
```


## Extending PlayerEvent

XpEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in XpEvent

## Methods

:::group{name=getAmountAwarded}

Return Type: long

```zenscript
// XpEvent.getAmountAwarded() as long

myXpEvent.getAmountAwarded();
```

:::

:::group{name=getEndLevel}

Return Type: int

```zenscript
// XpEvent.getEndLevel() as int

myXpEvent.getEndLevel();
```

:::

:::group{name=getSkill}

Return Type: string

```zenscript
// XpEvent.getSkill() as string

myXpEvent.getSkill();
```

:::

:::group{name=getStartLevel}

Return Type: int

```zenscript
// XpEvent.getStartLevel() as int

myXpEvent.getStartLevel();
```

:::

:::group{name=isCancelable}

Return Type: boolean

```zenscript
// XpEvent.isCancelable() as boolean

myXpEvent.isCancelable();
```

:::

:::group{name=isLevelUp}

Return Type: boolean

```zenscript
// XpEvent.isLevelUp() as boolean

myXpEvent.isLevelUp();
```

:::


## Properties

|    Name    |  Type   | Has Getter | Has Setter |
|------------|---------|------------|------------|
| awarded    | long    | true       | false      |
| endLevel   | int     | true       | false      |
| isLevelUp  | boolean | true       | false      |
| skill      | string  | true       | false      |
| startLevel | int     | true       | false      |

