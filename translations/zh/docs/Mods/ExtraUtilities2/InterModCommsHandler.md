# InterModCommsHandler

InterModComms 是在模组之间发送的小消息，允许附加内容。  
例如，ModA向Tinkers构造发送消息，告诉TiCon为冶炼厂创建额外的材料。

## 导入相关包

如果你想要缩短方法调用或遇到任何问题，你可能需要 [导入包](/AdvancedFunctions/Import)  
您可以使用

```zenscript
导入 exautilities2.调节器.InterModCommsHandler;
```

## 正在发送消息

您可以立即或在运行时发送消息。 您可以将 NBT 发送为 [IData 地图](/Vanilla/Data/IData), 简单字符串, [IItemStack](/Vanilla/Items/IItemStack) 或资源位置。

```zenscript
sendMessageNBT(Stroing mod, String key, DataMap datap);
sendMessageString(String mod, String key, String message);
发送MessageItemStack(Stroing mod, String key, IItemStack stack);
sendMessageResourceLocation(Stroing mod, String key, String ResourceLocation);

sendRuntimeMessageNBT(String mod , String key, DataMap datamap);
sendRuntimeMessageString(String mod, String key, String message);
sendRuntimeMessageItemStack(Stroing mod, String key, IItemStack stack)；
sendRuntimeMessageResourceLocation(Stroing mod, String key, String ResourceLocation)；
```