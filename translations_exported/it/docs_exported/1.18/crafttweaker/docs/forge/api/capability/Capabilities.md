# Capabilities

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.Capabilities;
```


## Static Properties

| Nome       | Tipo                                                                                                                           | Ha Getter | Ha Setter |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | --------- | --------- |
| ENERGY     | [Capability](/forge/api/capability/Capability)&lt;[IEnergyStorage](/forge/api/capability/IEnergyStorage)&gt;       | sì        | no        |
| FLUID      | [Capability](/forge/api/capability/Capability)&lt;[IFluidHandler](/forge/api/capability/IFluidHandler)&gt;         | sì        | no        |
| FLUID_ITEM | [Capability](/forge/api/capability/Capability)&lt;[IFluidHandlerItem](/forge/api/capability/IFluidHandlerItem)&gt; | sì        | no        |
| ITEM       | [Capability](/forge/api/capability/Capability)&lt;[IItemHandler](/forge/api/capability/IItemHandler)&gt;           | sì        | no        |

