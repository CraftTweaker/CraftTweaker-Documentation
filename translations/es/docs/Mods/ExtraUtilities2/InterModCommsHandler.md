# InterModCommsHandler

InterModComms son pequeños mensajes enviados entre mods para permitir contenido adicional.  
Por ejemplo ModA envía un mensaje a la Construcción de los Tinkers para decirle a TiCon que cree materiales adicionales para la fundición.

## Importando el paquete

Si desea acortar las llamadas a métodos o encontrar cualquier problema, puede que necesite [importar](/AdvancedFunctions/Import) el paquete.  
Puedes hacerlo usando

```zenscript
importar extrauFirstties2.Tweaker.InterModCommsHandler;
```

## Enviando mensajes

Puede enviar el mensaje inmediatamente o en tiempo de ejecución. Puedes enviar NBT como [IData Map](/Vanilla/Data/IData), una cadena simple, un [ItemStack](/Vanilla/Items/IItemStack) o una ubicación de recurso.

```zenscript
sendMessageNBT(String mod, String keyy, DataMap dataMap);
sendMessageString(String mod, String keyy, String message);
sendMessageItemStack(String mod, String key, IItemStack stack);
sendMessageResourceLocation(String mod, String key, String resourceLocation);

sendRuntimeMessageNBT(String mod, String key, DataMap dataMap);
sendRuntimeMessageString(String mod, String keyy, String message);
sendRuntimeMessageItemStack(String mod, String key, ItemStack stack);
sendRuntimeMessageResourceLocation(String mod, String key, String resourceLocation);
```