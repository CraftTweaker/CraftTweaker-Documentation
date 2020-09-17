# Repas d'os de joueur

Chaque fois qu'un joueur utilise de la farine d'os sur un bloc, l'évènement de la farine d'os est lancé.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerBonemealEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerBonemeal implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter      | Type de retour                                   |
| -------------- | ------------------------------------------------ |
| `annulé`       | boolean                                          |
| `traité`       | boolean                                          |
| `x`            | Indice                                           |
| `y`            | Indice                                           |
| `Z`            | Indice                                           |
| `Joueur`       | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `monde`        | [IWorld](/Vanilla/World/IWorld/)                 |
| `Bloquer`      | [Verrouillage](/Vanilla/Blocks/IBlock/)          |
| `blockState`   | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| `Pos de blocs` | [Pos IBlock](/Vanilla/World/IBlockPos/)          |
| `cote`         | Indice                                           |
| `Élément`      | [IItemStack](/Vanilla/Items/IItemStack/)         |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé
- `event.process()` définit l'événement tel qu'il est traité