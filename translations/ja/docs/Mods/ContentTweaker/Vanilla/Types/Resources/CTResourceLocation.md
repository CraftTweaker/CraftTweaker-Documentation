# CTResourceLocation

リソースのlocationオブジェクトは、Minecraftに何かを見つける場所を教えるために使用されます。 それはドメインとパスで構成されています。

## パッケージの呼び出し/インポート

If you don't want to type out the package's whole name every time you use a static method or if you are encountering any issues with the class in general it might be required for you to [import](/AdvancedFunctions/Import/) the class:  
`import mods.contenttweaker.ResourceLocation`

## ZenMethods

### 静的メソッド: 作成

静的メソッドとは、パッケージ自体で呼び出されるメソッドであり、このインスタンスの特定のオブジェクトではありません。  
このメソッドを使用して、新しい CTResourceLocation インスタンスを作成できます。

```zenscript
var instance = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetters

ZenGettersはパッケージ自体ではなくオブジェクトに対して呼び出されます。

```zenscript
print(myLocation.domain);
```

| ZenGetter | タイプ |
| --------- | --- |
| ドメイン      | 文字列 |
| 小道        | 文字列 |