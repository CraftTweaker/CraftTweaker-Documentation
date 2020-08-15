# 电源线索 :: Fluid Burner :: 冷却器

### 导入

```zenscript
导入mods.poweredthingies.Tweeper.fluidBurnerCoolantTinflow作为冷却器；
```

### 列出密钥，按键删除配方

```zenscript
colotant().logKeys()
colotant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // 检查 <logKeys> 输出有效密钥
colot().clear()
```

### 添加配方

##### 签名

```zenscript
addCoolant(fluid: ILiquidStack, tiplier: Float)
```

`时间倍增器` 是用于增加(或减少)燃料燃烧时的数量的值。

##### 例子

```zenscript
冷却().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。