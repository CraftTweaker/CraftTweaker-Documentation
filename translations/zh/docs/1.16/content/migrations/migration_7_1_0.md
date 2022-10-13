# 将脚本迁移至CraftTweaker 7.1

CraftTweaker 7.1 版本的一些改动破坏了向后兼容性。  
这些破坏性的改变在模组所使用的API和脚本使用的类型中。  
此文档应当概述了最重要的变化，以及开发者应该如何让他们的脚本重新工作起来。


## MCTag 变为 MCTag&LT;T&GT;

We replaced Tags with a generic system that is more extensible and will work better with future updates.  
That change will break existing scripts in two ways:

1) The specialized addition and removal methods have been removed. <br>现在使用`add`、`remove`，而不是`addItems`、`addFluid`等之类的方法。 2）括号处理程序的语法现在要求标签类型作为一个额外的参数。 <br>因此`<tag:forge:gems>`应变为`<tag:items:forge:gems>`

`/ct dump tags`和`/ct hand`指令已更新来表现此改变。  
如果需要从item标签使用IIngredient的任何扩展方法，则需要首先调用` .asIIngredient()`。

迁移示例
```zenscript
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.fluid.MCFluid;

var fluidTagOld = <tag:minecraft:water> as MCTag;
var itemTagOld = <tag:forge:gems> as MCTag;

var fluidTagNew = <tag:fluids:minecraft:water> as MCTag<MCFluid>;
var itemTagNew = <tag:items:forge:gems> as MCTag<MCItemDefinition>;

//How to interact
var myGemTagOld = <tag:forge:gems>;
myGemTagOld.addItems(<item:minecraft:bedrock>);
myGemTagOld.removeItems(<item:minecraft:diamond>);

var myGemTagNew = <tag:items:forge:gems>;
myGemTagNew.add(<item:minecraft:bedrock>);
myGemTagNew.remove(<item:minecraft:diamond>);


//IIngredient expansins
var reuseOld = <tag:forge:gems>.reuse();
var reuseNew = <tag:items:forge:gems>.asIIngredient().reuse();
```


## 封装类型变为原版类型

我们改变了一些CraftTweaker内部的工作方式来直接使用Minecraft的类型。  
这一变化应该不会直接影响你现有的脚本，但会破坏其他模组添加的一些集成。

损坏的类将被记录在crafttweaker的日志中。 如果你发现你的一些脚本损坏了，请检查它们是否使用了其中某个被损坏的类。


## Method to register EventHandlers changed signature

Event listeners no longer have the consumer in a custom constructor.  
Instead, the registitration method was changed to be generic.

迁移示例：
```zenscript
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;

//旧方法
CTEventManager.register(new MCAnvilRepairEvent((event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 }));


//新方法
CTEventManager.register<MCAnvilRepairEvent>((event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 });
```


## ZenCode：移除了Storage标签

We removed Storage tags from the ZenCode language Specifications for now.  
They are not required for CraftTweaker and made debugging harder.  
Most people did not need to use storage tags so we don't expect you to need to pursue this migration step.

迁移示例：
```zenscript
var before = {} as string`static[string`static]`unique

var after = {} as string[string];

function funcBefore(argument as string`borrow) as string`unique {
    return argument + "!";
}

function funcAfter(argument as string) as string {
    return argument + "!";
}
```
