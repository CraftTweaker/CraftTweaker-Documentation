# Niveau de pillage

Cet événement est lancé chaque fois qu'une créature vivante est tuée afin de calculer le niveau de pillage. La valeur peut être augmentée ou diminuée ou laissée telle quelle. La valeur peut déjà avoir été modifiée par d'autres événements, mais la valeur d'origine n'est pas incluse.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ootingLevelEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements LootingLevel implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter           | ZenSetter           | Type de texte                                   |
| ------------------- | ------------------- | ----------------------------------------------- |
| `niveau de pillage` | `niveau de pillage` | Indice                                          |
| `Source de dommage` |                     | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
