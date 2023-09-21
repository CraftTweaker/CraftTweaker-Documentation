# ItemApplicationRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.ItemApplicationRecipe;
```


## Extending ProcessingRecipe

ItemApplicationRecipe extends [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe). That means all methods available in [ProcessingRecipe](/mods/createtweaker/recipe/type/ProcessingRecipe) are also available in ItemApplicationRecipe

## Methods

:::group{name=getProcessedItem}

Gets the processed Item.

Returns: The processed Item.  
Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// ItemApplicationRecipe.getProcessedItem() as IIngredient

myItemApplicationRecipe.getProcessedItem();
```

:::

:::group{name=getRequiredHeldItem}

Gets the required held item.

Returns: The required held item.  
Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// ItemApplicationRecipe.getRequiredHeldItem() as IIngredient

myItemApplicationRecipe.getRequiredHeldItem();
```

:::

:::group{name=shouldKeepHeldItem}

Should the recipe keep the held item?

Returns: True if the recipe keeps the held item. False otherwise.  
Return Type: boolean

```zenscript
// ItemApplicationRecipe.shouldKeepHeldItem() as boolean

myItemApplicationRecipe.shouldKeepHeldItem();
```

:::


## Properties

|        Name        |                        Type                        | Has Getter | Has Setter |              Description              |
|--------------------|----------------------------------------------------|------------|------------|---------------------------------------|
| processedItem      | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      | Gets the processed Item.              |
| requiredHeldItem   | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      | Gets the required held item.          |
| shouldKeepHeldItem | boolean                                            | true       | false      | Should the recipe keep the held item? |

