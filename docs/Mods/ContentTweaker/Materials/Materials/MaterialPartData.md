# MaterialPartData

Material Part Data is data that can be added to a [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) to give it some more properties.

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MaterialPartData;`

## Retrieving such an object
You can get a MaterialPartData object by using the `getData()` Method on a [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) object.

## Methods
All you can do with MaterialPartData is add more Data and retrieve stored data!
You do that like so:
```JAVA
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Now, what to put in as name or value?  
Well, that depends on the parttype of the tool you are using.  
Below you will find a list for CoT's basic Part Types:

<details><summary>Items</summary>
	<table>
		<thead>
			<th>Name</th><th>Value</th><th>Required?</th></tr>
		</thead>
		<tbody>
			<tr><td>burn</td><td>An "Integer" (e.g. "100")</td><td>No</td></tr>
		</tbody>
	</table>
</details>


<details><summary>Armor</summary>
	<table>
		<thead>
			<th>Name</th><th>Value</th><th>Required?</th></tr>
		</thead>
		<tbody>
			<tr><td>durability</td><td>An "Integer" (e.g. "10")</td><td>No</td></tr>
			<tr><td>enchantability</td><td>An "Integer" (e.g. "10")</td><td>No</td></tr>
			<tr><td>reduction</td><td>Four "Integers" (e.g. "2, 5, 6, 2") <br>Representing Footwear, Leggins, Chestplate, Headslot</td><td>No</td></tr>
			<tr><td>toughness</td><td>A "float" (e.g. "2.4")</td><td>No</td></tr>
		</tbody>
	</table>
</details>


<details><summary>Block</summary>
	<table>
		<thead>
			<tr><th>Name</th><th>Value</th><th>Required?</th></tr>
		</thead>
		<tbody>
			<tr><td>hardness</td><td>An "Integer" (e.g. "3")</td><td>No</td></tr>
			<tr><td>resistance</td><td>An "Integer" (e.g. "15")</td><td>No</td></tr>
			<tr><td>harvestLevel</td><td>An "Integer" (e.g. "1")</td><td>No</td></tr>
			<tr><td>harvestTool</td><td>A "tool" (e.g. "pickaxe")</td><td>No</td></tr>
		</tbody>
	</table>
</details>


<details><summary>Fluid</summary>
	<table>
		<thead>
			<tr><th>Name</th><th>Value</th><th>Required?</th></tr>
		</thead>
		<tbody>
			<tr><td>temperature</td><td>An "Integer" (e.g. "300")</td><td>No</td></tr>
			<tr><td>density</td><td>An "Integer" (e.g. "1000")</td><td>No</td></tr>
			<tr><td>luminosity</td><td>An "Integer" (e.g. "0")</td><td>No</td></tr>
			<tr><td>viscosity</td><td>An "Integer" (e.g. "100")</td><td>No</td></tr>
			<tr><td>vaporize</td><td>A "boolean" (e.g. "true")</td><td>No</td></tr>
		</tbody>
	</table>
</details>


<details><summary>Ore</summary>
	<table>
		<thead>
			<tr><th>Name</th><th>Value</th><th>Required?</th></tr>
		</thead>
		<tbody>
			<tr><td>drops</td><td>An "itemList" (e.g. "minecraft:redstone,minecraft:gold_ingot")</td><td>No</td></tr>
			<tr><td>variants</td><td>A "Block List" (e.g. "minecraft:stone,minecraft:end_stone")</td><td>No</td></tr>
			<tr><td>hardness</td><td>An "Integer list" (e.g. "3,3")</td><td>No</td></tr>
			<tr><td>resistance</td><td>An "Integer list" (e.g. "15,15")</td><td>No</td></tr>
			<tr><td>harvestLevel</td><td>An "Integer list" (e.g. "1,1")</td><td>No</td></tr>
			<tr><td>harvestTool</td><td>A "toolList" (e.g. "pickaxe,pickaxe")</td><td>No</td></tr>
		</tbody>
	</table>
</details>


<details><summary>Minecart</summary>
	<table>
		<thead>
			<tr><th>Name</th><th>Value</th><th>Required?</th></tr>
		</thead>
		<tbody>
			<tr><td>maxSpeed</td><td>A "float" (e.g. "1.0")</td><td>No</td></tr>
			<tr><td>drag</td><td>A "float" (e.g. "1.0")</td><td>No</td></tr>
			<tr><td>riddenDrag</td><td>A "float" (e.g. "1.0")</td><td>No</td></tr>
		</tbody>
	</table>
</details>

## Example

```JAVA
import mods.contenttweaker.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreData.addDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
oreData.addDataValue("variants", "minecraft:stone,minecraft:end_stone");
oreData.addDataValue("hardness", "3,3");
oreData.addDataValue("resistance", "15,15");
oreData.addDataValue("harvestLevel", "1,1");
oreData.addDataValue("harvestTool", "pickaxe,shovel");

oreData.addDataValue("test", 1);
print(oreData.getIntValue("test", -1));
```