# Inf métallurgique

Depuis Mekanism 9.7.0, il est maintenant possible de voir toutes les chaînes de recettes de l'Infuser Metallurgique via la commande `/ct mekrecipes metallurgicInfuser`

## Type de chaîne de fusion

L'ajout et la suppression de recettes nécessitent une chaîne de caractères de type "perfusion". Les exemples par défaut du Mékanisme sont:

| Type d'infusation | Ajouté par |
| ----------------- | ---------- |
| "CARBON"          | Mékanisme  |
| "TIN"             | Mékanisme  |
| "DIAMOND"         | Mékanisme  |
| "REDSTONE"        | Mékanisme  |
| "FUNGI"           | Mékanisme  |
| "BIO"             | Mékanisme  |
| "OBSIDIAN"        | Mékanisme  |

Si un autre mod enregistre un nouveau type de perfusion, que ce type peut être utilisé dans CraftTweaker aussi bien que dans la mesure où le nom du type enregistré est spécifié exactement. Remarque : Il n'est *pas possible* de définir **nouveaux** types de perfusion ** avec CraftTweaker

Depuis le Mékanisme 9.7.0, il est maintenant possible de voir toutes les infusions enregistrées (y compris celles provenant d'autres mods) via la commande `/ct infuseTypes`

## Ajouter

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IIngredient inputStack, IItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

Depuis Mekanism 9.7.0 il est possible d'utiliser IIngredients comme la stack d'entrée au lieu de IItemStacks.

Note: Actuellement tout cela fait une boucle sur les différentes possibilités de java tout en ajoutant au lieu de vous avoir à le faire dans ZenScript. Actuellement, il n'y a pas de support pour les composants composés ou oredictionnaire dans les machines elles-mêmes.

## Retirer

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Spécifier un paramètre d'entrée ne supprimera que la recette spécifique qui utilise cette entrée. L'omission du paramètre d'entrée supprimera toutes les recettes qui produisent la sortie spécifiée.

## Suppression de toutes les recettes

Depuis Mekanism 9.7.0 il est maintenant possible de supprimer toutes les recettes Metallurgic Infuser . (Ceci exclut toutes les recettes ajoutées via CraftTweaker)

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```