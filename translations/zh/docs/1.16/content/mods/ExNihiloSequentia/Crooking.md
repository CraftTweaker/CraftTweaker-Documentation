::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crooking

## 所属包
`import mods.exnihilosequentia.ZenCrookRecipe;`

## 使用方式
- **create(String name)**
- **setInput(IIngredient input)** the input
- **addDrop(IItemStack drop, float chance)** the item that drops and its chance to drop


## 添加配方

```zenscript
<recipetype:exnihilosequentia:crook>.create("crook_test").setInput(<item:minecraft:oak_leaves>).addDrop(<item:minecraft:nether_star>, 1);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
```
