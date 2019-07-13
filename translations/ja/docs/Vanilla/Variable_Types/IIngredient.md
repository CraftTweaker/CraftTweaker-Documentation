# IIngredient

IIngredientは、レシピの素材です。  
これ一つで、[アイテム](/Vanilla/Items/IItemStack/)、[鉱石辞書](/Vanilla/OreDict/IOreDictEntry/)、[液体](/Vanilla/Liquids/ILiquidStack/)を扱えます。

## パッケージのインポート

何らかの問題が発生した場合([配列](/AdvancedFunctions/Arrays_and_Loops/)へのキャストなど)には、インポート必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。  
`import crafttweaker.item.IIngredient;`

## IIngredientパッケージをインポートする

普段必要ではないですが、場合によってはIIngredientパッケージを[インポート](/AdvancedFunctions/Import/)するまでレシピが機能しない場合があります。  
インポートするには、次の文を使います。

    import crafttweaker.item.IIngredient;
    

## 関数

では、これで何が出来るのでしょうか。

### コマンド文字列

コマンド文字列は、ZSでこのアイテムを呼び出す方法です。  
それは、ブラケット構文と似たようなものです。

    val item = <minecraft:iron_ingot>;
    
    //prints "<minecraft:iron_ingot>"
    print(item.commandString);
    

### マーク

IIngredientをマークして、後で[crafting functions](/Vanilla/Recipes/Crafting/Recipe_Functions/)において使用できるようにできます。 以前に適応されたMarkを取得することもできます。

    //Marks the pick with the String Picky
    //item.marked(name) <-- Name is a string!
    val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");
    
    //prints "Picky"
    print(markedPick.mark);
    

### 個数

あるアイテムを複数個として使用する場合、IIngredientに個数を指定します。  
これはとても簡単で、IIngredient型に整数型を掛けてあげればできます。  
個数を取得することもできます。

    val multipleApples = <minecraft:apple> * 3;
    
    //prints 3
    print(multipleApples.amount);
    

### IIgredientのユニオン化

時折、IIngredientのXとYの両方が使えるレシピを作りたいと思ったことはありませんか? そのことが、IIngredientにORメソッドが用意されている理由です。

    val item1 = <minecraft:apple>;
    val item2 = <minecraft:carrot>;
    
    val either = item1 | item2;
    val either2 = item1.or(item2);
    

### 取得可能なアイテム・液体の取得

往々にしてIIngredientは複数のアイテムを表すことがあり、例えば、あなたが[OreDictEntry](/Vanilla/OreDict/IOreDictEntry/)を使用したり、2つのアイテムをユニオン化した場合が該当します。  
全ての入手可能なIIngredientは、最初に提示された関数を通してList&lt;[IItemStack](/Vanilla/Items/IItemStack/)&gt;という形のリストとして取得できます。  
2番めに提示された関数は最初に提示された関数と似た働きをしますが、Listの代わりに[IItemStack](/Vanilla/Items/IItemStack/)[]を返します。 3番めに提示された液体に関する関数にも同じことが言えますが、これは[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)のリストを返します。

    //Returns an IItemStack List
    //possible items: All iron ingots and the gold ingot from MC
    val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>;
    
    
    //Returns an ILiquidStack List|
    //possible liquids: Lava and Water
    val liquidsIngredient = <liquid:lava> | <liquid:water>;
    
    
    for item in itemsIngredient.items{
        //Prints each possible item's Display name
        print(item.displayName);
    }
    
    for item in itemsIngredient.itemArray{
        //Prints each possible item's Display name
        print(item.displayName);
    }
    
    for liquid in liquidsIngredient.liquids{
        //Prints each possible liquid's Display name
        print(liquid.displayName);
    }
    
    for liquid in <minecraft:water_bucket>.liquids {
        //Prints the contained liquid, i.e. water.
        //May not work for every item, though.
        print(liquid.displayName);
    }
    

### クラフト時のIIngredientの変換

クラフトにおいて、アイテムを消費する代わりに、ダメージ値が変動したり別のアイテムに変わるようにしたいときがあなたにもあると思います。  
そのときには、Transformerを使いましょう。

    <br />val item = &lt;minecraft:apple&gt;;
    
    //アイテムはクラフティンググリッド上に残ります
    transformedItem = item.reuse();
    
    //アイテムは消費されず、プレイヤーの手元に返ります
    transformedItem = item.giveBack();
    
    //アイテムを消費し、指定したアイテムをプレイヤーに与えます(クラフティンググリッドはクリアされます)
    transformedItem = item.giveBack(&lt;minecraft:potato&gt;);
    
    //クラフティンググリッド上にて、アイテムを指定したアイテムに置き換えます
    transformedItem = item.transformReplace(&lt;minecraft:potato&gt;);
    
    //アイテムにダメージを1与えます
    transformedItem = item.transformDamage();
    
    //アイテムにダメージを指定した量与えます
    transformedItem = item.transformDamage(3);
    
    //アイテムは消費されます。それ以外は起きません
    transformedItem = item.noReturn();
    
    //複数のアイテムが消費されます
    transformedItem = item.transformConsume(3);
    

### 素材の状態設定

あなたは時折素材に指定したタグがあったり、ダメージ値が設定されている(いない)場合にのみ動作するようにしたいと思うでしょう。 こういった条件は、次の構文を用いて素材に追加することができます。

    val item = <minecraft:apple>;
    
    //最低1以上のダメージ値を有する素材にのみ有効
    var conditionedItem = item.onlyDamaged();
    
    //指定した値以上のダメージ値を有する素材にのみ有効
    conditionedItem = item.onlyDamageAtLeast(10);
    
    //指定した値以下のダメージ値を有する素材にのみ有効
    conditionedItem = item.onlyDamageAtMost(100);
    
    //それぞれ最初の値 ≦ x ≦ 2番めの値となるダメージ値を有する素材のみ有効
    conditionedItem = item.onlyDamageBetween(10,100);
    
    //指定したタグを有する素材にのみ有効 指定したものより多いタグ、別のタグは無視してチェックされます
    //JEIのレシピ画面にタグを表示させたい場合、"withTag(tag)"を使用してタグを追加する必要があります。
    conditionedItem = item.onlyWithTag({display: {Name: "Tomato"}});
    
    //指定したタグを有する素材にのみ有効 指定したものより多いタグ、別のタグは無視してチェックされます
    //注意: アイテムを表すものではうまくいきますが、それ以外で確実に動くわけではありません JEIがレシピ上にタグを表示することが、これを用いる上での長所です
    conditionedItem = item.withTag({display: {Name: "Tomato"}});
    
    //指定した量の素材のみ有効 主にTransformerと組み合わせて使用されます
    //注意: これを追加するだけでは、依然として1回のクラフト時つき1つのアイテムしか消費されません
    conditionedItem = item.onlyStack(32);
    

### マッチング

IItemStackがIIngredientと一致するかどうか確認したい場合、matchメソッドを用いて判別できます。 This will return a boolean. If the IIngredient represents a liquid, it will check if the item is a valid container for this liquid.

    print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
    print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
    

You can also match two IIngredient Objects, in which case you'd need to use the in operator:

    val ingots = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
    val oreIngot = <ore:ingotIron>;
    val ingotGold = <minecraft:gold_ingot>;
    
    
    //true as the ingots Ingredient has <minecraft:gold_ingot>
    ingots has ingotGold;
    
    //false as <minecraft:iron_ingot> cannot be found in <ore:ingotGold>
    oreIngot has ingots;