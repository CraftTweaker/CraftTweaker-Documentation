# MaterialPartData

Material Part Data は、 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) に追加できるデータで、さらにいくつかのプロパティを提供します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.MaterialPartData;`

## そのようなオブジェクトを取得しています

MaterialPartData オブジェクトは、 `MaterialPart` オブジェクトの [getData()](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) メソッドを使用して取得できます。

## メソッド

MaterialPartDataでできることは、より多くのデータを追加し、保存されたデータを取得することです。 以下のようにします。

```zenscript
MPD.addDataValue(String name, String value);
MPD.getIntValue(String name, int defaultValue);
MPD.getStringValue(String name, String defaultValue);
```

Now, what to put in as name or value?  
Well, that depends on the parttype of the tool you are using.  
Below you will find a list for CoT's basic Part Types:

<details><summary>アイテム</summary> 

<table>
  <th>
    名称
  </th>
  
  <th>
    値
  </th>
  
  <th>
    必須？
  </th></tr> 
  
  <tr>
    <td>
      書き込み中
    </td>
    
    <td>
      "Integer" (例: "100")
    </td>
    
    <td>
      いいえ
    </td>
  </tr>
</table></details>

<details><summary>よろいかぶと</summary> 

<table>
  <th>
    名称
  </th>
  
  <th>
    値
  </th>
  
  <th>
    必須？
  </th></tr> 
  
  <tr>
    <td>
      耐久度
    </td>
    
    <td>
      "Integer" (例: "10")
    </td>
    
    <td>
      いいえ
    </td>
  </tr>
  
  <tr>
    <td>
      エンチャント性
    </td>
    
    <td>
      "Integer" (例: "10")
    </td>
    
    <td>
      いいえ
    </td>
  </tr>
  
  <tr>
    <td>
      減少
    </td>
    
    <td>
      Four "Integers" (e.g. "2, 5, 6, 2") <br />Representing Footwear, Leggins, Chestplate, Headslot
    </td>
    
    <td>
      いいえ
    </td>
  </tr>
  
  <tr>
    <td>
      タフネス
    </td>
    
    <td>
      "float" (例: "2.4")
    </td>
    
    <td>
      いいえ
    </td>
  </tr>
</table></details>

<details><summary>ブロック</summary> 

| 名称          | 値                     | 必須？ |
| ----------- | --------------------- | --- |
| 硬さ          | "Integer" (例: "3")    | いいえ |
| 抵抗          | "Integer" (例: "15")   | いいえ |
| 収穫レベル       | "Integer" (例: "1")    | いいえ |
| harvestTool | "tool" (例: "pickaxe") | いいえ |</details>

<details><summary>Fluid</summary> 

| 名称      | 値                         | 必須？ |
| ------- | ------------------------- | --- |
| 温度      | "Integer" (例: "300")      | いいえ |
| density | "Integer" (例: "1000")     | いいえ |
| 明るさ     | "Integer" (例: "0")        | いいえ |
| 粘度|粘度   | "Integer" (例: "100")      | いいえ |
| 気化する    | A "boolean" (e.g. "true") | いいえ |</details>

<details><summary>鉱石</summary> 

| 名称          | 値                                                         | 必須？ |
| ----------- | --------------------------------------------------------- | --- |
| ドロップ        | "itemList" (例: "minecraft:redstone,minecraft:gold_ingot") | いいえ |
| variant     | "ブロックリスト" (例: "minecraft:stone,minecraft:end_stone")      | いいえ |
| 硬さ          | "整数リスト" (例: "3,3")                                        | いいえ |
| 抵抗          | "Integer list" (例: "15,15")                               | いいえ |
| 収穫レベル       | "整数リスト" (例: "1,1")                                        | いいえ |
| harvestTool | "toolList" (例: "pickaxe,pickaxe")                         | いいえ |</details>

<details><summary>Minecart</summary> 

| 名称         | 値                  | 必須？ |
| ---------- | ------------------ | --- |
| 最大速度       | "float" (例: "1.0") | いいえ |
| ドラッグ       | "float" (例: "1.0") | いいえ |
| riddenDrag | "float" (例: "1.0") | いいえ |</details>

## 例

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