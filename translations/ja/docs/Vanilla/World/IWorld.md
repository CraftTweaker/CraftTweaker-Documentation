# IWorld

IWorld オブジェクトには、ゲーム内の寸法に関する情報が含まれています。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.world.IWorld`

## IBlockPropertiesを拡張

IBlockState extends [IBlockAccess](/Vanilla/World/IBlockAccess/). つまり、 [IBlockAccess](/Vanilla/World/IBlockAccess/) オブジェクトで使用可能なすべてのメソッドは、IBlockState オブジェクトでも使用できます。

## IWorld オブジェクトの作成

通常、エンティティや他の関数からこのオブジェクトを派生することができます。 自分で作成する必要がある場合でも、 これは以下の方法です:  
このメソッドは、Minecraft 内で実行される関数の中でのみ呼び出すべきであることに注意してください。 ローディング・サークル中じゃないわ

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## パラメータなしのZenMethodsとZenGetters

| ZenMethod          | ZenGetter     | 戻り値の種類                                           | 説明                                                                                                            |
| ------------------ | ------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| isRemote()         | リモート          | boolean型                                         | 世界が「スレーブ」クライアントである場合、真です。変更はこの世界から保存または伝播されません。 例えば、サーバーのワールドでは false に設定されています。クライアントのワールドでは true に設定されています。 |
| isRaining()        | 雨             | boolean型                                         | 雨が降っている場合はtrueを返します。                                                                                          |
| isThundering()     | 雷鳴も           | boolean型                                         | 雷鳴の場合は true を返します。                                                                                            |
| getMoonPhase()     | moonPhase     | int                                              | 現在のムーンフェイズを返します。                                                                                              |
| isDayTime()        | dayTime       | boolean型                                         | 昼間かどうかをチェックします。                                                                                               |
| getWorldTime()     | 時間            | long                                             | 世界の時刻を返します。                                                                                                   |
| getDimension()     | 寸法            | int型                                             | ワールドの寸法を返します。                                                                                                 |
| isSurfaceWorld()   | surfaceWorld  | boolean型                                         | あなたが表面の世界にいるかどうかを返します。                                                                                        |
| getDimensionType() | dimensionType | 文字列型                                             | 寸法のタイプ名を返します。                                                                                                 |
| getWorldType()     | worldType     | 文字列型                                             | ワールドのタイプ名を返します。                                                                                               |
| getWorldInfo()     | worldInfo     | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | 世界の情報を返します。 世界のさらに多くの情報を取得するために使用できます。                                                                        |
| getProvider()      | プロバイダー        | [IWorldProvider](/Vanilla/World/IWorldProvider/) | 世界プロバイダーを返します。 世界のさらに多くの情報を取得するために使用できます。                                                                     |

## パラメータ付きのZenMethods

### 特定の位置でバイオームを取得

[IPosition3f](/Vanilla/Utils/Position3f/) または [IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトのいずれかを使用します。  
[IBiome](/Vanilla/Biomes/IBiome/) オブジェクトを返します。

```zenscript
worldObj.getBiome(IPosition3f position);
worldObj.getBiome(IBlockPos position);
```

### 特定の位置で明るさを得る

3 つの整数または [IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトを使用します。 intを返します。

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### 特定の位置にブロックを取得する

3 つの整数または [IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトを使用します。 [IBlock](/Vanilla/Blocks/IBlock/) オブジェクトを返します。

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### 特定の位置で blockState を取得または設定

[IBlockPos](/Vanilla/World/IBlockPos/) オブジェクトを使用し、セッターには [IBlockState](/Vanilla/Blocks/IBlockState/) オブジェクトを使用します。 必要に応じて、 [IData](/Vanilla/Data/IData/) オブジェクトを指定して、ブロック状態のタイルエンティティにNBTデータを定義することができます。 Getter [IBlockState](/Vanilla/Blocks/IBlockState/)を返し、ブール値を設定します。

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### エンティティを出現させる

[IEntity](/Vanilla/Entities/IEntity/) オブジェクトを使用します。  
スポーンが成功した場合に表示される bool を返します。

```zenscript
worldObj.spawnEntity(IEntity)
```

### Get a raytrace result

[IVector3d](/Vanilla/World/IVector3d/) オブジェクトと 3 つのブール値を使用して [IRayTraceResult](/Vanilla/World/IRayTraceResult/)を取得します。  
**null を指定できます**

最初のベクトルは出発点、2番目のベクトルは我々が探している方向と長さを表します。  
デフォルトでは最後のパラメータだけがtrueになります。

```zenscript
worldObj.rayTraceBlocks(IVector3dbegin, IVector3dray, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) boolean returnLastUncollidableBlock)
```

### 選択したブロックを取得する

Use an [IBlockPos](/Vanilla/World/IBlockPos/), an [IRayTraceResult](/Vanilla/World/IRayTraceResult/) and an [IPlayer](/Vanilla/Players/IPlayer/).  
Returns an [IItemStack](/Vanilla/Items/IItemStack/).  
**Can be null**

位置にあるブロックを選択することで得られるIItemStackを取得します。

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayResult, IPlayer player);
```