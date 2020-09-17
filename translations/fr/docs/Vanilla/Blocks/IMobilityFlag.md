# Drapeau de l'IMA

L'interface IMobilityFlag vous permet d'obtenir un [IBlockState's](/Vanilla/Blocks/IBlockState/) possible mobilityFlags.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IMobilityFlag;`

## Méthodes Zen

#### Matchs

Vous pouvez vérifier si deux objets IMobilityFlag sont égaux :  
Renvoie un bool.

```zenscript
flagOne.matches(autre);
```

## Énumérations

L'interface MobilityFlag a 5 méthodes statiques, chacune retournant l'objet IMobilityFlag donné.

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```