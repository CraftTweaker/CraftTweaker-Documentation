# Salis Mundus

Ce paquet vous permet d'ajouter des gestionnaires de conversion pour le gestionnaire de salis mundus de thaumcraft.  
Ces gestionnaires sont invoqués lorsque vous cliquez sur un bloc dans le monde avec le salis mundus de Thaumcraft pour les changer en autre chose.

Si ce résultat est un bloc, il sera placé dans le monde, sinon il sera lâché comme objet.

## Importer le paquet

Pour raccourcir les appels de méthode, vous pouvez [importer](/AdvancedFunctions/Import/) le paquet comme ceci :

```zenscript
Importer mods.thaumcraft.SalisMundus;
```

## Ajouter des recettes

Vous pouvez soit spécifier un [IBlock](/Vanilla/Blocks/IBlock/) ou un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
Si vous ne spécifiez pas de recherche, cette recette sera toujours possible, si vous décidez de spécifier une chaîne de recherche, vous devez avoir déverrouillé la recherche pour que la conversion fonctionne.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Supprimer les recettes

Vous pouvez également supprimer toutes les recettes qui retournent un objet correspondant.  
Ce gestionnaire vérifie si le paramètre fourni correspond à l'itemStack de sortie, pour que vous puissiez également supprimer toutes les recettes en utilisant l'ingrédient générique `<*>`.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//Supprime tous les gestionnaires enregistrés
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Supprime seulement le gestionnaire de creuset
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```