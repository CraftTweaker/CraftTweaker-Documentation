
# format@@0 BlockPlaceEvent

L'événement BlockBreak est lancé chaque fois qu'un bloc est placé. Vous pouvez annuler l'événement pour empêcher le bloc d'être placé.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. lockPlaceEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements BlockPlace implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Évènement IBlock](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter     | ZenSetter | Type de texte                                    |
| ------------- | --------- | ------------------------------------------------ |
| `Joueur`      |           | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `en cours`    |           | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| `placéContre` |           | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |
| `main`        |           | Chaîne de caractères                             |
