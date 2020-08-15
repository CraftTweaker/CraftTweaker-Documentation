# 组别类型

PartType 可以被视为适合多个部分的组，例如 `个项目`

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.PartType；`

## 正在获取此对象

您可以使用 [材料系统](/Mods/ContentTweaker/Materials/MaterialSystem/) 检索一个现有的 PartType 对象或创建一个全新的对象。  
查阅下面的条目以了解如何创建一个新的 Part类型.

<details>
    <summary>以下类型已预先注册：</summary>
    <ul>
        <li>项目</li>
        <li>封禁</li>
        <li>矿石</li>
        <li>流体</li>
        <li>盔甲</li>
        <li>minecart</li>
    </ul>
</details>

## ZenMethods

您可以从 PartType检索以下信息：

| ZenMethod（ZenMethod） | 返回值类型  |
| -------------------- | ------ |
| getName()            | string |

您可以在 PartType上设置以下信息：

| ZenMethod（ZenMethod）          | 参数类型                                                                       |
| ----------------------------- | -------------------------------------------------------------------------- |
| setData(IPartDataPiece[…]数据)； | [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] 数据 |

## 创建一个新的 PartType

如果你出于任何原因需要注册一个新的 PartType，你需要知道两件事：

- 新配件类型的名称
- How [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) created from [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) that are of this type will be registered

第一个是简单的，它是一个字符串。  
第二个是一个有点棘手的问题，它是一个将材料部件作为输入的函数：

```zenscript
#loader contenttweaker


import mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystem.createPartType("cool_type", function(materialPart){

});

//Use the new type to create a Part
val ourPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Create a new Material and register the newly created part.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```