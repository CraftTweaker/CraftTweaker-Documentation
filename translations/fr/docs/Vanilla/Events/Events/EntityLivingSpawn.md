# EntityLivingSpawnEvent

L'événement EntityLivingSpawn est lancé chaque fois qu'une entité tente de rejoindre ou de quitter un monde.  
Il y a une sous-classe, l'EntityLivingExtendedSpawnEvent qui contient également une référence [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic).

## Classe de l'événement

Vous aurez besoin de lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`fabricant. vent.EntityLivingSpawnEvent`  
`artisan. vent.EntityLivingExtendedSpawnEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements EntityLivingSpawn implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                    | Type de texte                                                              |
| ---------------------------- | -------------------------------------------------------------------------- |
| `monde`                      | [IWorld](/Vanilla/World/IWorld/)                                           |
| `x`                          | flottant                                                                   |
| `y`                          | flottant                                                                   |
| `Z`                          | flottant                                                                   |
|                              |                                                                            |
| `spawner` (étendu seulement) | [format@@0 IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Fonctions de l'événement

L'événement de désespoir offre également trois fonctions pour changer le résultat de l'événement:

| Méthode Zen | Libellé                                                |
| ----------- | ------------------------------------------------------ |
| `autoriser` | Forcer l'entité à (dé)spawn                            |
| `Refuser`   | Forcer l'entité à ne pas (dé)spawn                     |
| `passer`    | Définit le résultat de l'événement à l'état par défaut |