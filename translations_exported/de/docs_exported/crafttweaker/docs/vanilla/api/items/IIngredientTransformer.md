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
myIIngredientTransformer.getCommandString(Zutat als T);
```

| Parameter  | Type | Beschreibung            |
| ---------- | ---- | ----------------------- |
| ingredient | T    | No description provided |


### matches

Return type: boolean

```zenscript
myIIngredientTransformer.matches(Stapel als crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Beschreibung            |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



