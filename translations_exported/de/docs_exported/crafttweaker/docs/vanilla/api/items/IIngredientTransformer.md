# IngredientTransformer

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Methoden
### getCommandString

Return type: String

```zenscript
myIIngredientTransformer.getCommandString(transformedIngredient as T);
```

| Parameter             | Type | Beschreibung            |
| --------------------- | ---- | ----------------------- |
| transformedIngredient | T    | No description provided |


### transform

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myIIngredientTransformer.transform(stack as crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Beschreibung            |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



