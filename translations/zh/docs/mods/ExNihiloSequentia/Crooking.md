::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crooking

## 所属包名
`import mods.exnihilosequentia.ZenCrookRecipe;`

## 方法
- **create(String name)**
- **setInput(IIngredient input)** the input
- **addDrop(IItemStack drop, float chance)** the item that drops and its chance to drop


## 加

```zenscript
<recipetype:exnihilosequentia:crook>.create("crook_test").setInput(<item:minecraft:oak_leaves>).addDrop(<item:minecraft:nether_star>, 1);
```

## 加

```zenscript
<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
```
