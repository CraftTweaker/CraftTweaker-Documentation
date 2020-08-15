# Retour en vie

Cet événement est déclenché chaque fois qu'une entité est repoussée. L'événement est **annulable** et cela empêchera l'entité d'être repoussée. Vous pouvez également régler la force du retour en arrière en plus des ratios X et Z.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ivingKnockBackEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
LivingKnockBack Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter                   | ZenSetter   | Type de texte                         |
| --------------------------- | ----------- | ------------------------------------- |
| `attaquant`                 | `attaquant` | [IEntity](/Vanilla/Entities/IEntity/) |
| `attaquant original`        |             | [IEntity](/Vanilla/Entities/IEntity/) |
| `force`                     | `force`     | flottant                              |
| `Force originale`           |             | flottant                              |
| `ratioX`                    | `ratioX`    | double                                |
| `Ratio Z`                   | `Ratio Z`   | double                                |
| `Ratio original unnamed@@0` |             | double                                |
| `Ratio d'origine Z`         |             | double                                |

## Notes

Quand l'événement arrive, il est possible que l'attaquant ``, `la force`, ou les différents `ratio`s ont déjà été modifiés. Vous pouvez trouver ces valeurs dans les variables `original*`.
