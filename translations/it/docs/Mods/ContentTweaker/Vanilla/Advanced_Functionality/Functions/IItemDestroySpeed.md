# IItemDestroySpeed

La funzione IItemDestroySpeed può essere aggiunta ad un elemento [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) e determinerà la velocità di interruzione del blocco dell'elemento.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemDestroySpeed;`

## Parametri

L'IItemDestroySpeed è una funzione con i seguenti parametri:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → The item.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → Lo stato del blocco che viene minato.

La funzione deve restituire un valore float.