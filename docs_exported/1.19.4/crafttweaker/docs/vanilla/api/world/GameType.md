# GameType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.GameType;
```


## Implemented Interfaces
GameType implements the following interfaces. That means all methods defined in these interfaces are also available in GameType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

GameType is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/gametype:survival>
<constant:minecraft:world/gametype:creative>
<constant:minecraft:world/gametype:adventure>
<constant:minecraft:world/gametype:spectator>
```
## Methods

:::group{name=getId}

Return Type: int

```zenscript
// GameType.getId() as int

myGameType.getId();
```

:::

:::group{name=getLongDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// GameType.getLongDisplayName() as Component

myGameType.getLongDisplayName();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// GameType.getName() as string

myGameType.getName();
```

:::

:::group{name=getShortDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// GameType.getShortDisplayName() as Component

myGameType.getShortDisplayName();
```

:::

:::group{name=isBlockPlacingRestricted}

Return Type: boolean

```zenscript
// GameType.isBlockPlacingRestricted() as boolean

myGameType.isBlockPlacingRestricted();
```

:::

:::group{name=isCreative}

Return Type: boolean

```zenscript
// GameType.isCreative() as boolean

myGameType.isCreative();
```

:::

:::group{name=isSurvival}

Return Type: boolean

```zenscript
// GameType.isSurvival() as boolean

myGameType.isSurvival();
```

:::

:::group{name=updatePlayerAbilities}

```zenscript
GameType.updatePlayerAbilities(abilities as Abilities)
```

| Parameter |                          Type                          |
|-----------|--------------------------------------------------------|
| abilities | [Abilities](/vanilla/api/entity/type/player/Abilities) |


:::


## Properties

|           Name           |                   Type                   | Has Getter | Has Setter |
|--------------------------|------------------------------------------|------------|------------|
| id                       | int                                      | true       | false      |
| isBlockPlacingRestricted | boolean                                  | true       | false      |
| isCreative               | boolean                                  | true       | false      |
| isSurvival               | boolean                                  | true       | false      |
| longDisplayName          | [Component](/vanilla/api/text/Component) | true       | false      |
| name                     | string                                   | true       | false      |
| shortDisplayName         | [Component](/vanilla/api/text/Component) | true       | false      |

