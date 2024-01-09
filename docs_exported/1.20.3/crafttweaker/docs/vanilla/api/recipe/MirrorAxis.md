# MirrorAxis

Defines how a recipe should be mirrored.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.MirrorAxis;
```


## Implemented Interfaces
MirrorAxis implements the following interfaces. That means all methods defined in these interfaces are also available in MirrorAxis

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

MirrorAxis is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript

// Mirror the recipe on all axes.
<constant:minecraft:mirroraxis:all>

// Mirror the recipe diagonally.
<constant:minecraft:mirroraxis:diagonal>

// Mirror the recipe horizontally.
<constant:minecraft:mirroraxis:horizontal>

// Do not mirror the recipe.
<constant:minecraft:mirroraxis:none>

// Mirror the recipe vertically.
<constant:minecraft:mirroraxis:vertical>
```
## Static Properties

|    Name    |                     Type                     | Has Getter | Has Setter |           Description           |
|------------|----------------------------------------------|------------|------------|---------------------------------|
| ALL        | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | true       | false      | Mirror the recipe on all axes.  |
| DIAGONAL   | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | true       | false      | Mirror the recipe diagonally.   |
| HORIZONTAL | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | true       | false      | Mirror the recipe horizontally. |
| NONE       | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | true       | false      | Do not mirror the recipe.       |
| VERTICAL   | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | true       | false      | Mirror the recipe vertically.   |

