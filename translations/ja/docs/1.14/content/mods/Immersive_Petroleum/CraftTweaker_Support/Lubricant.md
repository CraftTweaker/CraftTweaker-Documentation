# Lubricant Registration

## 登録

| Type  | Data Type  |
| ----- | ---------- |
| Input | Fluidstack |

### 序文

与えられた流体の量は、4 Ticksごとに使用されます。

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## removeAll

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
