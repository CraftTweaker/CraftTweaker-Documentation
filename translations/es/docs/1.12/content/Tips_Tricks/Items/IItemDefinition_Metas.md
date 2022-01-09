# Usar IItemDefinitions para ahorrar tiempo cuando nos referimos a items con metadata.

## El problema
Let's say we want to remove the recipes of some specific colors of wool.  
White wool has the metadata 0, all colors range from meta 1 to meta 15, so there are 16 in total.

Sólo queremos eliminar las lanas con metadata que está entre 3 y 12. What do we do?  
We can't just remove all of them (in other words, use `<minecraft:wool:*>`), but we also don't want to write 10 times the same thing.  
While in this example this would totally work, in large scale this becomes pretty annoying!

## Lo que sabemos y debemos saber

- recipes.remove require un Objeto `IIngredient`
- Un `<a href="/Vanilla/Items/IItemStack/">IItemStack</a>` puede ser usado como `<a href="/Vanilla/Variable_Types/IIngredient/">IIngredient</a>` ya que `<a href="/Vanilla/Items/IItemStack/">IItemStack</a>` extiende `<a href="/Vanilla/Variable_Types/IIngredient/">IIngredient</a>`
- Podemos usar `<a href="/Vanilla/Items/IItemDefinition/">IItemDefinitions</a>` para crear `<a href="/Vanilla/Items/IItemStack/">IItemStacks</a>`

## La solución

We use [IItemDefinitions](/Vanilla/Items/IItemDefinition/) and an Integer Range and iterate through latter.  
If we can't use an int range we can also use a number array, but that would require you to type in all required numbers.  
You can also use this to Except some items from being used.

```zenscript
val itemDef = <minecraft:wool>.definition;

//hace esto de <minecraft:wool:3> a<minecraft:wool:12>
for i in 3 to 13{
    recipes.remove(itemDef.makeStack(i));
}


val arrayNum = [3,4,5,6,7,8,9,10,11,12] as int[];


//<minecraft:wool:3> a <minecraft:wool:12>
for i in arrayNum{
    itemDef.makeStack(i).addTooltip("No crafteable");
}

//<minecraft:wool:3> a <minecraft:wool:12>, pero sin 5 y 9
for i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Ayuda");
    }
}

```