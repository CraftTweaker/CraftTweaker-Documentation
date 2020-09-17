# format@@0 CriticalHitEvent

L'événement CriticalHit est lancé chaque fois qu'un joueur attaque une autre créature. Il a un **résultat** qui détermine si le comportement crit par défaut se produit ou non :

- **autorise**: l'attaque est forcée d'être un critique
- **refusez**: l'attaque est empêchée d'être un critique
- **valeur par défaut**: l'attaque utilise le comportement par défaut de Vanilla pour déterminer si c'est un crit.

Vous pouvez également régler le modificateur de dégâts pour le coup critique.

## Notes

`event.oldDamageModifier` contient le modificateur de dommage original de l'événement, tandis que `l'événement. sVanillaCrit` est une valeur booléenne qui détermine si oui ou non c'est déjà un coup critique.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. riticalHitEvent`  
Vous pouvez, bien sûr, aussi [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements CriticalHit implémentent les interfaces suivantes et sont capables d'appeler toutes leurs méthodes/getters/setters aussi:

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                 | ZenSetter                 | Type de retour                        |
| ------------------------- | ------------------------- | ------------------------------------- |
| `target`                  |                           | [IEntity](/Vanilla/Entities/IEntity/) |
| `oldDamageModifier`       |                           | flottant                              |
| `modificateur de dommage` | `modificateur de dommage` | flottant                              |
| `isVanillaCrit`           |                           | boolean                               |

## Méthodes Zen

- `event.deny()` définit le résultat à refuser.
- `event.allow()` définit le résultat à autoriser.
- `event.default()` définit le résultat par défaut.
