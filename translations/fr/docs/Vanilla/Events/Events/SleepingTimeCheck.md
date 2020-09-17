# Temps de mise en veille

Cet événement est déclenché lors de la vérification si un joueur de sommeil peut continuer à dormir à un moment donné. Si a un résultat **** qui détermine l'action.

Résultat:
- **Par défaut**, la logique Vanilla de `World::isDaytime` est consultée.
- **Autoriser**, permet au joueur de continuer à dormir indépendamment
- **Refuser** est spécifiquement ***ignoré*** dans cette instance et ne fait rien.

Ainsi, cet événement vous permet de garder le joueur endormi, mais il ne vous permet pas de l’empêcher spécifiquement de dormir.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. leepingTimeCheck`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
SleepingTimeCheck Events implémente les interfaces suivantes et peut aussi appeler toutes leurs méthodes/getters/setters :

- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
