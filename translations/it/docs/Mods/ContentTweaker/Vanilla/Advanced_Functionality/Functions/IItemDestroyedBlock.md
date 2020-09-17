# IItemDestroyedBlock

La funzione IItemDestroyedBlock può essere aggiunta a un elemento [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) e verrà eseguita ogni volta che si tenta di rompere un blocco con l'oggetto assiciato.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemDestroyedBlock;`

## Parametri

IItemDestroyedBlock è una funzione con i seguenti parametri:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) stack → L'oggetto.
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si svolge
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → Lo stato del blocco che viene minato.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Dove si svolge questo?
- [entità IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) → Who/What mines the block?

La funzione ha bisogno di restituire un booleano, che è `vero` se il processo di blockBreaking è riuscito, e `falso` se è attivo.