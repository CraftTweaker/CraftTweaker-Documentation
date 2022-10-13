::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Sieving

## 所属包
`import mods.exnihilosequentia.ZenSieveRecipe;`

## 使用方式
- **create(String name)**
- **setInput(IIngredient input)** the input
- **addDrop(IItemStack drop)** the item that drops from the block
- **addRoll(String mesh, float chance)** the mesh type and the chance for an additional item to drop
- **setWaterlogged()** if the sieve must be waterlogged for the recipe


## 添加

```zenscript
<recipetype:exnihilosequentia:sieve>.create("sieve_test").setInput(<item:minecraft:cobblestone>).addDrop(<item:minecraft:netherite_ingot>).addRoll("diamond", 0.01).addRoll("string", 1.0);
```

## 移除

```zenscript
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_iron>);
```
