# IItemGetContainerItem

La funzione IItemGetContainerItem può essere aggiunta a un elemento [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) e verrà eseguita ogni volta che l'elemento viene usato come ingrediente.  
Viene usato per determinare, cosa rimarrà nello slot di creazione, quando l'oggetto viene usato come tale.  
Pensa ai secchi, per esempio: Ogni secchio riempito ha il secchio vuoto come contenitoreArticolo, e quando un secchio riempito è realizzato, si finirà con uno vuoto.  
Questa funzione può essere utilizzata per calcolare l'oggetto contenitore, quindi puoi impazzire con cose come NBT-Tags o più.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemGetContainerItem;`

## Parametri

L'IItemGetContainerItem è una funzione con i seguenti parametri:

- [IItemStack](/Vanilla/Items/IItemStack/) stack → L'oggetto.

La funzione deve restituire un nuovo oggetto [IItemStack](/Vanilla/Items/IItemStack/) , o null, se l'elemento non deve lasciare nulla indietro.