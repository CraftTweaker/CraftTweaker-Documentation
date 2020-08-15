# Fabrication de l'autel

Vous pouvez ajouter et supprimer des recettes d'artisanat de l'autel AS.

## Appel en cours

Vous pouvez appeler le paquet AltarRecipe en utilisant `mods.astralsorcery.Altar`.

## Supprimer les recettes de l'autel

Cette fonction supprime la recette avec l'emplacement de la ressource donnée.  
Vous pouvez obtenir ces emplacements en survolant la sortie de recette dans le livre JEI ou Astral pendant que l'écran F3 est actif.  
Affiche un avertissement si la recette n'existe pas.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```

<details><summary>Pre v1.10 handler</summary>

This function removes the first recipe it finds that returns provided [IItemStack](../../../Vanilla/Items/IItemStack/) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

<table>
    <tr><th>Niveau d'autel</th><th>Nom du niveau</th></tr>
    <tr><td>0</td><td>Table de Fabrication Lumineuse</td></tr>
    <tr><td>1</td><td>Autel d'artisanat de Starlight</td></tr>
    <tr><td>2</td><td>Autel céleste</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack sortie, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## Ajouter des recettes d'autel

Depuis la v1.10, toutes les recettes nécessitent un emplacement de ressource comme premier paramètre.  
Contrairement aux noms de recettes vanilla, ils ne sont pas optionnels et vous rencontrerez des erreurs si vous ne les fournissez pas. Si vous voulez remplacer une recette existante, vous pouvez simplement ajouter une nouvelle recette avec le même emplacement.  
Vous pouvez obtenir ces emplacements en survolant la sortie de recette dans le livre JEI ou Astral pendant que l'écran F3 est actif.

Toutes les méthodes d'ajout de recette nécessitent ces paramètres :  
string `recipeLocation`,  
[IItemStack](/Vanilla/Items/IItemStack/) `sortie`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[Ingrédient](/Vanilla/Variable_Types/IIngredient/)[] `entrées`

Le paramètre `entrées` est, contrairement aux recettes du Tableau d'artisanat seulement un tableau de dimension 1.  
Vous pouvez utiliser [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) ou `null` en tant que membres du tableau

Ces recettes ne peuvent pas être sans forme!

### Découverte

`les entrées de` longueur *doivent être* 9

`inputs` Order:  
![Ordre des entrées](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Attantation

Ajoute une recette à la table d'artisanat de Starlight (T2)

`les entrées de` longueur *doivent être* 13

`inputs` Order:  
![Ordre des entrées](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
Altar ddAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            nul, <liquid:astralsorcery.liquidstarlight>, nul, nul,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble> ]) ;
```

### Constellation

Ajoute une recette à l'autel céleste (T3)

`les entrées de` longueur *doivent être* 21

`inputs` Order:  
![Ordre des entrées](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
Altar ddConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            null, null, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### Caractéristique

Ajoute une recette à l'autel de la Caractéristique (T4)

`Constellation` la Constellation en tant que chaîne de caractères non localisée. Ceci est un paramètre optionnel.

`les entrées de` longueur *doivent être* 25 ou plus. Les éléments à l'indice 25 ou plus seront considérés comme des « objets extérieurs » qui doivent être placés sur des relais autour de l'autel.

`inputs` Order:  
![Ordre des entrées](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, IIngredient[] entrées, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar. ddTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava>, <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>,null, 
    null, null, null,<ore:blockMarble>, <ore:blockMarble>,
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
    //Éléments externes, indices 25+
    <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"astralsorcery. onstellation.evorsio");
```