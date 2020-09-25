# 潤滑剤の登録

## 登録

| タイプ   | データタイプ                                      |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### 序文

与えられた流体の量は、4 Ticksごとに使用されます。

### コード例:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## すべて削除

### コード例:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
