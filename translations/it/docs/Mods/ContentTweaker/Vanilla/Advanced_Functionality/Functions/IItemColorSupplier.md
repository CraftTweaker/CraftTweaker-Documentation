# IItemColorSupplier

La funzione IItemColorSupplier può essere utilizzata per fornire l'oggetto colore [](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) da utilizzare per qualsiasi cosa.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemColorSupplier;`

## Parametri

La funzione IItemColorSupplier è una funzione con i seguenti parametri.

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → l'elemento di cui il colore è richiesto.
- int tintIndex → l'indice di tinta, utilizzare che comunque ti piace. La funzione deve restituire un [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).