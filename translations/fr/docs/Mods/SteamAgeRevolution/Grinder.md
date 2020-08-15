# Broyeur

Le broyeur est une machine qui convertit un élément d'entrée en un élément de sortie à l'aide de vapeur.

## Paquet
`Broyeur`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[IItemstack](/Vanilla/Items/IItemStack/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter
- **int steamCost** Coût de vapeur pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack sortie, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Enlèvement

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack output);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
