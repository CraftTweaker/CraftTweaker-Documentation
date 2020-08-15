# MCMaterial

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## メソッド
### blocksMovement

Returns if this material is considered solid or not

Returns boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Retrieves the color index of the block. This is is the same color used by vanilla maps to represent this block.

Returns [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### isFlammable

Returns if the block can burn or not.

Returns boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Returns if blocks of these materials are liquids.

Returns boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indicate if the material is opaque

Returns boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplaceable

Returns whether the material can be replaced by other blocks when placed - eg snow, vines and tall grass.

Returns boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Returns true if the block is a considered solid. This is true by default.

Returns boolean

```zenscript
myMCMaterial.isSolid();
```

### isToolNotRequired

Returns true if the material can be harvested without a tool (or with the wrong tool)

Returns boolean

```zenscript
myMCMaterial.isToolNotRequired();
```


