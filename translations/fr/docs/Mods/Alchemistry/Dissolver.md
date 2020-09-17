# Dissolution

## Paquet
`mods.alchimie.Dissolution`

## Méthodes
- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** - L'entrée de la recette.
- **booléenne relativeProbabilité** - Probabilité de calcul booléenne
- **int rolls** - Possibilité de rôles
- **probabilityGroups** - Une table de tables avec un double suivi par n'importe quel # de [IItemStack](/Vanilla/Items/IItemStack/)s. Le double fait référence à la probabilité pour son groupe.

## Ajouter
```zenscript
mods.alchimie.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore> ]]) ;
```

## Retirer
```zenscript
mods.alchimie.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Supprimer toutes les recettes ();
```

# Notes
Pour faciliter le développement de la modification des recettes de dissolveurs existantes, il y a une commande, simplement /dissolver qui va récupérer la recette crafttweaker pour l'objet que vous détenez et le copier dans votre presse-papiers

Si la probabilité relative est vraie, alors chaque probabilité sera calculée en fonction de la somme de toutes les probabilités. Dans l'exemple ci-dessus, cela signifierait qu'il y a 33,3 % de chance de lancer chaque rouleau de pierre et 66. % de chance de produire un sable et un minerai de fer à chaque rouleau.

Si la probabilité relative est fausse, alors ces nombres sont des pourcentages absolus i.e. 10 % de chance de produire de la pierre et 20 % de chance de produire du sable et du minerai de fer (que la pierre soit produite ou non). Les probabilités de virgule flottante sont prises en charge, donc 4,5 % signifierait 4,5 %

