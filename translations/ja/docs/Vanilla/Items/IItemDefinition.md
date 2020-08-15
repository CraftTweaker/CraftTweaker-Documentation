# IItemDefinition

IItemDefinition オブジェクトは、アイテムへの直接参照です。  
これが項目を参照するだけなので、 [IItemStack](/Vanilla/Items/IItemStack/) とは異なります。 メタ情報やNBT値は含まれていません。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IItemDefinition;`

## 取得方法

最も簡単な方法は [IItemStack](/Vanilla/Items/IItemStack/)からです。 しかし、あなたはまた、ゲーム内のすべての登録IItemDefinitionsのリストを取得し、それで何かを行うことができます。

```zenscript
//IItemStack Zengetter "definition" -> single IItemDefinition
val itemDefinition = <minecraft:stone>.definition;

//IGame zengetter "items" -> LIST!
val itemDefinitionList = game.items;
```

## どうすればいいか

### ZenGetters and parameterless ZenMethods

| ZenGetter          | 何をするか                                           | Return Type                                                   |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------- |
| id                 | アイテムIDを返します                                     | 文字列                                                           |
| 名前                 | ローカライズされていないアイテム名を返します。                         | 文字列                                                           |
| ores               | この項目を含むすべての鉱石項目を返します。 サブ項目を参照する鉱石項目も含めることができます。 | `リスト<[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)>` |
| 所有者                | このアイテムが属するMod名を返します。                            | 文字列                                                           |
| defaultInstance    |                                                 | [IItemStack](/Vanilla/Items/IItemStack/)                      |
| creativeTab        |                                                 | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/)           |
| creativeTab        |                                                 | [ICreativeTab[]](/Vanilla/CreativeTabs/ICreativeTab/)         |
| canItemEditBlocks  |                                                 | bool                                                          |
| itemEnchantability |                                                 | int                                                           |
| subItems           |                                                 | List<[IItemStack](/Vanilla/Items/IItemStack/)\>              |

### ZenSettersおよびその他のvoid-Methods

| ZenSetter/ZenMethod                    | パラメータタイプ                                            |
| -------------------------------------- | --------------------------------------------------- |
| creativeTab                            | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| setNoRepair()                          | なし                                                  |
| setContainerItem(IItemDefinition item) | IItemDefinition                                     |

### ZenMethods

- `def.makeStack(meta);` 指定されたメタデータで [IItemStack](/Vanilla/Items/IItemStack/) を作成します。 メタデータはintとOPTIONALです。
- `def.setHarvestLevel(String type, int level);` アイテムの収穫レベルを対応するタイプとレベルに変更します。
- `def.getSubItems(creativeTab);` List<[IItemStack](/Vanilla/Items/IItemStack/)\> 与えられた [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) のすべてのサブアイテムを返します。
- `def.getItemBurntime(item);` -1 (バニラロジックが適用されます), 0 (精錬可能ではありません) または項目バーンタイムを表す int を返します。