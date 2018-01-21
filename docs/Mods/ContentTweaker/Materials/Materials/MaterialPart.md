# MaterialPart

A MaterialPart Object is, as the name suggests a combination of a [Material](/Mods/ContentTweaker/Materials/Materials/Material) and a [Part](/Mods/ContentTweaker/Materials/Parts/Part), such as `platinum gear`.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MaterialPart;` 

## Retrieving such an object
There are several ways of retreiving such an object, either as list or as single object.

Single Object:

- Using the [Material Part Bracket Handler](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart)
- Using a [Material's](/Mods/ContentTweaker/Materials/Materials/Material) registerPart Method
- Using a [Part's](Mods/ContentTweaker/Materials/Parts/Part) registerToMaterial Method

List:

- Using [MaterialSystem's](/Mods/ContentTweaker/Materials/MaterialSystem) registerPartsForMaterial Method
- Using a [Material's](/Mods/ContentTweaker/Materials/Materials/Material) registerParts Method
- Using a [Part's](Mods/ContentTweaker/Materials/Parts/Part) registerToMaterials Method

## Fields

You can retrieve the following information from a MaterialPart:

| ZenMethod            | Return Type                                                                    |
|----------------------|--------------------------------------------------------------------------------|
| getName()            | String                                                                         |
| getLocalizedName()   | String                                                                         |
| hasEffect()          | boolean                                                                        |
| getMaterial()        | [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material)                 |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack)                                        |
| getTextureLocation() | String                                                                         |
| getCTColor()         | [Color](/Mods/ContentTweaker/Vanilla/Types/Color/Color)                        |
| getColor()           | int                                                                            |
| isColorized()        | boolean                                                                        |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData) |

You can also set the following information of a MaterialPart:

| ZenMethod                           | Parameter              | Description                                                                                     |
|-------------------------------------|------------------------|-------------------------------------------------------------------------------------------------|
| setColorized(colorized)             | boolean colorized      | Sets if the item's color code is applied                                                        |
| setTextureLocation(textureLocation) | String textureLocation | Sets the item's texure path. For example, if you want one Gear to look different from the rest. |


