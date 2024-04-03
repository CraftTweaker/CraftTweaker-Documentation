::since{version=4.0.0}
# Jei

Main class of the JEI integration.

 This class is responsible for handling any and all integration possibilities with JEI.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jeitweaker.Jei;
```


## Static Methods

:::group{name=addIngredient since="4.0.0"}

Adds the specified ingredient to the list of ingredients displayed by JEI. <br />  <br />  The list of ingredients is available on the JEI ingredients panel, usually displayed on the right side of the <br />  screen. Note that ingredients added can still be hidden through appropriate calls to the hiding methods.

```zenscript
// Jei.addIngredient(ingredient as JeiIngredient)

Jei.addIngredient(<item:minecraft:dirt>);
```

| Parameter  |                              Type                              |      Description       |
|------------|----------------------------------------------------------------|------------------------|
| ingredient | [JeiIngredient](/mods/JeiTweaker/API/Ingredient/JeiIngredient) | The ingredient to add. |


:::

:::group{name=addIngredientInformation since="4.0.0"}

Adds the given set of [Component](/vanilla/api/text/Component)s to the information page of the specified ingredient. <br />  <br />  The specified set of components will then be appended to the current set of information displayed within JEI. <br />  It is worth noting that every invocation of this method will therefore create one or more new pages to display <br />  the full set of components. <br />  <br />  Once added, information cannot be removed. <br />  <br />  The information page can be viewed by attempting to look for recipes of the specified ingredient, then <br />  identifying the information category in the category list.

```zenscript
// Jei.addIngredientInformation(ingredient as JeiIngredient, info as Component[])

Jei.addIngredientInformation(<item:minecraft:apple>, Component.literal("One apple a day keeps the doctor at bay, yum 😋"));
```

| Parameter  |                              Type                              |                                               Description                                                |
|------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| ingredient | [JeiIngredient](/mods/JeiTweaker/API/Ingredient/JeiIngredient) | The ingredient for which the information should be added.                                                |
| info       | [Component](/vanilla/api/text/Component)[]                     | A variable-length list of [Component](/vanilla/api/text/Component)s representing the information to add. |


:::

:::group{name=hideCategory since="4.0.0"}

Hides the specified category from being viewable. <br />  <br />  The category is hidden through its identifier: a list of all known categories can be obtained by checking the <br />  output of `/ct dump jeitweaker:jei_categories`. Hiding a category is global, meaning that it will not <br />  appear any more in any category listing, be it the global one or the focused one. <br />  <br />  Once hidden, a category cannot be shown again.

```zenscript
// Jei.hideCategory(category as ResourceLocation)

Jei.hideCategory(<resource:minecraft:smithing>);
```

| Parameter |                            Type                            |      Description      |
|-----------|------------------------------------------------------------|-----------------------|
| category  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The category to hide. |


:::

:::group{name=hideIngredient since="4.0.0"}

Hides the specified ingredient from JEI. <br />  <br />  The ingredient will be hidden not only from the JEI ingredient panel, but also in the list of recipe catalysts <br />  and in recipe listings, essentially making it as if it never appeared. <br />  <br />  Note that ingredients that were added can also be hidden with this command. <br />  <br />  A side effect of ingredient hiding is that if the ingredient was the sole catalyst of a recipe category, then <br />  the category will also be hidden as well. Care must be taken if this behavior is not desired.

```zenscript
// Jei.hideIngredient(ingredient as JeiIngredient)

Jei.hideIngredient(<item:minecraft:dried_kelp>);
```

| Parameter  |                              Type                              |       Description       |
|------------|----------------------------------------------------------------|-------------------------|
| ingredient | [JeiIngredient](/mods/JeiTweaker/API/Ingredient/JeiIngredient) | The ingredient to hide. |


:::

:::group{name=hideIngredients since="4.0.0"}

Hides the specified variable-arguments list of ingredients from JEI. <br />  <br />  This acts not only as a convenience method accepting a list instead of a single element like <br />  `hideIngredient`, but also as a way to use more complicated data structures such as tags or proper arrays <br />  for removal. <br />  <br />  The ingredients will be hidden not only from the JEI ingredient panel, but also in the list of recipe <br />  catalysts and in recipe listings, essentially making them as if they never appeared. <br />  <br />  Note that ingredients that were added can also be hidden with this command. <br />  <br />  A side effect of ingredient hiding is that if the ingredient was the sole catalyst of a recipe category, then <br />  the category will also be hidden as well. Care must be taken if this behavior is not desired.

```zenscript
// Jei.hideIngredients(ingredients as JeiIngredient[])

Jei.hideIngredients(<item:minecraft:redstone_dust> | <item:minecraft:iron_ingot>);
Jei.hideIngredients([<item:minecraft:stone>, <item:minecraft:compass>]);
```

|  Parameter  |                               Type                               |       Description        |
|-------------|------------------------------------------------------------------|--------------------------|
| ingredients | [JeiIngredient](/mods/JeiTweaker/API/Ingredient/JeiIngredient)[] | The ingredients to hide. |


:::

:::group{name=hideIngredientsByRegex since="4.0.0"}

Hides all ingredients whose <strong>entire</strong> registry name matches the given regex, regardless of type. <br />  <br />  The ingredients are therefore checked according to their registry name directly, which means that if the <br />  ingredient is named `"mod:path"`, then `"mod:path"` will be validated against the given regular <br />  expression. <br />  <br />  The regular expression must be a valid regular expression. Websites such as <br />  <a href="https://regexr.com">RegExr</a> can be used to verify the validity and the adequacy of the given regular <br />  expression. <br />  <br />  All ingredients will be hidden regardless of type and from everywhere, meaning not only from the JEI <br />  ingredient panel, but also in the list of recipe catalysts and in recipe listings, essentially making them as if <br />  they never appeared. <br />  <br />  Note that ingredients that were added can also be hidden with this command. <br />  <br />  A side effect of ingredient hiding is that if the ingredient was the sole catalyst of a recipe category, then <br />  the category will also be hidden as well. Care must be taken if this behavior is not desired.

```zenscript
// Jei.hideIngredientsByRegex(pattern as string)

Jei.hideIngredientsByRegex("[a-z]*:[a-z]*[0-9]");
```

| Parameter |  Type  |                       Description                       |
|-----------|--------|---------------------------------------------------------|
| pattern   | string | The regular expression pattern to be used for matching. |


:::

:::group{name=hideModIngredients since="4.0.0"}

Hides all ingredients from the specified mod, regardless of type. <br />  <br />  The ingredients are matched according to their registry name. Namely, if the registry name of the ingredient <br />  has the mod as the namespace, then it will be hidden, unless the path was excluded through the given exclusion <br />  filter. In other words, if the ingredient name is `"mod:path"`, then the exclusion filter will get given <br />  `"path"` as an argument. If the return value is `true`, then the item will <strong>not</strong> be <br />  removed, otherwise it will. <br />  <br />  All ingredients will be hidden regardless of type and from everywhere, meaning not only from the JEI <br />  ingredient panel, but also in the list of recipe catalysts and in recipe listings, essentially making them as if <br />  they never appeared. <br />  <br />  Note that ingredients that were added can also be hidden with this command. <br />  <br />  A side effect of ingredient hiding is that if the ingredient was the sole catalyst of a recipe category, then <br />  the category will also be hidden as well. Care must be taken if this behavior is not desired.

```zenscript
// Jei.hideModIngredients(modId as string, exclusionFilter as Predicate<string>)

Jei.hideModIngredients("minecraft", path => false);
Jei.hideModIngredients("minecraft", path => path == "golden_hoe");
```

|    Parameter    |          Type           |                          Description                           | Optional |             Default Value             |
|-----------------|-------------------------|----------------------------------------------------------------|----------|---------------------------------------|
| modId           | string                  | The id of the mod that should be hidden.                       | false    |                                       |
| exclusionFilter | Predicate&lt;string&gt; | An optional exclusion filter to avoid hiding certain elements. | true     | (path as string) => { return false; } |


:::

:::group{name=hideRecipe since="4.0.0"}

Hides the given recipe from the specified recipe category. <br />  <br />  The category is identified through its identifier: a list of all known categories can be obtained by checking <br />  the output of `/ct dump jeitweaker:jei_categories`. The recipe is identified through its recipe name <br />  instead, which can be obtained either through `/ct recipes` or by hovering over the output of the recipe <br />  in the JEI recipe view with advanced tooltips enabled. <br />  <br />  It is important to note that the recipe is not removed from the machine, meaning it is still able to be <br />  crafted: hiding is merely a visual change in the recipe list. <br />  <br />  Attempting to hide a recipe from a category that does not contain it results in nothing being done. <br />  <br />  Once hidden, a recipe cannot be shown again.

```zenscript
// Jei.hideRecipe(category as ResourceLocation, recipe as ResourceLocation)

Jei.hideRecipe(<resource:minecraft:stonecutting>, <resource:minecraft:andesite_stairs_from_andesite_stonecutting>);
```

| Parameter |                            Type                            |                   Description                   |
|-----------|------------------------------------------------------------|-------------------------------------------------|
| category  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The category which contains the recipe to hide. |
| recipe    | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the recipe to hide.                 |


:::

