# Color

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.util.Color;
```


## Static Methods

:::group{name=packedRgb}

Return Type: [Color](/mods/contenttweaker/util/Color)

```zenscript
Color.packedRgb(color as int) as Color
```

| Parameter | Type |
|-----------|------|
| color     | int  |


:::

:::group{name=packedRgba}

Return Type: [Color](/mods/contenttweaker/util/Color)

```zenscript
Color.packedRgba(color as int) as Color
```

| Parameter | Type |
|-----------|------|
| color     | int  |


:::

:::group{name=rgb}

Return Type: [Color](/mods/contenttweaker/util/Color)

```zenscript
Color.rgb(r as int, g as int, b as int) as Color
```

| Parameter | Type |
|-----------|------|
| r         | int  |
| g         | int  |
| b         | int  |


:::

:::group{name=rgba}

Return Type: [Color](/mods/contenttweaker/util/Color)

```zenscript
Color.rgba(r as int, g as int, b as int, a as int) as Color
```

| Parameter | Type |
|-----------|------|
| r         | int  |
| g         | int  |
| b         | int  |
| a         | int  |


:::

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| a    | int  | true       | false      |
| b    | int  | true       | false      |
| g    | int  | true       | false      |
| r    | int  | true       | false      |

