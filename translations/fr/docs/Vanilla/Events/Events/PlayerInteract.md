# Interagir avec le joueur

L'Evénement Interact est lancé chaque fois qu'un joueur interagit avec un bloc.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerInteractEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerInteract implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter            | Type de retour                          |
| -------------------- | --------------------------------------- |
| `annulé`             | boolean                                 |
| `utilisationÉlément` | boolean                                 |
| `utilisationBloc`    | boolean                                 |
| `x`                  | Indice                                  |
| `y`                  | Indice                                  |
| `Z`                  | Indice                                  |
| `Joueur`             | [IPlayer](/Vanilla/Players/IPlayer/)    |
| `monde`              | [IWorld](/Vanilla/World/IWorld/)        |
| `Bloquer`            | [Verrouillage](/Vanilla/Blocks/IBlock/) |
| `cote`               | Indice                                  |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé
- `event.useBlock()` définit le bloc à true
- `event.useItem()` définit l'élément à true