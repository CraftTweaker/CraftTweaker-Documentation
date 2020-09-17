# IOreDict

L'OreDictionary de Forge est comme un énorme lexique dans la façon dont il comporte de nombreuses entrées différentes et chaque entrée est décrite par l'ajustement des objets.  
Lorsque vous parlez de dictionnaires de minerai, les gens se réfèrent principalement à [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) pas à tout le dictionnaire de minerai.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.oredict.IOreDict.`

## Comment récupérer l'oreDictionary

Vous pouvez récupérer l'OreDictionary en utilisant le mot-clé global [`oreDict`](/Vanilla/Global_Functions/).

## Méthodes

Que peut-on donc faire avec le oreDict?

### Obtenir une [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

Vous pouvez utiliser l'un des trois moyens ci-dessous pour vous référer à un OreDictEntry, même s'il existe déjà ou pas.  
Si l'oreDictEntry n'existe pas encore, il sera créé.

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### Itération à travers toutes les [IOreDictEntries enregistrées](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
//le membre des entrées est pour récupérer toutes les entrées enregistrées de oreDictionary !
val allEntries = oreDict.entries;

pour oreDictEntry dans allEntries{
    print(oreDictEntry. ame);
}

//Alternativement, vous pouvez simplement itérer via oreDict
pour l'entrée dans oreDict {
    print(entry.name);
}

```

## Comment vérifier si une entrée de dictionnaire de minerais existe

Vous pouvez utiliser l'opérateur `dans` ou `a` pour vérifier si un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) existe déjà:

```zenscript
if (oreDict dans "ingotIron") {
    print("ingotIron existe! );
}

if (oreDict a "ingotIron") {
    print("ingotIron existe! );
}


//Utiliser alternativement la fonction contenue :
if(oreDict. ontains "ingotIron") {
    print("ingotIron existe!"); 
}
```