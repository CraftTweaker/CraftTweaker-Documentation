# format@@0 OreEntry

Un OreEntry est un matériau comme l'or, le diamant, le charbon, la redstone et ainsi de suite.  
Vous pouvez l'utiliser pour obtenir plusieurs [OreDictEntries](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/).

## Méthodes

En général, les méthodes prennent un paramètre de chaîne qui est un préfixe à utiliser.  
Par exemple, une OreEntry pour `"Or"`, appelé avec le préfixe `"poussière"` retournera de la poussière d'or.  
Pour ces exemples, nous supposerons que cela a été déclaré :  
Les commentaires après les appels d'exemple indiqueront ce que la méthode appelée peut retourner (sauf dans la catégorie supplémentaire).

```zenscript
val oreEntry = mods.jaopca.JAOPCA.getOre("Or");
```

### Obtenir les propriétés de l'entrée

Vous pouvez obtenir ces propriétés :

```zenscript
oreEntry.energyModifier; //1.0 en double
oreEntry.rary; //1.0 en double
oreEntry.oreType; //"INGOT" en tant que chaîne de caractères
```

### Obtenir OreName ou OreNameSynonyms

Le nom du minerai est essentiellement la façon dont il est enregistré et ce que vous utilisez dans un getOre pour le récupérer.  
Les synonymes de nom de minerai sont des synonymes que les mods ou les auteurs de pack peuvent enregistrer pour combiner deux ou plusieurs oreEntrées (e. . "Aluminum" et "Aluminium"). La plupart des oreEntries n'auront probablement rien enregistré. Les synonymes getter retourneront une liste contenant tous les synonymes en tant que chaînes.

```zenscript
oreEntry.oreName; //"Or"
oreEntry.oreNameSynonymes ; //[]
```

### Obtenir l'entrée IOreDictEntry

Renvoie un nouveau [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) avec le préfixe donné.

```zenscript
oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
```

### Get IItemStack

Retourne un nouveau [IItemStacks](/Vanilla/Items/IItemStack/) qui correspond au préfixe donné.  
Vous pouvez fournir un autre préfixe de secours à utiliser si aucun élément correspondant n'est trouvé.

Si aucun élément correspondant n'est trouvé et qu'aucun élément correspondant n'est trouvé en utilisant le préfixe de secours (si fourni), il retournera `null`.

```zenscript
//oreEntry.getItemStack(prefix);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); //null

//oreEntry.getItemStack(prefix, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid", "faulty"); //null
```

### Get ILiquidStack

Retourne un nouveau [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) qui correspond au préfixe donné.  
Vous pouvez fournir un autre préfixe de secours à utiliser si aucun liquide correspondant n'est trouvé.

Si aucun liquide correspondant n'est trouvé et qu'aucun liquide correspondant n'est trouvé en utilisant le préfixe de secours (si fourni), il retournera `null`.

```zenscript
//oreEntry.getLiquidStack(prefix);
oreEntry.getLiquidStack("molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); //null

//oreEntry.getLiquidStack(prefix, fallback);
oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid", "faulty"); //null
```

### Obtenir des Suppléments

Une Candidature peut avoir un enregistrement supplémentaire. Un extra peut par exemple être une sortie secondaire lors de la pulvérisation d'un minerai correspondant.

Vous pouvez soit vérifier si une entrée a un supplément, obtenir l'extra (ou `null` si elle n'est pas présente) ou le extraName.  
Vous pouvez également utiliser les mêmes méthodes que celles ci-dessus (`getOreDictEntry`, `getLiquidStack` et `getItemStack`).

Il y a jusqu'à 3 options qui peuvent être enregistrées. Par souci de simplicité, il n'y aura pas d'exemples pour les méthodes équivalentes, elles ne seront précisées que

```zenscript
//First extra
oreEntry.hasExtra; //true or false
oreEntry.extra; //matching oreEntry or null
oreEntry. xtraName; //le nom ou null

//Méthodes pour la première entrée de oreille supplémentaire
. etOreDictEntryExtra(prefix);
oreEntry.getItemStackExtra(prefix);
oreEntry.getItemStackExtra(prefix, fallback);
oreEntry. etLiquidStackExtra(prefix);
oreEntry.getLiquidStackExtra(prefix, replback);



//Second extra
oreEntry.hasSecondExtra; //true or false
oreEntry. econdExtra; //matching oreEntry or null
oreEntry.secondExtraName; //the name or null

//Methods for second extra
oreEntry.getOreDictEntrySecondExtra(prefix);
oreEntry. etItemStackSecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix, fallback);
oreEntry.getLiquidStackSecondExtra(prefix);
oreEntry.getLiquidStackSecondExtra(prefix, fallback);



//troisième
oreEntry.hasThirdExtra; //true ou false
oreEntry.thirdExtra; //matching oreEntry or null
oreEntry. hirdExtraName; //the name or null

//Methods for third extra
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix, fallback);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefix, fallback);
```