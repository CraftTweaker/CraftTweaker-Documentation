# ItemHandlerCaps

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.ItemHandlerCaps;
```


## Static Properties

|       Name        |                                                                                      Type                                                                                      | Has Getter | Has Setter |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| BLOCK             | [BlockCapability](/neoforge/api/capability/BlockCapability)&lt;[IItemHandler](/neoforge/api/capability/IItemHandler),[Direction](/vanilla/api/util/direction/Direction)?&gt;   | true       | false      |
| ENTITY            | [EntityCapability](/neoforge/api/capability/EntityCapability)&lt;[IItemHandler](/neoforge/api/capability/IItemHandler),Void&gt;                                                | true       | false      |
| ENTITY_AUTOMATION | [EntityCapability](/neoforge/api/capability/EntityCapability)&lt;[IItemHandler](/neoforge/api/capability/IItemHandler),[Direction](/vanilla/api/util/direction/Direction)?&gt; | true       | false      |
| ITEM              | [ItemCapability](/neoforge/api/capability/ItemCapability)&lt;[IItemHandler](/neoforge/api/capability/IItemHandler),Void&gt;                                                    | true       | false      |

