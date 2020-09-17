# InterModCommsHandler

InterModComms sono piccoli messaggi inviati tra le mod per consentire contenuti aggiuntivi.  
Ad esempio ModA invia un messaggio alla struttura di Tinkers per dire a TiCon di creare materiali aggiuntivi per la fonderia.

## Importazione del pacchetto

Se si desidera abbreviare le chiamate di metodo o incontrare eventuali problemi si potrebbe aver bisogno di [importare](/AdvancedFunctions/Import) il pacchetto.  
Puoi farlo usando

```zenscript
importazione extrautilities2.Tweaker.InterModCommsHandler;
```

## Invio messaggi

È possibile inviare il messaggio subito o in esecuzione. Puoi inviare NBT come [IData Map](/Vanilla/Data/IData), una semplice stringa, un [IItemStack](/Vanilla/Items/IItemStack) o una posizione delle risorse.

```zenscript
sendMessageNBT(String mod, String key, DataMap dataMap);
sendMessageString(String mod, String key, String message);
sendMessageItemStack(String mod, String key, IItemStack stack);
sendMessageResourceLocation(String mod, String key, String resourceLocation);

sendRuntimeMessageNBT(String mod, String key, DataMap dataMap);
sendRuntimeMessageString(String mod, String key, String message);
sendRuntimeMessageItemStack(String mod, String key, IItemStack stack);
sendRuntimeMessageResourceLocation(String mod, String key, String resourceLocation);
```