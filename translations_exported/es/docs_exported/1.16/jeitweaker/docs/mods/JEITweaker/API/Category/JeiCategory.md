::since{version=1.1.0}
# JeiCategory

Identifies a custom recipe category shown in JEI when querying a specific ingredient.

 A JEI category is identified by four major components: an id, a name, an icon, and a series of catalysts.

 The ID is a unique name that is used by JEI to identify the category, in the form of a [MCResourceLocation](/vanilla/api/util/MCResourceLocation). With JeiTweaker, you have control only on the `path` portion of the location, whereas the ID is fixed to the one that represents the JeiTweaker mod.

 The name is a [MCTextComponent](/vanilla/api/util/text/MCTextComponent) which identifies the category. It can be considered the human-friendly version of the category ID. More than one category can have the same name, although this is discouraged as a matter of clarity towards the player.

 The icon is a [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that is used as a graphic counterpart to the name, following the same rules. The icon is rendered on the top section of the JEI user interface. An example icon could be the crafting table for the `minecraft:crafting` category, or the furnace for the `minecraft:furnace` category.

 Last but not least, the catalysts are a series of [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)s that indicate where the recipe can be crafted. They appear on the left side of the JEI user interface, in a recessed rectangle. An example set of catalysts for the `minecraft:crafting` category could be all crafting tables, modded or otherwise. The set of catalysts might or might not contain the icon.

 Moreover, each JeiTweaker category <strong>additionally</strong> specifies a background, which is used to provide a default background for recipes.<strong>For mod developers looking to create additional categories:</strong> each category is automatically discovered and registered by JeiTweaker as long as it extends `JeiCategory` and is annotated with both com.blamejared.crafttweaker.api.annotations.ZenRegister and org.openzen.zencode.java.ZenCodeType.Name. To be correctly registered, the class must not be `abstract` (preferably, it should be `final`) and it <strong>must</strong> have a constructor with the following signature: `public ClassName(ResourceLocation, MCTextComponent, JeiDrawable, RawJeiIngredient...)`. Any other class is not going to be registered. Due to these requirements, mod developers are strongly encouraged not to implement this interface directly, but rather extend [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) instead.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.JeiCategory;
```


## Static Methods

:::group{name=create since="1.1.0"}

Creates a new category of the specified type, with the given parameters, configuring it to defaults.

Returns: The newly created category.  
Return Type: [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory)

```zenscript
JeiCategory.create<T : JeiCategory>(id as string, name as MCTextComponent, icon as JeiDrawable, catalysts as JeiIngredient[]) as JeiCategory
```

| Parameter | Type                                                            | Description                                                                                                                           |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| id        | string                                                          | The ID of the category to create.                                                                                                     |
| name      | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)       | A [MCTextComponent](/vanilla/api/util/text/MCTextComponent) representing the name of the category.                                    |
| icon      | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)       | A [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that acts as the icon for the category.                                   |
| catalysts | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[] | An array of [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) acting as catalysts for the category. It must not be empty. |
| T         | [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory)        | The type of the category to create. It must extend [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).                          |


:::

:::group{name=create since="1.1.0"}

Creates a new category of the specified type, with the given parameters, and with the given function as a <br />  configurator.

Returns: The newly created category.  
Return Type: [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory)

```zenscript
JeiCategory.create<T : JeiCategory>(id as string, name as MCTextComponent, icon as JeiDrawable, catalysts as JeiIngredient[], configurator as Consumer<T>) as JeiCategory
```

| Parameter    | Type                                                            | Description                                                                                                                           |
| ------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string                                                          | The ID of the category to create.                                                                                                     |
| name         | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)       | A [MCTextComponent](/vanilla/api/util/text/MCTextComponent) representing the name of the category.                                    |
| icon         | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)       | A [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that acts as the icon for the category.                                   |
| catalysts    | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[] | An array of [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) acting as catalysts for the category. It must not be empty. |
| configurator | Consumer&lt;T&gt;                                   | A Consumer&lt;T&gt; allowing configuration of the category as it gets built.                                              |
| T            | [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory)        | The type of the category to create. It must extend [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).                          |


:::

## Properties

| Nombre     | Type                                                            | Has Getter | Has Setter | Description                                                                                                                    |
| ---------- | --------------------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| background | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)       | true       | false      | Gets the [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that serves as the background for recipes of this category. |
| catalysts  | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[] | true       | false      | Gets the lists of catalysts currently registered to this category.                                                             |
| icon       | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)       | true       | false      | Gets the [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) that acts as the icon for this category.                    |
| id         | [Ubicación MCResource](/vanilla/api/util/MCResourceLocation)    | true       | false      | Gets the ID of the category.                                                                                                   |
| name       | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)       | true       | false      | Gets the name of the category.                                                                                                 |

