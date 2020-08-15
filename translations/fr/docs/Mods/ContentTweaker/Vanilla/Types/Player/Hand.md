# Main

Une main est une énumération des deux mains possibles du joueur: main et off

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Hand;`

## Énumérations

La main peut être de ces deux valeurs :

- principal
- désactivée

```zenscript
importer mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## Utilisations

L'utilisation principale d'une main est dans une [Fonction IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Comparaison d'objets à deux mains

Vous pouvez comparer deux objets Main en utilisant l'accesseur `==`.

```zenscript
Hand.main() == Hand.main()
```