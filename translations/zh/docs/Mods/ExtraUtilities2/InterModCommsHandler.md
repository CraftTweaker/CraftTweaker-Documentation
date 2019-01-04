# InterModCommsHandler

InterModComms are small messages sent between mods to allow for additional content.  
For example ModA sends a message to Tinkers' Construct to tell TiCon to create additional materials for the smeltery.

## Importing the package

If you want to shorten method calls or encounter any issues you might need to [import](/AdvancedFunctions/Import) the package.  
You can do so using

    import extrautilities2.Tweaker.InterModCommsHandler;
    

## Sending messages

You can either send the message right away or at runtime. You can either send NBT as [IData Map](/Vanilla/Data/IData), a simple string, an [IItemStack](/Vanilla/Items/IItemStack) or a resource location.

    sendMessageNBT(String mod, String key, DataMap dataMap);
    sendMessageString(String mod, String key, String message);
    sendMessageItemStack(String mod, String key, IItemStack stack);
    sendMessageResourceLocation(String mod, String key, String resourceLocation);
    
    sendRuntimeMessageNBT(String mod, String key, DataMap dataMap);
    sendRuntimeMessageString(String mod, String key, String message);
    sendRuntimeMessageItemStack(String mod, String key, IItemStack stack);
    sendRuntimeMessageResourceLocation(String mod, String key, String resourceLocation);