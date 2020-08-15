# Hammering

## Paquet
```zenscirpt
`mods.exnihilocreatio.Hammer`
```

## Méthodes

- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** Le bloc qui doit être cassé.
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** L'élément que le bloc lâche lorsqu'il est cassé.
- **Niveau d'outil int** pour casser le bloc.
- **Chance flottante** entre 0 et 1.
- **Chance de chance de chance** flottante entre 0 et 1.

## Ajouter

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Retirer

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
