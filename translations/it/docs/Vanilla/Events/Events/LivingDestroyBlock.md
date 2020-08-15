# LivingDestroyBlock

Questo evento viene sparato ogni volta che un Wither o Ender Dragon tenta di distruggere blocchi, o quando uno zombie tenta di rompere una porta. Questo evento è **annullabile**e, se annullato, il blocco non sarà rotto.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ivingDestroyBlockEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
LivingDestroyBlock Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
Le seguenti informazioni possono essere recuperate/impostate durante l'evento:

| ZenGetter | ZenSetter | Tipo                                        |
| --------- | --------- | ------------------------------------------- |
| `stato`   |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |

