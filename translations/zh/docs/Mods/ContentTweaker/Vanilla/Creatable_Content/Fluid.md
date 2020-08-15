# 流体

这允许您添加液体到游戏中！

## 创建流体表示

在您可以添加流量之前， 您需要创建一个流体表述，允许您设置您想要添加的流体属性。  
这是 [Vanilla工厂](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) 所处的位置：

```zenscript
mods.contenttweeper.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweeper.VanillaFactory.createFluid(String unlocalizedName, CTColor 颜色);
```

## 导入校验包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.Fluid；`

## ZenProperties

要获取/设置属性，您可以使用尊敬的 ZenGetters/Setters或ZenMethods：

```zenscript
//房产名称：密度
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.durity = 500;
//ZenMethod
fluid.getDensity();
fluid.setDensity(1000)；
```

| 属性名称            | 类型                                                                                       | 必填 | 默认值                              | 描述/注释                                               |
| --------------- | ---------------------------------------------------------------------------------------- | -- | -------------------------------- | --------------------------------------------------- |
| unlocalizedName | string                                                                                   | 否  |                                  | 名字，应该是所有小写                                          |
| 密度：             | int                                                                                      | 否  | 1000                             | 您可以在流体中步行多快。                                        |
| 气压              | boolean                                                                                  | 否  | false                            | 液态气体是否向上(向上而不是向下)？                                  |
| 亮度              | 整数                                                                                       | 否  | 0                                | 液体放出的光电水平                                           |
| 温度              | int                                                                                      | 否  | 300                              | 流体温度                                                |
| 颜色              | 整数                                                                                       | 否  |                                  | 流体颜色代码                                              |
| 着色              | boolean                                                                                  | 否  | true                             | 液体的颜色代码是否适用？                                        |
| 稀有度             | 字符串                                                                                      | 否  | 常驻代表                             | 液体多少，确定工具提示颜色("COMMON", "UNCOMMON", "RARE", "EPIC") |
| 视觉性             | int                                                                                      | 否  | 1000                             | 流体传播速度                                              |
| 填充声音            | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | 否  | VIP_BUCKET_FILL                | 液体被拿到圆桶时播放的声音                                       |
| 清空声音            | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | 否  | VIP_BUCKET_TITLE               | 放置液体时播放的声音                                          |
| 蒸发量             | boolean                                                                                  | 否  | false                            | 放置在荷兰时是否蒸发？                                         |
| 挂起位置            | 字符串                                                                                      | 否  | contenttweaker:fluids/fluid      | 寻找液体纹理的位置                                           |
| 浮动位置            | 字符串                                                                                      | 否  | contenttweaker:fluids/fluid_flow | 找到流体纹理的位置                                           |
| 材料              | [IMaterial定义](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)             | 否  | 观看者                              | 液体制成的材料                                             |

## 正在注册流体

您需要调用这个方法来注册游戏中的液体！  
否则什么也不会发生！  
调用此函数后，您不能取消注册流体或更改其任何属性！

```zenscript
a. 液体登记器();
```

## 示例脚本

```zenscript
#loader contenttfinfinder
import mods.contenttweeper.VanillaFactory;
import mods.contenttweeper.Fluid;
import mods.contenttweeper.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex");
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## 本地化流体

您需要将 `fluid.fluidName = 本地化名称` 添加到响应语言文件。 或者，您可以使用 CraftTweaker 的 [本地化功能](/Vanilla/Game/IGame/)，尽管它建议使用语言文件！