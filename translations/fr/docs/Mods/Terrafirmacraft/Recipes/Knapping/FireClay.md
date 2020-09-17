# Coup d'argile de feu

## Paquet
```zenscript
Importer mods.terrafirmacraft.FireClayKnapping ;
```

## Ajouter

```zenscript
FireClayKnapping.addRecipe(String registryName, IItemStack sortie, String... pattern)
```

## Retirer

```zenscript
FireClayKnapping.removeRecipe(sortie IItemStack);
FireClayKnapping.removeRecipe(String registryName);
```

## Exemple
```zenscript
// ajoute une recette de tricotage en argile pour le lieur de conduit enderio
FireClayKnapping. ddRecipe("enderio/item_conduit_binder", <enderio:item_material:22>*2, 
" X",
" XX",
" XXX",
" XXXX",
"XXXXX");
```