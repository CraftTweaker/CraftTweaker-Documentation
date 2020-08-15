# IServer

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.server.IServer ;`

## Étendre ICommandSender

IServer étend [ICommandSender](/Vanilla/Commands/ICommandSender), donc toutes les méthodes disponibles pour un objet [ICommandSender](/Vanilla/Commands/ICommandSender) sont également disponibles pour un objet IServer.

## Accéder au gestionnaire de serveur

Vous pouvez accéder au gestionnaire de serveur en utilisant le `serveur` [mot-clé global](/Vanilla/Global_Functions/).  
Vous pouvez également obtenir le serveur depuis n'importe quel [ICommandSender](/Vanilla/Commands/ICommandSender/).

## Vérifie si un joueur [](/Vanilla/Players/IPlayer/) est OP

Vous pouvez l'utiliser pour vérifier si un [IPlayer](/Vanilla/Players/IPlayer/) a la permission OP :

```zenscript
serveur.isOP(joueur);
```

## Obtenir le gestionnaire de commandes

Vous pouvez l'utiliser pour obtenir le [ICommandManager](/Vanilla/Commands/ICommandManager/)

```zenscript
server.commandManager ;
```