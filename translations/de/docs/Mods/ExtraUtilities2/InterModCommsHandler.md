# InterModCommsHandler

InterModComms sind kleine Nachrichten, die zwischen Mods gesendet werden, um zusätzliche Inhalte zu ermöglichen.  
Zum Beispiel sendet ModA eine Nachricht an Tinkers' Construct um TiCon zu sagen, dass er zusätzliche Materialien für die Schmelze erstellen soll.

## Dieses Paket importieren

Wenn Sie Methodenaufrufe verkürzen oder Probleme auftreten möchten, müssen Sie [das Paket importieren](/AdvancedFunctions/Import) importieren.  
Sie können dies tun mit

```zenscript
extrautilities2.Tweaker.InterModCommsHandler;
```

## Nachrichten senden

Sie können die Nachricht entweder sofort oder zur Laufzeit senden. Sie können entweder NBT als [IData Map](/Vanilla/Data/IData)senden, einen einfachen String, einen [IItemStack](/Vanilla/Items/IItemStack) oder einen Ressourcenstandort.

```zenscript
sendMessageNBT(String Mod, String Key, DataMap dataMap);
sendMessageString(String Mod, String Key, String MessageString);
sendMessageItemStack(String mod, String key, IItemStack stack);
sendMessageResourceLocation(String mod, String key, String resourceLocation);

sendRuntimeMessageNBT(String Mod, String Key, DataMap dataMap);
sendRuntimeMessageString(String Mod, String Key, String MessageString);
sendRuntimeMessageItemStack(String mod, String Key, IItemStack);
sendRuntimeMessageResourceLocation(String mod, String Key, String Resource Location);
```