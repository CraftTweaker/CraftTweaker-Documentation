# La cuve

## Paquet

`Importer mods.enderio.Vat;`

## Méthode

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** - Le fluide de sortie (réservoir de droite).

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** - Le fluide d'entrée (réservoir gauche).

**[IIngrédient](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - Éléments qui peuvent aller dans l'emplacement 1.

**float[] slot1Mults** - Les multiplicateurs pour les éléments dans l'emplacement 1. Doit être de la même longueur que slot1Solids.

**[IIngrédient](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - Éléments qui peuvent aller à l'emplacement 2.

**float[] slot2Mults** - Les multiplicateurs pour les éléments dans l'emplacement 2. Doit être de la même longueur que slot2Solids.

**@Optional int energyCost** - Combien de FE la recette utilise. Par défaut, 5000.

## Ajouter

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack sortie, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

mods. nderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## Retirer

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack sortie);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```