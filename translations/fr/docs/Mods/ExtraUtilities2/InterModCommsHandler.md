# InterModCommsHandler

InterModComms est un petit message envoyé entre les mods pour permettre un contenu supplémentaire.  
Par exemple, ModA envoie un message à Construction de Tinkers pour dire à TiCon de créer des matériaux supplémentaires pour la fonderie.

## Importation du paquet

Si vous voulez raccourcir les appels de méthodes ou rencontrer des problèmes, vous pourriez devoir [importer](/AdvancedFunctions/Import) le paquet.  
Vous pouvez le faire en utilisant

```zenscript
Importer extrautilities2.Tweaker.InterModCommsHandler;
```

## Envoi des messages

Vous pouvez envoyer le message immédiatement ou à l'exécution. Vous pouvez soit envoyer des NBT en tant que [IData Map](/Vanilla/Data/IData), une simple chaîne, un [IItemStack](/Vanilla/Items/IItemStack) ou un emplacement de ressource.

```zenscript
sendMessageNBT(String mod, String key, DataMap dataMap);
sendMessageString(String mod, String key, String message);
sendMessageItemStack(String mod, String key, IItemStack stack);
sendMessageResourceLocation(String mod, String key, String resourceLocation);

sendRuntimeMessageNBT(String mod, String key, DataMap dataMap);
sendRuntimeMessageString(String mod, String key, String message);
sendRuntimeMessageItemStack(String mod, String key, IItemStack stack) ;
sendRuntimeMessageResourceLocation(String mod, String key, String resourceLocation);
```