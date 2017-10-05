# MaterialPart

A MaterialPart Object is, as the name suggests a combination of a [Material](Material) and a [Part](/Mods/ContentTweaker/Materials/Parts/Part), such as `platinum gear`.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MaterialPart;` 

## Retrieving such an object
There are several ways of retreiving such an object, either as list or as single object.

Single Object:
- Using the [Material Bracket Handler](/Mods/ContentTweaker/Material/Brackets/Bracket_Material)
- Using a [Material's](Material) registerPart Method

List:
- Using [MaterialSystem's](/Mods/ContentTweaker/Material/MaterialSystem) registerPartsForMaterial Method
- Using a [Material's](Material) registerParts Method

## Fields

You can retrieve the following information from a MaterialPart:

| ZenMethod            | Return Type                            |
|----------------------|----------------------------------------|
| getName()            | String                                 |
| getLocalizedName()   | String                                 |
| hasEffect()          | boolean                                |
| getMaterial()        | [IMaterial](Material)                  |
| getPart()            | [IPart](Part)                          |
| getItemStack()       | [IItemStack](Vanilla/Items/IItemStack) |
| getTextureLocation() | String                                 |
| getColor()           | int                                    |
| isColorized()        | boolean                                |
| getData()            | [IMaterialPartData](IMaterialPartData) |

You can also set the following information of a MaterialPart:

| ZenMethod                           | Parameter              | Description                                                                                     |
|-------------------------------------|------------------------|-------------------------------------------------------------------------------------------------|
| setColorized(colorized)             | boolean colorized      | Sets if the item's color code is applied                                                        |
| setTextureLocation(textureLocation) | String textureLocation | Sets the item's texure path. For example, if you want one Gear to look different from the rest. |


