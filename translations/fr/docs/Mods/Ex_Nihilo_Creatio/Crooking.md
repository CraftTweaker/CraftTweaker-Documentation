# Courroux

## Paquet
```zenscirpt
format@@0 mods.exnihilocreatio.Crook
```
## Méthodes

- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'entrée.
- **[IItemStack](/Vanilla/Items/IItemStack/) récompense** l'objet qui a une chance de lâcher.
- **Chance flottante** entre 0 et 1.
- **Chance de chance de chance** flottante entre 0 et 1.

## Ajouter

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngredient, IItemStack, Float, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Retirer

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```