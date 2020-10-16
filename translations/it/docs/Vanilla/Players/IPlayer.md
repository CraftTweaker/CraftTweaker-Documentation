# IPlayer

L'interfaccia IPlayer consente di visualizzare alcune informazioni su un giocatore specifico e di interagire con detto uno. Utilizzato principalmente nei gestori di eventi e nelle funzioni ricettive.

## Importing the package

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.player.IPlayer;`

## Estendere IEntityLivingBase e IUser

IPlayer estende [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Ciò significa che tutte le funzioni disponibili per gli oggetti [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) sono disponibili anche per gli oggetti IPlayer.  
IPlayer estende anche [IUser](/Vanilla/Players/IUser/). Ciò significa che tutte le funzioni disponibili per gli oggetti [IUser](/Vanilla/Players/IUser/) sono disponibili anche per gli oggetti IPlayer.

## Zengetters

Zengetters sono per recuperare informazioni. Di solito sia assegnato a una variabile o utilizzato in un metodo/funzione.

| Zengetter            | What does it do                                                                                                                   | Return Type                                | Usage                  |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------- |
| uuid                 | restituisce l'UUID del giocatore                                                                                                  | string                                     | `player.uuid`          |
| name                 | restituisce il nome del giocatore                                                                                                 | string                                     | `player.name`          |
| dati                 | restituisce i dati del giocatore                                                                                                  | [IData](/Vanilla/Data/IData/)              | `player.data`          |
| xp                   | restituisce il livello di esperienza del giocatore. Può anche essere usato per impostare il livello di esperienza di un giocatore | int                                        | `giocatore.xp`         |
| hotbarSize           | restituisce la dimensione della hotbar del giocatore                                                                              | int                                        | `player.hotbarSize`    |
| inventarioDimensione | restituisce la dimensione dell'inventario del giocatore                                                                           | int                                        | `player.inventorySize` |
| currentItem          | restituisce l'oggetto che il giocatore sta attualmente tenendo                                                                    | [IItemStack](/Vanilla/Items/IItemStack/)   | `player.currentItem`   |
| creativo             | ritorna se il giocatore è attualmente in modalità creativa (alias gamemode 1)                                                     | bool                                       | `giocatore.creativo`   |
| avventura            | ritorna se il giocatore è attualmente in modalità avventura (alias gamemode 2)                                                    | bool                                       | `giocatore.avventura`  |
| x                    | restituisce la posizione X attuale del giocatore nel mondo                                                                        | double                                     | `giocatore.x`          |
| y                    | restituisce la posizione y attuale del giocatore nel mondo                                                                        | double                                     | `giocatore.y`          |
| z                    | restituisce la posizione z attuale del giocatore nel mondo                                                                        | double                                     | `giocatore.z`          |
| foodStats            | restituisce il food stats del giocatore.                                                                                          | [IFoodStats](/Vanilla/Players/IFoodStats/) | `player.foodStats`     |

## ZenMethods

ZenMethods sono per fare le cose con altre cose, in questo caso con un giocatore.

| ZenMethod                | Tipo/i Di Parametro                      | What does it do                                                              | Example                                           |
| ------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| removeXP(XPtoRemove)     | int                                      | Rimuove i livelli di esperienza dati dal giocatore.                          | `giocatore.removeXP(1)`                           |
| update(IData)            | [IData](/Vanilla/Data/IData/)            | Aggiorna i dati del giocatore agli IData forniti.                            |                                                   |
| sendChat(Messaggio)      | Stringa O IChatMessage                   | Invia al giocatore un messaggio di chat.                                     | `giocatore.sendChat("Ciao il mio vecchio amico")` |
| getHotbarStack(index)    | int                                      | Restituisce l'oggetto all'indice specificato nella hotbar del giocatore.     | `giocatore.getHotbarStack(3)`                     |
| getInventoryStack(index) | int                                      | Restituisce l'oggetto all'indice specificato nell'inventario del giocatore.  | `giocatore.getInventoryStack(3)`                  |
| dare(elemento)           | [IItemStack](/Vanilla/Items/IItemStack/) | Dai al giocatore l'oggetto fornito. Oggetto è un IItemStack.                 | `giocatore.give(<minecraft:gold_ingot>)`    |
| teletrasporto(posizione) | [Position3f](/Vanilla/Utils/Position3f/) | Teletrasporta il giocatore nella posizione fornita nella stessa dimensione   | `player.teleport(posizione)`                      |
| executeCommand(raw)      | string                                   | Esegue il comando come giocatore                                             | `player.executeCommand("kill")`                   |
| dropItem(dropAll)        | bool                                     | Trascina l'elemento corrente (o l'intera pila) che il giocatore sta tenendo. | `giocatore.dropItem(falso)`                       |
| dropItem(itemToDrop)     | [IItemStack](/Vanilla/Items/IItemStack/) | Rilascia l'oggetto fornito alla posizione del giocatore.                     | `player.dropItem(<minecraft:dirt>)`         |