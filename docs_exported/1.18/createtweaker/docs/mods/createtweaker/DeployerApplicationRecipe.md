# DeployerApplicationRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.DeployerApplicationRecipe;
```


## Extending ProcessingRecipe

DeployerApplicationRecipe extends [ProcessingRecipe](/mods/createtweaker/ProcessingRecipe). That means all methods available in [ProcessingRecipe](/mods/createtweaker/ProcessingRecipe) are also available in DeployerApplicationRecipe

## Implemented Interfaces
DeployerApplicationRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in DeployerApplicationRecipe

- [IAssemblyRecipe](/mods/createtweaker/IAssemblyRecipe)

## Methods

:::group{name=getProcessedItem}

Gets the processed Item.

Returns: The processed Item.  
Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// DeployerApplicationRecipe.getProcessedItem() as IIngredient

myDeployerApplicationRecipe.getProcessedItem();
```

:::

:::group{name=getRequiredHeldItem}

Gets the required held item.

Returns: The required held item.  
Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// DeployerApplicationRecipe.getRequiredHeldItem() as IIngredient

myDeployerApplicationRecipe.getRequiredHeldItem();
```

:::

:::group{name=shouldKeepHeldItem}

Should the recipe keep the held item?

Returns: True if the recipe keeps the held item. False otherwise.  
Return Type: boolean

```zenscript
// DeployerApplicationRecipe.shouldKeepHeldItem() as boolean

myDeployerApplicationRecipe.shouldKeepHeldItem();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| processedItem | [IIngredient](/vanilla/api/ingredient/IIngredient) | true | false | Gets the processed Item. |
| requiredHeldItem | [IIngredient](/vanilla/api/ingredient/IIngredient) | true | false | Gets the required held item. |
| shouldKeepHeldItem | boolean | true | false | Should the recipe keep the held item? |

