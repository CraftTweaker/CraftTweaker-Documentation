# format@@0 SleepingLocationCheck

Cet événement est déclenché lors de la vérification si un joueur de sommeil peut continuer à dormir à l'endroit actuel. Si a un résultat **** qui détermine l'action.

Résultat:
- **Par défaut**, retourne la réponse Vanilla par défaut comme trouvée dans l'entité de tuiles de lit
- **Autoriser**, permet au joueur de continuer à dormir indépendamment
- **Refuser** est spécifiquement ***ignoré*** dans cette instance et ne fait rien.

Ainsi, cet événement vous permet de garder le joueur en sommeil, mais il ne vous permet pas de contourner la logique du lit par défaut.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. leepingLocationCheck`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
SleepingLocationCheck Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
