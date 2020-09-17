# Je suis un expéditeur

L'interface ICommandSender est utilisée comme base de chaque entité ainsi que d'autres types dans CraftTweaker.  
Chaque [IEntity](/Vanilla/Entities/IEntity/) et [IPlayer](/Vanilla/Players/IPlayer/) implémente ceci !

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.command.ICommandSender ;`

## ZenGetter

| ZenGetter      | Type de retour                          |
| -------------- | --------------------------------------- |
| nomdeaffichage | chaîne de caractères                    |
| position       | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| monde          | [IWorld](/Vanilla/World/IWorld/)        |
| serveur        | [IServer](/Vanilla/Game/IServer/)       |

## Méthodes Zen

#### Envoyer un message

Prend une chaîne. Renvoie vide (rien).

```zenscript
sender.sendMessage(String text);
```