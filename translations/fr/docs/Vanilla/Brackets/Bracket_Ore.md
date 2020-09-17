# Gestionnaire de tranches de dictionnaire d'Ore

Le gestionnaire de brackets Ore Dictionary vous donne accès aux dictionnaires Ore du jeu.

Ore Dictionarys est référencé dans le gestionnaire de tranches de dictionnaire d'Ore :

```zenscript
<ore:orename>
<ore:ingotIron>
```

Returns an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), as long as no `*` is in the call, otherwise returns a `List<IOreDictEntry>` If the oreDictionary is not yet in the game, will create a new and empty oreDictionary with the given name and return that. Veuillez vous référer à l'entrée [Dictionnaire de minerai](/Vanilla/OreDict/IOreDictEntry/) pour plus d'informations sur ce qu'il faut faire avec.

# Obtenir tous les dictionnaires de minerais enregistrés

Vous pouvez utiliser la commande suivante pour afficher tous les dictionnaires de minerais enregistrés dans le journal CraftTweaker

    /ct oredict
    /crafttweaker oredict