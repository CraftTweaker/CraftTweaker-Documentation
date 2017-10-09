# PartDataPiece

A part Data piece can be added to a [PartType](PartType) to be able to add some [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData) to [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart) created with [Parts](Part) that are of this [PartType](PartType).

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.PartDataPiece;`

## Retrieving such an object

You can get a List of a [Parts](Part) DataPieces using `getData()` on a [Part](Part).

Alternatively, you can register a new PartDataPiece using the [MaterialSystem](/Mods/Contenttweaker/Materials/MaterialSystem):

```JAVA
mods.contenttweaker.MaterialSystem.createPartDataPiece(String name, boolean required)
```

Parameters:

- String name: The new PartDataPiece's name
- boolean required: Is the PartDataPiece required to be present on a [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart) in order to register it?


## ZenMethods
You can retrieve the following information from a PartType:

| ZenMethod    | Return Type |
|--------------|-------------|
| getName()    | String      |
| isRequired() | String      |