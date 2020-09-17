# PotionBrewPost

Questo evento è sparato immediatamente dopo che una pozione è stata "brewed" dall'entità del supporto di birra, quando gli oggetti in uscita sono già stati sostituiti. Se il [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) è stato cancellato ma gli oggetti all'interno del supporto della birra sono stati modificati, anche questo evento verrà licenziato.

Se il pre-evento viene annullato senza modificare gli itemstack, questo evento **non** verrà licenziato.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. otionBrewPostEvent` È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
Gli eventi PotionBrewPost implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
