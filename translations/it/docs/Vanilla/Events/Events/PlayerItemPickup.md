# PlayerItemPickup

L'evento PlayerItemPickup viene sparato dopo che un giocatore ha interagito con un oggetto entità e un oggetto o una quantità di un oggetto è stato raccolto. Questo evento si svolge dopo che [PlayerPickupItem](/Vanilla/Events/Events/PlayerPickupItem/) è stato licenziato.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerItemPickupEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
PlayerItemPickup Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getters/setters pure:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter        | Tipo Di Reso                                  |
| ---------------- | --------------------------------------------- |
| `stackCopia`     | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `originalEntity` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Note

`stackCopy` è una copia dell'elemento contenuto all'interno dell'elemento originale dell'entità, che rappresenta ciò che è stato raccolto e inserito nell'inventario del giocatore. `originalEntity` è l'entità dell'oggetto con qualsiasi importo rimanente dello stack degli oggetti (se il giocatore non ha raccolto l'intero importo).
