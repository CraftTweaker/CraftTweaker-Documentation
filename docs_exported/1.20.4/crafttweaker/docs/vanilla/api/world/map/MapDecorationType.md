# MapDecorationType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.map.MapDecorationType;
```


## Implemented Interfaces
MapDecorationType implements the following interfaces. That means all methods defined in these interfaces are also available in MapDecorationType

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

MapDecorationType is an enum. It has 34 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/map/decorationtype:player>
<constant:minecraft:world/map/decorationtype:frame>
<constant:minecraft:world/map/decorationtype:red_marker>
<constant:minecraft:world/map/decorationtype:blue_marker>
<constant:minecraft:world/map/decorationtype:target_x>
<constant:minecraft:world/map/decorationtype:target_point>
<constant:minecraft:world/map/decorationtype:player_off_map>
<constant:minecraft:world/map/decorationtype:player_off_limits>
<constant:minecraft:world/map/decorationtype:mansion>
<constant:minecraft:world/map/decorationtype:monument>
<constant:minecraft:world/map/decorationtype:banner_white>
<constant:minecraft:world/map/decorationtype:banner_orange>
<constant:minecraft:world/map/decorationtype:banner_magenta>
<constant:minecraft:world/map/decorationtype:banner_light_blue>
<constant:minecraft:world/map/decorationtype:banner_yellow>
<constant:minecraft:world/map/decorationtype:banner_lime>
<constant:minecraft:world/map/decorationtype:banner_pink>
<constant:minecraft:world/map/decorationtype:banner_gray>
<constant:minecraft:world/map/decorationtype:banner_light_gray>
<constant:minecraft:world/map/decorationtype:banner_cyan>
<constant:minecraft:world/map/decorationtype:banner_purple>
<constant:minecraft:world/map/decorationtype:banner_blue>
<constant:minecraft:world/map/decorationtype:banner_brown>
<constant:minecraft:world/map/decorationtype:banner_green>
<constant:minecraft:world/map/decorationtype:banner_red>
<constant:minecraft:world/map/decorationtype:banner_black>
<constant:minecraft:world/map/decorationtype:red_x>
<constant:minecraft:world/map/decorationtype:desert_village>
<constant:minecraft:world/map/decorationtype:plains_village>
<constant:minecraft:world/map/decorationtype:savanna_village>
<constant:minecraft:world/map/decorationtype:snowy_village>
<constant:minecraft:world/map/decorationtype:taiga_village>
<constant:minecraft:world/map/decorationtype:jungle_temple>
<constant:minecraft:world/map/decorationtype:swamp_hut>
```
## Methods

:::group{name=getIcon}

Return Type: byte

```zenscript
// MapDecorationType.getIcon() as byte

myMapDecorationType.getIcon();
```

:::

:::group{name=getMapColor}

Return Type: int

```zenscript
// MapDecorationType.getMapColor() as int

myMapDecorationType.getMapColor();
```

:::

:::group{name=hasMapColor}

Return Type: boolean

```zenscript
// MapDecorationType.hasMapColor() as boolean

myMapDecorationType.hasMapColor();
```

:::

:::group{name=isRenderedOnFrame}

Return Type: boolean

```zenscript
// MapDecorationType.isRenderedOnFrame() as boolean

myMapDecorationType.isRenderedOnFrame();
```

:::

:::group{name=shouldTrackCount}

Return Type: boolean

```zenscript
// MapDecorationType.shouldTrackCount() as boolean

myMapDecorationType.shouldTrackCount();
```

:::


## Properties

|       Name        |  Type   | Has Getter | Has Setter |
|-------------------|---------|------------|------------|
| getMapColor       | int     | true       | false      |
| hasMapColor       | boolean | true       | false      |
| icon              | byte    | true       | false      |
| isRenderedOnFrame | boolean | true       | false      |
| shouldTrackCount  | boolean | true       | false      |

