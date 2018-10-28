
# Part

A Part is the form an item is in, for example a gear or an ore.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Part;` 

## Retrieving such an object
You can either retrieve an existing Part using the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) or create an entirely new one using the [Part Builder](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details><summary>Following types are pre-registered (Headlines are the [Part Types](/Mods/ContentTweaker/Materials/Parts/PartType/)):</summary>

#### Items:

- Beam ![beam icon](/Mods/ContentTweaker/Materials/Parts/Assets/beam.png)  
- Bolt ![Bolt icon](/Mods/ContentTweaker/Materials/Parts/Assets/bolt.png)  
- Casing ![Casing icon](/Mods/ContentTweaker/Materials/Parts/Assets/casing.png)  
- Clump ![Clump icon](/Mods/ContentTweaker/Materials/Parts/Assets/clump.png)  
- Crystal ![Crystal icon](/Mods/ContentTweaker/Materials/Parts/Assets/crystal.png)  
- Crushed Ore (crushed_ore) ![Crushed Ore icon](/Mods/ContentTweaker/Materials/Parts/Assets/crushed_ore.png)  
- Dense Plate (dense_plate) ![Dense Plate icon](/Mods/ContentTweaker/Materials/Parts/Assets/dense_plate.png)  
- Dirty Dust (dirty_dust) ![Dirty Dust icon](/Mods/ContentTweaker/Materials/Parts/Assets/dirty_dust.png)  
- Dust ![Dust icon](/Mods/ContentTweaker/Materials/Parts/Assets/dust.png)  
- Gear ![Gear icon](/Mods/ContentTweaker/Materials/Parts/Assets/gear.png)  
- Ingot ![Ingot icon](/Mods/ContentTweaker/Materials/Parts/Assets/ingot.png)  
- Nugget ![Nugget icon](/Mods/ContentTweaker/Materials/Parts/Assets/nugget.png)  
- Plate ![Plate icon](/Mods/ContentTweaker/Materials/Parts/Assets/plate.png)  
- Rod ![Rod icon](/Mods/ContentTweaker/Materials/Parts/Assets/rod.png)  
- Shard ![Shard icon](/Mods/ContentTweaker/Materials/Parts/Assets/shard.png)  

#### Blocks:

- Block ![Block icon](/Mods/ContentTweaker/Materials/Parts/Assets/block.png)  

#### Ores:

- Ore  
- Dense Ore (dense_ore)  
- Poor Ore(poor_ore)  

#### Fluids:

- Molten  

#### Armor:

- Armor ![Helmet Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_head.png)![Chest Plate Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_chest.png)![Leggins Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_legs.png)![Boots Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_feet.png)  

#### Minecart

- Minecart  

</details>

## Fields
You can retrieve the following information from a Part:

| ZenMethod                 | Return Type                            |
|---------------------------|----------------------------------------|
| hasOverlay()              | boolean                                |
| getName()                 | String                                 |
| getUnlocalizedName()      | String                                 |
| getShortUnlocalizedName() | String                                 |
| getPartType()             | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/)                 |
| getPartTypeName()         | String                                 |
| getOreDictPrefix()        | String                                 |
| getData()                 | List<[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Register to Material(s)
You can use this to register one or several Materials to this part
```
part.registerToMaterial(Material material);
part.registerToMaterials(Material[] materials);
```

The function will either return a single [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) object or a List of them, depending on whether you registered one or multiple materials at once.