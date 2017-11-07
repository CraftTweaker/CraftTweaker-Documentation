# IMaterialDefinition
An IMaterialDefinition is an [ITICMaterial's](ITICMaterial) definition.  
You can use this to retrieve some information on the [ITICMaterial](ITICMaterial) object.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.materials.IMaterialDefinition;`

## Retrieving such an object

You can retrieve an IMaterialDefinition from an [ITICMaterial's](ITICMaterial) `definition` ZenGetter:
```
val def = <material:stone>.definition;
```

## ZenGetters

|ZenGetter   |Return Type |Description                   |
|------------|------------|------------------------------|
|name        |string      |The material's internal name  |
|displayName |string      |The material's localized name |