# Difficulty

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Difficulty;
```


## Implemented Interfaces
Difficulty implements the following interfaces. That means all methods defined in these interfaces are also available in Difficulty

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

Difficulty is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/difficulty:peaceful>
<constant:minecraft:world/difficulty:easy>
<constant:minecraft:world/difficulty:normal>
<constant:minecraft:world/difficulty:hard>
```
## Methods

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Difficulty.getDisplayName() as Component

myDifficulty.getDisplayName();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// Difficulty.getId() as int

myDifficulty.getId();
```

:::

:::group{name=getKey}

Return Type: string

```zenscript
// Difficulty.getKey() as string

myDifficulty.getKey();
```

:::


## Properties

|    Name     |                   Type                   | Has Getter | Has Setter |
|-------------|------------------------------------------|------------|------------|
| displayName | [Component](/vanilla/api/text/Component) | true       | false      |
| id          | int                                      | true       | false      |
| key         | string                                   | true       | false      |

