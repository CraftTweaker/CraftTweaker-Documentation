# ITICMaterialDefinition

An ITICMaterialDefinition is an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) definition.  
You can use this to retrieve some information on the [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) object.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterialDefinition;`

## Retrieving such an object

You can retrieve an ITICMaterialDefinition from an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `definition` ZenGetter:

    val def = <ticmat:stone>.definition;
    

## ZenGetters

| ZenGetter   | Return Type | Description                   |
| ----------- | ----------- | ----------------------------- |
| name        | string      | The material's internal name  |
| displayName | string      | The material's localized name |