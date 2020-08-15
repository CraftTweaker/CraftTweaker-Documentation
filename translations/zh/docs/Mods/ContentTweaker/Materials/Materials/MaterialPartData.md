# 材料合作伙伴数据

材质零件数据是可以添加到一个 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 的数据，以给它一些更多的属性。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.MaterialPartData;`

## 正在获取此对象

您可以通过使用 `getData()` 方法在一个 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 对象上获得一个 MaterialPartData 对象。

## 方法

您只能使用 MateralPartData 添加更多数据并检索存储的数据！ 你这样做：

```zenscript
MPD.addDataValue(名字，字符串值)；
MPD.getIntValue(字符串值)；
MPD.GetStringValue(字符串默认值)；
```

现在，什么是名字或值？  
好的，这取决于你正在使用的工具的部件。  
下面您会找到一个 CoT 基本部件类型的列表：

<details><summary>项目</summary> 

<table>
  <th>
    名称
  </th>
  
  <th>
    值
  </th>
  
  <th>
    必填？
  </th></tr> 
  
  <tr>
    <td>
      刻录
    </td>
    
    <td>
      一个"整数"(例如"100")
    </td>
    
    <td>
      否
    </td>
  </tr>
</table></details>

<details><summary>盔甲</summary> 

<table>
  <th>
    名称
  </th>
  
  <th>
    值
  </th>
  
  <th>
    必填？
  </th></tr> 
  
  <tr>
    <td>
      耐久性
    </td>
    
    <td>
      一个"整数"(例如"10")
    </td>
    
    <td>
      否
    </td>
  </tr>
  
  <tr>
    <td>
      附魔性
    </td>
    
    <td>
      一个"整数"(例如"10")
    </td>
    
    <td>
      否
    </td>
  </tr>
  
  <tr>
    <td>
      减少
    </td>
    
    <td>
      四个“整数”（如："2、5、6、2") <br />表示足迹、护腿、胸甲、头位
    </td>
    
    <td>
      否
    </td>
  </tr>
  
  <tr>
    <td>
      强度
    </td>
    
    <td>
      一个"浮点" (例如"2.4")
    </td>
    
    <td>
      否
    </td>
  </tr>
</table></details>

<details><summary>封禁</summary> 

| 名称   | 值              | 必填？ |
| ---- | -------------- | --- |
| 硬度   | 一个"整数"(例如"3")  | 否   |
| 抗性   | 一个"整数"(例如"15") | 否   |
| 收获级别 | 一个"整数"(例如"1")  | 否   |
| 收获工具 | "工具"(例如"选轴")   | 否   |</details>

<details><summary>流体</summary> 

| 名称  | 值                         | 必填？ |
| --- | ------------------------- | --- |
| 温度  | 一个“整数”(例如"300")           | 否   |
| 密度： | 一个"整数"(例如"1000")          | 否   |
| 亮度  | 一个"整数"(例如"0")             | 否   |
| 视觉性 | 一个"整数"(例如"100")           | 否   |
| 蒸发量 | A "boolean" (e.g. "true") | 否   |</details>

<details><summary>矿石</summary> 

| 名称   | 值                                                     | 必填？ |
| ---- | ----------------------------------------------------- | --- |
| 掉落数  | 一个“项目列表”(例如"minecraft:redstone,minecraft:gold_ingot") | 否   |
| 变体   | "方块列表"(例如"minecraft:stone,minecraft:end_stone")       | 否   |
| 硬度   | "整数列表"(例如"3,3")                                       | 否   |
| 抗性   | "整数列表"(例如"15,15")                                     | 否   |
| 收获级别 | "整数列表"(例如"1,1")                                       | 否   |
| 收获工具 | "工具列表" (例如"选择轴,选择轴")                                  | 否   |</details>

<details><summary>Minecart</summary> 

| 名称         | 值                | 必填？ |
| ---------- | ---------------- | --- |
| 最大速度       | 一个"浮点" (例如"1.0") | 否   |
| 拖动         | 一个"浮点" (例如"1.0") | 否   |
| riddenDrag | 一个"浮点" (例如"1.0") | 否   |</details>

## 例子

```zenscript
Import mods.contenttweeper.MaterialSystem;

val oreData = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build().registerPart("ore").getData();
oreData.addDataValue("drops", "minecraft:redstone,minecraft:gold_ingot");
ore.addDataValue("variants", "minecraft:stone,minecraft:end_stone");
oreData. ddDataValue("hardness", "3,3");
oreData.addDataValue("resistance", "15,15");
oreData.addDataValue("harvestLevel", "1,1");
oreData.addDataValue("harvestTool", "pickaxe,shovel");

oreData.addDataValue("test", 1");
print(oreData.getValue("test", 1");
```