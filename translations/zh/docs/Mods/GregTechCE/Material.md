# 材料

## 调用这个包

`mods.gregtech.material` 包含了所有用来处理材料的类。

## 材料对象

一个 `mods.gregtech.material.Material` 的对象代表着格雷科技里的一种材料，并且有一些有用的方法。

参数：

| 名称                 | 类型                           | 说明                  |
| ------------------ | ---------------------------- | ------------------- |
| color              | int                          | 材料的 RGB 格式颜色        |
| chemicalFormula    | string                       | 材料的化学式              |
| iconSet            | MaterialIconSet              | 生成元数据物品的图标集         |
| components         | ImmutableList<materialstack> | 这个材料的组成             |
| generationFlagsRaw | long                         | 这个材料的生成标志（详见材料生成标志） |
| element            | Element                      | 这个材料的组成元素           |

取值器：

| 名称              | 类型   | 说明               |
| --------------- | ---- | ---------------- |
| radioactive     | bool | 如果这个材料有放射性则为True |
| protons         | long |                  |
| neutrons        | long |                  |
| mass            | long |                  |
| density         | long |                  |
| camelCaseString | 字符串  |                  |
| unlocalizedName | 字符串  |                  |
| localizedName   | 字符串  | 仅限客户端            |
| name            | 字符串  | 材料注册的名称          |

方法：

| 名称（参数）                   | 说明      |
| ------------------------ | ------- |
| addFlags(String... 标志名称) | 添加生成标志  |
| hasFlag(String 标志名称)     | 是否有生成标志 |

`MaterialStack` 可以由 `材料 * 数字`，与[材料的数量](/Vanilla/Variable_Types/IIngredient.md)或 FiuldStack 一样。

### FluidMaterial

`液化材料` 是一种含有液体特性的材料。 它的超级类是 `Materials` ，因此 `Material` 中的所有成员仍然可用。

参数：

| 名称   | 类型 | 描述 |
| ---- | -- | -- |
| 流体温度 | 整数 |    |

取值器：

| 名称       | 类型                                                | 描述       |
| -------- | ------------------------------------------------- | -------- |
| hasFluid | 布尔值                                               |          |
| 急性等离子体   | 布尔值                                               |          |
| 神秘性      | 布尔值                                               |          |
| 流体       | [Liquid定义](/Vanilla/Liquids/ILiquidDefinition.md) | 材料流体     |
| 等离子体     | [Liquid定义](/Vanilla/Liquids/ILiquidDefinition.md) | 材料等离子体流体 |

### 粉尘材料

`粉尘材料` 是一种含有粉尘特性的材料。 它的超级类是 `流体材料` ，因此所有在 `流体材料` 中的成员仍然可用。

参数：

| 名称            | 类型            | 描述                                  |
| ------------- | ------------- | ----------------------------------- |
| oreMultiplier | 整数            | 宏过程中粉碎的矿石输出量乘数                      |
| byProduct乘法器  | 整数            | 脉冲化过程中的副产品输出量乘数                     |
| 熔炼成倍率         | 整数            | 熔炼草原项目时的物品数量乘数                      |
| 直接冶炼中         | SolidMaterial | 熔炼这个材料矿石的材料                         |
| 冲洗入门          | FluidMaterial | 该材料矿石应被冲洗以产生额外输出                    |
| separatedInto | 粉尘材料          | 在电磁分离过程中，此材料矿石将被分离到此材料和此领域指定的材料上    |
| 烧焦时间          | 整数            | 此材料在熔炉熔炼、零或负值中用作燃料时的燃烧时间表示此材料不能用作燃料 |

取值器：

| 名称   | 类型                | 描述            |
| ---- | ----------------- | ------------- |
| 矿物产品 | 列表<fluidmaterial> | 按产品列出的矿石      |
| 收获级别 | 整数                | 采集此材料块所需的工具级别 |

### SolidMaterial

`SolidMaterials` 是一种含有固体特征的材料。 它的超级类是 `粉末材料` ，因此所有在 `粉末材料` 中的成员仍然可用。

参数：

| 名称             | 类型            | 描述                                                                                                      |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial | 此处指定的材料将需要用手柄来制作工具                                                                                      |
| macerateInto   | 粉尘材料          | Macererering any items of this material will result material specified in this field, default to itself |

取值器：

<table>
  <tr>
    <th>
      名称
    </th>
    
    <th>
      类型
    </th>
    
    <th>
      描述
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      浮点数
    </td>
    
    <td>
      由此材料制作工具的速度，默认 1.0f
    </td>
  </tr>
  
  <tr>
    <td>
      工具耐久性
    </td>
    
    <td>
      整数
    </td>
    
    <td>
      由该材料制作的工具的耐久性，0用于不能用于工具的材料
    </td>
  </tr>
  
  <tr>
    <td>
      工具附件
    </td>
    
    <td>
      列表<enchantmentdata>
    </td>
    
    <td>
      附魔将应用于此材料制作的工具
    </td>
  </tr>
</table>

### IngotMaterial

`Ingotal Materials` 是一种含有发明特征的细菌。 它的超级类是 `固件` ，因此 `SolidMaterials` 中的所有成员仍然可以使用。

灵魂材料可以用作电线、电缆和液管。 这些属性可以由 `setCableProperties(长伏，int baseAmperage，int lossPerlock)` 和 `setFluidPipeProperties(int througput，int maxTemperature，布尔气体)` 设定。

例如：

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 losss/block
```

## 附魔数据

`聚合技术mods.EnchantmentData` 可以在 `SolidMaterial#toolEnchantes`中找到, 它们是附魔的内部存储, 含有等级。

他们可以通过调用 `附魔` getter, 并通过 `级别` getter来投放到 `craftweeker.enchantments.IEnchantmentDefine,` 中。

要在 `SolidMaterials`中添加工具的附魔，只需要调用 `addToolEnchantment(I附魔附魔)`, 添加一个 CraftTinfin弱的附魔数据类型。

财富我的材料示例：

```zenscript
var materials = MaterialRegistry.get("iron"); // 修改铁材料
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // 创建附魔对象并添加它
```

## 材料生成标志

这些标志适用于材料。

| 名称 (大小写不敏感)                       | 描述                                                                      |
| --------------------------------- | ----------------------------------------------------------------------- |
| PLAYLIST_DESCRIPTION              | 启用电解位配方生成                                                               |
| PLAYLIST_DESCRIPTION              | 启用离心机分解配方生成                                                             |
| 正在进行                              | 添加到材料，如果它一直燃烧光。                                                         |
| 闪光灯                               | 添加到材料，如果它是某种易燃的                                                         |
| 外观                                | 如果是某种爆炸物，添加到材料                                                          |
| NO_UNIFICATION                    | 添加到材料以完全禁用它的统一                                                          |
| 无回收站                              | 添加到材料，如果它的任何项目无法循环以获取擦除                                                 |
| 禁用_DECOMPOSITION                  | 禁用此材料和所有具有组件的材料的分解配方生成                                                  |
| _REQUIRES_HYDROGEN              | 解放配方需要氢作为额外输入。 金额等于输入金额                                                 |
| PLATE_PLATE                       | 为这种材料生成一个板块，如果它是灰尘材料，将生成粉尘压缩器配方到板上， 如果它是金属材料，将生成机器食谱。如果发现该方块，切割机配方也将被生成 |
| CHATE_DENSE                       | 生成一个密度板块。                                                               |
| 无工作                               | 添加材料，如果它不能用任何其他手段工作，而不是通过熔炼或熔炼。 这用于涂层材料。                                |
| NO_SMASHING                       | 如果不能用于常规金属作业技术，则添加到材料之外，因为不可能将其购买。                                      |
| NO_SMLTING                        | 添加到材料，如果无法熔炼它                                                           |
| INDUCTION_SMLTING_LOW_OUTPUT    | 添加到材料，如果它在诱导冶炼厂中消耗较少的话。                                                 |
| SMLT_INTO_FLUID                 | 添加到原料，如果它融入液体(而且它还会为这种物质产生液体)                                           |
| EXCLUDE_BLOCK_CHALLENGE_DESC    |                                                                         |
| EXCLUDE_PLATE_COMPRESSOR_RECIPE |                                                                         |
| CRYSTALLIS可用                      | 如果这种材料是水晶的                                                              |
| CHATE_LENSE                       |                                                                         |
| HIGH_SIFTER_OUTPUT              |                                                                         |
| FLUID_BLOCK                       | 每当系统生成流体材料的 fluid 块                                                     |
| PLAYLIST_DESCRIPTION              | 添加此标志以启用此材料的 plasma 生成                                                  |
| STATE_GAS                         | 标记材料为气体状态                                                               |
| ROD                               |                                                                         |
| USERROR_POPUP_TITLE             |                                                                         |
| ROD_DESCRIPTION                   |                                                                         |
| MORTAR_GRINDABLE                  | 如果这种材料是可磨损的，只需要一个简单的迫击炮。                                                |

## 材料图标集

图标集在 `mods.gregtech.material.MaterialIconSet` 中可用。

- 无
- 水管
- 淡出
- MAGNETIC
- 四月
- DIAMOND
- EMERALD
- SHINY
- 夏尔达
- ROUG
- 粉色
- 沙兰
- 闪光灯
- Ruby
- LAPIS
- POWDER
- FLUID
- 游戏
- LIGNITE
- OPAL
- GLASS
- WOD
- 左键
- GEM_HORIZONTAL
- GEM_VERTICAL
- 配方
- NETHERSTAR

获取器是 `名称`。

方法是 `toString()`, 而静态方法 `getByname(String name)`。

## 材料注册表

材料登记处是在统一制度中获取、列出和创建材料的助手。

您可以导入类 `mods.gregtech.material.MaterialRegistry`。

### 用法

```zenscript
#loader registech
import mods.gregtech.material.MaterialRegistry;

// 注意返回类型如果没有找到
var material=MaterialRegistry。 et(材料名称)；

// 列出注册的所有材料
var materialList = 材料登记册。 etAllMaterials();

// 如果ingot不能被用作工具，工具耐久性设置为 0
// 注意一个@可选参数可以被遗漏。 并且它被默认0替代。
// 意味着宝石和印花材料在默认情况下不能作为工具。
MaterialRegistry.createFluidMaterial(int metetSubId, String name, int color, String iconSet, @Optional MaterialStack[……]materialComponents);

MaterialRegistration。 ReateDustMaterial(int metetSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[……]materialComponents);

MaterialRegistration。 ReateGemMaterial(int metatemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[……]materialComponents, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistration。 reateIngotMaterial(int metatemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[……]materialComponents, @Optional float toolSpeed, @Optional int toolDurability, @Opident blastnaceTemperature)；
```

### 例子

```zenscript
#loader registech
import mods.gregtech.materialRegistry;

val dustMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
dustMaterial. ddFlags(["Deputy ATE_ORE", "Deputy ATE_PLATE"]);

/create a gem-materials with a tooltips showing the chemical formulatory
//This automatic produce an electilizer tree to divide this matters to its components.
val gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_水平", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1. , 0);

// 任何以前注册的材料可以使用，包括自定义材料。
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "Comple_alloy", 0xF6872E, "shiny", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0)；
```