# Four à vapeur

Le four à vapeur est une machine qui convertit un élément d'entrée en un élément de sortie à l'aide de vapeur.

## Paquet
`Fusil à vapeur`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[IItemstack](/Vanilla/Items/IItemStack/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter
- **int steamCost** Coût de vapeur pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack sortie, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200, 200);
```


## Retirer

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
