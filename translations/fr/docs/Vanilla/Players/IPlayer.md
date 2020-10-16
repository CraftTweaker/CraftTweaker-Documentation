# IPlayer

L’interface IPlayer vous permet de visualiser certaines informations sur un joueur spécifique et d’interagir avec celui-ci. Principalement utilisé dans les gestionnaires d'événements et les fonctions de recettes.

## Importing the package

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.player.IPlayer ;`

## Étendre IEntityLivingBase et IUser

IPlayer étend [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Cela signifie que toutes les fonctions disponibles pour les objets [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) sont également disponibles pour les objets IPlayer.  
IPlayer étend également [IUser](/Vanilla/Players/IUser/). Cela signifie que toutes les fonctions disponibles pour les objets [IUser](/Vanilla/Players/IUser/) sont également disponibles pour les objets IPlayer.

## Zengetters

Les Zengetters sont pour la récupération des informations. Habituellement, soit assignée à une variable soit utilisée dans une méthode/fonction.

| Zengetter              | What does it do                                                                                                        | Return Type                                | Usage                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------ |
| uuid                   | renvoie l'UUID du joueur                                                                                               | string                                     | `joueur.uid`                   |
| name                   | renvoie le nom du joueur                                                                                               | string                                     | `nom.joueur`                   |
| données                | retourne les données du joueur                                                                                         | [IData](/Vanilla/Data/IData/)              | `données.données`              |
| xp                     | retourne le niveau d'expérience du joueur. Peut également être utilisé pour définir le niveau d'expérience d'un joueur | int                                        | `player.xp`                    |
| Taille du raccourci    | retourne la taille de la barre d'action du joueur                                                                      | int                                        | `Taille de la barre d'action`  |
| Taille de l'inventaire | retourne la taille d'inventaire du joueur                                                                              | int                                        | `Taille de l'inventaire`       |
| currentItem            | renvoie l'objet que le joueur tient actuellement                                                                       | [IItemStack](/Vanilla/Items/IItemStack/)   | `format@@0 player.currentItem` |
| créatif                | retourne si le joueur est actuellement en mode créatif (mode de jeu 1)                                                 | bool                                       | `joueur.créatif`               |
| aventure               | retourne si le joueur est actuellement en mode aventure (mode de jeu 2)                                                | bool                                       | `joueur.aventure`              |
| x                      | renvoie la position X actuelle du joueur dans le monde                                                                 | double                                     | `joueur.x`                     |
| y                      | renvoie la position y actuelle du joueur dans le monde                                                                 | double                                     | `joueur.y`                     |
| z                      | renvoie la position z actuelle du joueur dans le monde                                                                 | double                                     | `joueur.z`                     |
| foodStats              | renvoie les statistiques alimentaires du joueur.                                                                       | [IFoodStats](/Vanilla/Players/IFoodStats/) | `format@@0 player.foodStats`   |

## ZenMethods

ZenMethods sont pour faire des choses avec d'autres choses, dans ce cas avec un joueur.

| ZenMethod                             | Type(s) de paramètre                     | What does it do                                                   | Example                                     |
| ------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------- |
| Enlever XP(XPtoRemove)                | int                                      | Supprime les niveaux d'expérience donnés au joueur.               | `joueur.enlève XP(1)`                       |
| mise à jour (IData)                   | [IData](/Vanilla/Data/IData/)            | Met à jour les données du joueur vers l'IData fourni.             |                                             |
| sendChat(Message)                     | chaîne OU message IChatMessage           | Envoie au joueur un message de chat.                              | `player.sendChat("Bonjour mon vieil ami")`  |
| format@@0 getHotbarStack(index)       | int                                      | Renvoie l'objet à l'index donné dans la barre d'action du joueur. | `player.getHotbarStack(3)`                  |
| format@@0 getInventoryStack(index)    | int                                      | Renvoie l'objet à l'index donné dans l'inventaire du joueur.      | `player.getInventoryStack(3)`               |
| cadeau(objet)                         | [IItemStack](/Vanilla/Items/IItemStack/) | Donner au joueur l'objet fourni. L'élément est une IItemStack.    | `player.give(<minecraft:gold_ingot>)` |
| téléportation (position)              | [Position3f](/Vanilla/Utils/Position3f/) | Téléporte le joueur à la position fournie dans la même dimension  | `player.teleport(position)`                 |
| executeCommand(cru)                   | string                                   | Exécute la commande en tant que joueur                            | `player.executeCommand("kill")`             |
| format@@0 dropItem(dropAll)           | bool                                     | Lâche l'objet actuel (ou toute la pile) que le joueur possède.    | `format@@0 player.dropItem(false)`          |
| Déposer l'élément (élément à glisser) | [IItemStack](/Vanilla/Items/IItemStack/) | Lâche l'objet fourni à la position du joueur.                     | `player.dropItem(<minecraft:dirt>)`   |