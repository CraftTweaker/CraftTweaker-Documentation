# RecipeFunctionMatrix

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## Methoden
### process

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack[][]);
```

| Parameter | Type                                                                  | Beschreibung            |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| usualOut  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | No description provided |
| inputs    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | No description provided |



