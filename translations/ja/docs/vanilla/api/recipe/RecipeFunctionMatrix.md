# RecipeFunctionMatrix

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## メソッド
### process

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack[][]);
```

| Parameter | Type                                                                  | Description             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| usualOut  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | No description provided |
| inputs    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | No description provided |



