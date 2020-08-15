# 闪光器

Blender将各种物品合并在一起，导致饮料恢复食物和饱和。

## 原版饮料

- 4种食物的水果粉碎(2种苹果，4种梅龙)。
- Veggie Juice(4x Carrot, 1x Potato, 2x Pumpkin Piie) for 6个食物。
- Cookies and Cream Milkshake (2x Cookie , 1x Milk Bucket) for 4 food
- 能量饮料(8×Redstone、1×Fire Charge、16×Sugar)为8种食物。

## 移除饮料

## 删除匹配的混合饮料。

```zenscript
mods.cfm.Blender.remove(@Optional final String name, @Opinion final IItemStack[]components, @Optional final final Integer food, @Opidential final int[]colour);

// 去除名为“水果粉碎”的饮料
mods.cfm.Blender。 表情("水果粉碎")；
// 去除需要一个胡萝卜、一个马铃薯和一个南瓜皮才能创建
模组。 fm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// 移除所有饮料
mods.cfm.Blender.remove();
```

## 添加饮料

添加一个混合饮料。

## 目前，饱和度和食物值不能独立确定。

```zenscript
mods.cfm.Blender。 ddDrink(@Nonnull final string name, @Nonnull final IItemStack[…]成分, final int food, @Nonnull final int[…]颜色)；

// 添加一个叫做"Wermelon Snow"的饮料，它是彩色粉丝，恢复20种食物和20个饱和度，需要8个熔融切片和4个雪球来制作
mod。 fm.Blender.addDrink("Wermelon Snow", [<minecraft:melon>.withamount(8),<minecraft:snowball>.withamount(4)], 20, [255,182,193])；
```