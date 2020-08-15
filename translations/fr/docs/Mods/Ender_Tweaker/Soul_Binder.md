# Binder d'âme

## Paquet

`Importer mods.enderio.SoulBinder;`

## Méthode

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'ingrédient principal (fiole d'âme).
- **Chaîne[] entités** autorisées qui doivent être présentes dans un flacon d'âme pour que cette recette fonctionne.
- **int xp** Le coût d'expérience pour cette recette
- **int EnergyCost** Combien FE la recette utilise. Par défaut, 5000.

## Ajouter

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack, IIngredient input, String[] entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## Retirer

```zenscript
mods.enderio.SoulBinder.removeRecipe(IItemStack sortie);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```