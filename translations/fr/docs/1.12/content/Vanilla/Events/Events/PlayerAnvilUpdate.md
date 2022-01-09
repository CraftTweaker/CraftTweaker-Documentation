# PlayerAnvilUpdate

L'événement PlayerAnvilUpdate est lancé lorsqu'un joueur place des objets à la fois à gauche et à droite d'une enclume.
 * Si l'événement est annulé, le comportement vanilla ne s'exécutera pas, et la sortie sera définie à null.
 * Si l'événement n'est pas annulé, mais que la sortie n'est pas nulle, il définira la sortie et ne lancera pas le comportement vanilla.
 * si la sortie est nulle, et que l'événement n'est pas annulé, le comportement vanilla s'exécutera.

## Event Class
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerAnvilUpdateEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Event interface extensions
Les événements PlayerAnvilUpdate implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSetters
The following information can be retrieved from the event:

| ZenGetter          | ZenSetter          | type                                     | Description                                                                                                        |
| ------------------ | ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `Élément gauche`   |                    | [IItemStack](/Vanilla/Items/IItemStack/) | Le côté gauche de l'entrée.                                                                                        |
| `DroiteItem`       |                    | [IItemStack](/Vanilla/Items/IItemStack/) | Le côté droit de l'entrée.                                                                                         |
| `outputItem`       | `outputItem`       | [IItemStack](/Vanilla/Items/IItemStack/) | Définissez ceci pour définir la pile de sortie.                                                                    |
| `itemName`         |                    | string                                   | Le nom de l'élément à définir, si l'utilisateur a spécifié un.                                                     |
| `Coût de xp`       | `Coût de xp`       | int                                      | Le coût de base, définissez ceci pour le changer si la sortie != null.                                             |
| `Coût du matériel` | `Coût du matériel` | int                                      | Le nombre d'objets du bon emplacement à consommer lors de la réparation. Laisser 0 pour consommer la pile entière. |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
