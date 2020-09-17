# BlockHarvestDropsEvent

L'evento BlockHarvestDrops viene sparato ogni volta che un blocco sta per cadere i suoi oggetti.  
È possibile modificare l'elenco dei blocchi e la possibilità generale di rilascio. Impostare quest'ultimo a 1 se si fa tutta la possibilità di gestire in anticipo.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. lockHarvestDropsEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

BlockHarvestDrops Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getter/setter:

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter    | ZenSetter    | Tipo                                             |
| ------------ | ------------ | ------------------------------------------------ |
| `giocatore`  |              | [IPlayer](/Vanilla/Players/IPlayer/)             |
| `isPlayer`   |              | bool                                             |
| `silkTouch`  |              | bool                                             |
| `ForteLevel` |              | int                                              |
| `gocce`      | `gocce`      | List<[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `dropChance` | `dropChance` | galleggiante                                     |

## Aggiungere un elemento alla lista

È possibile aggiungereAssegnare l'elenco o utilizzare il metodo per aggiungere un elemento all'elenco:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```