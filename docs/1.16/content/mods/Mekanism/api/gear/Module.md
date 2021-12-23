# Module

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.gear.Module;
```

## Methods

:::group{name=getData}

Gets the data/module type of this module instance.

Returns: The data/module type of this module instance.  
Return Type: [ModuleData](/mods/Mekanism/api/gear/ModuleData)

```zenscript
// Module.getData() as ModuleData

myModule.getData();
```

:::

:::group{name=getInstalledCount}

Gets the number of installed modules of this type.

Returns: The number of installed modules of this type.  
Return Type: int

```zenscript
// Module.getInstalledCount() as int

myModule.getInstalledCount();
```

:::

:::group{name=isEnabled}

Gets if this module is currently enabled in the Module Tweaker.

Returns: `true` if this module is enabled. Return Type: boolean

```zenscript
// Module.isEnabled() as boolean

myModule.isEnabled();
```

:::

## Properties

| Name   | Type                                              | Has Getter | Has Setter | Description                               |
|--------|---------------------------------------------------|------------|------------|-------------------------------------------|
| data  | [ModuleData](/mods/Mekanism/api/gear/ModuleData) | true | false | Gets the data/module type of this module instance.  |
| installed | int                                          | true | false | Gets the number of installed modules of this type.          |
| enabled   | boolean                                      | true | false | Gets if this module is currently enabled in the Module Tweaker. |
