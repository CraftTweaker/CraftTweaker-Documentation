# MaterialPartData

Material Part Data is data that can be added to a [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) to give it some more properties.

## 패키지 임포트하기

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.MaterialPartData;`

## Retrieving such an object

You can get a MaterialPartData object by using the `getData()` Method on a [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) object.

## Methods

All you can do with MaterialPartData is add more Data and retrieve stored data! You do that like so:

```zenscript
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Now, what to put in as name or value?  
Well, that depends on the parttype of the tool you are using.  
Below you will find a list for CoT's basic Part Types:

<details><summary>Items</summary> 

<table>
  <th>
    이름
  </th>
  
  <th>
    Value
  </th>
  
  <th>
    Required?
  </th></tr> 
  
  <tr>
    <td>
      burn
    </td>
    
    <td>
      An "Integer" (e.g. "100")
    </td>
    
    <td>
      No
    </td>
  </tr>
</table></details>

<details><summary>Armor</summary> 

<table>
  <th>
    이름
  </th>
  
  <th>
    Value
  </th>
  
  <th>
    Required?
  </th></tr> 
  
  <tr>
    <td>
      durability
    </td>
    
    <td>
      An "Integer" (e.g. "10")
    </td>
    
    <td>
      No
    </td>
  </tr>
  
  <tr>
    <td>
      enchantability
    </td>
    
    <td>
      An "Integer" (e.g. "10")
    </td>
    
    <td>
      No
    </td>
  </tr>
  
  <tr>
    <td>
      reduction
    </td>
    
    <td>
      Four "Integers" (e.g. "2, 5, 6, 2") <br />Representing Footwear, Leggins, Chestplate, Headslot
    </td>
    
    <td>
      No
    </td>
  </tr>
  
  <tr>
    <td>
      toughness
    </td>
    
    <td>
      A "float" (e.g. "2.4")
    </td>
    
    <td>
      No
    </td>
  </tr>
</table></details>

<details><summary>Block</summary> 

| 이름           | Value                     | Required? |
| ------------ | ------------------------- | --------- |
| hardness     | An "Integer" (e.g. "3")   | No        |
| resistance   | An "Integer" (e.g. "15")  | No        |
| harvestLevel | An "Integer" (e.g. "1")   | No        |
| harvestTool  | A "tool" (e.g. "pickaxe") | No        |</details>

<details><summary>Fluid</summary> 

| 이름          | Value                      | Required? |
| ----------- | -------------------------- | --------- |
| temperature | An "Integer" (e.g. "300")  | No        |
| density     | An "Integer" (e.g. "1000") | No        |
| luminosity  | An "Integer" (e.g. "0")    | No        |
| viscosity   | An "Integer" (e.g. "100")  | No        |
| vaporize    | A "boolean" (e.g. "true")  | No        |</details>

<details><summary>Ore</summary> 

| 이름           | Value                                                          | Required? |
| ------------ | -------------------------------------------------------------- | --------- |
| drops        | An "itemList" (e.g. "minecraft:redstone,minecraft:gold_ingot") | No        |
| variants     | A "Block List" (e.g. "minecraft:stone,minecraft:end_stone")    | No        |
| hardness     | An "Integer list" (e.g. "3,3")                                 | No        |
| resistance   | An "Integer list" (e.g. "15,15")                               | No        |
| harvestLevel | An "Integer list" (e.g. "1,1")                                 | No        |
| harvestTool  | A "toolList" (e.g. "pickaxe,pickaxe")                          | No        |</details>

<details><summary>Minecart</summary> 

| 이름         | Value                  | Required? |
| ---------- | ---------------------- | --------- |
| maxSpeed   | A "float" (e.g. "1.0") | No        |
| drag       | A "float" (e.g. "1.0") | No        |
| riddenDrag | A "float" (e.g. "1.0") | No        |</details>

## 예제

```zenscript
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