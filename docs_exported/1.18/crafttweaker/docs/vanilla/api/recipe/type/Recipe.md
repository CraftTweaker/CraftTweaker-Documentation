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

| Parameter | Type |
|-----------|------|
| var1      | int  |
| var2      | int  |


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

|     Name     |                                 Type                                  | Has Getter | Has Setter |
|--------------|-----------------------------------------------------------------------|------------|------------|
| group        | string                                                                | true       | false      |
| id           | [ResourceLocation](/vanilla/api/resource/ResourceLocation)            | true       | false      |
| ingredients  | stdlib.List&lt;[IIngredient](/vanilla/api/ingredient/IIngredient)&gt; | true       | false      |
| isIncomplete | boolean                                                               | true       | false      |
| isSpecial    | boolean                                                               | true       | false      |
| resultItem   | [IItemStack](/vanilla/api/item/IItemStack)                            | true       | false      |
| toastSymbol  | [ItemStack](/vanilla/api/item/ItemStack)                              | true       | false      |

