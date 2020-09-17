# IUser

L'interface IUser est utilisée en interne pour combiner différents types d'utilisateurs, comme la console minecraft, un utilisateur normal et des blocs de commandes en un seul type.  
Vous aurez probablement rarement besoin de cela.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.player.IUser;`

## Étendre ICommandSender

IUser étend [ICommandSender](/Vanilla/Commands/ICommandSender/). Cela signifie que toutes les fonctions disponibles pour les objets [ICommandSender](/Vanilla/Commands/ICommandSender/) sont également disponibles pour les objets IUser .

## Méthodes

Il n'y a actuellement aucune fonction distincte pour les objets IUser .