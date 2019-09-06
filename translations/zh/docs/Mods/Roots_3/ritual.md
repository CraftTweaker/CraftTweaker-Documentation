# 自定义柴堆仪式（Pyre Ritual）配方

### 类

```java
import mods.roots.Ritual;
```

#### 方法

```java
static void modifyRitual(
  string name,         // the name of the ritual whose ingredients you wish to modify
  IIngredient[] inputs // a list of five ingredients (no more, no less)
);
```

* * *

### Examples

```java
import mods.roots.Ritual;

// Changes the ingredients required to perform the windwall ritual
Ritual.modifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```