# Visibilité du joueur

Cet événement est lancé pour déterminer la visibilité d'un joueur, c'est-à-dire s'il est suffisamment proche ou non pour être remarqué par un attaquant. Le résultat de cet événement est utilisé pour calculer (avec des modificateurs de Minecraft Vanilla pour se faufiler, etc) la distance à laquelle un joueur peut accéder avant que cette créature ne les vise.

Bien que cela puisse être utilisé pour augmenter la portée de visibilité (si elle a été réduite par Minecraft ou un autre mod), il ne peut pas être augmenté au-dessus de sa valeur maximale (la distance de la cible standard).

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerVisibilityEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements PlayerVisibilityEvent implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter    | ZenSetter                | Type de texte |
| ------------ | ------------------------ | ------------- |
| `Visibilité` |                          | double        |
|              | `Modifier la visibilité` | Voir la note. |

## Note

Cette valeur ne peut pas être directement définie. Appeler `modifyVisibility` avec une valeur double remplacera le modificateur avec le résultat de `modifiy * valeur double`.
