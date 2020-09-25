# PlayerAnvilUpdate

L'événement PlayerAnvilUpdate est lancé lorsqu'un joueur place des objets à la fois à gauche et à droite d'une enclume.
 * Si l'événement est annulé, le comportement vanilla ne s'exécutera pas, et la sortie sera définie à null.
 * Si l'événement n'est pas annulé, mais que la sortie n'est pas nulle, il définira la sortie et ne lancera pas le comportement vanilla.
 * si la sortie est nulle, et que l'événement n'est pas annulé, le comportement vanilla s'exécutera.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements PlayerAnvilUpdate implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter          | ZenSetter          | Type de type                             | Libellé                                                                                                            |
| ------------------ | ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `Élément gauche`   |                    | [IItemStack](/Vanilla/Items/IItemStack/) | Le côté gauche de l'entrée.                                                                                        |
| `DroiteItem`       |                    | [IItemStack](/Vanilla/Items/IItemStack/) | Le côté droit de l'entrée.                                                                                         |
| `outputItem`       | `outputItem`       | [IItemStack](/Vanilla/Items/IItemStack/) | Définissez ceci pour définir la pile de sortie.                                                                    |
| `itemName`         |                    | chaîne de caractères                     | Le nom de l'élément à définir, si l'utilisateur a spécifié un.                                                     |
| `Coût de xp`       | `Coût de xp`       | Indice                                   | Le coût de base, définissez ceci pour le changer si la sortie != null.                                             |
| `Coût du matériel` | `Coût du matériel` | Indice                                   | Le nombre d'objets du bon emplacement à consommer lors de la réparation. Laisser 0 pour consommer la pile entière. |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.
