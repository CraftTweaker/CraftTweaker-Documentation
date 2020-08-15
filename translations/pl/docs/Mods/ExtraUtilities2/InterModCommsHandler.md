# InterModCommsHandler

InterModComms to małe wiadomości wysyłane między modyfikacjami, aby umożliwić dodatkowe treści.  
Na przykład ModA wysyła wiadomość do Konstrukcji Tinkerów, aby nakłonić TiCona do stworzenia dodatkowych materiałów do huty.

## Importowanie pakietu

Jeśli chcesz skrócić połączenia metodowe lub napotkać jakiekolwiek problemy, musisz [zaimportować pakiet](/AdvancedFunctions/Import) .  
Możesz to zrobić używając

```zenscript
importuj ekstrulity2.Tweaker.InterModCommsHandler,
```

## Wysyłanie wiadomości

Możesz wysłać wiadomość zaraz lub w czasie pracy. Możesz albo wysłać NBT jako [mapę IData](/Vanilla/Data/IData), prosty ciąg, [IItemStack](/Vanilla/Items/IItemStack) lub lokalizację zasobów.

```zenscript
sendMessageNBT(Moding String, String key, DataMap dataMap);
sendMessageString(Moding String, String key, String message);
sendMessageItemStack(Moding mod, string key, IItemStack);
sendMessageResourceLocation(Moding String, String key, String resourceLocation);

sendRuntimeMessageNBT(Moding String, String key, DataMap dataMap);
sendRuntimeMessageString(Moding String, String key, String message);
sendRuntimeMessageItemStack(moding mod, string key, IItemStack stack);
sendRuntimeMessageResourceLocation(Moding mod, String key, String resourceLocation);
```