::since{version=1.0.0}
# JEI

Manages all interactions between JeiTweaker plugins and JEI itself.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.JEI;
```


## Static Methods

:::group{name=addCategory since="1.1.0"}

Adds the given category to the list of categories shown by JEI.

Return Type: void

```zenscript
JEI.addCategory(category as JeiCategory) as void
```

| Parameter | Type                                                     | Description                               |
| --------- | -------------------------------------------------------- | ----------------------------------------- |
| category  | [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory) | The category that should be added to JEI. |


:::

:::group{name=addDescription since="1.1.0"}

Adds a description for the given [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient). <br />  <br />  The description is defined as the text that is shown in the info box that appears as one of the recipe <br />  categories for the queried ingredient.

Return Type: void

```zenscript
JEI.addDescription(ingredient as JeiIngredient, description as MCTextComponent[]) as void
```

| Parameter   | Type                                                          | Description                                                                                         |
| ----------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ingredient  | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) | The ingredient to which the description should be added.                                            |
| description | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)[]   | A series of [MCTextComponent](/vanilla/api/util/text/MCTextComponent)s identifying the description. |


:::

:::group{name=addInfo since="1.0.0"}

::deprecated[Use [this](.)#addDescription(RawJeiIngredient, MCTextComponent...) instead. If you are writing a script, conversion between [IFluidStack](/vanilla/api/fluid/IFluidStack) and [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) is automatic: see com.blamejared.jeitweaker.zen.component.IFluidStackExpansions#asJeiIngredient(IFluidStack). Descriptions need to be converted manually instead: refer to [MCTextComponent](/vanilla/api/util/text/MCTextComponent)#createTranslationTextComponent(String).]

Adds an information box for the given [IFluidStack](/vanilla/api/fluid/IFluidStack). <br />  <br />  The information box is identified by an information symbol that appears as one of the categories available <br />  when querying an ingredient.

Return Type: void

```zenscript
JEI.addInfo(stack as IFluidStack, description as string[]) as void
```

| Parameter   | Type                                          | Description                                                                                                                   |
| ----------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| stack       | [IFluidStack](/vanilla/api/fluid/IFluidStack) | The stack to which the information box should be added to.                                                                    |
| description | string[]                                      | A series of strings that represent the description. These information boxes are treated as <br />                     { |


:::

:::group{name=addInfo since="1.0.0"}

::deprecated[Use [this](.)#addDescription(RawJeiIngredient, MCTextComponent...) instead. If you are writing a script, conversion between [IItemStack](/vanilla/api/items/IItemStack) and [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) is automatic: see com.blamejared.jeitweaker.zen.component.IItemStackExpansions#asJeiIngredient(IItemStack). Descriptions need to be converted manually instead: refer to [MCTextComponent](/vanilla/api/util/text/MCTextComponent)#createTranslationTextComponent(String).]

Adds an information box for the given [IItemStack](/vanilla/api/items/IItemStack). <br />  <br />  The information box is identified by an information symbol that appears as one of the categories available <br />  when querying an ingredient.

Return Type: void

```zenscript
JEI.addInfo(stack as IItemStack, description as string[]) as void
```

| Parameter   | Type                                        | Description                                                                                                                   |
| ----------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| stack       | [IItemStack](/vanilla/api/items/IItemStack) | The stack to which the information box should be added to.                                                                    |
| description | string[]                                    | A series of strings that represent the description. These information boxes are treated as <br />                     { |


:::

:::group{name=addIngredient since="1.1.0"}

Adds the given [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) as a custom ingredient to be shown in JEI.

Return Type: void

```zenscript
JEI.addIngredient(ingredient as JeiIngredient) as void
```

| Parameter  | Type                                                          | Description                                 |
| ---------- | ------------------------------------------------------------- | ------------------------------------------- |
| ingredient | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) | The ingredient that should be shown in JEI. |


:::

:::group{name=addItem since="1.0.0"}

::deprecated[Use [this](.)#addIngredient(RawJeiIngredient) instead. If you are writing a script, you can use the same syntax as conversion between [IItemStack](/vanilla/api/items/IItemStack) and [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) is automatic: see com.blamejared.jeitweaker.zen.component.IItemStackExpansions#asJeiIngredient(IItemStack).]

Adds the given [IItemStack](/vanilla/api/items/IItemStack) to the list of ingredients that JEI should display.

Return Type: void

```zenscript
JEI.addItem(stack as IItemStack) as void
```

| Parameter | Type                                        | Description                   |
| --------- | ------------------------------------------- | ----------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack to be added to JEI. |


:::

:::group{name=hideCategory since="1.0.0"}

Hides the category identified by the given category ID from displaying within JEI. <br />  <br />  A full list of categories is available through the `/ct dump jeiCategories` command.

Return Type: void

```zenscript
JEI.hideCategory(category as string) as void
```

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| category  | string | The ID of the category to hide. |


:::

:::group{name=hideFluid since="1.0.0"}

::deprecated[Use [this](.)#hideIngredient(RawJeiIngredient) instead. If you are writing a script, the conversion between [IFluidStack](/vanilla/api/fluid/IFluidStack) and [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) is automatic: see com.blamejared.jeitweaker.zen.component.IFluidStackExpansions#asJeiIngredient(IFluidStack).]

Hides the given [IFluidStack](/vanilla/api/fluid/IFluidStack) from within JEI.

Return Type: void

```zenscript
JEI.hideFluid(stack as IFluidStack) as void
```

| Parameter | Type                                          | Description                               |
| --------- | --------------------------------------------- | ----------------------------------------- |
| stack     | [IFluidStack](/vanilla/api/fluid/IFluidStack) | The stack that should be hidden from JEI. |


:::

:::group{name=hideIngredient since="1.1.0"}

Hides the given [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient), so that it does not show up in JEI.

Return Type: void

```zenscript
JEI.hideIngredient(ingredient as JeiIngredient) as void
```

| Parameter  | Type                                                          | Description                                    |
| ---------- | ------------------------------------------------------------- | ---------------------------------------------- |
| ingredient | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) | The ingredient that should be hidden from JEI. |


:::

:::group{name=hideItem since="1.0.0"}

::deprecated[Use [this](.)#hideIngredient(RawJeiIngredient) instead. If you are writing a script, the conversion between [IItemStack](/vanilla/api/items/IItemStack) and [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) is automatic: see com.blamejared.jeitweaker.zen.component.IItemStackExpansions#asJeiIngredient(IItemStack).]

Hides the given [IItemStack](/vanilla/api/items/IItemStack) from within JEI.

Return Type: void

```zenscript
JEI.hideItem(stack as IItemStack) as void
```

| Parameter | Type                                        | Description                               |
| --------- | ------------------------------------------- | ----------------------------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | The stack that should be hidden from JEI. |


:::

:::group{name=hideMod since="1.0.0"}

Hides all [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)s of a given mod, making sure that they do not show up in JEI. <br />  <br />  Optionally, some ingredients can be excluded based on their registry name from the hiding by making use of the <br />  [RecipeFilter](/vanilla/api/recipe/RecipeFilter).

Return Type: void

```zenscript
JEI.hideMod(modId as string, exclude as RecipeFilter) as void
```

| Parameter | Type                                             | Description                                          | Optional | DefaultValue                        |
| --------- | ------------------------------------------------ | ---------------------------------------------------- | -------- | ----------------------------------- |
| modId     | string                                           | The mod ID of the ingredients that should be hidden. | false    |                                     |
| wyklucz   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | An optional exclusion filter.                        | true     | (name as string) => {return false;} |


:::

:::group{name=hideRecipe since="1.0.0"}

Hides the recipe with the given name from appearing within the JEI category with the given ID.

Return Type: void

```zenscript
JEI.hideRecipe(categoryId as string, recipeName as string) as void
```

| Parameter  | Type   | Description                                                 |
| ---------- | ------ | ----------------------------------------------------------- |
| categoryId | string | The ID of the category where the recipe to hide is located. |
| recipeName | string | The name of the recipe that should be hidden from JEI.      |


:::

:::group{name=hideRegex since="1.0.0"}

Hides all [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)s whose name matches the given regular expression.

Return Type: void

```zenscript
JEI.hideRegex(regex as string) as void
```

| Parameter | Type   | Description                                                                             |
| --------- | ------ | --------------------------------------------------------------------------------------- |
| regex     | string | The regular expression that identifies ingredient names that should be hidden from JEI. |


:::

