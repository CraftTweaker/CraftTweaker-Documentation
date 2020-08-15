# InitialInventory

## Descrizione

Questa mod aggiunge il supporto per il giocatore per ricevere un oggetto quando si unisce a un mondo, e poi mai più, simile a come alcune mod danno ai giocatori libri quando entrano in un mondo per la prima volta.

## Pacchetto
`mods.initialinventory.InvHandler`

## Aggiunta elementi iniziali

Questo aggiungerà un oggetto all'inventario dei giocatori quando entreranno nel mondo.

I parametri sono:


Param: `key`

Tipo: `Stringa`

Descrizione:

Usato per determinare se un elemento deve essere dato. Una chiave può essere qualsiasi stringa, il punto di esso è quello di determinare se ad un giocatore è stato dato un insieme di oggetti prima.

È utile per i modpack che in seguito aggiungono più elementi di partenza, utilizzando una chiave diversa, i giocatori che hanno già iniziato a giocare al pacchetto, possono ancora ricevere quegli oggetti. Un esempio potrebbe essere:

Aggiungi un diamante come elemento iniziale con la chiave "1", entra nel mondo, il giocatore otterrà il diamante.

Aggiungi una mela come elemento iniziale con la chiave "2", unisciti al mondo, il giocatore otterrà la mela, ma non il diamante di nuovo.

Crea un nuovo mondo, il giocatore riceverà sia una mela che un diamante.

param: `item`

Type `IItemStack`

Descrizione:

L'oggetto da dare al giocatore quando si uniscono.

Param: `index`

Tipo: `int`

Descrizione:

Intero opzionale per definire dove sarà dato l'oggetto, può essere usato per inserire un oggetto in uno slot dell'inventario come uno slot per armature

Se lasciato fuori, sarà predefinito -1, il che significa che metterà nel primo slot disponibile, o combinarlo con altri elementi che possono già essere nell'inventario.


## Esempio

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.InvHandler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.Invler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);
```


