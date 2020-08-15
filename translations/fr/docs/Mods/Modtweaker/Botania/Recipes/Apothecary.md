# Apothicaire pétrolier

L'ensemble Apothicaire est utilisé pour ajouter ou supprimer des recettes vers/de l'apothicaire botanique Petal.

## Appel en cours

Vous pouvez appeler le paquet Apothecary en utilisant `mods.botania.Apothecary`

## Ajout de recette

You can either add recipes using the returned [IItemStack](/Vanilla/Items/IItemStack/) as output parameter, or the name of the botania flower as string. le nom de la chaîne ne fonctionne que pour les fleurs de botanique.  
Rappelez-vous cependant une chose :  
L'Apothicaire est **codée en dur pour n'accepter que des pétales**, alors que vous pouvez ajouter des recettes avec n'importe quel ingrédient, vous ne devriez utiliser que des objets que vous pouvez jeter dans l'apothicaire.

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack sortie, IIngredient[] input);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//mods. otania.Apothecary.addRecipe(String output, IIngredient[] input);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Suppression de la recette

You can either remove recipes using the returned [IItemStack](/Vanilla/Items/IItemStack/) as output parameter, or the name of the botania flower as string. le nom de la chaîne ne fonctionne que pour les fleurs de botanique.

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```