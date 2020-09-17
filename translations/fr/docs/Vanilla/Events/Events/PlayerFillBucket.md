# format@@0 PlayerFillBucket

Chaque fois qu'un joueur remplit un seau, l'évènement PlayerFillket est lancé.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerFillBucketEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

PlayerFillBucket Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                  | Type de retour                                             |
| -------------------------- | ---------------------------------------------------------- |
| `annulé`                   | boolean                                                    |
| `Joueur`                   | [IPlayer](/Vanilla/Players/IPlayer/)                       |
| `résultat`                 | [IItemStack](/Vanilla/Items/IItemStack/)                   |
| `vider le seau`            | [IItemStack](/Vanilla/Items/IItemStack/)                   |
| `x`                        | Indice                                                     |
| `y`                        | Indice                                                     |
| `Z`                        | Indice                                                     |
| `monde`                    | [IWorld](/Vanilla/World/IWorld/)                           |
| `blockState`               | [État de l'IBlock](/Vanilla/Blocks/IBlockState/)           |
| `Bloquer`                  | [Verrouillage](/Vanilla/Blocks/IBlock/)                    |
| `cote`                     | Indice                                                     |
| `format@@0 rayTraceResult` | [Résultat de l'IRayTrace](/Vanilla/World/IRayTraceResult/) |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.

## Réglages

- `event.result = <minecraft:ender_pearl>` Cela va aussi traiter l'événement !