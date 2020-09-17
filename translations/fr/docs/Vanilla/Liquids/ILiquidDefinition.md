# Définition ILiquid

La Définition ILiquidDefinition définit le liquide un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) se compose de. Contrairement à ILiquidStack, cette interface vous permet de changer les propriétés des fluides.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import crafttweaker.liquid.ILiquidDefinition;`

## Méthodes

Que pouvons-nous donc en faire?

### Multiplication

La multiplication d'une définition ILiquidDefinition donne lieu à une nouvelle [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) avec le montant spécifié en millibuckets

```zenscript
val def = <liquid:lava>.definition ;

//essentiellement le męme
bucketOfLava = def * 1000 ;
bucketOfLava1 = <liquid:lava> * 1000 ;
```

## Obtenir et définir les propriétés du fluide

En tant qu'ILiquidDefinition représente un liquide, vous pouvez obtenir, mais aussi définir ses propriétés. Consultez le tableau ci-dessous pour plus d'informations.

Comme dans le tableau ci-dessus, vous définissez le Zengetter/Setter à la fin de l'ILiquidDefinition. Certains ZenGetters n'ont pas selon ZenSetter, vous devrez compter sur d'autres moyens pour modifier ces propriétés.

Mais attention aux Zensetters qui ne modifient que le registre des fluides et n'ont aucun effet sur les fluides dans le monde. Vous n'aurez probablement besoin du réglage de température que lorsque vous mélangez avec les [Carburants de Fonderie de Construction de Tinkers](/Mods/Modtweaker/TConstruct/Fuel/).

```zenscript
définition de val = <liquid:lava>.definition ;

//Zengetter: luminosité
valse lavaL = definition.luminosité;

//Zensetter: luminosité
definition.luminosité.luminosité= 0;
```

| Zengetter      | Zensetter   | Qu'est-ce que c'est?                                        | Retour/Type d'ensemble |
| -------------- | ----------- | ----------------------------------------------------------- | ---------------------- |
| Nom            |             | Renvoie le nom du liquide non localisé                      | chaîne de caractères   |
| nomdeaffichage |             | Retourne le nom du liquide localisé                         | chaîne de caractères   |
| luminosité     | luminosité  | Ce retour/fixe la luminosité du liquide référencé           | Indice                 |
| densité        | densité     | Ce retour/définit la densité du liquide référencé           | Indice                 |
| température    | température | Ce retour/fixe la température du liquide référencé          | Indice                 |
| viscosité      | viscosité   | Cette déclaration/définit la viscosité du liquide référencé | Indice                 |
| gazeux         | gazeux      | Cette déclaration/détermine si le liquide référé est gazeux | boolean                |