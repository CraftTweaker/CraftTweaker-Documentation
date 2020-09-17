# format@@0 PlayerUseHoe

L'Evénement PlayerUseHoe est lancé chaque fois qu'un joueur utilise sa houe... Si vous savez ce que je veux dire.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerUseHoeEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerUseHoe implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter    | Type de retour                                   |
| ------------ | ------------------------------------------------ |
| `annulé`     | boolean                                          |
| `traité`     | boolean                                          |
| `x`          | Indice                                           |
| `y`          | Indice                                           |
| `Z`          | Indice                                           |
| `Joueur`     | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `monde`      | [IWorld](/Vanilla/World/IWorld/)                 |
| `Bloquer`    | [Verrouillage](/Vanilla/Blocks/IBlock/)          |
| `blockState` | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| `cote`       | Indice                                           |
| `Élément`    | [IItemStack](/Vanilla/Items/IItemStack/)         |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé
- `event.process()` définit l'événement tel qu'il est traité