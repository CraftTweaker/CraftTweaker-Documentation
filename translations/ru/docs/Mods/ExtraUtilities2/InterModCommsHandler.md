# InterModCommsHandler

InterModComms - это небольшие сообщения, отправленные между модами, чтобы разрешить дополнительное содержимое.  
Например, ModA отправляет сообщение Tinkers' Construct, чтобы сообщить TiCon о создании дополнительных материалов для плавки.

## Импорт пакета

Если вы хотите сократить вызовы методов или столкнуться с любыми проблемами, вам может потребоваться [импортировать](/AdvancedFunctions/Import) пакет.  
Вы можете сделать это, используя

```zenscript
импортировать extrautilities2.Tweaker.InterModCommsHandler;
```

## Отправка сообщений

Вы можете отправить сообщение сразу или во время работы. Вы можете отправить NBT как [IData Map](/Vanilla/Data/IData), простая строка, [IItemStack](/Vanilla/Items/IItemStack) или расположение ресурса.

```zenscript
sendMessageNBT(String mod, String key, DataMap dataMap);
sendMessageString(String mod, String key, String message);
sendMessageItemStack(String mod, String key, IItemStack);
sendMessageResourceLocation(String mod, String key, String resourceLocation);

sendRuntimeMessageNBT(String mod, String key, DataMap dataMap);
sendRuntimeMessageString(String mod, String key, String message);
sendRuntimeMessageItemStack(String mod, String key, IItemStack);
sendRuntimeMessageResourceLocation(String mod, String key, String resourceLocation);
```