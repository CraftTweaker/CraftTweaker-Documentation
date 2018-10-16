# Part

A Part is the form an item is in, for example a gear or an ore.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Part;`

## Retrieving such an object

You can either retrieve an existing Part using the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) or create an entirely new one using the [Part Builder](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details>
    <summary>Following types are pre-registered (Headlines are the <a href="/Mods/ContentTweaker/Materials/Parts/PartType/">Part Types</a>):</summary>
    <h4>Items:</h4>
        <ul>
            <li>Beam <img src="Assets/beam.png" alt="beam icon" /></li>
            <li>Bolt <img src="Assets/bolt.png" alt="Bolt icon" /></li>
            <li>Casing <img src="Assets/casing.png" alt="Casing icon" /></li>
            <li>Clump <img src="Assets/clump.png" alt="Clump icon" /></li>
            <li>Crystal <img src="Assets/crystal.png" alt="Crystal icon" /></li>
            <li>Crushed Ore (crushed_ore) <img src="Assets/crushed_ore.png" alt="Crushed Ore icon" /></li>
            <li>Dense Plate (dense_plate) <img src="Assets/dense_plate.png" alt="Dense Plate icon" /></li>
            <li>Dirty Dust (dirty_dust) <img src="Assets/dirty_dust.png" alt="Dirty Dust icon" /></li>
            <li>Dust <img src="Assets/dust.png" alt="Dust icon" /></li>
            <li>Gear <img src="Assets/gear.png" alt="Gear icon" /></li>
            <li>Ingot <img src="Assets/ingot.png" alt="Ingot icon" /></li>
            <li>Nugget <img src="Assets/nugget.png" alt="Nugget icon" /></li>
            <li>Plate <img src="Assets/plate.png" alt="Plate icon" /></li>
            <li>Rod <img src="Assets/rod.png" alt="Rod icon" /></li>
            <li>Shard <img src="Assets/shard.png" alt="Shard icon" /></li>
        </ul>
    <h4>Blocks:</h4>
        <ul>
            <li>Block <img src="Assets/block.png" alt="Block icon" /></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Ore</li>
            <li>Dense Ore (dense_ore)</li>
            <li>Poor Ore(poor_ore)</li>
        </ul>
    <h4>Fluids:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Armor <img src="Assets/armor_head.png" alt="Helmet Icon" /><img src="Assets/armor_chest.png" alt="Chest Plate Icon" /><img src="Assets/armor_legs.png" alt="Leggins Icon" /><img src="Assets/armor_feet.png" alt="Boots Icon" /></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Fields

You can retrieve the following information from a Part:

| ZenMethod                 | Return Type                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                       |
| getName()                 | String                                                                        |
| getUnlocalizedName()      | String                                                                        |
| getShortUnlocalizedName() | String                                                                        |
| getPartType()             | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/)                    |
| getPartTypeName()         | String                                                                        |
| getOreDictPrefix()        | String                                                                        |
| getData()                 | List<[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Register to Material(s)

You can use this to register one or several Materials to this part

    part.registerToMaterial(Material material);
    part.registerToMaterials(Material[] materials);
    

The function will either return a single [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) object or a List of them, depending on whether you registered one or multiple materials at once.