# format@@0 PlayerSleepInBed

L'événement PlayerSleepInBed est lancé chaque fois qu'un joueur dort. Cet événement peut contrôler si le joueur est en mesure de dormir en définissant `résultat`.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerSleepInBedEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerSleepInBed implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

* [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
* [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## Types de résultats

* Pas de POSSIBLE_ICI 
* Il n'y a pas de point de vente 
* Pas de sécurité 
* Ok 
* PROBLÈME_TITLE 
* Face à une face 

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter  | Type de retour                                |
| ---------- | --------------------------------------------- |
| `x`        | Indice                                        |
| `y`        | Indice                                        |
| `Z`        | Indice                                        |
| `Joueur`   | [IPlayer](/Vanilla/Players/IPlayer/)          |
| `résultat` | chaîne (les valeurs possibles sont au-dessus) |

## ZenSetters

Les éléments suivants peuvent être définis dans l'événement :

| ZenSetter  | Type de paramètre                             |
| ---------- | --------------------------------------------- |
| `résultat` | chaîne (les valeurs possibles sont au-dessus) |