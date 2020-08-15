# 滤过的漏斗者

过滤后的 Hopper是一个方块，可以允许或不允许某些基于其当前筛选槽中的项目的项目。 此外，它可以对试图进入漏斗的项目执行配方。

# 筛选器

* 加
    
    * 通过名称添加一个新过滤器并分配将用于过滤器插件的项目。
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(String name, IIngredient item)
    
        mods.betterwithmods.FiltereredHopper.addFilter("modtweiner:myFilter", <minecraft:planks>);   
    ```
    
    * 将允许的项目添加到筛选器名称中。
    ```zenscript
        mods.betterwithmods.FiltereredHopper.addFilteredItem(String name, Ingredient item)
    
        mods.betterwithmods.FiltereredHopper.addFilteredItem("modtiner:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FiltereredHopper.addFilteredItem("modtinstrer:myFilter",<ore:ingotIron>);
    ```
    
    * 筛选的配方 - 跳转器可以处理试图输入特定项目输出的项目，它可以使用
        
        * 放入跳转手的背包(只要当前过滤器允许的话)。
        * 将项目投放到世界上超过希望者 
        ```zenscript
        mods.betterwithmods.FilteredHopper。 ddFilterRecipe(名称, IIngredient input, IIngredient[……]inside输出 , IIngredient[……]outsideOutpu)；
        
        /Will将一个草块转换成物品栏的一侧，还有9个钻石在物品栏
        模式之外。 etterwithmods.FilteredHopper.addFilterRecipe("modtweeper:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Will only 弹出9 钻石到世界
        mods. etterwithmods.FilteredHoper。 ddFilterRecipe("modtweeper:myFilter2",<minecraft:gravel>, [, [<minecraft:diamond>*9]);
        
        / Will只能将9个钻石放入库存中，**只允许钻石进入指定的过滤器**
        模组。 etterwithmods.FilteredHopper.addFilterRecipe("modtweeper:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        此外，您可以向过滤后的漏斗添加特殊配方，这将从Urns创建灵魂Urns。
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient input, IItemStack[…]secondary)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>[],[<minecraft:diamond>*9]);
        ```

* 移除
    
    * 从指定的过滤器中删除允许的项目
    ```zenscript
        mods.betterwithmods.FilteredHopper.clear过滤(String name);
    
        mods.betterwithmods.FiltereredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * 通过输入或输出移除筛选的配方
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(IIngredient input);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```