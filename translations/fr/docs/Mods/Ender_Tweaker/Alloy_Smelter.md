# Fonderie d'Alliage

## Paquet

`Importer mods.enderio.AlloySmelter;`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/)[] saisie** Les ingrédients. Doit être compris entre 1 et 3 ingrédients.
- **int EnergyCost** Combien FE la recette utilise. Par défaut, 5000.
- **float xp** Le xp est accordé à partir de cette recette. Ne peut pas être négatif.

## Ajouter

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack, IIngredient[] entrée, @Optional int energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## Retirer

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack sortie);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```