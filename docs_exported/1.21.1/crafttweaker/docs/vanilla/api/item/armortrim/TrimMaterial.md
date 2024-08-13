# TrimMaterial

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.armortrim.TrimMaterial;
```


## Extending Record

TrimMaterial extends Record. That means all methods available in Record are also available in TrimMaterial

## Properties

|          Name          |                                Type                                 | Has Getter | Has Setter |
|------------------------|---------------------------------------------------------------------|------------|------------|
| assetName              | string                                                              | true       | false      |
| commandString          | string                                                              | true       | false      |
| description            | [Component](/vanilla/api/text/Component)                            | true       | false      |
| ingredient             | [ItemDefinition](/vanilla/api/item/ItemDefinition)                  | true       | false      |
| itemModelIndex         | float                                                               | true       | false      |
| overrideArmorMaterials | string[[ArmorMaterial](/vanilla/api/item/type/armor/ArmorMaterial)] | true       | false      |

