# パワードThingies :: Tweaker Class

これは、各マシンの個々の `Tweaker` クラスのインスタンスを取得するために使用されるエントリポイントです。

### インポート中

```zenscript
import mods.poweredthingies.Tweaker;
```

### マシン固有の微調整を取得する

```zenscript
var compoundMaker = Tweaker.compoundTweaker();
var fluidCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
var itemCompoundProducer = Tweaker.itemCompoundProducerTweaker();
var incinerator = Tweaker.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powderMaker = Tweaker.powderMakerTweaker();
```

### このクラスが存在する理由

基本クラスとKotlinを使うのが好きで、どちらもCTではうまくインポートできないからです。 それとも遅れてうまくいくわけにはいきません それで... それぞれのマシンの個々のクラスに直接アクセスする代わりに、これを使用することにこだわっている。