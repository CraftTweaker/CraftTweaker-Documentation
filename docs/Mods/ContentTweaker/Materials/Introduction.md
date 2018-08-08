# Contenttweaker Material System
Contenttweaker allows you not only to add single items to the game but whole materials!
You can for example use these materials to automatically generate a new ore together with gears, ingots and the like!

There are 5 Terms that are important:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/): The Material you are going to add/use (e.g. Platinum) → What the items are made of
- [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/): Basically a group (e.g. Block, Item, Entity, etc) → The type of the parts
- [Part](/Mods/ContentTweaker/Materials/Parts/Part/): The item's form (e.g. Gear, Rod, Ingot, etc)
- [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/): Combination of Part and Material (e.g. Iron rod, Platinum Gear, etc) → Can be used to return the item as [IItemStack](/Vanilla/Items/IItemStack/) later on.
- [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/): Some configurations → Varies by part type, check the wiki page for further information.

## Example Script
```java
	#loader contenttweaker
	//////////
	// Calls
	//////////
	import mods.contenttweaker.MaterialSystem;
	import mods.contenttweaker.Material;
	
	//////////////
	// Variables
	//////////////
	var copper = MaterialSystem.getMaterialBuilder().setName("Copper").setColor(15766817).build();
	var tin = MaterialSystem.getMaterialBuilder().setName("Tin").setColor(10275286).build();
	var silver = MaterialSystem.getMaterialBuilder().setName("Silver").setColor(15592941).build();
	var lead = MaterialSystem.getMaterialBuilder().setName("Lead").setColor(5658219).build();
	var cobalt = MaterialSystem.getMaterialBuilder().setName("Cobalt").setColor(18347).build();
	
	var metal_list = [copper, tin, silver, lead, cobalt] as Material[];
	var part_names = ["dust", "gear", "plate", "nugget", "ingot", "beam", "bolt"] as string[];
	var ore_types = ["ore", "poor_ore", "dense_ore"] as string[];
	
	///////////////////////////
	// Material registration
	///////////////////////////
	
	for i, metal in metal_list {
	    metal.registerParts(part_names);
	
	    var ores = metal.registerParts(ore_types);
	    for i, ore in ores {
	        var oreData = ore.getData();
	        oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone,minecraft:netherrack");
	        oreData.addDataValue("hardness", "3,3,3");
	        oreData.addDataValue("resistance", "15,15,15");
	        oreData.addDataValue("harvestTool", "pickaxe,pickaxe,pickaxe");
	        oreData.addDataValue("harvestLevel", "1,1,1");
	    }
	
	    var blockData = metal.registerPart("block").getData();
	    blockData.addDataValue("hardness", "5");
	    blockData.addDataValue("resistance", "30");
	    blockData.addDataValue("harvestTool", "pickaxe");
	    blockData.addDataValue("harvestLevel", "1");
	}
```