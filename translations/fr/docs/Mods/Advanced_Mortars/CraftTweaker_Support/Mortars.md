# Mortars

## Importing The Package

You can call the Mortar package using `mods.advancedmortars.Mortar`.

## Add Recipe

<table>
  <tr>
    <th>
      Type
    </th>
    
    <th>
      Data Type
    </th>
    
    <th>
      Examples
    </th>
  </tr>
  
  <tr>
    <td>
      Mortar Types
    </td>
    
    <td>
      String[]
    </td>
    
    <td>
      ["wooden", "stone", "iron", "diamond"]
    </td>
  </tr>
  
  <tr>
    <td>
      Output
    </td>
    
    <td>
      <a href="/Vanilla/Items/IItemStack/">IItemstack</a>
    </td>
    
    <td>
      <minecraft:diamond\>
    </td>
  </tr>
  
  <tr>
    <td>
      Duration
    </td>
    
    <td>
      Integer
    </td>
    
    <td>
      2000
    </td>
  </tr>
  
  <tr>
    <td>
      Inputs
    </td>
    
    <td>
      <a href="/Vanilla/Variable_Types/IIngredient/">IIngredient</a>
    </td>
    
    <td>
      [<ore:logWood\>, <ore:plankWood\>]
    </td>
  </tr>
</table>

### Example

```JAVA
///// "Crushing"
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:15> * 4, 8, [<minecraft:bone>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <plants2:generic:4> * 2, 8, [<botania:flower>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:10> * 2, 8, [<botania:flower:5>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:5> * 2, 8, [<botania:flower:10>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:14> * 2, 8, [<botania:flower:1>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:9> * 2, 8, [<botania:flower:6>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:7> * 2, 8, [<botania:flower:8>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:8> * 2, 8, [<botania:flower:7>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:6> * 2, 8, [<botania:flower:9>]);

///// "Mixing"
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:7> * 2, 4, [<ore:dyeBlack>, <ore:dyeWhite>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:8> * 2, 4, [<ore:dyeBlack>, <ore:dyeWhite> * 2]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:12> * 2, 4, [<ore:dyeBlue>, <ore:dyeWhite>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:5> * 2, 4, [<ore:dyeRed>, <ore:dyeBlue>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:9> * 2, 4, [<ore:dyeRed>, <ore:dyeWhite>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:6> * 2, 4, [<ore:dyeGreen>, <ore:dyeBlue>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:10> * 2, 4, [<ore:dyeGreen>, <ore:dyeWhite>]);
mods.advancedmortars.Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:13> * 2, 4, [<ore:dyePurple>, <ore:dyePink>]);
```