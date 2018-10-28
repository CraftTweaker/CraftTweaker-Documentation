
# Part

A Part is the form an item is in, for example a gear or an ore.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Part;` 

## Retrieving such an object
You can either retrieve an existing Part using the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) or create an entirely new one using the [Part Builder](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details><summary>Following types are pre-registered (Headlines are the [Part Types](/Mods/ContentTweaker/Materials/Parts/PartType/)):</summary>

#### Items:
- Beam ![beam icon](/Mods/ContentTweaker/Materials/Parts/Assets/beam.png)</li>
- Bolt ![Bolt icon](/Mods/ContentTweaker/Materials/Parts/Assets/bolt.png)</li>
- Casing ![Casing icon](/Mods/ContentTweaker/Materials/Parts/Assets/casing.png)</li>
- Clump ![Clump icon](/Mods/ContentTweaker/Materials/Parts/Assets/clump.png)</li>
- Crystal ![Crystal icon](/Mods/ContentTweaker/Materials/Parts/Assets/crystal.png)</li>
- Crushed Ore (crushed_ore) ![Crushed Ore icon](/Mods/ContentTweaker/Materials/Parts/Assets/crushed_ore.png)</li>
- Dense Plate (dense_plate) ![Dense Plate icon](/Mods/ContentTweaker/Materials/Parts/Assets/dense_plate.png)</li>
- Dirty Dust (dirty_dust) ![Dirty Dust icon](/Mods/ContentTweaker/Materials/Parts/Assets/dirty_dust.png)</li>
- Dust ![Dust icon](/Mods/ContentTweaker/Materials/Parts/Assets/dust.png)</li>
- Gear ![Gear icon](/Mods/ContentTweaker/Materials/Parts/Assets/gear.png)</li>
- Ingot ![Ingot icon](/Mods/ContentTweaker/Materials/Parts/Assets/ingot.png)</li>
- Nugget ![Nugget icon](/Mods/ContentTweaker/Materials/Parts/Assets/nugget.png)</li>
- Plate ![Plate icon](/Mods/ContentTweaker/Materials/Parts/Assets/plate.png)</li>
- Rod ![Rod icon](/Mods/ContentTweaker/Materials/Parts/Assets/rod.png)</li>
- Shard ![Shard icon](/Mods/ContentTweaker/Materials/Parts/Assets/shard.png)</li>

#### Blocks:
- Block ![Block icon](/Mods/ContentTweaker/Materials/Parts/Assets/block.png)</li>

#### Ores:

- Ore</li>
- Dense Ore (dense_ore)</li>
- Poor Ore(poor_ore)</li>

#### Fluids:

- Molten</li>

#### Armor:

- Armor ![Helmet Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_head.png)![Chest Plate Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_chest.png)![Leggins Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_legs.png)![Boots Icon](/Mods/ContentTweaker/Materials/Parts/Assets/armor_feet.png)</li>

#### Minecart

- Minecart</li>

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