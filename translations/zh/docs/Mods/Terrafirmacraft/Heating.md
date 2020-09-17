# 供暖中

## 所属包名
```zenscript
导入 mods.terrafirmacraft。2. 加热；
```

## 添加配方

```zenscript
加热.addRecipe(注册表名、IItemStack输入、IItemStack输出、浮动转换Temp、浮动maxTemp)；
```
- 转换温度是指配方将输入完全转换成输出堆栈的温度。
- 最大温度是输入被销毁的温度。 完整的参考，请检查 [加热温度](/Mods/Terrafirmacraft/HeatingTemperatures)

## 删除配方

```zenscript
供暖.removeRecipe(StemStack 输出);
供暖.removeRecipe(String registryname);
```