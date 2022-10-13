::since{version=1.1.0}
# CatalystRequiringRecipe

Identifies a recipe that supports up to 3 inputs and 3 outputs and specifies a recipe-specific catalyst.

 The recipe-specific catalyst can be either a [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) or an actual JEI ingredient. In the latter case, the catalyst is specified as one additional recipe input.

 By default, this category is initialized with 1 input, 1 output, and no catalyst drawable.

 A recipe can also specify a custom tooltip that appears when hovering over the arrow by adding a tooltip with the ID `"process_detail"`.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.CatalystRequiringRecipe;
```


## Extending SimpleJeiCategory

CatalystRequiringRecipe extends [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory). That means all methods available in [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) are also available in CatalystRequiringRecipe

## Properties

| Name             | Type | Has Getter | Has Setter | Description                                                                                                                                                                                                                         |
| ---------------- | ---- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| catalystDrawable | void | false      | true       | Sets the [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that will be used as a catalyst. <br />  <br />  If the given drawable is `null`, then the last of the input parameters will be treated as catalyst. |
| inputs           | void | false      | true       | Sets the amount of inputs that this recipe category allows.                                                                                                                                                                         |
| outputs          | void | false      | true       | Sets the amount of outputs that this recipe category allows.                                                                                                                                                                        |

