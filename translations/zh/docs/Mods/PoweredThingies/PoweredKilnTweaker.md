# 强化的线索 :: 土生土长的击杀

### 导入

```zenscript
导入 mods.poweredthingies.Tweeper.poweredKilnTinfate 为 pkt;
```

### 列出密钥，按键删除配方

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // 检查 <logKeys> 输出有效密钥
pkt().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### 例子

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。