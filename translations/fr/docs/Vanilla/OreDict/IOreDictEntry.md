# Entrée IOreDict

Quand [IOreDict](/Vanilla/OreDict/IOreDict/) est le lexique, les IOreDictEntries sont les entrées du lexique.  
Ils se composent d'un nom (nom OreDictionaire) et d'une explication (tous les éléments correspondants).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.oredict.IOreDictEntrée ;`

## Récupération d'un tel objet.

There are multiple ways of getting an IOreDictEntry Object: If you refer to an oreDict that does not yet exist, it will be created.

- Utilisation de la classe [IOreDict](/Vanilla/OreDict/IOreDict/).
- Utilisation du [ore Bracket Handler](/Vanilla/Brackets/Bracket_Ore/).
- Utilisation d'un [IItemDefinition's `minerais` getter](/Vanilla/Items/IItemDefinition/).

## ZenGetters

Vous pouvez utiliser ces getters pour récupérer des informations sur l'oredict :

| Nom            | Libellé                                    | Type de retour                           |
| -------------- | ------------------------------------------ | ---------------------------------------- |
| Nom            | Retourne le nom de l'oreDict               | chaîne de caractères                     |
| vide           | Retourne si l'oreDict est vide             | booléen                                  |
| premierElément | Renvoie le premier des éléments de oreDict | [IItemStack](/Vanilla/Items/IItemStack/) |

## Méthodes Zen

Vous pouvez utiliser ces méthodes sur un objet IOreDictEntry :

### Ajouter/Supprimer des éléments

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] items);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### Vérifier si une entrée IOreDictEntry contient un élément

Vous pouvez vérifier si un IOreDictEntry contient un élément en utilisant soit le `dans` ou `a` mots clés:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//En utilisant in est possible
if(oreDictEnt en <minecraft:iron_ingot>){
    print("Le fer est dans le oreDict! );
}

//nombreux sont ceux qui préfèrent utiliser a parce qu'il pourrait avoir plus de sens grammaire
if(oreDictEnt a <minecraft:iron_ingot>){
    print("Le fer est toujours dans l'oreDict ! );
}
```

### Miroir une entrée IOreDictEntry

La copie d'une entrée IOreDictEntry signifie que tous les éléments de l'autre oreDictEntry seront remplacés par les éléments de l'oreDictEntry sur lesquels la méthode a été exécutée :

```zenscript
//rendre le fer et le cuivre équivalent
le fer val = <ore:ingotIron>;
le cuivre val = <ore:ingotCopper>;

//ajoute toutes les entrées du fer au cuivre pour que le cuivre contienne les deux, les entrées de fer et de cuivre
fer. ddAll(cuivre) ; 


//miroir le cuivre au fer, donc tous les objets en fer seront remplacés par tous ceux en cuivre.
//Dans ce cas, cela signifie par tous les oreDictEntries de fer et de cuivre
copper.mirror(fer);
```

## Implémentation IIngredient

IOreDictEntry étend [Ingrédient](/Vanilla/Variable_Types/IIngredient/). Cela signifie que toutes les méthodes disponibles pour [Igredient](/Vanilla/Variable_Types/IIngredient/) sont également disponibles pour IOreDictEntries. Cela signifie également que vous pouvez mettre IOreDictEntries dans les tableaux IIngrédient (comme ceux dans les méthodes de fabrication de recettes).

### Itération à travers les objets d'une oreDictEntry's

```zenscript
fer val = <ore:ingotIron>;

pour l'élément dans iron.items{
    recipe.remove(item);
}
```