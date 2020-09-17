# Autel de sang

## Paquet

`Autel de sang`

## Ajouter

Cela crée une recette d'autel de sang qui utilise l'élément `en entrée` et produit l'élément `en sortie` donné.  
Pour obtenir le `niveau minimum`, soustract 1 de ce que JEI/l'emblème vous dit, donc un autel T1 nécessiterait `0`.  
La valeur `du syphon` est la quantité d'essence de vie au syphon de l'autel sanguin au cours de l'artisanat.  
Le taux de consommation `` est la vitesse à laquelle l'Essence de Vie est syphonée.  
Le taux de draine `` est la vitesse à laquelle la progression est perdue si l’Autel de sang est épuisée pendant l’Essence de Vie pendant l’artisanat.

```zenscript
//mods.bloodmagic.BloodAltar.addRecipe(IItemStack output, IItemStack input, int minimumTier, int syphon, int consumeRate, int drainRate);
mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
```

## Retirer

```zenscript
//mods.bloodmagic.BloodAltar.removeRecipe(IItemStack input);
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```