# IBlockAccess

BlockAccess オブジェクトは座標を介してアクセス可能なブロックのグループです。 これらは主に [IWorld](/Vanilla/World/IWorld/)のスーパーインターフェイスとして機能します。つまり、これらの関数はすべての [IWorld](/Vanilla/World/IWorld/) オブジェクトでも使用できます。

## クラスのインポート

エラーを避けるには、クラスを [インポート](/AdvancedFunctions/Import/) する必要があります。  
`import crafttweaker.world.IBlockAccess`

## ZenMethods

### 特定の位置で blockState を取得または設定

[IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトと [IBlockState](/Vanilla/Blocks/IBlockState/) オブジェクトを使用します。  
[IBlockState](/Vanilla/Blocks/IBlockState/) を返します。

```zenscript
accObj.getBlockState(IBlockPos pos);
```

### ブロックがエアブロックであるかどうかを確認します。

[IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトを使用する。  
ブールを返す。

```zenscript
accObj.isAirBlock(IBlockPos pos);
```

### ブロック側で強力な戦闘力を得る

[IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトと [IFacing](/Vanilla/World/IFacing/) オブジェクトを使用します。  
intを返します。

```zenscript
accObj.getStrongPower(BlockPos var1, EnumFacing var2);
```