# CTRandom

CTRandom オブジェクトは Cot [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) オブジェクト内からのみアクセスでき、世界の乱数生成器にアクセスできます。

## クラスのインポート

クラスをインポートしたい場合は、次のようにします。

```zenscript
import mods.contenttweaker.Random;
```

## ZenMethods

使用できる唯一のメソッドは、乱数の値に対して、booleanまたはintのいずれかです。  
後者については、上限値も提供する必要があります(上限値は排他的です)。

```zenscript
randomObj.nextBoolean();
randomObj.nextInt(int upperBound);
```