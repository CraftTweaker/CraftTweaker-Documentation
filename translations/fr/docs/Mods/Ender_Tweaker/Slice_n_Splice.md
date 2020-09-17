# Trancher 'n' Splice

## Paquet

`Importer mods.enderio.SliceNSplice;`

## Méthodes

**- [IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.

**- [Ingrédient](/Vanilla/Variable_Types/IIngredient/)[] saisie** Les ingrédients. Doit être compris entre 1 et 6 ingrédients.

**- int energyCost** Combien FE la recette utilise. Par défaut, 5000.

**- float xp** Le xp est donné à partir de cette recette. Ne peut pas être négatif.

## Ajouter

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(sortie IItemStack, IIngredient[] entrée, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0 );
```

## Retirer

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack output);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```