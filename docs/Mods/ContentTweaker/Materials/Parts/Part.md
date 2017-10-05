# Part

A Part is the form an item is in, for example a gear or an ore.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Part;` 

## Retrieving such an object
You can either retrieve an existing Part using the [MaterialSystem](/Mods/Contenttweaker/Materials/MaterialSystem) or create an entirely new one using the [Part Builder](/Mods/ContentTweaker/Materials/Parts/Part_Builder)

<details>
	<summary>Following types are pre-registered:</summary>
	<ul>
		<li>Ingot</li>
		<li>Beam</li>
		<li>Gear</li>
		<li>Bolt</li>
		<li>Dust</li>
		<li>Nugget</li>
		<li>Rod</li>
		<li>Plate</li>
		<li>Dense Plate</li>
		<li>Casing</li>
		<li>Block</li>
		<li>Ore</li>
		<li>Poor Ore</li>
		<li>Dense Ore</li>
		<li>Molten</li>
		<li>Armor</li>
	</ul>
</details>

## Fields
You can retrieve the following information from a Part:

| ZenMethod            | Return Type                            |
|----------------------|----------------------------------------|
| getName()            | String                                 |
| getUnlocalizedName() | String                                 |
| getPartType()        | [IPartType](IPartType)                 |
| getPartTypeName()    | String                                 |
| getOreDictPrefix()   | String                                 |
| getData()            | List<[IPartDataPiece](IPartDataPiece)> |