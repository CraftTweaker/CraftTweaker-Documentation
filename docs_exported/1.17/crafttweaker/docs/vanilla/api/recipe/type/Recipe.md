# Recipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.type.Recipe;
```


## Methods

:::group{name=canCraftInDimensions}

Return Type: boolean

```zenscript
Recipe.canCraftInDimensions(var1 as int, var2 as int) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| var1 | int | No Description Provided |
| var2 | int | No Description Provided |


:::

:::group{name=getGroup}

Return Type: string

```zenscript
// Recipe.getGroup() as string

myRecipe.getGroup();
```

:::

:::group{name=getId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Recipe.getId() as ResourceLocation

myRecipe.getId();
```

:::

:::group{name=getIngredients}

Return Type: stdlib.List&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt;

```zenscript
// Recipe.getIngredients() as stdlib.List<IIngredient>

myRecipe.getIngredients();
```

:::

:::group{name=getResultItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// Recipe.getResultItem() as IItemStack

myRecipe.getResultItem();
```

:::

:::group{name=getToastSymbol}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// Recipe.getToastSymbol() as ItemStack

myRecipe.getToastSymbol();
```

:::

:::group{name=isIncomplete}

Return Type: boolean

```zenscript
// Recipe.isIncomplete() as boolean

myRecipe.isIncomplete();
```

:::

:::group{name=isSpecial}

Return Type: boolean

```zenscript
// Recipe.isSpecial() as boolean

myRecipe.isSpecial();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| group | string | true | false | No Description Provided |
| id | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true | false | No Description Provided |
| ingredients | stdlib.List&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | true | false | No Description Provided |
| isIncomplete | boolean | true | false | No Description Provided |
| isSpecial | boolean | true | false | No Description Provided |
| resultItem | [IItemStack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |
| toastSymbol | [ItemStack](/vanilla/api/item/ItemStack) | true | false | No Description Provided |

