# WrapperRecipe

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.recipes.WrapperRecipe
```

## Methods
### canFit

Return type: boolean

```zenscript
myWrapperRecipe.canFit(width as int, height as int);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| width | int | No description provided |
| height | int | No description provided |



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| dynamic | boolean | true | false |
| group | String | true | false |
| icon | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true | false |
| id | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false |
| ingredients | List&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt; | true | false |
| output | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true | false |

