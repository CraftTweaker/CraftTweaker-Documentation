::since{version=1.1.0}
# Custom

Identifies a fully free-form JEI category, which allows custom background, drawable, and slot placement.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.Custom;
```


## Extending SimpleJeiCategory

Custom extends [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory). That means all methods available in [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) are also available in Custom

## Methods

:::group{name=addDrawable since="1.1.0"}

Places a new [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) at the given coordinates.

Return Type: void

```zenscript
Custom.addDrawable(x as int, y as int, drawable as JeiDrawable) as void
```

| Parameter | Type                                                      | Description                                           |
| --------- | --------------------------------------------------------- | ----------------------------------------------------- |
| x         | int                                                       | The x coordinate where the drawable should be placed. |
| y         | int                                                       | The y coordinate where the drawable should be placed. |
| drawable  | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) | The drawable to add.                                  |


:::

:::group{name=addSlot since="1.1.0"}

Places a new slot to this recipe with the given index at the specified coordinates.

Return Type: void

```zenscript
Custom.addSlot(index as int, x as int, y as int, isInput as boolean) as void
```

| Parameter | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| index     | int     | The slot index. Must be unique.                                    |
| x         | int     | The x coordinate where the slot should be placed.                  |
| y         | int     | The y coordinate where the slot should be placed.                  |
| isInput   | boolean | Whether the slot is an input (`true`) or an output (`false`) slot. |


:::

:::group{name=addText since="1.1.0"}

Adds a new text area that appears at the given coordinates.

 The added text area is <em>global</em>, meaning it appears in all recipes the same way.

Return Type: void

```zenscript
Custom.addText(x as int, y as int, text as MCTextComponent) as void
```

| Parameter | Type                                                      | Description                                    |
| --------- | --------------------------------------------------------- | ---------------------------------------------- |
| x         | int                                                       | The x coordinate where the text should appear. |
| y         | int                                                       | The y coordinate where the text should appear. |
| texte     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | The text that should appear.                   |


:::

:::group{name=addTooltip since="1.1.0"}

Adds a new tooltip that appears when the mouse is in a rectangle active area of width `w` and height `h` at the specified coordinates with the given text.

 The tooltip is <em>global</em>, meaning it appears in all recipes with the same text.

Return Type: void

```zenscript
Custom.addTooltip(x as int, y as int, w as int, h as int, text as MCTextComponent[]) as void
```

| Parameter | Type                                                        | Description                                                                                                                     |
| --------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| x         | int                                                         | The x coordinate of the top-left corner of the active area.                                                                     |
| y         | int                                                         | The y coordinate of the top-left corner of the active area.                                                                     |
| w         | int                                                         | The width of the rectangle that determines the active area.                                                                     |
| h         | int                                                         | The height of the rectangle that determines the active area.                                                                    |
| texte     | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)[] | A list of [MCTextComponent](/vanilla/api/util/text/MCTextComponent)s indicating the text that should be present in the tooltip. |


:::


## Properties

| Name                   | Type | Has Getter | Has Setter | Description                                                                                                       |
| ---------------------- | ---- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| background             | void | false      | true       | Sets the [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) which acts as the background of this category. |
| canHaveShapelessMarker | void | false      | true       | Sets whether recipes in this category can be marked as shapeless.                                                 |

