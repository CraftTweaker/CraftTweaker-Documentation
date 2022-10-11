# Capabilities

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.Capabilities;
```


## Static Properties

|    Name    |                                                        Type                                                        | Has Getter | Has Setter |
|------------|--------------------------------------------------------------------------------------------------------------------|------------|------------|
| ENERGY     | [Capability](/forge/api/capability/Capability)&lt;[IEnergyStorage](/forge/api/capability/IEnergyStorage)&gt;       | true       | false      |
| FLUID      | [Capability](/forge/api/capability/Capability)&lt;[IFluidHandler](/forge/api/capability/IFluidHandler)&gt;         | true       | false      |
| FLUID_ITEM | [Capability](/forge/api/capability/Capability)&lt;[IFluidHandlerItem](/forge/api/capability/IFluidHandlerItem)&gt; | true       | false      |
| ITEM       | [Capability](/forge/api/capability/Capability)&lt;[IItemHandler](/forge/api/capability/IItemHandler)&gt;           | true       | false      |

