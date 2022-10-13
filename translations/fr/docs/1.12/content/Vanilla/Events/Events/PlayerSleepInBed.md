# PlayerSleepInBed

L'événement PlayerSleepInBed est lancé chaque fois qu'un joueur dort. Cet événement peut contrôler si le joueur est en mesure de dormir en définissant `résultat`.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Event interface extensions
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## Types de résultats
* Pas de POSSIBLE_ICI
* Il n'y a pas de point de vente
* Pas de sécurité
* Ok
* PROBLÈME_TITLE
* Face à une face


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | Return Type                                   |
| --------- | --------------------------------------------- |
| `x`       | int                                           |
| `y`       | int                                           |
| `z`       | int                                           |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)          |
| `result`  | chaîne (les valeurs possibles sont au-dessus) |

## ZenSetters
Les éléments suivants peuvent être définis dans l'événement :

| ZenSetter | Parameter Type                                |
| --------- | --------------------------------------------- |
| `result`  | chaîne (les valeurs possibles sont au-dessus) |

