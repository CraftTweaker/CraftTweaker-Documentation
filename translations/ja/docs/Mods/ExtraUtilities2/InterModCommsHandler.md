# InterModCommsHandler

InterModComms は、追加コンテンツを可能にするために Mod 間で送信される小さなメッセージです。  
例えば、ModAはTikonに製錬所用の追加材料を作成するように伝えるためにTinkers Constructにメッセージを送ります。

## パッケージのインポート

If you want to shorten method calls or encounter any issues you might need to [import](/AdvancedFunctions/Import) the package.  
You can do so using

```zenscript
import extraautilities2.Tweaker.InterModCommsHandler;
```

## メッセージを送信中

メッセージをすぐに送信するか、実行時に送信することができます。 NBT を [IData Map](/Vanilla/Data/IData)として、単純な文字列、 [IItemStack](/Vanilla/Items/IItemStack) またはリソースの場所として送信できます。

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