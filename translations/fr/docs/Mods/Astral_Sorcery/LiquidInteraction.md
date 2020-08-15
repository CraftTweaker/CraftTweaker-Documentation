# Interaction Liquid

Le paquet liquidInteraction est utilisé pour ajouter des interactions liquides (comme de la lave et de la lumière étoilée liquide) aux calices AS.

## Importation du paquet

Si vous voulez importer le paquet, voici :

```zenscript
Importer mods.astralsorcery.LiquidInteraction;
```

## Supprimer l'interaction

Cette fonction supprime la première recette qu'elle trouve qui utilise les [liquides](/Vanilla/Liquids/ILiquidStack/) donnés et retourne la pile de sortie [donnée](/Vanilla/Items/IItemStack/).  
Si vous omettez la sortie, elle supprimera la première recette qui utilise les deux liquides donnés indépendamment de leur sortie.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Ajout de recette

Ajoute une interaction liquide aux interactions calicoles

[Les quantités](/Vanilla/Liquids/ILiquidStack/) de FluidStack comptent comme la quantité de liquide qui sera consommée en cas d'interaction.  
chance1 et chance2 définissent les chances que les fluides d'entrée input1 et input2 soient consommés respectivement.  
le poids détermine la probabilité que cela soit sélectionné par rapport aux autres interactions liquides enregistrées pour une paire donnée d'entrées de fluides

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```