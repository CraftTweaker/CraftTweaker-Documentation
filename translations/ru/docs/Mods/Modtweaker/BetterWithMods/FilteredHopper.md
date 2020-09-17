# Отфильтрованный Воронка

Отфильтрованный Воронка - это блок, который может разрешать или запрещать определенные вещи на основе предмета, в настоящее время в его слоте фильтров. Кроме того, он может выполнять рецепты предметов, которые пытаются войти в режим Taxify.

# Фильтры

* Сложение
    
    * Добавьте новый фильтр по имени и назначьте элементы, которые будут использоваться в слоте фильтров.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilter(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilter("modtweaker:myFilter", <minecraft:planks>);   
    ```
    
    * Добавить разрешенный элемент в фильтр по его имени.
    ```zenscript
        mods.betterwithmods.FilteredHopper.addFilteredItem(String name, IIngredient item)
    
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<minecraft:dirt>);
        mods.betterwithmods.FilteredHopper.addFilteredItem("modtweaker:myFilter",<ore:ingotIron>
    ```
    
    * Отфильтрованные Рецепты - Копёр может обрабатывать элемент, пытающийся вводить в определенные выходные данные, он может либо
        
        * Поместите в инвентарь хоппера (если этот фильтр позволяет).
        * Взять предметы в мир над прыжком 
        ```zenscript
        mods.betterwithmods.FilteredHopper. ddFilterRecipe(String name, IIngredient input, IIngredient[] insideOutput , IIngredient[] outsideOutput);
        
        //Преобразует блок травы в кремнемонику, а 9 алмазов вне инвентаря
        модификации. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter",<minecraft:grass>,[<minecraft:flint>],[<minecraft:diamond>*9]);
        
        //Добавит только 9 алмазов в миры
        модов. etterwithmods.FilteredHopper. ddFilterRecipe("modtweaker:myFilter2",<minecraft:gravel>, [], [<minecraft:diamond>*9]);
        
        //Будут помещены 9 алмазов в инвентарь, **только если вы разрешите бриллианты в определенный фильтр**
        модов. etterwithmods.FilteredHopper.addFilterRecipe("modtweaker:myFilter3",<minecraft:sand>, [<minecraft:diamond>*9], []);
        ```
        
        Кроме того, вы можете добавить специальные рецепты в отфильтрованный Taxify, который будет создавать URL-адреса душ с Urns.
        
        ```zenscript
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(IIngredient input, IItemStack[] выходов, IItemStack[] секунд)
        
           mods.betterwithmods.FilteredHopper.addSoulUrnRecipe(<minecraft:stone>,[],[<minecraft:diamond>*9]);
        ```

* Удаление
    
    * Удалить разрешенные элементы из указанного фильтра
    ```zenscript
        mods.betterwithmods.FilteredHopper.clearFilter(String название);
    
        mods.betterwithmods.FilteredHopper.clearFilter("betterwithmods:wicker");
    ```
    
    * Удалить отфильтрованный рецепт по вводу или выводу
    ```zenscript
        mods.betterwithmods.FilteredHopper.removeRecipe(IIngredient[] insideOutput, IIngredient[] outsideOutput);
    
        mods.betterwithmods.FilteredHopper.removeRecipe([<minecraft:sand>,<minecraft:sand:1>],[<minecraft:flint>]);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(Igredient input);
    
        mods.betterwithmods.FilteredHopper.removeRecipeByInput(<minecraft:sand>);
    ```