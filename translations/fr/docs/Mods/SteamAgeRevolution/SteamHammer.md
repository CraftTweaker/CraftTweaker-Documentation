# Marteau à vapeur

Le marteau Steam est une machine qui convertit deux éléments d'entrée en un élément de sortie à l'aide de vapeur.

## Paquet
`mods.steamagerevolution.SteamHammer`.

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[IItemstack](/Vanilla/Items/IItemStack/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter
- **int steamCost** Coût de vapeur pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient input, IIngredient input, IItemStack sortie, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Retirer

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(IItemStack output);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.SteamHammer.removeAll();
```
