# format@@0 CropGrowPreEvent

L'événement CropGrowPre est lancé lorsque les cultures tentent de grandir. Il a un **résultat** qui détermine si le comportement par défaut se produit ou non :

- **autoriser**: la culture est forcée de grandir.
- **nier**: la culture est empêchée de grandir.
- **défaut**: l'attaque utilise le comportement par défaut de Vanilla.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ropGrowPreEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements CropGrowPost implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Évènement IBlock](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                      | ZenSetter | Type de texte                                    |
| ------------------------------ | --------- | ------------------------------------------------ |
| `format@@0 originalBlockState` |           | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| `Bloc original`                |           | [Verrouillage](/Vanilla/Blocks/IBlock/)          |
