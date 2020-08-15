# format@@0 LivingDestroyBlock

Cet événement est lancé chaque fois qu'un Wither ou l'Ender Dragon tente de détruire des blocs, ou quand un zombie tente de briser une porte. Cet événement est **annulable**, et s'il est annulé, le bloc ne sera pas cassé.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ivingDestroyBlockEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements LivingDestroyBlock implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter | ZenSetter | Type de texte                                    |
| --------- | --------- | ------------------------------------------------ |
| `Etat`    |           | [État de l'IBlock](/Vanilla/Blocks/IBlockState/) |

