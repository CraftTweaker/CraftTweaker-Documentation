::since{version=1.1.0}
# JeiRecipeGraphics

Allows a [JeiRecipe](/mods/JEITweaker/API/Recipe/JeiRecipe) to request additional graphic capabilities to its parent [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).

 Support for the various methods available depends on the category to which the recipe is being added to. Refer to the category documentation for more information. Namely, categories <strong>need not</strong> support nor acknowledge any of the requests specified by a recipe if they do not desire to do so.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.recipe.JeiRecipeGraphics;
```


## Methods

:::group{name=addTooltip since="1.1.0"}

Sets the tooltip identified by the given key to the given set of components.

Return Type: void

```zenscript
JeiRecipeGraphics.addTooltip(key as string, lines as MCTextComponent[]) as void
```

| Parameter | Type                                                        | Description                              |
| --------- | ----------------------------------------------------------- | ---------------------------------------- |
| key       | string                                                      | The key that identifies the tooltip.     |
| lines     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)[] | The components that make up the tooltip. |


:::

:::group{name=addTooltip since="1.1.0"}

Asks the category to render a tooltip with the given components as lines when the cursor is in the active area indicated by the given coordinates and with the given width and height.

Return Type: void

```zenscript
JeiRecipeGraphics.addTooltip(x as int, y as int, activeAreaWidth as int, activeAreaHeight as int, lines as MCTextComponent[]) as void
```

| Parameter        | Type                                                        | Description                                                           |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| x                | int                                                         | The x coordinate of the top-left corner of the active area rectangle. |
| y                | int                                                         | The y coordinate of the top-left corner of the active area rectangle. |
| activeAreaWidth  | int                                                         | The width of the active area rectangle.                               |
| activeAreaHeight | int                                                         | The height of the active area rectangle.                              |
| lines            | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)[] | The components that make up the tooltip.                              |


:::

:::group{name=setExtraComponent since="1.1.0"}

Sets the value of the extra component identified by the given key to the component specified.

Return Type: void

```zenscript
JeiRecipeGraphics.setExtraComponent(key as string, component as MCTextComponent) as void
```

| Parameter | Type                                                      | Description                                  |
| --------- | --------------------------------------------------------- | -------------------------------------------- |
| key       | string                                                    | The key that identifies the extra component. |
| component | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | The component to set.                        |


:::

:::group{name=showShapelessMarker since="1.1.0"}

Shows a shapeless marker for the current recipe, if possible.

Return Type: void

```zenscript
// JeiRecipeGraphics.showShapelessMarker() as void

myJeiRecipeGraphics.showShapelessMarker();
```

:::


