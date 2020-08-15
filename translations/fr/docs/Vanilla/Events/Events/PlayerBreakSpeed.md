# format@@0 PlayerBreakSpeed

L'événement PlayerBreakSpeed est lancé chaque fois qu'un joueur tente de briser un bloc.  
Il peut être annulé pour empêcher le joueur de pouvoir casser ce bloc.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerBreakSpeedEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerBreakSpeed implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter        | ZenSetter        | Type de texte                                    |
| ---------------- | ---------------- | ------------------------------------------------ |
| blockState       |                  | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| Bloquer          |                  | [Verrouillage](/Vanilla/Blocks/IBlock/)          |
| Vitesseoriginale |                  | flottant                                         |
| Nouvelle Vitesse | Nouvelle Vitesse | flottant                                         |