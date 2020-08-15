# format@@0 CropGrowPostEvent

L'événement CropGrowPost est lancé une fois qu'un bloc de culture a **augmenté avec succès**. Elle ne peut être annulée et sert simplement de notification de la croissance des cultures.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ropGrowPostEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements CropGrowPost implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Évènement IBlock](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                      | ZenSetter | Type de texte                                    |
| ------------------------------ | --------- | ------------------------------------------------ |
| `format@@0 originalBlockState` |           | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| `Bloc original`                |           | [Verrouillage](/Vanilla/Blocks/IBlock/)          |
