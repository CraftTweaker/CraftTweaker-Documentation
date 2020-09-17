# format@@0 LivingExperienceDrop

Cet événement est déclenché lorsqu'une entité meurt et perd de l'expérience, permettant de modifier la quantité d'expérience. Alternativement, l'événement peut être **annulé** pour éviter que l'expérience ne soit abandonnée.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ivingExperienceDropEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements LivingExperienceDrop implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter                     | ZenSetter                     | Type de texte                        |
| ----------------------------- | ----------------------------- | ------------------------------------ |
| `Joueur`                      |                               | [IPlayer](/Vanilla/Players/IPlayer/) |
| `format@@0 droppedExperience` | `format@@0 droppedExperience` | Indice                               |
| `originalExperience`          |                               | Indice                               |

## Notes

`originalExperience` contient la quantité originale d'expérience de Vanilla. Il est possible que `droppedExperience` lorsque cet événement est déclenché ait déjà été modifié.
