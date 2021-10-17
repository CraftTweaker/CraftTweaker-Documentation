# MirrorAxis

Defines how a recipe should be mirrored.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.MirrorAxis;
```


## Extending Enum&lt;MirrorAxis&gt;

MirrorAxis extends Enum&lt;[MirrorAxis](/vanilla/api/recipe/MirrorAxis)&gt;. That means all methods available in Enum&lt;[MirrorAxis](/vanilla/api/recipe/MirrorAxis)&gt; are also available in MirrorAxis

## Static Properties

| Nome       | Tipo                                         | Ha Getter | Ha Setter | Descrizione                     |
| ---------- | -------------------------------------------- | --------- | --------- | ------------------------------- |
| ALL        | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | sì        | no        | Mirror the recipe on all axes.  |
| DIAGONAL   | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | sì        | no        | Mirror the recipe diagonally.   |
| HORIZONTAL | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | sì        | no        | Mirror the recipe horizontally. |
| NONE       | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | sì        | no        | Do not mirror the recipe.       |
| VERTICAL   | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | sì        | no        | Mirror the recipe vertically.   |

