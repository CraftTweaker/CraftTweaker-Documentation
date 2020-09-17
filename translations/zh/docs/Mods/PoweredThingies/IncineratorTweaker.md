# 驱动器 :: 焚烧器

### 导入

```zenscript
导入mods.poweredthingies.Tweeper.incineratorTinflow;
```

### 列出密钥，按键删除配方

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // 检查 <logKeys> 输出有效密钥
it().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(输入: IItemStack, power: Long, outputs: 数组<WeightedItemStack>)
```

`功率` 表示输入项将生成的总电源数量 (RF, T, 或 FE).

##### 例子

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。