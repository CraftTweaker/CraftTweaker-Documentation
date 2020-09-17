# 部分

零件是物品所含的形式，例如用具或矿石。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.Part；`

## 正在获取此对象

您可以使用 [材料系统](/Mods/ContentTweaker/Materials/MaterialSystem/) 检索一个现有的零件或使用 [部件生成器](/Mods/ContentTweaker/Materials/Parts/Part_Builder/) 创建一个全新的零件。

<details>
    <summary>以下类型是预先注册的 (标题是 <a href="../PartType">部件类型</a>)：</summary>
    <h4>项目：</h4>
        <ul>
            <li>贝姆<img src="../Assets/beam.png" alt="图标"></li>
            <li>箭头<img src="../Assets/bolt.png" alt="图标"></li>
            <li>正在保存<img src="../Assets/casing.png" alt="图标"></li>
            <li>树形图<img src="../Assets/clump.png" alt="图标"></li>
            <li>水晶体<img src="../Assets/crystal.png" alt="图标"></li>
            <li>粉碎矿石 (粉碎矿)<img src="../Assets/crushed_ore.png" alt="图标"></li>
            <li>密封板(dense_plate)<img src="../Assets/dense_plate.png" alt="图标"></li>
            <li>脏粉尘(dirty_dust)<img src="../Assets/dirty_dust.png" alt="图标"></li>
            <li>灰度<img src="../Assets/dust.png" alt="图标"></li>
            <li>齿轮制作<img src="../Assets/gear.png" alt="图标"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="图标"></li>
            <li>Nugget<img src="../Assets/nugget.png" alt="图标"></li>
            <li>板块<img src="../Assets/plate.png" alt="图标"></li>
            <li>罗德<img src="../Assets/rod.png" alt="图标"></li>
            <li>小写<img src="../Assets/shard.png" alt="图标"></li>
        </ul>
    <h4>块：</h4>
        <ul>
            <li>封禁<img src="../Assets/block.png" alt="图标"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>矿石</li>
            <li>密封矿石 (dense_ore)</li>
            <li>贫瘠的矿石(poor_ore)</li>
        </ul>
    <h4>流体：</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>盔甲 <img src="../Assets/armor_head.png" alt="头部图标"><img src="../Assets/armor_chest.png" alt="箱子图标"><img src="../Assets/armor_legs.png" alt="腿图标"><img src="../Assets/armor_feet.png" alt="英尺图标"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## 字段

您可以从零件中检索以下信息：

| ZenMethod（ZenMethod）      | 返回值类型                                                                       |
| ------------------------- | --------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                     |
| getName()                 | string                                                                      |
| getUnlocalizedName()      | 字符串                                                                         |
| getShortUnlocalizedName() | 字符串                                                                         |
| getPartType()             | [组别类型](/Mods/ContentTweaker/Materials/Parts/PartType/)                      |
| getPartTypeName()         | 字符串                                                                         |
| getOreDictPrefix()        | string                                                                      |
| getData()                 | 列表<[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## 登记材料：

您可以用它来注册这个部分的一个或多个材料

```zenscript
part .registerToMaterial(Material material);
part.registerToMaterials(Material[…]材料)；
```

函数将返回单个的 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) 对象或他们的列表， 取决于您一次注册一个或多个材料。