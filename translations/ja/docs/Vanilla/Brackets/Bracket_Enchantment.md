# エンチャントブラケットハンドラー

エンチャントブラケットハンドラーでは、ゲーム内のエンチャント定義にアクセスできます。

これらは次のようにエンチャントハンドラで参照されます:

```zenscript
<enchantment:modid:name>

<enchantment:minecraft:protection>
```

エンチャントが見つかった場合、IEnchantmentDefinition オブジェクトが返されます。 これらを使用して何ができるかについては、それぞれの [Wiki エントリ](/Vanilla/Enchantments/IEnchantmentDefinition/) を参照してください。