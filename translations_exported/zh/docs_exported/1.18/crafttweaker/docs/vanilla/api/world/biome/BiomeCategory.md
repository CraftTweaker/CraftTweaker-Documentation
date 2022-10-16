# BiomeCategory

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.biome.BiomeCategory;
```


## 已实现的接口
BiomeCategory implements the following interfaces. That means all methods defined in these interfaces are also available in BiomeCategory

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

BiomeCategory is an enum. It has 19 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:world/biome/category:none>
<constant:minecraft:world/biome/category:taiga>
<constant:minecraft:world/biome/category:extreme_hills>
<constant:minecraft:world/biome/category:jungle>
<constant:minecraft:world/biome/category:mesa>
<constant:minecraft:world/biome/category:plains>
<constant:minecraft:world/biome/category:savanna>
<constant:minecraft:world/biome/category:icy>
<constant:minecraft:world/biome/category:theend>
<constant:minecraft:world/biome/category:beach>
<constant:minecraft:world/biome/category:forest>
<constant:minecraft:world/biome/category:ocean>
<constant:minecraft:world/biome/category:desert>
<constant:minecraft:world/biome/category:river>
<constant:minecraft:world/biome/category:swamp>
<constant:minecraft:world/biome/category:mushroom>
<constant:minecraft:world/biome/category:nether>
<constant:minecraft:world/biome/category:underground>
<constant:minecraft:world/biome/category:mountain>
```
## 使用方式

:::group{name=getName}

Return Type: string

```zenscript
// BiomeCategory.getName() as string

myBiomeCategory.getName();
```

:::


## 参数

| 名称       | 类型     | 可获得  | 可设置   |
| -------- | ------ | ---- | ----- |
| name（名称） | string | true | false |

