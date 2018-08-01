# MaterialSystem

The MaterialSystem is used to create new or retrieve existing Materials from within CT.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MaterialSystem;` 

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)
### Create 
```JAVA
createPartType(String name, IRegisterMaterialPart registerMaterialPart)
```

Required Parameters:

- String name: The part type's name → e.g. "dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Advanced_Functionality/functions/registerMaterialPart/) registerMaterialPart → A function that handles how the Material parts will be created.

### Retrieve 
```JAVA
getPartType(String name);
```

Required Parameters:

- String name: The part type's name → e.g. "gear"
For a list of all available part types check [the part type page](/Mods/ContentTweaker/Materials/Parts/PartType/).


## [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)
### Create
Unlike the PartType, you cannot directly create a Material, instead you need to use a MaterialBuilder. Check the [MaterialBuilder entry](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) for info on what exactly to do with these.
```JAVA
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### Retrieve
```JAVA
getMaterial(String name);
```

Required Parameters:

- String name: The Material's name → e.g. "Platinum"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)
### Create
Unlike the PartType, you cannot directly create a Part, instead you need to use a PartBuilder. Check the [Part entry](IPart](/Mods/ContentTweaker/Materials/Parts/Part/) for info on what exactly to do with these.
```JAVA
val PB = MaterialSystem.getPartBuilder();
```

### Retrieve
```JAVA
getPart(String name);
```

Required Parameters:

- String name: The Part's name

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)
###Create
```
createPartDataPiece(String name, boolean required)
```

Required Parameters:

- String name: The Data Piece's name
- boolean required: Is the data piece required?


## Register multiple MaterialParts
Even though you can also do this using the [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) own functionality, this Method allows you to register [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) for a given Material
```JAVA
registerPartsForMaterial(Material material, String[] partNames);
```

Required Parameters:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/) material: The material that the registered parts should be made of
- String[] partNames: The names of the parts that should be registered → e.g. ["gear", "ingot"]

## Retrieve already registered things:

You can use these methods to retrieve a map using strings as keys and the object as values:

| Method Name        | Return Type                                                                           |
|--------------------|---------------------------------------------------------------------------------------|
| getMaterialParts() | [`Map<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`Map<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`Map<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`Map<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |