# GameType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.GameType;
```


## Enum Constants

GameType is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
GameType.SURVIVAL
GameType.CREATIVE
GameType.ADVENTURE
GameType.SPECTATOR
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

Return Type: void

```zenscript
GameType.updatePlayerAbilities(abilities as Abilities) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| abilities | [Abilities](/vanilla/api/entity/type/player/Abilities) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| id | int | true | false | No Description Provided |
| isBlockPlacingRestricted | boolean | true | false | No Description Provided |
| isCreative | boolean | true | false | No Description Provided |
| isSurvival | boolean | true | false | No Description Provided |
| longDisplayName | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |
| name | string | true | false | No Description Provided |
| shortDisplayName | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |

