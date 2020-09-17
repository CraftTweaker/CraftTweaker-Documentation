# format@@0 BlockBreakEvent

L'événement BlockBreak est lancé chaque fois qu'un bloc est cassé.  
Vous pouvez annuler l'événement pour éviter que le bloc ne soit cassé.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. lockBreakEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements BlockBreak implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Évènement IBlock](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter    | ZenSetter    | Type de texte                        |
| ------------ | ------------ | ------------------------------------ |
| `Joueur`     |              | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`   |              | booléen                              |
| `Expérience` | `Expérience` | Indice                               |