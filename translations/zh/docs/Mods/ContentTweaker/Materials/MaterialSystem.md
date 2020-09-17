# 材料系统

材料系统用来创建新材料或从CT内部检索现有材料。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweaker.MaterialSystem;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### 创建

```zenscript
createPartType(名称, IRegisterMaterialPart registerMaterialPart)
```

所需参数：

- 字符串名称：部件类型的名称 -> 例如，"dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) registerMaterialPart → 处理如何创建材料零件的函数。

### 获取

```zenscript
getPartType(String名称)；
```

所需参数：

- 字符串名称：部件类型的名称 -> 例如 "gear" 若要列出所有可用的部件类型，请检查 [部件类型页面](/Mods/ContentTweaker/Materials/Parts/PartType/)。

## [镜像](/Mods/ContentTweaker/Materials/Materials/Material/)

### 创建

不同于 PartType，您不能直接创建材料，而是需要使用材料生成器。 查看 [MaterialBuilder 条目](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) 了解如何处理这些条目。

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var buildtMaterial = MB.build();
```

### 获取

```zenscript
getMaterial(String名称)；
```

所需参数：

- 字符串名称：材料的名称 -> 例如："Platinum"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### 创建

不同于 PartType，您不能直接创建零件，而是需要使用 PartBuilder。 检查 [元件条目](/Mods/ContentTweaker/Materials/Parts/Part/) 以了解如何正确处理这些问题。

```zenscript
val PB = MaterialSystem.getPartPartnBuilder;
```

### 获取

```zenscript
getPart(String名称)；
```

所需参数：

- 字符串名称：零件名称

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### 创建

    createPartDataPiece(必须输入布尔值)
    

所需参数：

- 字符串名称：数据块名称
- 需要布尔值：需要数据块吗？

## 注册多个材料

即使您也可以使用 [材料的](/Mods/ContentTweaker/Materials/Materials/Material/) 自身功能来做这件事。 此方法允许您注册 [配件](/Mods/ContentTweaker/Materials/Parts/Part/) 给定的材料

```zenscript
registerPartsForMaterial(Material material，String[…]部分命名)；
```

所需参数：

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/) materials: The material which registed parts should be made of the regarded parts
- 字符串[…]部分名称：应该注册的部件名称 -> 例如，["gear", "ingot"]

## 检索已经注册的东西：

您可以使用这些方法检索地图，使用字符串作为键值和对象值：

| 方法名称               | 返回值类型                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`地图<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`地图<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`地图<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`地图<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    导入mods.contenttweeper.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("name"); //as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); //as MaterialPart[string]