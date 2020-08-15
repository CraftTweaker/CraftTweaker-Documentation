# IEventHasResult

Cette interface est étendue par tous les événements qui ont un résultat qui est utilisé par l'événement. Le résultat d'un événement peut être l'une des trois valeurs suivantes :

- autoriser
- Refuser
- par défaut

Leur signification dépend du contexte. Généralement, refuser un événement empêche une action spécifique en rapport avec un événement (même si cela n'a pas été garanti d'avoir lieu). De même, permettre un événement forcera un comportement (même si cela n'est pas garanti). La valeur par défaut permet simplement à l'évènement de continuer avec sa logique normale. Tous les événements n'utilisent pas tous les résultats.

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IEventHasResult;`

## Que peut-on faire d'eux?

- `event.result` Getter, renvoie une valeur de chaîne de `valeur par défaut`, `nier` ou `autoriser`
- `event.deny()` Méthode, définit le résultat de l'événement à `refuser`
- `event.allow()` Méthode, définit le résultat de l'événement à `autoriser`
- `event.default()` Méthode, définit le résultat de l'événement à `par défaut`
