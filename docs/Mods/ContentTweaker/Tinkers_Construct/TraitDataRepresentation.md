# Trait Data Representation

A Trait data representation represents a Tinkers' Construct Trait's Data and is ItemBound.  
You can get such an object from an existing [Trait](Trait) object by supplying an IItemStack with the 

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.TraitDataRepresentation`

## ZenGetter and ZenSetter

|Name         | ZenGetter | ZenSetter    | Type    |
|-------------|-----------|--------------|---------|
| color       | ✔         | ✔            | int     |
| current     | ✔         | ✔            | int     |
| extraInfo   | ✔         | ✔            | string  |
| identifier  | ✔         | ✔            | string  |
| level       | ✔         | ✔            | int     |
| max         | ✔         | ✔            | int     |
| info        | ✔         |              | string  |
| colorString | ✔         |              | string  |


##ZenMethods

```
//Does the same as myTraitData.info;
myTraitData.calcInfo();

//Does the same as myTraitData.colorString;
myTraitData.getColorString();
```