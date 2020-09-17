# フィルターされたホッパー

フィルターホッパーは、現在フィルタースロットにあるアイテムに基づいて、特定のアイテムを許可または許可しないブロックです。 さらに、ホッパーに入ろうとしているアイテムでレシピを実行することができます。

# フィルタ

* 加算
    
    * 名前で新しいフィルタを追加し、フィルタスロットで使用されるアイテムを割り当てます。
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(String, name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * 許可されている項目をフィルタ名で追加します。
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<ore:ingotIron>);
    ```
    
    * フィルターされたレシピ - ホッパーは特定のアイテム出力に入力しようとするアイテムを処理することができます。
        
        * ホッパーのインベントリに入れてください(現在のフィルターが許可している限り)。
        * ホッパーの上にある世界にアイテムを取り出します 
        ```zenscript
        mods.betterwithmods.FilteredHopper.addFilterRecipe(String name, IIngredient input, IIngredient[] insideOutput , IIngredient[] outsideOutput);
        
        //Will convert a grass block into a flint side the inventory and 9 diamonds outside the inventory
        mods.betterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Will only eject 9 diamonds into the world
        mods.betterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        //Will only put 9 diamonds into the inventory, **only if you allow diamonds into the specific filter**
        mods.betterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        さらに、絞られたホッパーに特別なレシピを追加して、UrnからSoulのUrnを作成することもできます。
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient input, IItemStack[] outputs, IItemStack[] secondary)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* 削除
    
    * 指定されたフィルターから許可されているアイテムを削除します
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(String name);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * 入力または出力でフィルターされたレシピを削除
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRemoveRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(IIngredient input);
    
        mods.Betterwithmods.FilterHopper.removeRemoveRecipeByInput(IInput);<minecraft:sand>);
    ```