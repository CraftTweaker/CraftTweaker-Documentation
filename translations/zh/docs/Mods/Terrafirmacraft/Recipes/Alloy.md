# Alloy

## 所属包名
```zenscript
导入 mods.terrafirmacraft。Alloy;
导入mods.terramiramacraft。AlloyRecipeBuilder;
```

## 添加配方
- 为了操纵合金配方，提供了一个配方生成器
```zenscript
AlloyRecipeBuilder 生成器 = Alloy.addAlloy(String metal);
builder.addMetal(String input, 双分钟, 双倍最大);
builder.build();
```

## 删除配方

```zenscript
合金.移除合金(限定金属)；
```

## 示例脚本
- 关于TFC金属的完整参考，请参阅 [Metal](/Mods/Terrafirmacraft/Metal)。
```zenscript
Alloy.addAlloy("BRONZE").addMetal("COPPER", 0.88, 0.92).addMetal("TIN", 0.08, 0.12).build();
Alloy.addAlloy("BISMUTH_BRONZE").addMetal("COPPER", 0.5, 0.65).addMetal("BISMUTH", 0.1, 0.2).addMetal("zinc", 0.2, 0.3).build();
```