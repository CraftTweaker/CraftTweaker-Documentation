# Commandes

Vous pouvez utiliser cette classe pour envoyer une commande, vous ne pouvez pas utiliser cette classe pour créer de nouvelles commandes! Regardez [CommandEvent](/Vanilla/Events/Events/CommandEvent/) pour ajouter de nouvelles commandes. Vous pouvez également utiliser un [ICommandManager](/Vanilla/Commands/ICommandManager/).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Commandes ;`

## Appel d'une commande

C'est la seule chose que vous puissiez faire avec le paquet Commands.

```zenscript
appel (commande String, joueur IPlayer, monde IWorld)
appel (commande String, joueur IPlayer, IWorld world, booléen logToChat, overridePermissions booléennes)
```

Paramètres:

- Commande de chaîne → La commande à exécuter
- [IPlayer](/Vanilla/Players/IPlayer/) joueur → Le joueur exécutant la commande
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) monde → Le monde dans lequel la commande est exécutée
- booléen logToChat → La sortie de la commande doit-elle apparaître dans le chat MC?
- boolean overridePermissions doit être exécuté quelle que soit le niveau de permission requis ?

Les deux booléens doivent être ajoutés ou omis. Si vous appelez la commande sans eux, elle sera vraie.