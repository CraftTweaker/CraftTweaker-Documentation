# FrontAndTop

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.FrontAndTop;
```


## Implemented Interfaces
FrontAndTop implements the following interfaces. That means all methods defined in these interfaces are also available in FrontAndTop

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

FrontAndTop is an enum. It has 12 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:direction/frontandtop:down_east>
<constant:minecraft:direction/frontandtop:down_north>
<constant:minecraft:direction/frontandtop:down_south>
<constant:minecraft:direction/frontandtop:down_west>
<constant:minecraft:direction/frontandtop:up_east>
<constant:minecraft:direction/frontandtop:up_north>
<constant:minecraft:direction/frontandtop:up_south>
<constant:minecraft:direction/frontandtop:up_west>
<constant:minecraft:direction/frontandtop:west_up>
<constant:minecraft:direction/frontandtop:east_up>
<constant:minecraft:direction/frontandtop:north_up>
<constant:minecraft:direction/frontandtop:south_up>
```
## Methods

:::group{name=front}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// FrontAndTop.front() as Direction

myFrontAndTop.front();
```

:::

:::group{name=top}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// FrontAndTop.top() as Direction

myFrontAndTop.top();
```

:::


## Properties

| Name  |                        Type                        | Has Getter | Has Setter |
|-------|----------------------------------------------------|------------|------------|
| front | [Direction](/vanilla/api/util/direction/Direction) | true       | false      |
| top   | [Direction](/vanilla/api/util/direction/Direction) | true       | false      |

