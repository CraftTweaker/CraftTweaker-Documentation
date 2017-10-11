# PartType

A PartType can be seen as a group that several parts fit in, e.g. `items`

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.PartType;` 

## Retrieving such an object
You can use the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem) to either retrieve an existing PartType object or create an entirely new one.  
Check out below entry to learn how to create a new PartType.

<details>
	<summary>Following types are pre-registered:</summary>
	<ul>
		<li>item</li>
		<li>block</li>
		<li>ore</li>
		<li>fluid</li>
		<li>armor</li>
	</ul>
</details>


## ZenMethods
You can retrieve the following information from a PartType:

| ZenMethod            | Return Type                            |
|----------------------|----------------------------------------|
| getName()            | String                                 |

You can set the following information on a PartType:

| ZenMethod                       | Parameter Type                         |
|---------------------------------|----------------------------------------|
| setData(IPartDataPiece[] data); | [IPartDataPiece](PartDataPiece)[] data |


## Create a new PartType
If you, for whatever reason would ever need to register a new PartType, you will need to know two things:

- What name the new partType will have
- How [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart) created from [Parts](Part) that are of this type will be registered

The first is simple, it's a string.  
The second is a bit trickier, it's a function that takes a MaterialPart as input:

```JAVA
#loader contenttweaker


import mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystem.createPartType("cool_type", function(materialPart){

});

//Use the new type to create a Part
val ourPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Create a new Material and register the newly created part.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```